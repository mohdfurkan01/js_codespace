const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];

//marvel_heros.push(dc_heros); //push in existing array

//console.log(marvel_heros); //[ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ] treated as single index [ 'Superman', 'Flash', 'Batman' ] which is 4 and not a good practice
//console.log(marvel_heros[3][1]); //Flash

//const all_Heros = marvel_heros.concat(dc_heros); //concat returns a new array
//console.log(all_Heros); //[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]  

//spread operator
const new_heros = [...marvel_heros, ...dc_heros]

// console.log(new_heros); /[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]


// The flat() method is used to "flatten" nested arrays, meaning it takes an array that has sub-arrays and converts it into a single, flat array.

// flat(Infinity): The flat() method takes a parameter that specifies how deep the flattening should go. By passing Infinity, you’re telling JavaScript to flatten all levels of nested arrays, no matter how deep they are.
const another_array = [1, 2, 3, [4, 5, 6], 7, [4, 5]];//arr inside arr
const real_another_arr = another_array.flat(Infinity)
console.log(real_another_arr); //output
// [
//     1, 2, 3, 4, 5,
//     6, 7, 4, 5
//  ]

//The Array.isArray() method checks whether the passed argument is an array or not. In this case, "Ahsan" is a string, not an array. So, it returns false.
console.log(Array.isArray("Ahsan")); //false

//The Array.from() method creates a new array from an iterable object (like a string). When you pass the string "Ahsan", it converts each character in the string into an array element, resulting in ['A', 'h', 's', 'a', 'n'].
console.log(Array.from("Ahsan")); // [ 'A', 'h', 's', 'a', 'n' ]
//important interview purpose
console.log(Array.from({name: "Ahsan"})); //[] 
//{name: "Ahsan"} is a plain object with no length property and is not iterable.so it it returns an empty array
console.log(Object.values({name: "Ahsan"})); // ['Ahsan']

//Array.from() expects its first argument to be an iterable object (like a string, array, or array-like object) or an object with a length property. It can't directly take individual numbers like that. Array.from(1, 3, 5,64,)

//An iterable object is something you can loop over, meaning you can go through its items one by one. Common examples include:

//Strings: A string is iterable because you can loop through its characters. For example, "hello" can be broken down into 'h', 'e', 'l', 'l', 'o'.
//Arrays: Arrays are also iterable. If you have [1, 2, 3], you can loop through 1, 2, and 3.

//An object with a length property refers to objects that aren’t arrays but have a numeric length property, making them similar to arrays. These are called array-like objects.
let arrayLikeObject = {0: 'a', 1: 'b', 2: 'c', length: 3};
console.log(Array.from(arrayLikeObject)); // ['a', 'b', 'c']

let score1 = 100;
let score2 = 200;
let score3 = 300;
//Array.of() is used to create an array from a list of arguments.
console.log(Array.of(score1,score2, score3)); //[ 100, 200, 300 ]
