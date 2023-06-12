const { test } = require('node:test');
const assert = require('node:assert');


/**
 * Nhập vào 1 chuỗi và vị trí của 1 ký tự, trả về ký tự đó trong chuỗi
 * 
 * @param {string} char
 * @param {number} pos
 * @returns {string}
 */
function getCharacterAt(char, pos) {
    /// write your own implementation
}

test("Test Cases", (t) => {
    assert.equal(getCharacterAt('abcd', 1), 'a');
    assert.equal(getCharacterAt('zyxbwpl', 5), 'w');
    assert.equal(getCharacterAt('gfedcba', 3), 'e');
});
