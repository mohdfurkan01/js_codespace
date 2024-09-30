# Notes

# Keyword Events

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

document.getElementById("vscodeimg").addEventListener("keydown", function (e) {
  console.log("Key down:", e.key);
});
// press the letter 'A', it will show 'Key down: A' in the console.
//tabindex="0" makes the image element focusable by keyboard or mouse click. By default, images are not focusable, so they cannot receive keydown events.
```

# Mouse Events

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
document.addEventListener("click", function () {
  console.log("You clicked on the page!");
});
//click anywhere on the page, it will show 'You clicked on the page!' in the console
```

# Task Completed✨
