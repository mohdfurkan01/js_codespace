# projects related to DOM

## project link

[click here](https://stackblitz.com/edit/stackblitz-starters-udgqpy?file=index.html)

# solution code

## project 1

```javascript
console.log("furkan");

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (btn) {
  //callback function anonymous
  btn.addEventListener("click", function (e) {
    if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === "aqua") {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "tomato") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```
