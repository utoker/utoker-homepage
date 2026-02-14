#!/bin/bash

# Script to convert GIF files to optimized video formats
# Requires ffmpeg to be installed: sudo apt install ffmpeg (or brew install ffmpeg on macOS)

# Convert GIF to MP4 and WebM for better compression
convert_gif() {
    input=$1
    basename="${input%.*}"

    echo "Converting $input..."

    # Convert to MP4 (H.264)
    ffmpeg -i "$input" -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -crf 23 -preset medium "${basename}.mp4"

    # Convert to WebM (VP9)
    ffmpeg -i "$input" -c:v libvpx-vp9 -crf 30 -b:v 0 -deadline best "${basename}.webm"

    echo "Converted $input to ${basename}.mp4 and ${basename}.webm"
}

# Convert the large GIFs
convert_gif "public/images/projects/food-check.gif"
convert_gif "public/images/projects/food-data.gif"
convert_gif "public/images/projects/albert.gif"

echo "Conversion complete! You can now replace <img> tags with <video> tags in your components."
