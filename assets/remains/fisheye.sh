    for i in *.png
       do /Users/funix/celo/lab/ffmpeg -i $x -filter:v "crop=950:950"  "$i"
sh /Users/funix/celo/lab/fisheye -o 90 -i 90 -t linear -f circular -m transparent "$i" "${i%.*}.png"
 done
