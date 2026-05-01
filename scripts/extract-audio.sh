#!/bin/bash
if [ -z "$1" ]; then
  echo "Usage: $0 <input-file>"
  exit 1
fi
ffmpeg -vn -acodec copy tmp/audio.m4a -i "$1"
