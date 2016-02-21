#!/usr/bin/env nodejs

var lsd = require('./index.js');

var image = [];
var width = 128;
var height = 128;

var x, y;
for(x=0; x < width; x++) {
    for(y=0; y < height; y++) {
        image[x+y*width] = x < (width / 2) ? 0 : 64;
    }
}

var lines = lsd.lsd(image, width, height);

console.log("Found", lines.length, "line segments");

var i;
for(i=0; i < lines.length; i++) {
    console.log("Line:", lines[i]);
}
