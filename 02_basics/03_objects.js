// singleton
//Object.create


//Object literals are a simple and straightforward way to create objects in JavaScript and defined using curly braces {} in the form of key-value pairs.
//Keys (Property Names): These are the identifiers or labels in the object.
//Values: These are the data or functions associated with the keys.
const myObject = {
    key1: value1,
    //...
    //..
};
//***interview:  Take a symbol add it to an object and print it
const mySymbol = Symbol("key1")
//object literals  
const JsLearner = {
    name:"Ahsan",
    "full name":"Ahsan Raza",
    mySymbol:"mykey1",  //it's datatype string not expected result
    [mySymbol]:"mykey1", //it's datatype is Symbol which is true [Using a Symbol as a property key]
    age: 12,
    location:"Bareilly",
    email:"ahsan@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday", "Tuesday"]
}
//access the properties of the object
console.log(JsLearner.email); //ahsan@google.com {not really good using dot notation}
console.log(JsLearner["email"]); //ahsan@google.com {good practice using bracket notation.}
//console.log(JsLearner.full name); //can't access using dot notation.
console.log(JsLearner["full name"]); //can access easily
console.log(JsLearner[mySymbol]); // mykey1
console.log(typeof mySymbol); // symbol
console.log(JsLearner.mySymbol); // mykey1
 console.log(typeof JsLearner.mySymbol); // string
//Dot Notation:
//Usage: Dot notation is the most common way to access object properties.
//It can only be used for property names that are valid identifiers (e.g., no spaces, no special characters other than _, etc.)

//Bracket Notation:
//Usage: Bracket notation can be used to access any property, including those with special characters, spaces, or reserved words.
let prop = "email";
console.log(JsLearner[prop]); // "ahsan@google.com"

//Dot notation is more straightforward and commonly used, but bracket notation is more flexible, especially when dealing with property names that aren't simple identifiers.

JsLearner.email = "humam@gmail.com"
//Object.freeze(): This method is used to make an object immutable. After freezing, you can't add, delete, or modify any properties of this object.
Object.freeze(JsLearner)
JsLearner.email = "razahumam@gmail.com"
console.log(JsLearner) //'humam@gmail.com', not this "razahumam@gmail.com"

const myUser = {
    name:"Ahsan",
    "full name":"Ahsan Raza",
    [mySymbol]:"mykey1",
    age: 12,
    location:"Bareilly",
    email:"ahsan@google.com",
    isLoggedIn:false,
    
}
myUser.greeting = function(){
    console.log("hey bro!!!!!!!!");
    
}
myUser.greetingTwo = function(){
    //console.log(`mid night greeting :) ${name}`); //ReferenceError: name is not defined and can't access directly
    console.log(`let's try somethong :) ${this.name}`);
    //Inside an object method, this refers to the object itself, allowing you to access other properties of the same object.
    
}
console.log(myUser.greeting); //[Function (anonymous)]
console.log(myUser.greeting()); //hey bro!!!!!!!!
console.log(myUser.greetinTwo); //
console.log(myUser.greetingTwo()); //