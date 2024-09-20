//The map() method in JavaScript is used to create a new array by applying a function to each element of the original array. It is similar to forEach, but the key difference is that map() returns a new array with the modified elements, while forEach() does not return anything.

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNumbers = myNumbers.map( (num) => num + 10)
// const newNumbers = myNumbers.map( (num) => {
//     num + 10 // No 'return' here, so it returns 'undefined' for every element
// })
const newNumbers = myNumbers.map( (num) => {
    return num + 10
})
console.log(newNumbers);

//map chaining
const numbers = myNumbers.map( (num) => num * 2)
                         .map( (num) => num + 2)
                         .filter((num) => num%2 == 0)
                         .filter((num) => num > 12  )
console.log(numbers);


//filter():

//Purpose: It is used to filter out elements from an array based on a condition.
//Result: Returns a new array with only the elements that meet the condition (i.e., elements that pass the "filter").
//Size: The resulting array can be smaller than the original array.
  
//map():

//Purpose: It is used to transform every element in an array by applying a function to each one.
//Result: Returns a new array with each element modified according to the logic you provide.
//Size: The resulting array will have the same length as the original array.