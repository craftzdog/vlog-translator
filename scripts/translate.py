import os
import openai
openai.api_key = os.getenv("OPENAI_API_KEY")
result = openai.Completion.create(
  model="text-davinci-003",
  prompt="Say this is a test",
  max_tokens=7,
  temperature=0
)
print(result)
