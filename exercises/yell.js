'use strict'

/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 */
 const yell = (str)=>{
 	return str.toUpperCase()
 }


//* Begin of tests
const assert = require('assert')

/*assert.fail('You must write your own tests')*/

assert.deepStrictEqual(yell("BonJour"), "BONJOUR")
assert.deepStrictEqual(yell("Bo0nJour*"), "BO0NJOUR*")
assert.deepStrictEqual(yell("bonjour"), "BONJOUR")
assert.deepStrictEqual(yell("BONJOUR"), "BONJOUR")



// End of tests */
