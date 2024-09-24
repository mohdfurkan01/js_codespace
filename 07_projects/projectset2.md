## project link

[click here](https://stackblitz.com/edit/stackblitz-starters-udgqpy?file=index.html)

# solution code

## project 2

```javascript
const form = document.querySelector('form');
console.log(form);

//this usecase will give us empty value
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

// Retrieve height and weight values from the input fields and parse them as integers
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  //height !=NaN
  // Check if height is valid
  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please provide a valid height! ${height}`;
    results.style.color = 'red';

  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please provide a valid weight! ${weight}`;
    results.style.color = 'red';

  } else {
    //bmi is calculated
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // results.innerHTML = `<span>The BMI is: ${bmi}<span/>`;
    results.style.color = 'green';

   # Task: Based on the given BMI condition, display the appropriate message:
   # Under Weight: BMI less than 18.6
   # Normal Range: BMI between 18.6 and 24.9
   # Overweight: BMI greater than 24.9

    //for underweight
    if (bmi <= 18.6) {
      results.innerHTML = `<span>You are Under Weight : ${bmi}<span/>`;

      //for normal
    } else if (bmi >= 18.6 && bmi < 24.9) {
      results.innerHTML = `<span>You are in Normal Range : ${bmi}<span/>`;

      //for overweight
    } else {
      results.innerHTML = `<span>You are Overweight : ${bmi}<span/>`;
    }
  }
});
```

# Task Completed✨
