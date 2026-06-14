#!/bin/bash
if [ -z "$1" ]; then
  echo "Usage: $0 <input-file>"
  exit 1
fi
ffmpeg -i "$1" -vn -ac 1 -ar 16000 -c:a libopus -b:a 12k tmp/audio.ogg
