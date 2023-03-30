import os
import openai
import sys
openai.api_key = os.getenv("OPENAI_API_KEY")
video_id = sys.argv[1]
audio_file = os.path.join(os.getcwd(), 'tmp', video_id + '.m4a')

print(audio_file)
