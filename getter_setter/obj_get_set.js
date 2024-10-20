//object base approach use very less
const User = {
  _email: "npm@gmail.com",
  _password: "bcd",

  get email() {
    return this._email.toLocaleUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};

const tea = Object.create(User);
console.log(tea.email);

//! Class base approach
//? In JavaScript, private properties are class fields that cannot be accessed from outside the class. Unlike regular properties (public ones), these are not directly accessible by the user or other objects, ensuring that the internal workings of a class remain hidden.

class Person {
  #name; // private property

  constructor(name) {
    this.#name = name; // setting the private property in the constructor
  }

  // Getter method to access the private property
  getName() {
    return this.#name; // accessing the private property
  }

  // Setter method to update the private property
  setName(newName) {
    if (typeof newName === "string" && newName.length > 0) {
      // some validation
      this.#name = newName; // setting the private property
    } else {
      console.error("Invalid name");
    }
  }
}

const furkan = new Person("Furkan");

console.log(furkan.getName()); // Output: "Furkan" (accessing the private property)

furkan.setName("Mohd Furkan"); // modifying the private property
console.log(furkan.getName()); // Output: "Mohd Furkan"

furkan.setName(""); // Output: Invalid name (failing validation)

//? Private Fields: Declared with a # and only accessible within the class.
//? Encapsulation: Hides the internal workings of the class, improving code security and maintainability.
//? Performance: Helps developers enforce how class properties should be accessed and modified.
