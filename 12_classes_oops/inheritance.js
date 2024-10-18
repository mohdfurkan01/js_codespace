class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USER name is ${this.username}`);
  }
}
class Teacher extends User {
  constructor(username, email, password) {
    //to distinguish the User and Teacher username use super
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

//console.log(tea.logMe());
const chai = new Teacher("chai", "chai@gmail.com", "678");
chai.addCourse();
chai.logMe(); //bcoz of inherit
const tea = new User("tea");
tea.logMe();
//console.log(chai.addCourse());

console.log(chai instanceof Teacher); //true
console.log(chai instanceof User); //true
