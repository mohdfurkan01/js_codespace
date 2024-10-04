# JavaScript

⏭Synchronous
⏭Single thread
JavaScript is a synchronous, single-threaded language. This means that it executes code line by line, one operation at a time, in a single thread.

The single-threaded nature of JavaScript implies that it can only do one task at a time. If one task is blocking, other tasks have to wait until it’s finished.

single-threaded nature of JavaScript is its **default behavior**

**Blocking Code**
block the flow of the program
⬇
Read file Sync

**VS**

**Non Blocking Code**
Does not block the execution
⬇
Read file Async

# setTimeout

setTimeout allows you to execute code after a specified delay, perfect for timing-based operations like showing messages, animations, or delayed actions.
setTimeout is used to run code after a delay.

# clearTimeout

clearTimeout gives you the power to cancel a delayed action before it happens. This is useful when you want to give users the ability to interrupt or stop something.
clearTimeout is used to cancel that delayed code execution if needed.

```javascript
//HTML
 <h1>Coffee with Code</h1>
<button id="stop">Stop</button>

// setTimeout(function () {
//   console.log("furkan");
// }, 2000);

const sayHello = function () {
  console.log("furkan");
};
setTimeout(sayHello, 2000);

const changeText = function () {
  document.querySelector("h1").innerHTML = "Best JS Tutorial";
};
//setTimeout(cahngeText(), 3000);❎
// setTimeout(cahngeText, 3000);
//3000 milliseconds => 3 sec
const changeMe = setTimeout(changeText, 3000);

document.querySelector("#stop").addEventListener("click", function () {
  clearTimeout(changeMe); //passed refrence
  console.log("STOPPED");
});
```

# setInterval

# clearInterval
