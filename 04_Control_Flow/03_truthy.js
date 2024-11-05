const userEmail = [];
if (userEmail) {
  console.log("Got user Email");
} else {
  console.log("Didn't get user Email");
}

//            falsy values
// false, 0, -0, BigInt 0n, ""=>(empty string), null, undefined, NaN

//             truthy values
// "0", 'false', " ", [], {}, function(){}

//We can check whether a value is truthy or falsy by using it in a conditional statement
let value1 = function () {}; //truthy
//let value = []
//let value = {}
let value = ""; //falsy it's an empty string
let value2 = " "; //truthy  ***imp=> if we add even a space then it would be truthy
if (value2) {
  console.log(" truthy ");
} else {
  console.log(" falsy ");
}

//checking array is empty or not
if (userEmail.length === 0) {
  console.log("Array is empty");
}

//checking object is empty or not
//it will convert to an array (Object.keys(emptyObj))
//now we can check by length property
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is Empty");
}

console.log(false == 0); //true
console.log(false == ""); //true
console.log(0 == ""); //true
console.log(0 == 0); //true
