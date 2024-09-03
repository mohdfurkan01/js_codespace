//Math object is a built-in object that has properties and methods for mathematical constants and functions.
//You don’t create Math objects Instead, you use its properties and methods directly.

let radius = 5;
let area = Math.PI * Math.pow(radius, 2); // Area of a circle
console.log(area); // Output: 78.53981633974483

console.log(Math);
console.log(Math.abs(4)); //pos will be positive but neg changed to pos
console.log(Math.abs(-4)); //converted to positive which is 4

//ath.round() is a JavaScript method that rounds a number to the nearest integer. If the decimal part of the number is .5 or higher, it rounds up; otherwise, it rounds down
console.log(Math.round(4.7)); // Output: 5
// Here, 4.7 is rounded to 5 because .7 is greater than .5
console.log(Math.round(4.3)); // Output: 4
//Here, 4.3 is rounded to 4 because .3 is less than .5
console.log(Math.round(4.5)); // Output: 5
//Here, 4.5 is rounded to 5 because .5 rounds up.

//Rounding Rules: Numbers with decimal .5 or more round up, while others round down.

//Math.ceil() will always round the number up to the next largest integer.
//Even if the decimal part is very small, Math.ceil() will still round up.
console.log(Math.ceil(2.1)); // Output: 3
console.log(Math.ceil(4.2));  //5

//Math.floor() is a JavaScript method that rounds a number down to the nearest integer. It always rounds towards negative infinity, which means it rounds down regardless of the decimal part.
console.log(Math.floor(4.9)); //4
//Math.floor() will always round the number down to the nearest integer.
console.log(Math.floor(2.9)); // Output: 2

//Negative Values: It rounds towards negative infinity, so negative values are rounded to the next lower integer.
console.log(Math.floor(-4.7)); // Output: -5




console.log(Math.min(2, 3, 5, 6)); //min 2
console.log(Math.max(6,7,8,4,3,2)); //max 8

//The Math.random() function in JavaScript always generates a random decimal number between 0 and 1.
// 0 (inclusive)
// 1 (exclusive)
//This means the smallest value it can return is 0, and it will never return 1. The values are typically like 0.3215044307717485, 0.49712875111357024, etc.

console.log(Math.random()); //always gives a value between 0 and 1 like 0.3215044307717485, 0.49712875111357024
console.log((Math.random()*10) + 1 );
console.log( "<=====>For floor method",Math.floor(Math.random()*10) + 1 );

const min = 10;
const max = 20;
//get a random integer between 10 and 20 (inclusive) every time I run it.
console.log( "For MIN MAX of 10 20 <=>++++++<=>",Math.floor(Math.random() * (max - min + 1)) + min);

//Math.random(): Generates a random decimal number between 0 (inclusive) and 1 (exclusive).
//Math.random() * (max - min + 1): Scales this random number to the range between 0 and max - min + 1. it will be between 0 and 11 (since 20 - 10 + 1 = 11).
//Math.floor(): Rounds down the result to the nearest whole number. This gives you an integer between 0 and 10.
// + min: Adds min to shift the range from 10 to 20



