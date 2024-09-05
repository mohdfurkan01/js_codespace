//new Object() (singleton object):
const myObj = new Object() // creates an empty object 
//This method uses the Object constructor to create an object.

//{} (non-singleton object):
const myObj1 = {} // creates an empty object
//This is the more common way to create objects in JavaScript. It's shorthand for creating an empty object.
//It's faster and easier to write.
console.log(myObj);
//Both are ways to create an empty object, but most developers prefer {} because it's shorter and simpler.

const tinderUser = {}

tinderUser.id = "123bca"
tinderUser.name = "Samay"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email:"samay@github.com",
    fullname:{
        userfullname:{
          firstname:"Ahsan",
          lastname:"Raza"  
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);
//console.log(regularUser.fullname?.userfullname?.firstname);

//1. Combining with Object.assign():
//The Object.assign() method is used to copy properties from one or more source objects into a target object.
// In this case, the target object is an empty object {} (the first argument), and obj1 and obj2 are the source objects (the second and third arguments)
const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

//const obj3 = {obj1, obj2}
//{}=>source, obj1, obj2=> target
const obj3 = Object.assign({}, obj1, obj2) 
console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


 //Why not use {obj1, obj2} directly?
//If you use const obj3 = {obj1, obj2}, the result would be different. Instead of combining the properties, you'd get an object where obj1 and obj2 are treated as keys:
const obj4 = { obj1, obj2 };
console.log(obj4); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// If you just use {obj1, obj2}, you'll end up with an object that contains obj1 and obj2 as separate properties, not combined.

//Both ... and Object.assign() do similar things, ut the spread operator is faster to write and more commonly used in modern JavaScript.

//The spread operator (...) is a simpler and more modern way to merge objects compared to Object.assign().
//When you use {...obj1, ...obj2}, it spreads (copies) the properties of obj1 and obj2 into a new object.
const obj5 = {...obj1, ...obj2}
console.log(obj5); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id:1,
        email:"ahsan@gmail.com"
    },
    {
        id:2,
        email:"ahsanraza@gmail.com"
    },
    {
        id:3,
        email:"razaahsan@gmail.com"
    }
]
console.log(users[1].email);
console.log(tinderUser);

//*** Imp
console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //[ '123bca', 'Samay', false ]
console.log(Object.entries(tinderUser)); //[ [ 'id', '123bca' ], [ 'name', 'Samay' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true
console.log(tinderUser.hasOwnProperty('isLoggedIn1')); //false
