//block scope vs global scope

//Block Scope:
//A block is defined by {} (curly braces), such as in if, for, or while statements, or even just standalone {}.
//Variables declared with let and const inside a block {} are limited to that block and are not accessible outside.

//Global Scope:
//Variables declared outside of any block {} are in the global scope.
//These variables can be accessed anywhere in the code, inside any function or block.


if (true) {
    let a = 10;
    const b = 20;
    var c = 30; 
}
//console.log(a); 
//ReferenceError: a is not defined which is right
 //console.log(b); 
//ReferenceError: b is not defined which is right
console.log(c); // 30 the problem is rise from here bcoz it is accessible from out of the scope{} that's why we don't use var. The reason we generally avoid using var is that it doesn't respect block scope.
//When we declare a variable with var, it is function-scoped or globally-scoped, which means it doesn't respect block scope (the curly braces {}).

//Global scope: Variables are accessible everywhere in the code.
//Block scope: Variables are only accessible within the curly braces {} they are declared in.


function one(){
    const username = "ahsan"

    function two(){
        const website = "instagram"
        console.log(username);
        
    }
     // console.log(website); //ReferenceError: website is not defined
    two(); //call
    
}

one(); //call

if(1){
    const username = "hamza"

    if(username === "hamza"){
        const website = " youtube"
        console.log(username + website); //hamza youtube
    }
    // console.log(website); //ReferenceError: website is not defined
    
}
//console.log(username); //ReferenceError: username is not defined


//Function Declaration (function keyword):

addOne() // // No error, hoisting allowed
//When we declare a function using the function keyword, like this:
function addOne(num){
    return num +1
}
//addOne() 
// /This type of function is hoisted, which means the function definition is moved to the top of the scope during the compilation phase.
//So, you can call the function before or after it's defined in the code, and there won't be any error.


//Function Expression (const or let with anonymous function):

//addtwo() //ReferenceError: Cannot access 'addtwo' before initialization
//When we declare a function using a variable with const or let and assign an anonymous function to it, like this:
const addtwo = function (num){
    return num +2
}
//addtwo() //no error
//In this case, hoisting doesn't apply to the actual function itself, because only the variable (addTwo) is hoisted, not the function definition.
//If you try to call the function before it's defined, you'll get an error.


//Function Declaration: Can be called before or after its declaration due to hoisting.
//Function Expression: Must be defined before it's called, because the function itself is not hoisted, only the variable is.
