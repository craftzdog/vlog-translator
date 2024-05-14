#!/usr/bin/env fish
# Description: Split an
# Requires: ffmpeg, jq
# Author: Hasan Arous
# License: MIT

set in $argv[1]
set out $argv[2]
set splits ""
set chapters (ffprobe -i $in -print_format json -show_chapters | jq -r '.chapters[] | .start_time + " " + .end_time')

for chapter in $chapters
  set start_time (echo $chapter | awk '{print $1}')
  set end_time (echo $chapter | awk '{print $2}')
  echo $start_time '|' $end_time
  ffmpeg -i "$in" -c copy -ss $start_time -to $end_time $out/$start_time.m4a
end

