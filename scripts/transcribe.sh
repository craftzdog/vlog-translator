#!/bin/bash
op-cache run --env-file=.env.tpl -- python scripts/transcribe.py audio.m4a >tmp/english.srt
