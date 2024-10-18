//prop=> properties
class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USER name is ${this.username}`);
  }

  //createId() { //it has access of ahsan obj
  static createId() {
    //but it doesn't allow the access

    return `123`;
    //creating by Math.random something like that
  }
}

const ahsan = new User("Ahsan");
//console.log(ahsan.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "iphone@.com");
iphone.logMe();
//console.log(iphone.createId()); //static doesn't allow the access of everyone
