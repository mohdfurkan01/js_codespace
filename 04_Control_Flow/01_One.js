//if

const isUserLoggedIn = false;
const temperature = 41;

if (temperature === 40) {
  console.log("less than 50");
} else {
  console.log("greater than 50");
}

//<,>, <=, >=, ==, !=, ===, !==

const score = 200;
if (score > 100) {
  const power = "fly";
  console.log(`user's power is: ${power}`);
}

//console.log(`user's power is: ${power}`) //ReferenceError: power is not defined

const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard) {
  //if (userLoggedIn && debitCard && 2===2) {
  // we can check multiple conditions using logical operators.
  console.log("Allow to buy BMW Car");
}
// (AND operator) && requires both conditions to be true.
// (OR operator) || requires at least one condition must be true.

const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("User can log in");
}
