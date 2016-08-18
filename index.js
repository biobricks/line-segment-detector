

if (typeof window !== 'undefined') { // we're in the browser
    module.exports = require('./index.browserify.js');
} else { // we're in node
    module.exports = require('./index.standard.js');
}
