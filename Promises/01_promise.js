//1st Type
const promiseOne = new Promise(function (resolve, reject) {
  //Do async task
  //DB calls cryptography, network
  setTimeout(function () {
    console.log("Async Task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

//2nd Type
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  });
}).then(function () {
  console.log("Async 2 resolved");
});

//3rd Type
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "chai@exmaple.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  //to access obj
  console.log(user); //user any variable
});

//4th Type
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "furkan", password: "1234" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

//promiseFour.then().catch()
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    //by chaining extract the username
    console.log(username); //furkan
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(() => {
    //kind of default
    console.log("The promise is either resolved or rejected");
  });

//5th Type ASYNC AWAIT
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("Error: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

//fetch
// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(typeof response); //must to know the type
//     const data = await response.json(); //don't forget to add await
//     console.log(data);
//   } catch (error) {
//     console.log("Error", error);
//   }
// }
// getAllUsers();

//same for above method
fetch("https://api.github.com/users/mohdfurkan01")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
