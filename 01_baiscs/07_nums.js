const score = 400;
console.log(score); // 400

const balance = new Number(100);
console.log(balance); //output [Number: 100]

const min_value = Number.MIN_VALUE;
console.log("=================MIN",min_value); //5e-324

const max_value = Number.MAX_VALUE
console.log("=================MAX",max_value); //1.7976931348623157e+308


console.log(balance.toString().length); //length = 3
console.log(balance.toFixed(2)); // 100.00,  The result is always a string, not a number.

let num = 123.4567;
let fixedNum = num.toFixed(2);
console.log(fixedNum); // Output: "123.46"

let num1 = 12.3;
console.log(num1.toFixed(5)); // Output: "12.30000"

//toFixed() Method format a number with a fixed number of decimal places.
//toFixed() rounds the number to the nearest value based on the decimal places you choose.
//It returns a string, so be mindful if you need it as a number.

let originalNumber = 123.4567;
let stringResult = originalNumber.toFixed(2); // "123.46" (This is a string)

// Convert back to a number using parseFloat()
let numberResult = parseFloat(stringResult);

// Or, you can use Number() for the same purpose
// let numberResult = Number(stringResult);

console.log(stringResult);  // Output: "123.46" (String)
console.log(numberResult);   // Output: 123.46 (Number)

//toPrecision() is a method in JavaScript that formats a number to a specified total number of significant digits (including both the integer and decimal parts). It also returns the result as a string.
let num2 = 123.4567;
let preciseNum = num2.toPrecision(4);
console.log(preciseNum); // Output: "123.5"

//Significant Digits: toPrecision() considers the total number of digits in the entire number (before and after the decimal).
//String Output: The result is a string, just like toFixed(). If you need to do further calculations, you may need to convert it back to a number.
let measurement = 0.00456789;
let roundedMeasurement = measurement.toPrecision(3);
console.log(roundedMeasurement); // Output: "0.00457"

//toLocaleString() is a JavaScript method that converts a number or date into a format that’s easy to read, based on your local language and region. It adds commas, currency symbols, or formats dates in a way that’s familiar to people in a specific region.
//number.toLocaleString(locales, options)
//number: The number you want to format.
//locales: (Optional) The language or region format you want, like "en-US" for U.S. English or "hi-IN" for Hindi (India).
//options: (Optional) Extra settings like the number of decimal places, currency, etc.
let num4 = 1000000;
let formattedNum = num4.toLocaleString('en-IN');
console.log(formattedNum); // Output: "10,00,000"

let price = 1234567.89;
let formattedPrice = price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });
console.log(formattedPrice); // Output: "₹12,34,567.89"

