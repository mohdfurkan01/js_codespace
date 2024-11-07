//Nullish Coalescing Operator(??)

//The nullish coalescing operator (??) is designed to specifically for handling null and undefined values.

let val1;
//val1 = 5 ?? 10 //output 5
//since val1 = 5, and 5 is neither null nor undefined, the left-hand side (5) is returned.

//val1 = null ?? 10 //output 10
val1 = undefined ?? 16; //output 16
console.log(val1);

//It returns the right-hand side value only if the left-hand side is null or undefined

//It works by returning the right-hand side value only if the left-hand side is null or undefined. Otherwise, it returns the left-hand side value.

val1 = null ?? 5 ?? 1;
console.log(val1); //5

//******************TERNARY OPERATOR*********************/
//condition ? true : false
// condition ? expression_if_true : expression_if_false

const chaiPrice = 100;
chaiPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

const age = 20;
const canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: "Yes"

const num = 10;
num % 2 === 0 ? console.log("Even") : console.log("Odd");

const isLoggedIn = true;
isLoggedIn ? showDashboard() : showLoginScreen();

function showDashboard() {
  console.log("Welcome to the dashboard!"); //executed
}

function showLoginScreen() {
  console.log("Please log in.");
}

//The ternary operator is great for short conditional logic.
//It helps reduce code size for simple conditions.
//Be careful not to make your code unreadable by chaining too many ternary operations together.
