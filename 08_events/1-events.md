# Notes

# 1 => Keyword Events

These events are triggered when you interact with the keyboard (like pressing keys).

# keydown:

Happens when you press a key down.

# keyup:

Happens when you release the key.

# keypress:

Happens when you press a key that produces a character (like letters or numbers, not control keys like Shift or Esc).

```javascript
console.log("<======> About keyword type events, mouse type events <========>");

//HTML
<li>
  <img
    width="200px"
    id="vscodeimg"
    src="https://images.pexels.com/photos/248515/pexels-photo-248515.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
    alt=""
    tabindex="0"
  />
</li>;

<input type="text" id="textInput" placeholder="Press a key" />;

document.getElementById("vscodeimg").addEventListener("keydown", function (e) {
  console.log("Key down:", e.key);
});
// press the letter 'A', it will show 'Key down: A' in the console.
//tabindex="0" makes the image element focusable by keyboard or mouse click. By default, images are not focusable, so they cannot receive keydown events.
document.getElementById("textInput").addEventListener("keydown", function (e) {
  console.log("Key down:", e.key);
});
//don’t need to add tabindex to inputs because they are already focusable by default, so for elements like input, we can easily use keydow.
```

# 2=> Mouse Events

These events are triggered when you interact with the mouse (like clicking or moving the mouse).

# click:

Happens when you click an element.

# dblclick:

Happens when you double-click an element.

# mousemove:

Happens when you move the mouse over an element.

# mousedown:

Happens when you press the mouse button down.

# mouseup:

Happens when you release the mouse button.

# mouseover:

Happens when the mouse moves over an element.

# mouseout:

Happens when the mouse leaves an element.

```javascript
//HTML
<li>
  <img
    width="200px"
    id="styleimg"
    src="https://images.pexels.com/photos/374560/pexels-photo-374560.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    alt=""
    tabindex="0"
  />
</li>;

document.getElementById("styleimg").addEventListener("click", function () {
  console.log("single click fired!");
});

document.getElementById("styleimg").addEventListener("dblclick", function () {
  console.log("doubleclick fired!");
});
//click and double click on the image, it will show 'single click fired!!' and doubleclick fired! in the console
```

# Task Completed✨
