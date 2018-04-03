/*'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 * and no loops, do it using recursion
 *
 * @notions Primitive and Operators, Functions, Recursion
 */

// Your code :

let multi = 0;
 

const multiply = (arg1,arg2)=> {

	
	if (arg1 == 0) {
		let totalFinal = multi;
		multi = 0;
		return totalFinal;

	}
	else if (arg1< 0) {
		arg1 = -arg1;
		arg2 = -arg2;
		return multiply(arg1,arg2);

		}

	else {
			multi = multi + arg2;
			arg1 -= 1;
			return multiply(arg1,arg2)
		} 
		

	}

/*console.log(multiply(-22,-5))
console.log(multiply(22,-10))*/

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('while'), false)
assert.strictEqual(multiply.toString().includes('for'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)

assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
assert.strictEqual(multiply(123, -22), -2706)
// End of tests */
