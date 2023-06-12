const { test } = require('node:test');
const assert = require('node:assert');

/**
 * Cho mảng gồm tập hợp các số tự nhiên, trả về mảng chỉ chứa số giá trị chẵn
 * 
 * @param {number[]} arr
 * @returns {number[]} 
 */
function removeOddNumber(arr) {
    /// write your own implementation
}

test("Test Cases", (t) => {
    assert.equal(removeOddNumber([1,2,3,4,5,6]).toString(), [2,4,6].toString());
    assert.equal(removeOddNumber([12,8,4,6]).toString(), [12,8,4,6].toString());
    assert.equal(removeOddNumber([-3, -1, 5, 7]).toString(), [].toString());
});
