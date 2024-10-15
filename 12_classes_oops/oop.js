const user = {
  username: "ahsan",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log(`Username: ${username}`); //ReferenceError: username is not defined
    console.log(`Username: ${this.username}`);
    console.log(this); //this is called current context
    //and it knows about all about user obj
  },
};

console.log(user.username);
console.log(user.getUserDetails());
console.log(this); //output: {} empty obj -global context

//constructor function
function User(username, loginCount, isLoggedIn) {
  //myusername: username OR
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this; //optional
}

//-Constructor function (it gives a new instance every time)
//const userOne = User("ahsan", 12, true);
//const userTwo = User("javascript", 11, false);
//Now without new keyword it override 1st obj to 2nd for
const userOne = new User("ahsan", 12, true);
const userTwo = new User("javascript", 11, false);

//* 1-> when we use new keyword it create an empty object {} which is called instance.
//* 2-> And a constructor function is called due to new keyword
//* 3-> all the new keyword inject to this keyword
//* 4-> And finally we get all the instanes inside function

console.log(userOne);
console.log(userOne.constructor);
console.log(userTwo);
