#!/bin/sh


cd lsd_1.6/
emcc lsd.c -O2 -o ../lsd.js -s EXPORTED_FUNCTIONS="['_lsd']" --pre-js ../pre_js.js
cd ..
