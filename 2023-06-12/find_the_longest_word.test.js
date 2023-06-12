const { test } = require('node:test');
const assert = require('node:assert');

/**
 * Cho 1 đoạn văn bản, tìm ra từ có độ dài lớn nhất
 * 
 * @param {string} word
 * @returns {string} 
 */
function longest(word) {
    /// write your own implementation
}

test("Test Cases", (t) => {
    assert.equal(longest("lorem is sum"), 'lorem');
    assert.equal(longest("The HTTP interfaces in Node.js are designed to support many features of the protocol which have been traditionally difficult to use"), 'traditionally');
    assert.equal(longest("In particular large possibly chunk-encoded messages"), 'chunk-encoded');
    assert.equal(longest("HTTP message headers are represented by an object like this"), 'represented');
});
