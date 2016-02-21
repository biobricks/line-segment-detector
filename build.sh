#!/bin/sh


cd lsd_1.6/
emcc lsd.c --memory-init-file 0 -o ../index.js -s EXPORTED_FUNCTIONS="['_lsd']" --pre-js ../pre_js.js
cd ..
