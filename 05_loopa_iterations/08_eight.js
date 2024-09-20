//The reduce() method in JavaScript is used to accumulate values from an array into a single result by applying a function on each element of the array.

//accumulator => acc, currentValue => currVal
const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function(acc, currVal){
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    
    return acc + currVal
},0) //it's an initial value
//},3) //now it will start from 3
console.log(myTotal); // 6
// acc: 0 and currVal: 1
// acc: 1 and currVal: 2
// acc: 3 and currVal: 3


const myNumbers = [1, 2, 3];

const total = myNumbers.reduce( (acc, currVal) =>{
    return acc + currVal;
},0)
console.log(total); //6


//Initial Value: If you provide an initial value (e.g., 0 or 3), the accumulator starts with that value.

//No Initial Value: If you don't provide an initial value, reduce() starts with the first element as the accumulator, and the second element as the first currVal

const shoppingCart = [
    {
        itemName : "js course",
        price: 2999,
    },
    {
        itemName : "py course",
        price: 999,
    },
    {
        itemName : "android dev course",
        price: 4999,
    },
    {
        itemName : "data science course",
        price: 12999,
    }

]

const totapPrice = shoppingCart.reduce( (acc, item) => {
    return acc + item.price
},0)
console.log(totapPrice); //21996
