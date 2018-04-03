'use strict'

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 */
 const keepFirst = (str)=>{
 	let arr = Array.from(str)
 	return [arr[0],arr[1]].join("")
 }
  const keepLast = (str)=>{
 	let arr = Array.from(str)
 	return [arr[arr.length-2],arr[arr.length-1]].join("")
 }

const keepFirstLast = (str)=>{
 	let arr = Array.from(str)
 	return [arr[2],arr[3]].join("")
 }

//* Begin of tests
const assert = require('assert')
assert.deepStrictEqual(keepLast("bonJour"), "ur")
assert.deepStrictEqual(keepLast("B0nJour*"), "r*")

assert.deepStrictEqual(keepFirst("bonJour"), "bo")
assert.deepStrictEqual(keepFirst("B0nJour*"), "B0")


assert.deepStrictEqual(keepFirstLast("bonJour"), "nJ")
assert.deepStrictEqual(keepFirstLast("B0*"), "*")
/*assert.fail('You must write your own tests')
// End of tests */
