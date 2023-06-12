const { test } = require('node:test');
const assert = require('node:assert');


/**
 * Tìm giá trị lớn nhất của hàm 
 * 
 * @param {number[]} arr
 * @returns {number} 
 */
function findMaxNumber(arr) {
    /// write your own implementation
}

test("Test Cases", (t) => {
    assert.equal(findMaxNumber([0, 2, 1, 4]), 4);
    assert.equal(findMaxNumber([0, 2, 1, -4]), 2);
    assert.equal(findMaxNumber([-0.12, 0.2, 0.1, -0.4]), 0.2);
});

