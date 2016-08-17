
// this is needed to fool emscripten-generated code
// when using browserify, since it equates nodejs with no browser

if (typeof window !== 'undefined') {
    process = undefined; 
}
