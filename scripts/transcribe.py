import os
import openai
import sys
openai.api_key = os.getenv("OPENAI_API_KEY")
video_id = sys.argv[1]
audio_file_path = os.path.join(os.getcwd(), 'tmp', video_id + '.m4a')

audio_file = open(audio_file_path, "rb")
transcript = openai.Audio.transcribe(
  file = audio_file,
  model = "whisper-1",
  response_format='srt',
  prompt = 'I am a programmer. This is a vlog about my app development, tech review, lifehacks, etc. I have my own product called Inkdrop.'
)
print(transcript)
