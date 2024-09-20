//for of

//The for...of loop is used to iterate over iterable objects like arrays, strings, or other collections.
//Initialization: It automatically initializes a loop variable
//You don’t need to manage the loop variable or termination condition explicitly.
//Returns: Values of the iterable object.

// ["", "", ""]
//[{}, {}, {}]

// for (const element of object) {
    //element means any variable name like i, num, or idx.
    //object-> doesn't mean it works only on object it means which object you want to apply the loop
// }
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
  // console.log(num);
    
}

const greetins = "Hello World"
for (const str of greetins) {
   // console.log(str);
    
}

//Maps
//Map object, each key must be unique.
const map = new Map()
map.set('IN', "INDIA")
map.set('FR', "FRANCE")
map.set('USA', "AMERICA")
map.set('IN', "INDIA") //it will not print india two times
//bcoz map is known for unique value

//console.log(map);
//output: Map(3) { 'IN' => 'INDIA', 'FR' => 'FRANCE', 'USA' => 'AMERICA' }

//for (const key of map) { //it  will print full arr
for (const [key, value] of map) {
    console.log(key, ':-', value);
    //console.log(key);
    
    //IN :- INDIA
    //FR :- FRANCE
    //USA :- AMERICA
}

const myObject = {
    game1: 'pubg',
    game2: 'freefire',
    game3: 'bubblesgame'
}

// (const objVal of myObject)
// for (const [key,value] of myObject) {
//     //console.log(objVal);
//     console.log(key, ':-', value);
    
// }

//refer to file no 04