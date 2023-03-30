import os
import sys
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")
input_data = sys.stdin.read()

print(input_data)
# prompt_base = "You are going to be a good translator. Here is a part of the transcript of my vlog. I am talking about my product called Inkdrop, which is a Markdown note-taking app designed for developers. Translate the following text precisely into Japanese with the polite and formal style. Translate from [START] to [END]:\n[START]"
#
# response = openai.Completion.create(
#   model="text-davinci-003",
#   prompt=prompt_base+"Say this is a test" + "[END]",
#   max_tokens=70,
#   temperature=0
# )
# print(response.choices[0].text)
