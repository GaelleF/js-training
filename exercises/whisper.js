'use strict'

/*
 * Create a function `whisper` that takes a string
 * and return the same string but all in lower case
 *
 */
 const whisper = (str) => {
 	return str.toLowerCase();
 }


//* Begin of tests
const assert = require('assert')

/*assert.fail('You must write your own tests')*/
assert.strictEqual(whisper('KOsdqSGqsd'), 'kosdqsgqsd')
assert.strictEqual(whisper('BONJOUR'), 'bonjour')
assert.strictEqual(whisper('BONJ0@u'), 'bonj0@u')


// End of tests */
