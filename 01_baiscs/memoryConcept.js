//Two types Stack and Heap

//Stack: Stack: Stores the actual values for simple data types (like numbers). When you copy a value, it's a new, independent copy. Changing one doesn’t affect the other.

//Heap: Heap: Stores objects and more complex data. When you copy a reference, both point to the same object. Changing one will change the other.

//https://excalidraw.com/ => for visualization


// Stack (Primitive)
//What is it?: Stack memory is used for primitive data types (like numbers, booleans, etc.) and function calls.

//How does it work?: When you declare a primitive variable, it gets a specific space in the stack. This space holds the actual value.

//Copying Values: When you assign a primitive variable to another variable, a copy of the value is made. Changes to one variable do not affect the other.
let a = 10;
let b = a; // b gets a copy of the value in a
b = 20;    // Changing b does not change a
console.log(a); // Output: 10

//Stack: holds the actual value. When you copy firstName to secondName, it creates a new value. Changes to secondName do not affect firstName.
let firstName = "Ahsan";

let secondName = firstName; // secondName gets a copy of the value "Ahsan"
console.log("before changin value:", secondName); // Output: "Ahsan"

secondName = "Raza" // Changing secondName does not affect firstName

console.log("Ye bhi change hona chahiye but nhi kyuki copy me change hua h:",firstName); //Ahsan
console.log("After changing the value:",secondName); //Raza

//Heap: stores objects. When you copy user1 to user2, both variables point to the same object. Changes through user2 are reflected in user1 because they reference the same memory location.
let user1 = {
    email:"saipallavi@gmail.com",
    upi:"user@ybl"
}

let user2 = user1; // user2 holds a reference to the same object as user1
console.log("Before changing the value:", user2);

user2.email = "rashmikamandana.com" // Changing user2 affects user1 as they reference the same object

console.log("Not expected:",user1.email); //rashmikamandana.com but yha saipallavi@gmail.com hona chahiye
console.log("As expected heap memory me ek hi point ko refrence krte hain: ",user2.email);  //rashmikamandana.com




//Heap (Non-Primitive) 

//What is it?: Heap memory is used for non-primitive data types (like objects, arrays, etc.) and dynamically allocated memory.

//How does it work?: When you create an object or array, it’s stored in heap memory. Variables that hold references to these objects or arrays actually hold a reference (or pointer) to the location in the heap where the data is stored.

//Reference to Values: When you assign one variable to another, both variables hold a reference to the same location in the heap. Changes through one reference will affect the data accessible through the other reference.
let obj1 = { name: "John" };
let obj2 = obj1; // obj2 holds a reference to the same object as obj1
obj2.name = "Doe"; // Changing obj2 also changes obj1
console.log(obj1.name); // Output: "Doe"
