//Task can we change the value of Math.PI
//so it is constant it's value can never be change

console.log(Math.PI); //3.14
Math.PI = 5; // Trying to change it
console.log(Math.PI); //3.14
// Still 3.14, because it's read-only

//solution
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
/*output: {
    value: 3.141592653589793,
    writable: false, bcoz of this
    enumerable: false,
    configurable: false
  }*/

//? with Object.getOwnPropertyDescriptor. The reason why Math.PI doesn’t change is that Math.PI is a read-only constant. When you check the property descriptor of Math.PI, you'll see that it has the writable attribute set to false. This prevents the value from being changed.

const chai = {
  name: "ginger chai",
  price: 200,
  isAvailable: true,

  orderChai: function () {
    console.log("chai nhi bani yrr");
  },
};
console.log(Object.getOwnPropertyDescriptor(chai));
//undefined bcoz The method Object.getOwnPropertyDescriptor() requires both the object and the specific property name you want to inspect.

// Correct usage: specify both the object and the property name
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/*output 
{
    value: 'ginger chai',
    writable: true,
    enumerable: true,
    configurable: true
}

value: The current value of the property ('ginger chai').
writable: true, meaning you can modify the value of the property.
enumerable: true, meaning the property will show up during enumeration (like for...in or Object.keys()).
configurable: true, meaning you can change the property descriptor or delete the property.
  */

//? Object.getOwnPropertyDescriptor() returns details about a specific property in an object (its value, and whether it's writable, enumerable, or configurable).

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/*output 
{
value: 'ginger chai',
  writable: false, Now, the name property is read-only, meaning you cannot change the value of chai.name.
  enumerable: false,
  configurable: true
}
*/

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key}: ${value}`);
  }
}

// bcoz of this enumerable: false, name is not showing
//price: 200
//isAvailable: true
