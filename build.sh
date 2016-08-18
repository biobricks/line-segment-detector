#!/bin/sh



build () {
    outname="index.standard.js"
    if [ "$1" = "browserify" ]; then
        cat pre_js_browserify.js > pre_js.js
        outname="index.browserify.js"
    else
        cat /dev/null > pre_js.js
    fi
    cat pre_js_base.js >> pre_js.js

    cd lsd_1.6/
    emcc lsd.c --memory-init-file 0 -o ../${outname} -s EXPORTED_FUNCTIONS="['_lsd']" --pre-js ../pre_js.js --post-js ../post_js.js
    if [ "$?" -ne "0" ]; then
        echo "Build failed for ${outname}" >&2
    else
        echo "Success! Built file: ${outname}"
    fi
    cd ..
}


build
build "browserify"









