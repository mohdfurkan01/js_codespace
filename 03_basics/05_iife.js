// Immediately Invoked Function Expression(IIFE)

//A normal function is something you define first, and then you call it later. It waits for you to explicitly invoke it.

function chai(){
    console.log(`DB Connected`);
    
}
chai(); //If we don’t use a semicolon after an IIFE, it can cause an error when writing two IIFEs back-to-back. That’s why interviewers sometimes ask about this—because missing semicolons between two IIFEs can lead to issues.

//You have control—use it whenever you need, like when someone orders chai (you only prepare chai when someone asks).
 


//An IIFE is a function that runs immediately after it’s defined. It’s useful when you want some code to execute without waiting for an external call.
//Example: You want to set up the DB connection as soon as the app starts.

//In an IIFE, the function is wrapped in parentheses () and then immediately invoked with another set of parentheses (). ===> (function(){...})
//IIFE FUNCTION
//1. Classic IIFE (Using Function Expression)
(function coffee(){
    console.log(`DB Connected by IIFE`);
    
})(); //DB Connected by IIFE

//IIFE: No waiting, it happens immediately—like making coffee that’s ready the moment someone enters the café.

//2. Anonymous IIFE (Without a Function Name)
(function(){
    console.log('DB Connected by Anonymous IIFE');
})();

//3. IIFE Using Arrow Function (ES6)
(() => {
    console.log('DB Connected by IIFE using Arrow Function');
})();


//IIFE use case1: by normal function
var username = 'Ahsan'; // global variable

function setName() {
    username = 'Nawab';  // modifies the global 'name' variable
}
setName();
console.log(username); // Output: Nawab (Oops! the original 'Ahsan' is overwritten)


//IIFE use case2:
var username = 'Ahsan'; // global scope
(function(){
    var username = 'Nawab'; // local scope inside IIFE
    console.log('Inside IIFE:', username); // Output: Nawab which is true
})();
console.log('Outside IIFE:', username); // Output: Ahsan which is true
