function SetUsername(username) {
  //complex DB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  //this.username = username
  //SetUsername(username);
  SetUsername.call(this, username);

  this.email = email;
  this.password = password;
}

const chai = new createUser("cahi", "chai@insta.com", "234");
console.log(chai);
//output:  { email: 'chai@insta.com', password: '234' } not getting name

//? After applying this  'SetUsername.call(this, username);' bcoz it refrencing to the SetUsername function by call method.
//Call a method of an object, substituting another object for the current object.
//createUser {
//     username: 'cahi',
//     email: 'chai@insta.com',
//     password: '234'
//   }

//? call(): The call() method allows us to call a function with a specific this value. Here, it ensures that the this inside SetUsername refers to the same object being created by createUser.

//? new keyword: When we use new, it creates a new object and binds this to that new object. So, anything we add to this within the constructor function will be part of the final object.
