import os
import openai
import sys
openai.api_key = os.getenv('OPENAI_API_KEY')
audio_filename = sys.argv[1]
audio_file_path = os.path.join(os.getcwd(), 'tmp', audio_filename)

prompt_file_path = os.path.join(os.getcwd(), 'tmp', 'prompt.txt')
f = open(prompt_file_path, "r")
prompt = f.read()

audio_file = open(audio_file_path, 'rb')
# verbose_json + word granularity gives a `words` array with start/end seconds
# for every word. Only whisper-1 supports this; gpt-4o-transcribe does not.
transcript = openai.audio.transcriptions.create(
    file=audio_file,
    model="whisper-1",
    response_format="verbose_json",
    timestamp_granularities=["word"],
    prompt=prompt
)
print(transcript.model_dump_json(indent=2))
