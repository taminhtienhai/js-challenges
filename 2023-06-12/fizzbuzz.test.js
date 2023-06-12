const { test } = require('node:test');
const assert = require('node:assert');


/**
 * Nhập vào số `n`, trả về `Fizz` nếu `n` chia hết cho 3, trả về `Buzz` nếu `n` chia hết cho 5, `FizzBuzz` nếu chia hết cho cả 2
 * Nếu không thuộc trường hợp nào trả về ''
 * 
 * @param {number} num
 * @returns {string} 
 */
function fizzbuzz(num) {
    /// write your own implementation
}

test("Test Cases", (t) => {
    assert.equal(fizzbuzz(3), 'Fizz');
    assert.equal(fizzbuzz(5), 'Buzz');
    assert.equal(fizzbuzz(15), 'FizzBuzz');
    assert.equal(fizzbuzz(16), '');
});
