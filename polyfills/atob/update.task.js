var installPolyfill = require('../../lib/installPolyfill');

module.exports = function() {
	installPolyfill('Base64/base64.min.js', 'polyfills/atob');
};
