# projects related to DOM

## project link

[click here](https://stackblitz.com/edit/stackblitz-starters-udgqpy?file=index.html)

# solution code

## project 1

```javascript
console.log("<===============>method 1 using switch case<===============>");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    switch (e.target.id) {
      case "green":
        body.style.backgroundColor = e.target.id;
        break;
      case "aqua":
        body.style.backgroundColor = e.target.id;
        break;
      case "blue":
        body.style.backgroundColor = e.target.id;
        break;
      case "tomato":
        body.style.backgroundColor = e.target.id;
        break;

      default:
        console.log("Invalid choice");
        break;
    }
  });
});

console.log("<===============>method 2 using if statement<===============>");

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

# Task Completed✨
