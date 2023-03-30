import os
import openai
import sys
openai.api_key = os.getenv("OPENAI_API_KEY")
video_id = sys.argv[1]

print(video_id)
