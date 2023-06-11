const { test } = require('node:test');
const assert = require('node:assert');

function printMessage(mess) {
    throw new Error("Something went wrong");
} 


test("Test cases", () => {
    assert.doesNotThrow(() => {
        printMessage("Devera KITs");
    }, Error)
})