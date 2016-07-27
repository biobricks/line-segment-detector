
This is a javascript version of the famous [LSD (Line Segment Detector) algorithm](http://www.ipol.im/pub/art/2012/gjmr-lsd/). It was created using emscripten to compile the official C version into javascript and adding a bit of wrapper code to convert between javascript and C data types.

This is not production ready code. Use at your own risk.

Currently only the main lsd() function call is available.

See example.js for usage.

To re-compile this module first ensure that the official C version of lsd is extracted into lsd_1.6/ and that emcc is in your path. On a debian-based system something like this should work:

```
cd line-segment-detector/
sudo apt-get install emscripten
wget "http://www.ipol.im/pub/art/2012/gjmr-lsd/lsd_1.6.zip"
unzip lsd_1.6.zip
```

Then run:

```
./build.sh
```

# License

License is AGPLv3