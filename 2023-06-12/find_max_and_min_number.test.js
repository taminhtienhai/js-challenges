const { test } = require('node:test');
const assert = require('node:assert');

/**
 * Tìm giá trị lớn nhất của mảng
 * 
 * @param {number[]} arr
 * @returns {number} 
 */
function findMaxNumber(arr) {
    /// write your own implementation
}

/**
 * Tìm giá trị nhỏ nhất của mảng
 * 
 * @param {number[]} arr
 * @returns {number} 
 */
function findMinNumber(arr) {
    /// write your own implementation
}

test("Find max number", (t) => {
    assert.equal(findMaxNumber([0, 2, 1, 4]), 4);
    assert.equal(findMaxNumber([0, 2, 1, -4]), 2);
    assert.equal(findMaxNumber([-0.12, 0.2, 0.1, -0.4]), 0.2);
});


test("Find min number", (t) => {
    assert.equal(findMinNumber([0, 2, 1, 4]), 0);
    assert.equal(findMinNumber([0, 2, 1, -4]), -4);
    assert.equal(findMinNumber([-0.12, 0.2, 0.1, -0.4]), -0.4);
});

