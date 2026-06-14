#!/bin/bash
op-cache run --env-file=.env.tpl -- python scripts/transcribe.py audio.ogg >tmp/english.srt
