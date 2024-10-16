// let myName = "furkan     ";
// let myChannel = "chai     ";

//make a method that calculate exactlength don't try direct tim()..etc
// console.log(myName.trueLength);

let myHerosArr = ["thor", "spiderman"];

let heroPowerObj = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

//console.log(heroPower.getSpiderPower());
Object.prototype.furkan = function () {
  console.log(`furkan is present in all objects`);
};

Array.prototype.heyfurkan = function () {
  console.log(`Hi, this side furkan `);
};

heroPowerObj.furkan();
myHerosArr.furkan();
//thses two are working bcoz of object refer 'prototype.img' if we apply any method directly to the object it will apply all of it whether it is func obj arr or str.

//But when it comes to any specific like if we add any mehtod prototype only in array then it will only in array not object if you apply it will give an error like this '//heroPowerObj.heyfurkan();' //TypeError: heroPowerObj.heyfurkan is not a function

myHerosArr.heyfurkan();
//heroPowerObj.heyfurkan();

//! INHERITANCE
const User = {
  name: "chai",
  email: "chai@gmail.com",
};
const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "Js assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);
//TeachingSupport will access all the properties of Teacher

//above problem solution
let anotherUsername = "ChaiAurCode     "; //tureLenth = 11
console.log(anotherUsername.length); //length=16

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

//Now tureLength prototype will apply all the string and give you the exact length
anotherUsername.trueLength(); //
"chai     ".trueLength(); //4
"furkan     ".trueLength(); //6

//This is working perfectly as intended. We are adding a new behavior (trueLength()) that any string can use, which gives the "exact" length by trimming the spaces first.
