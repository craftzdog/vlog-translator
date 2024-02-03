import os
import openai
import sys
openai.api_key = os.getenv('OPENAI_API_KEY')
video_id = sys.argv[1]
audio_file_path = os.path.join(os.getcwd(), 'tmp', video_id + '.m4a')

prompt_file_path = os.path.join(os.getcwd(), 'tmp', 'prompt.txt')
f = open(prompt_file_path, "r")
prompt = f.read()

audio_file = open(audio_file_path, 'rb')
transcript = openai.audio.transcriptions.create(
    file=audio_file,
    model="whisper-1",
    response_format="srt",
    prompt=prompt
    # prompt=(
    #   'I am a programmer. My name is Takuya. '
    #   'This is a vlog about my app development, tech review, lifehacks, etc. '
    #   'I have my own product called Inkdrop. '
    #   'My YouTube channel is called devaslife. '
    # )
)
print(transcript)
