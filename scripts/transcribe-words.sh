#!/bin/bash
op-cache run --env-file=.env.tpl -- python scripts/transcribe-words.py audio.ogg >tmp/words.json
