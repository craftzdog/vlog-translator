export function extractVideoIdFromUrl(url: string) {
  return new URL(url).searchParams.get('v')
}

type ProgressCallback = (output: string) => void

export async function processVideo(
  videoId: string,
  callback: ProgressCallback
): Promise<false | string> {
  callback('Downloading audio...\n')
  await downloadAudio(videoId, callback)

  callback('\nTranscribing audio. It takes a while...\n')
  const srt = await transcribe(videoId, callback)

  return srt
}

export async function downloadAudio(
  videoId: string,
  onProgress: ProgressCallback
) {
  const res = await fetch(
    `/api/audio?${new URLSearchParams({ video_id: videoId })}`,
    {}
  )
  const reader = res.body?.getReader()

  if (reader) {
    return streamResponse(reader, onProgress)
  } else {
    return false
  }
}

export async function transcribe(
  videoId: string,
  onProgress: ProgressCallback
): Promise<string | false> {
  const res = await fetch(
    `/api/transcript?${new URLSearchParams({ video_id: videoId })}`,
    {}
  )
  const reader = res.body?.getReader()

  if (reader) {
    return streamResponse(reader, onProgress)
  } else {
    return false
  }
}

async function streamResponse(
  reader: ReadableStreamDefaultReader<Uint8Array>,
  onProgress: ProgressCallback
): Promise<string> {
  return await new Promise(resolve => {
    const decoder = new TextDecoder()
    let result = ''
    const readChunk = ({
      done,
      value
    }: ReadableStreamReadResult<Uint8Array>) => {
      if (done) {
        resolve(result)
        return
      }

      const output = decoder.decode(value)
      result += output
      onProgress(output)
      reader.read().then(readChunk)
    }

    reader.read().then(readChunk)
  })
}
