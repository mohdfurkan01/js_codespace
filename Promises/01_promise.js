//1st Method
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

//2nd Method
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  });
}).then(function () {
  console.log("Async 2 resolved");
});

//3rd Method
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "chai@exmaple.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  //to access obj
  console.log(user); //user any variable
});
