//ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", "chai@gmail.com", "123");

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

//Behind the scene (alternate)
function User1(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User1.prototype.encryptPassword = function () {
  return `${this.password}xyz`;
};

User1.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User1("tea", "tea@gmail.com", "987");
console.log(tea.encryptPassword());
console.log(tea.changeUsername());
