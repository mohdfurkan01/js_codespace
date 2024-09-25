## project link

[click here](https://stackblitz.com/edit/stackblitz-starters-udgqpy?file=index.html)

# solution code

## project 3

```javascript
const clock = document.getElementById("clock");
//const clock = document.getElementById('#clock')

// Method: 1
setInterval(function () {}, milliseconds); //Syntax, 1sec = 1000 ms

setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

// Method: 2
function updateClock() {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}
setInterval(updateClock, 1000);
```

# Task Completed✨
