//class base approach mostly used approx 95%
class User {
  constructor(email, password) {
    // this.email = email,
    // this.password = password OR ⬇
    (this.email = email), (this.password = password);
  }

  //? Getter and Setter names must match the public-facing property (password). The internal variable storing the data can be named differently (like _password), which is a common pattern to avoid conflicts.

  //getter and setter name must be same as property or variable name like properties or varibales are email and password so the name of getter and setter must be email and password
  //!getter
  get password() {
    return `${this._password}ahsan`;
    //it will show to the user abcahsan

    //return this._password.toUpperCase();
    //changed variable name password to _pssword

    // It will append 'ahsan' to whatever the actual password is
    // Always returns a value
  }

  //!setter
  set password(value) {
    // stores the value as '_password'
    this._password = value;
    //this._password = value.toUpperCase();

    // Optionally, we could manipulate 'value' here before storing
    // Never returns a value, it just sets or updates a value.
  }
}

const ahsan = new User("ahsan@gmail.com", "abc");
console.log(ahsan.password);

//getter always associate with setter we can not use only getter or only setter

//? Getter: A getter always returns a value. Its main purpose is to allow you to access a property, often after processing or manipulating the internal value.

//? Setter: A setter never returns a value. Its main job is to set or update a value. It takes an argument and assigns it to a property, but it doesn't return anything.
