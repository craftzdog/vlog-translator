import type { NextApiRequest, NextApiResponse } from 'next'
import { spawn } from 'child_process'
import path from 'path'
import { transferChildProcessOutput } from '../../utils/shell'

export default function GET(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const video_id = request.query.video_id as string
  if (typeof video_id !== 'string') {
    response.status(400).json({ error: 'Invalid request' })
    return
  }

  console.log('video ID:', video_id)
  const cmd = spawn(
    'python3',
    [path.join(process.cwd(), 'scripts/transcribe.py'), video_id || ''],
    {
      cwd: process.cwd()
    }
  )
  transferChildProcessOutput(cmd, response)
}
