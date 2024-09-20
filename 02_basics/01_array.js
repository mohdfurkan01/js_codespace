const basic_Arr = [0,1,2,3,4,5];
const actress_Arr = ["Khaleesi","Targaryen", "Emilia Clarke"];

const myArr = new Array(1, 2, 3, 4);

console.log(basic_Arr[1]); //output:1, very simple

console.log(myArr[4]); //undefined
//when we try to access an index that is out of the range of the array, it will return undefined.
 
//methods
basic_Arr.push(6);
basic_Arr.push(6);
basic_Arr.pop() //it will remove the value from the last

// basic_Arr.unshift(9) //add value in the beginning.
 basic_Arr.shift()  //remove the value in the beginning
console.log(basic_Arr);

console.log(basic_Arr.includes(9)); //false  not exist
console.log(basic_Arr.includes(3)); //true   exist

console.log(basic_Arr.indexOf(9));  //-1  not exist
console.log(basic_Arr.indexOf(4)); //3    exist

const new_Arr = basic_Arr.join()

console.log(basic_Arr); // [ 1, 2, 3, 4, 5, 6 ] arr obj 
console.log( new_Arr); // 1,2,3,4,5,6  string

//slice and splice
const basic_Arr1 = [0, 1, 2, 3, 4, 5];

console.log("A ", basic_Arr1); // A  [ 0, 1, 2, 3, 4, 5 ]

//! slice Method:
//? Purpose: Extracts a portion of the array without modifying the original array.
//*Syntax: array.slice(startIndex, endIndex)

//* It starts copying from startIndex.
//* It stops before endIndex (so, endIndex is not included).
//* Result: Returns a new array with the extracted elements.
//* Original Array: Stays unchanged.
const myn1 = basic_Arr1.slice(1, 3); // exclude last range
console.log(myn1); // [ 1, 2 ]

console.log("B ", basic_Arr1); // B  [ 0, 1, 2, 3, 4, 5 ]

//! splice Method:
//? Purpose: Changes the original array by removing or replacing elements.
//* Syntax: array.splice(startIndex, deleteCount)

//* It starts modifying from startIndex.
//* Removes deleteCount number of elements from the original array.
//* Result: Returns a new array containing the removed elements.
//* Original Array: Gets modified.
const myn2 = basic_Arr1.splice(1, 3);
console.log("C ", basic_Arr1); // C  [ 0, 4, 5 ]
console.log(myn2); // [ 1, 2, 3 ] include last range

//! slice: Copies elements, doesn't modify the original array.
//! splice: Removes elements, modifies the original array.
