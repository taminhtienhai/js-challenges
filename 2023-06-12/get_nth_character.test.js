const { test } = require('node:test');
const assert = require('node:assert');


/**
 * Nhập vào 1 chuỗi và vị trí của 1 ký tự, trả về ký tự đó trong chuỗi
 * 
 * @param {string} char
 * @param {number} pos
 * @returns {string}
 */
function getCharacterNth(char, pos) {
    /// write your own implementation
}

test("Test Cases", (t) => {
    assert.strictEqual(getCharacterNth('abcd', 1), 'a');
    assert.strictEqual(getCharacterNth('zyxbwpl', 5), 'w');
    assert.strictEqual(getCharacterNth('gfedcba', 3), 'e');
    assert.strictEqual(getCharacterNth('lksfjab', 7), 'b');
});
