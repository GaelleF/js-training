'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 */
const jadenCase = (str)=>{
	let arr=str.split(" ")
	let arrStr2 =[]
	let arrStr =[]
	for(let i=0;i<arr.length;i++){
		let arrStr= Array.from(arr[i])
		arrStr[0]=arrStr[0].toUpperCase();
		for (let j = 1; j<arrStr.length ;j++){
			arrStr[j]=arrStr[j].toLowerCase();
		}
		arrStr2[i] = arrStr.join('');
	}
	return arrStr2.join(' ');

}


//* Begin of tests
const assert = require('assert')

/*assert.fail('You must write your own tests')*/
assert.deepStrictEqual(jadenCase("How are you ?"), "How Are You ?")
assert.deepStrictEqual(jadenCase("B0nJour* helle pjg"), "B0njour* Helle Pjg")
// End of tests */
