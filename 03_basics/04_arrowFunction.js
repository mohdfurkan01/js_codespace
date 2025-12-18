const user = {
  username: "hamza",
  price: 777,

  welcomeMessage: function () {
    //console.log(`${username}, welcome to my webpage`); //ReferenceError: username is not defined
    console.log(`${this.username}, welcome to my webpage`);
    //this.username works because this refers to the user object, and works as expected
    //console.log(this); current context
  },
};
user.welcomeMessage(); //hamza, welcome to my webpage
user.username = "ahsan";
user.welcomeMessage(); //ahsan, welcome to my webpage

console.log(this); // {}
//but in browser it shows a windows object

//TYPE_1: Function Declaration (function keyword):
function coffee1() {
  let username = "ahsan";
  //return username;
  console.log(this.username); //undefined
  //console.log(this);
}
coffee1();

//TYPE_2: Function Expression (const or let with anonymous function):
const coffee2 = function () {
  let username = "ahsan";
  console.log(this.username); //undefined
  //console.log(this);
};
coffee2();
//this is not bound to the user object here.
//When we call coffee1() or coffee2(), this refers to the global object (window in the browser). But since username is not a property of the global object, this.username is undefined.

//TYPE_3:  Arrow Function (using ()=>)
const coffee3 = () => {
  let username = "ahsan";
  console.log(this.username); //undefined
  //console.log(this);
  //Arrow functions do not have their own this.
  //this is inherited from the surrounding scope, which is usually the global context where username is not defined, so this.username is undefined.
};
coffee3();

const addTwo = (num1, num2) => {
  return num1 + num2; //Explicit return
};

//const addTwo =(num1, num2)=> num1 + num2 //outpu: 10 // Implicit return
//no need to write a return for one expression
//const addTwo1 =(num1, num2)=> (num1 + num2) //output: 10 //Optional parentheses
//const addTwo1 =(num1, num2)=> {username:"ahsan"} //×
const addTwo1 = (num1, num2) => ({ username: "ahsan" }); //✔
//console.log(addTwo(5)); //NaN
console.log(addTwo(5, 5)); //10
console.log(addTwo1()); //{ username: 'ahsan' }

//When called as a method: this refers to the object the method is part of.
//When called directly: this refers to the global object or undefined in strict mode.
