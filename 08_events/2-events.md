# Notes

# 3=> Timestamp

The timestamp in JavaScript event objects is a property that tells you when an event happened. Specifically, it gives you the time in milliseconds from the moment the page was loaded

# Fun fact:

If you double-click, the timestamp for the second click will be slightly higher than the first click, which tells you how quickly the second click happened after the first!

```javascript
//HTML
<button id="btn">Timestamp</button>;

document.getElementById("btn").addEventListener("click", function (event) {
  console.log("Event happened at timestamp:", event.timeStamp);
});
//If we click on the page, this will show a number in the console, like 15234.234
//This means the click happened 15,234 milliseconds (or around 15 seconds) after the page was loaded
```

# 4=> defaultPrevented

The defaultPrevented property in JavaScript is part of the event object and helps you know if the default action of an event has been prevented.

Every event in the browser comes with a default action. For example:

Clicking a link (<a>) will navigate you to a new page.
Submitting a form will send the form data to the server.
Pressing a key in a text input will type a character.

# event.preventDefault():

This method stops the browser's default action for an event. After this method is called, the defaultPrevented property becomes true.

# How defaultPrevented works:

If the default action wasn't prevented, defaultPrevented will be false.
If the default action was prevented, defaultPrevented will be true.

```javascript
//HTML
<a style="color: aliceblue" href="https://google.com" id="defaultPrevented">
  Zen Browser is good one
</a>;

document
  .getElementById("defaultPrevented")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Stops the default link behavior (navigation)
    console.log("Link clicked, but navigation prevented.");
    console.log("defaultPrevented: ", event.defaultPrevented); // true
  });
```

# 5=> target

When an event happens, like a button click, the target property tells you which element triggered the event.
target is the HTML element that was clicked, typed in, or interacted with when the event occurred.

```javascript
//HTML
<button id="Btn1">Button 1</button>;

document.getElementById("Btn1").addEventListener("click", function (e) {
  console.log("The target is: ", event.target);
  console.log("Value of target is: ", event.target.id);
});
//The target is:  <button id=​"Btn1">​Button 1​</button>​
//Value of target is:  Btn1
```

# Task Completed✨
