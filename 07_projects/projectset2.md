# solution code

## project 2

```javascript
const form = document.querySelector("form");
console.log(form);

//this usecase will give us empty value
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  //height !=NaN
  // Check if height is valid
  if (height === "" || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please provide a valid height! ${height}`;
    results.style.color = "red";
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please provide a valid weight! ${weight}`;
    results.style.color = "red";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>The BMI is: ${bmi}<span/>`;
    results.style.color = "green";
  }
  //results.innerHTML = `${height}`;
});
```
