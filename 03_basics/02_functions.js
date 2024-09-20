const user = {
    username:"ahsan",
    price:200
}

function handleObjectUser1(user){ 
    console.log(`Username is ${user.username} and price is ${user.price}`)  
    //output Username is ahsan and price is 200 
}
handleObjectUser1(user)

//anyobject is just a new name or reference for user inside the function, so it can access the properties (username and price) of the user object.
//anyobject isn't a new object. It's just a placeholder name
function handleObjectUser(anyobject){   //You can name this parameter anything like anyobject, myuser, details..
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`) 
     //output Username is ahsan and price is 200
}
handleObjectUser(user)
//OR (same no diference)
handleObjectUser({
    username:"humam",
    price:600
}) // Username is humam and price is 600

//Think of it like this:
//Imagine the object user is a house, and you're giving someone a copy of the key to that house.
//Inside the function, anyobject is like that key, which can still open the same house (object user).
//It doesn't matter what you call the key (anyobject, myKey, etc.), it still gives access to the same house (the user object).
//That's why anyobject.username and anyobject.price can still access the actual values of the user object.

const myArray = [100, 400, 500, 300]

//name it anything you want (like arr, list, or even potato), and it would still work the same way, as long as it's used consistently inside the function.
//treat just as a variable getArray
function returnSecondValue(getArray){
  return getArray[1]
}
console.log(returnSecondValue(myArray)); //400
//OR
console.log(returnSecondValue([100, 400, 500, 300])); //400
