//let score = 33;
//let score = "33ads";
//let score = null;
//let score = undefined;
//let score = true;
let score = "forStringcase"

console.log(typeof score); //string
console.log(typeof(score)); //string

let valueInNumber = Number(score);
console.log(typeof(valueInNumber)); //number
console.log(valueInNumber); //we must verify whether it's a number or string or NaN 

//conversion
// "33" => 33
// "33abc" => NaN which is Not a Number
// true =>1, false =>0

//let isLoggedIn = 1;
//let isLoggedIn = "";
let isLoggedIn = "Ahsan";
let booleanIsLoggedIn = Boolean(isLoggedIn); //conversion
console.log(booleanIsLoggedIn);

//1 => true, 0 => false
// "" => false (empty string)
// "Ahsan" => true 

let checkNumber = 35;
let changeToString = String(checkNumber); //num to str
console.log(changeToString);
console.log(typeof changeToString);
