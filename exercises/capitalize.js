'use strict'

/*
 * Create a function `capitalize` takes a string
 * and transform to upper case only the first letter
 *
 */
const capitalize = (str)=>{
	const arrStr = Array.from(str);
	arrStr[0]=arrStr[0].toUpperCase();
	for (let i = 1; i<arrStr.length ;i++){
		arrStr[i]=arrStr[i].toLowerCase();
	}
	return arrStr.join('');
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof capitalize, "function")
assert.strictEqual(capitalize('str'), 'Str')
assert.strictEqual(capitalize('qsdqsdqsd'), 'Qsdqsdqsd')
assert.strictEqual(capitalize('STR'), 'Str')
assert.strictEqual(capitalize('zapZAP'), 'Zapzap')
// End of tests */
