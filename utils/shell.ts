import { ChildProcessWithoutNullStreams } from 'child_process'
import { NextApiResponse } from 'next'

export function transferChildProcessOutput(
  cmd: ChildProcessWithoutNullStreams,
  response: NextApiResponse
) {
  cmd.on('close', code => {
    console.log('Finished command. Exit code:', code)
  })
  cmd.stderr.on('data', chunk => {
    const chunkStr = chunk.toString('utf-8')
    console.error('[Error]', chunkStr)
    response.write(
      chunkStr
        .split('\n')
        .map((line: string) => '[Error] ' + line)
        .join('\n')
    )
  })

  response.writeHead(200, {
    'Content-Type': 'text/plain',
    'Cache-Control': 'no-cache',
    'Content-Encoding': 'none'
  })
  cmd.stdout.pipe(response)
}
