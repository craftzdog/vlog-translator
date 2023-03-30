export function extractVideoIdFromUrl(url: string) {
  return new URL(url).searchParams.get('v')
}

type ProgressCallback = (output: string) => void

export async function processVideo(
  videoId: string,
  callback: ProgressCallback
): Promise<false | string> {
  callback('Downloading audio...\n')
  callback('Progress 1\n')
  callback('Progress 2\n')
  callback('Progress 3\n')
  callback('Progress 4\n')
  callback('Progress 5\n')

  return 'result'
}
