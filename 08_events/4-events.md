# clientX

clientX is a property in JavaScript that tells you the horizontal (x-axis) position of the mouse pointer within the visible area of the browser window when an event (like a click or mouse move) happens.

# For clientX:

If you click near the left side of the screen, clientX will be a small number (e.g., 0, 15, 20).
As you click further to the right, the value of clientX increases (e.g. 100, 730, 1145).

it helps you know where the mouse pointer is on the screen when something happens!

# clientY

The clientY property works similarly to clientX, but it tracks the vertical position of your mouse (the Y-coordinate) relative to the browser window, while clientX tracks the horizontal (X-coordinate)

# For clientY:

If you click near the top of the screen, clientY will be a small number (e.g., 0, 15, 20).
As you click further down, the value of clientY increases (e.g., 100, 730, 1145).

```javascript
document.addEventListener("click", function (event) {
  console.log("You clicked at X position: " + event.clientX);
  console.log("You clicked at Y position: " + event.clientY);
});
// screenX-> Horizontal position
// screenY-> Vertical position

//These values are relative to the visible area of your browser window. So if you resize the window or scroll, the numbers will adjust based on where you clicked inside that visible window
```

# screenX

screenX gives you the horizontal (x-axis) position of the mouse pointer relative to the entire screen, not just the browser window.

# For screenX

If you click near the left side of the screen, clientX will be a small number (e.g., 0, 15, 20).
As you click further to the right, the value of clientX increases (e.g., 100, 730, 1145).

# screenY

screenY gives you the vertical (y-axis) position of the mouse pointer relative to the entire screen, not just the browser window.

# For screenY

If you click near the top of the screen, clientY will be a small number (e.g., 0, 15, 20).
As you click further down, the value of clientY increases (e.g., 100, 730, 1145).

It's different from clientY, which only measures your position within the browser's visible window. screenY measures the position relative to the whole display screen.

# clientX/clientY are limited to the browser window, while screenX/screenY work with the entire monitor.

```javascript
document.addEventListener("click", function (event) {
  console.log("You clicked at X position: " + event.screenX);
  console.log("You clicked at Y position: " + event.screenY);
});
// screenX-> Horizontal position
// screenY-> Vertical position
```

# altKey:

This is used to check if the Alt key is pressed when an event (like a click) happens. If the Alt key is being pressed, it will return true; otherwise, it will return false.

# ctrlKey:

This checks if the Ctrl key is pressed during an event. Similar to altKey, if the Ctrl key is being held down, it returns true; if not, it returns false.

# shiftKey

Returns true if the Shift key is pressed during the event, and false otherwise.

We can provide alternate actions based on key combinations. For example:
Ctrl + Click could open a link in a new tab.
Alt + Click could trigger a special function, like copying text or opening a settings menu.

```javascript
//HTML
<div>
  <input
    type="text"
    id="inputBox"
    placeholder="Click here and hold Alt or Ctrl"
  />
</div>;

document.getElementById("inputBox").addEventListener("click", function (e) {
  console.log("Alt key pressed:", e.altKey);
  console.log("Shift:", e.shiftKey);
  console.log("Ctrl key pressed:", e.ctrlKey);
});

//If you press the Alt key and click inside the input box, e.altKey will be true.
//If you press the Ctrl key and click inside the input box, e.ctrlKey will be true.

//If neither key is pressed when you click, both will be false.
```

# bubbling

In JavaScript, event bubbling is a mechanism where an event starts from the deepest (most specific) element that triggered it and then moves upward, or "bubbles up," through the DOM hierarchy to its ancestors. This means the event is first captured and handled by the target element, and then it bubbles up to its parent elements, then grandparents, and so on, until it reaches the root element (document).

```javascript
//HTML
<div id="parent" style="padding: 20px; background-color: green">
  <p>Grand Parent Div</p>
  <img
    width="200px"
    id="jsImg"
    src="https://media.istockphoto.com/id/1497439345/photo/java-script-source-code-on-the-screen.jpg?s=612x612&w=0&k=20&c=jZ9EC1JeE_ssWIWojtHVs2lVP1JWVoVaNLLBGfIHs1g="
    alt=""
  />
  <p>Parent Div</p>
  <button id="child">Click Me</button>
</div>;

document.getElementById("parent").addEventListener(
  "click",
  function () {
    console.log("Grand Parent Div Clicked!");
  },
  false //by default
);

document.getElementById("child").addEventListener(
  "click",
  function (event) {
    console.log("Button Clicked!");
    // Prevent event from bubbling up to the parent
    event.stopPropagation();
  },
  false //by default
);
```

First, the click event fires on the button itself, triggering the "Button Clicked!".
Then, because of bubbling, the event travels up and triggers the click event on the parent div, showing the "Grand Parent Div Clicked!".

# Task Completed✨
