//prop=> properties
//? Static methods are functions that belong to the class itself, not to any instance of the class. You call them using the class name, not on an object created from the class.
class User {
  constructor(username) {
    this.username = username;
  }

  // Instance method
  logMe() {
    console.log(`USER name is ${this.username}`);
  }

  // Static method
  //createId() { //it has access of ahsan obj
  static createId() {
    //but it doesn't allow the access

    return `123`;
    //creating by Math.random something like that
  }
}

// Creating an instance
const ahsan = new User("Ahsan");
// Trying to call static method from an instance would fail
//console.log(ahsan.createId()); // Error! This won't work

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "iphone@.com");
iphone.logMe();
//console.log(iphone.createId()); //static doesn't allow the access of everyone
