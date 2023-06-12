const { test } = require('node:test');
const assert = require('node:assert');


/**
 * Đảo ngược giá trị của chuỗi nhập vào
 * 
 * @param {string} str
 * @returns {string} 
 */
function reserveStr(str) {
    /// write your own implementation
}

test("Test Cases", (t) => {
    assert.strictEqual(reserveStr("aab"), "baa");
    assert.strictEqual(reserveStr("sssssssad"), "dasssssss");
    assert.strictEqual(reserveStr("stikareved"), "deverakits");
});

