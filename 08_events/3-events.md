# 6=> toElement

When you move your mouse from one element to another, the toElement property tells you which element your mouse is moving into.
toElement tells you the HTML element your mouse pointer is entering during a mouseover or mouseout event.

It lets you know where the user is moving their mouse next.
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
