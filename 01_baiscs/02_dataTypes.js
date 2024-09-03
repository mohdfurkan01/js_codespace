"use strict" //treat all JS code as newer version or ES6
//It's not automatically applied in modern JavaScript environments unless you explicitly write "use strict"; in your code. However, some newer JavaScript features like ES modules automatically run in strict mode.


// JavaScript has dynamic data types, meaning that type checking is done at runtime rather than compile time.

//mdn docs
//https://tc39.es/ecma262/#sec-intro  =>documentation


//alert(3 + 3) //using node.js not browser

console.log(3 +
    3
) //not good a way code readabilty should be high 

let name = "Ahsan"
let age = 12
let isLoggedIn = false

//primitive dataTypes
//number
//string => ""
//boolean => true/false
//null => standalone value
//undefined =>
//symbol => unique

console.log(typeof age); //type-> number
console.log(typeof null); //type-> object
console.log(typeof undefined); //type-> undefined

// let t = 16;			// t is a number
// let t = "Teresa";	// t is a string
// let t = true;		// t is a Boolean
// let t;				// t is undefined