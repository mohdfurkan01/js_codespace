# 6=> toElement

When you move your mouse from one element to another, the toElement property tells you which element your mouse is moving into.
toElement tells you the HTML element your mouse pointer is entering during a mouseover or mouseout event.

It let's you know where the user is moving their mouse next.
This can be useful when you want to track the flow of the user's interactions, like where they are moving their mouse from one element to another.

```javascript
//HTML
<div class="img">
  <img
    width="200px"
    id="picture"
    src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    alt=""
  />
</div>;

document
  .getElementById("heading")
  .addEventListener("keydown", function (event) {
    console.log("Moving to: ", event.toElement);
    alert("You are moving to: " + event.toElement.tagName);
  });
```

# 7=> srcElement

srcElement is a property used in older versions of Internet Explorer (IE) to identify which HTML element triggered an event. It’s similar to target in modern browsers, but is specific to older IE versions.

```javascript
<button id="myButton">Button1</button>;

document.getElementById("myButton").addEventListener("click", function (e) {
  console.log(e.srcElement); // In older IE, this will show the clicked button
  console.log(e.target); // In modern browsers, this does the same thing
});
```

# 8=> currentTarget

currentTarget is a property that tells you which element is currently handling the event, meaning the element that the event listener is attached to.
currentTarget is the element that is actively processing the event.

# target:

The exact element that you clicked (or interacted with).

# currentTarget:

The element that has the event listener (even if you click a child element).

```javascript
//HTML
<div id="myDiv">
  <button id="myButton">Click Me</button>
</div>;
//document.getElementById("myButton").addEventListener ❎
document.getElementById("myDiv").addEventListener("click", function (e) {
  console.log("target:", e.target); // Element that triggered the event (the button)
  console.log("currentTarget:", e.currentTarget); // Element handling the event (the div)
});
```

# keyCode

keyCode is a number that represents a specific key on your keyboard when you press it. Each key has a unique keycode that allows the browser or app to know exactly which key was pressed.

When you press a key on the keyboard, the browser can detect which key you pressed using keycode.
For example, the Enter key has a keycode of 13, and the Spacebar has a keycode of 32.

# keyCode property: Contains the numerical value of the pressed key.

keyLeft-37
keyUp-38
keyRight-39
keyDown-40
Means press keyLeft you will get 37 keycode and so on...

# Common Keycodes:

Enter: 13
Space: 32
ArrowUp: 38
ArrowDown: 40
Escape (Esc): 27
A: 65 (uppercase or lowercase ‘a’)
0-9 numbers: 48 to 57

Keycodes help identify which key was pressed.

```javascript
document.addEventListener("keydown", function (e) {
  console.log("Key pressed:", e.keyCode);

  // Example: Checking if the 'Enter' key is pressed
  if (e.keyCode === 13) {
    console.log("Enter key was pressed!");
  }
});
```

Keep in mind that keyCode is deprecated and replaced by the key and code properties in modern JavaScript, but it's still widely supported for backward compatibility.

# key Property:

The key property returns the actual value of the key pressed. This means if you press the letter "a", it will return "a" (lowercase), and if you press Shift + A, it will return "A" (uppercase).

# code Property:

The code property refers to the physical location of the key on the keyboard, regardless of the character. For example, pressing the "a" key will return "KeyA" whether you're holding Shift or not.

Differences:

key focuses on what the key does (e.g., "a", "A", or "Enter").
code focuses on which physical key was pressed (e.g., "KeyA", "Enter"), regardless of what it types.

```javascript
document.addEventListener("keydown", function (e) {
  console.log("Key:", e.key); // Output: 'a', 'A', 'Enter', etc.
  console.log("Code:", e.code); // Output: 'KeyA', 'Enter', etc.

  if (e.key === "Enter") {
    console.log("You pressed Enter!");
  }

  if (e.code === "KeyA") {
    console.log("You pressed the 'A' key.");
  }
});

//OR
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    console.log("Enter was pressed!");
  }
});
//OR
document.addEventListener("keydown", function (e) {
  if (e.code === "KeyW") {
    console.log("Move Up (W key)!");
  }
});
//The key and code properties are fully supported in modern browsers, so it's a safer and more future-proof way than keyCode.
```

# Task Completed✨
