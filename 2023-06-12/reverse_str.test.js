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
    assert.equal(reserveStr("aab"), "aab");
    assert.equal(reserveStr("sssssssad"), "dasssssss");
    assert.equal(reserveStr("stikareved"), "deverakits");
});

