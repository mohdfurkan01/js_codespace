//                          JavaScript Execution Context:
// In JavaScript, any code is executed in two phases, which are managed by the execution context. These phases are:

// Memory Creation Phase: During this phase, all variables and functions are allocated memory. Variables are initialized with undefined, while functions are stored with their full definitions.

val1 = undefined
val2 = undefined
addNum = definition

let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);
console.log(result1); //15
console.log(result2); //12

// Execution Phase: In this phase, the actual execution of the code takes place. Variables get their actual values, and functions are invoked.


//                       Types of Execution Contexts:
//1. Global Execution Context:

// When the code starts, it first enters the Global Execution Context. This context handles all global variables and functions.
// The global execution context is stored in the this keyword, which typically refers to the global object (e.g., window in browsers).


//2. Function Execution Context:

// Every time a function is called, a new execution context is created for that function. Each function call has its own execution context.
// Like the global context, the function execution context has:
// A Memory Creation Phase where variables and parameters are initialized to undefined.
// An Execution Phase where actual values are assigned, and the function’s logic is executed.

//1. Memory Creation Phase (Global Execution Context):
val1 = undefined
val2 = undefined
addNum = function (definition){},
result1 = undefined
result2 = undefined

//2. Execution Phase (Global Execution Context):
val1 = 10
val2 = 5
//When result1 = addNum(val1, val2) is called, a new function execution context is created:
//Memory Creation Phase (for addNum):
num1 = undefined
num2 = undefined
total = undefined

//Execution Phase (for addNum):
num1 = 10
num2 = 5
total = num1 + num2 //= 15
return 15
//so result1 = 15

// Every time a function is called, a new execution context is created, which is cleared after the function execution. The code first goes through a memory creation phase where everything is undefined, and then the execution phase assigns actual values and executes the logic.

//                                Call Stack
//The call stack in JavaScript is a fundamental concept that helps the engine keep track of function calls. A call stack is also known as an 'Execution Context Stack', 'Runtime Stack', or 'Machine Stack'.

//The call stack is the backbone of JavaScript function execution. It manages the order of function calls and helps the engine determine which function to execute next. Functions are added to the stack as they're called and removed once they're finished, following a LIFO (Last In, First Out) approach.

// It uses the LIFO principle (Last-In-First-Out). When the engine first starts executing the script, it creates a global context and pushes it on the stack. Whenever a function is invoked, similarly, the JS engine creates a function stack context for the function and pushes it to the top of the call stack and starts executing it.

// When execution of the current function is complete, then the JavaScript engine will automatically remove the context from the call stack and it goes back to its parent.

// The call stack is a mechanism to manage the execution of multiple function calls in JavaScript.
// Whenever a function is called, it gets added to the top of the stack.
// Once the function finishes executing, it gets removed (or "popped") from the stack.
// The JavaScript engine always executes the function that's on top of the call stack.
