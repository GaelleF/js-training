'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 */

 const cutFirst = (str)=>{
 	let arr = Array.from(str)
 	let arrStr=[]
 	for(let i=2;i<arr.length;i++){
 		arrStr[i] = arr[i];
 	}
 	return arrStr.join("")
 }
 const cutLast = (str)=>{
 	let arr = Array.from(str)
 	let arrStr=[]
 	for(let i=0;i<arr.length-2;i++){
 		arrStr[i] = arr[i];
 	}
 	return arrStr.join("")
 }
const cutFirstLast = (str)=>{
 	return cutLast(cutFirst(str))
 }

//* Begin of tests
const assert = require('assert')
assert.deepStrictEqual(cutFirst("bonJour"), "nJour")
assert.deepStrictEqual(cutFirst("B0nJour*"), "nJour*")
assert.deepStrictEqual(cutLast("bonJour"), "bonJo")
assert.deepStrictEqual(cutLast("B0nJour*"), "B0nJou")
assert.deepStrictEqual(cutFirstLast("bonJour"), "nJo")
assert.deepStrictEqual(cutFirstLast("B0nJour*"), "nJou")


/*assert.fail('You must write your own tests')
// End of tests */
