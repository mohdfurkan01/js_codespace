//function base approach moderate level use
function User(email, password) {
  //this._email = email
  //this._password = password
  (this._email = email), (this._password = password);

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },

    set: function (value) {
      this._email = value;
    },
  });

  //   (this._email = email), (this._password = password);

  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },

    set: function (value) {
      this._password = value;
    },
  });
}

const chai = new User("ahsan@gmail.com", "mno");
console.log(chai.password);
console.log(chai.email);
//ContentVisibilityAutoStateChangeEvent
//ContentVisibilityAutoStateChangeEventInit
