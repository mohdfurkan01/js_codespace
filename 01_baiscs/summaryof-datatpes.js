// Primitive 
//call by value
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100;
const scoreValue = 200.4;

const isLoggedIn = false;
const outsideTemp = null; //typeof object
let userEmail;  //undefined

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); //false
console.log(typeof anotherId); //typeof Symbol

//https://262.ecma-international.org/5.1/#sec-11.4.3 doc

// Reference (Non primitive)

// Array, Objects, Functions

const superHeros = ["IronMan", "Thor", "Spiderman"]

console.log(typeof superHeros); //obj

let herosObj = {
    name:"Ahsan",
    age:8,
    place:"Bareilly",
    MarritalStatus:false,
}

//typeof function:function or object funcs
const myFun = function(){
    console.log("Wo kisi ko roshan kya kare, Jo charag khud lau ko tarse ho");
    
}
myFun();
// JavaScript is a dynamically typed language.
//In a dynamically typed language like JavaScript, the type of a variable is determined at runtime rather than at compile time. It means you don't need to explicitly declare the data type of a variable when you create it. The type is automatically assigned based on the value you assign to the variable.

let myVariable = 5; // Initially, myVariable is a number
console.log(typeof myVariable); // Output: "number"

myVariable = "Hello"; // Now, myVariable is a string
console.log(typeof myVariable); // Output: "string"