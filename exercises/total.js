'use strict'

/*
 * Create a function `total` that takes an array on numbers
 * and return it's total
 *
 */

 const reducer = (accumulator, currentValue) => accumulator + currentValue;

const total = (arr) =>{

	return arr.reduce(reducer)
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof total, 'function')
assert.strictEqual(total.length, 1)
assert.deepStrictEqual(total([ 1, 1, 1]), 3)
assert.deepStrictEqual(total([ 10, 10, 10]), 30)
assert.deepStrictEqual(total([ 24, -10, 10, 0, 0, 100 ]), 124)
// End of tests */
