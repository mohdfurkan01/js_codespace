function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5)); //25
console.log(multiplyBy5.power); //2
console.log(multiplyBy5.prototype); //{}

function createUser(username, score) {
  //this.any_variable = username;
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  //score++
  this.score++;
};
createUser.prototype.printMe = function () {
  //? only 'score' is getting confuse that which one is calling so that's why we need to use 'this' for current context
  //console.log(`Score is ${score}`);
  console.log(`Price is ${this.score}`);
};

const chai = new createUser("chai", 50);
const tea = new createUser("tea", 20);

chai.printMe(); //Price is 30
tea.printMe();

/*

? Here's what happens behind the scenes when the new keyword is used:

? A new object is created: The new keyword initiates the creation of a new JavaScript object.

? A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

? The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

? The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
