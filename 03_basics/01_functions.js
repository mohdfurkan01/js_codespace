function writeMyName() {
  console.log("A");
  console.log("h");
  console.log("s"); //function definition
  console.log("a");
  console.log("n");
}
//writeMyName //its called reference

//writeMyName() //() for execute

function addTwoNumbers(num1, num2) {
  //(num1, num2)-> parameters
  console.log(num1 + num2);
}
//addTwoNumbers(3,7) //(3,7)-> arguments

const result = addTwoNumbers(3, 7); //10
console.log("Result is:", result); //Result is: undefined

//see the difference

function addMyNumbers(num1, num2) {
  let result1 = num1 + num2;
  return result1;
  //or
  //return num1 + num2
}
const result1 = addMyNumbers(3, 7); //10
console.log("Result is:", result1); //Result is: 10

// function loginUserMsg(username = "sam"){ called default value
function loginUserMsg(username) {
  // if(username === undefined){
  if (!username) {
    console.log("Please Enter a Username");
    return;
  }
  return `${username} just logged in`;
}

loginUserMsg("Ahsan"); //no result
//console.log(loginUserMsg("Ahsan")); //Ahsan just logged in
console.log(loginUserMsg()); //Please Enter a Username

function calculateCartPrice(num1) {
  return num1;
}
//console.log(calculateCartPrice(200))
console.log(calculateCartPrice(200, 340, 600)); //200

// (...) is called the rest operator. It's used to gather or collect multiple values (arguments) into an array.
//The rest operator (...num1) is used to take multiple numbers and group them into one array.
function calculateCartPrice1(...num1) {
  return num1;
}
console.log(calculateCartPrice1(200, 340, 600)); //[ 200, 340, 600 ]
//In this case, all arguments passed to calculateCartPrice1 (200, 340, 600) are collected into an array called num1, and that's why we get [200, 340, 600] as the output.

//Rest (what you used) is for collecting things into an array.
//Spread is for spreading an array into individual items.
const prices = [400, 800, 1000];
console.log(calculateCartPrice1(...prices));
[400, 800, 1000];

//? A normal function is just a function that you define and call when you want.
//? A callback function is a function that is passed as an argument to another function and is executed after some kind of event or after the completion of that function.
