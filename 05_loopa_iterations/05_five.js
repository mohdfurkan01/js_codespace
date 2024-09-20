// forEach() method is used to iterate over the elements of an array. It takes a callback function that runs once for each element in the array.

//The forEach() method can accept up to 3 parameters in its callback function
//1. Current Value (Required)
//2. Index (Optional)
//Array (Optional)

// /Anonymous Function: the function doesn't have a name, making it an anonymous function.

const coding = ["js", "cpp", "java", "python"]

// coding.forEach( function greet(val) {})

// function greet(val) {} it just a normal fun but when we remove the fun name then it will be callback functio.

//val: The parameter val refers to the current element of the array. It could be named anything, like item, num, or element.

//1. Normal Function
coding.forEach(function (val){
    console.log(val);   
}) 

//2. Arrow Function
coding.forEach( (item)=>{
 console.log(item);
 
})
//3 Named Function: Good for reuse and separation of logic, especially if the function is needed in multiple places.
function printMe(arrValue){
    console.log(arrValue); 
}
coding.forEach(printMe)
//3. Reusability: Since printMe is a named function, you can call it anywhere in your code, not just inside the forEach()
//coding.forEach(printMe); // Iterates over coding array
printMe("Hello!"); // You can also call it directly like this

// 1st Call: The callback is executed for the first element ("javascript").
// 2nd Call: The callback is executed for the second element ("cpp").
// 3rd Call: The callback is executed for the third element ("java").
// 4th Call: The callback is executed for the fourth element ("python").
// So, yes! The callback function runs once for each element in the array.

coding.forEach( (item, index, arr)=>{
    console.log(item, index, arr);
    
})
//output
//javascript 0 [ 'js', 'cpp', 'java', 'python' ]
//cpp 1 [ 'js', 'cpp', 'java', 'python' ]
//java 2 [ 'js', 'cpp', 'java', 'python' ]
//python 3 [ 'js', 'cpp', 'java', 'python' ]

const myCoding = [
    {
        languageName: "javaScript",
        fileExtension: "js"
    },
    {
        languageName: "Typescript",
        fileExtension: "ts"
    },
    {
        languageName: "python",
        fileExtension: "py"
    }
]

//accessing properties of array of obj
myCoding.forEach((item)=>{
    console.log(item); //access of obj{}
    //console.log(item.languageName); //access of properties
    
})