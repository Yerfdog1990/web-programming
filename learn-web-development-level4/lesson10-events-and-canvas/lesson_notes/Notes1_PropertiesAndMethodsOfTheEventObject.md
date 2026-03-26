### Properties and Methods of the Event Object 

#### 1. What is the Event Object?
When something happens in the browser (a click, a key press, the page finishing loading), the browser creates an **event object**. This object is automatically passed as the first argument to your event handler function.

It carries two kinds of information:
- **Properties** – data about the event (what happened, where it happened, when it happened)
- **Methods** – actions you can take to control the event

#### 2. Common Event Object Properties
| Property | What it tells you |
|----------|-------------------|
| `type` | The name of the event (`"click"`, `"keydown"`, `"load"` etc.) |
| `target` | The element where the event actually originated (the element you clicked on) |
| `currentTarget` | The element that the handler is attached to (could be a parent) |
| `eventPhase` | 1 = capturing phase, 2 = target phase, 3 = bubbling phase |
| `bubbles` | `true` if the event will bubble up the DOM tree |
| `cancelable` | `true` if you can cancel the default browser action |
| `defaultPrevented` | `true` if `preventDefault()` has been called |
| `timeStamp` | Time (in ms) when the event was created |
| `isTrusted` | `true` if the event was triggered by a user action, `false` if it was triggered by script |

**Example – logging properties**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Event Object Example</title>
  </head>
  <body>
    <button id="myButton">Click me</button>

    <script>
      const button = document.getElementById('myButton');

      button.addEventListener('click', function(event) {
        console.log('Event type:', event.type);          // "click"
        console.log('Event target:', event.target);      // <button id="myButton">Click me</button>
        console.log('Current target:', event.currentTarget); // <button id="myButton">Click me</button>
        console.log('Event phase:', event.eventPhase);   // 2 (Target phase)
        console.log('Bubbles:', event.bubbles);          // true
        console.log('Cancelable:', event.cancelable);    // true
        console.log('Time stamp:', event.timeStamp);     // e.g., 123456.789
        console.log('Is trusted:', event.isTrusted);     // true
      });
    </script>
  </body>
</html>
```

#### 3. Common Event Object Methods
| Method | What it does |
|--------|--------------|
| `preventDefault()` | Cancels the browser’s default action (e.g., stop a link from navigating, stop a form from submitting) |
| `stopPropagation()` | Stops the event from bubbling up to parent elements |
| `stopImmediatePropagation()` | Stops propagation **and** prevents any other handlers on the same element from running |

#### 4. Event Categories & Examples

**4.1 Mouse Events**

Events triggered by mouse interaction:
`click`, `dblclick`, `mousedown`, `mouseup`, `mousemove`, `mouseover`, `mouseout`

| Event | How it works | Modern Web Development Use Case |
|-------|--------------|---------------------------------|
| `click` | Fires when a pointing device button (usually the primary button) is pressed and released on a single element. | Primary way to handle button clicks, link navigations, and toggling UI elements like menus or accordions. |
| `dblclick` | Fires when a pointing device button is clicked twice on a single element within a short period of time. | Used for "shortcut" actions like opening a file in a file manager, zooming into an image, or selecting a word in a text editor. |
| `mousedown` | Fires when a pointing device button is pressed down while the pointer is inside an element. | Essential for implementing drag-and-drop functionality, drawing applications (start drawing), and custom sliders. |
| `mouseup` | Fires when a pointing device button is released while the pointer is inside an element. | Used to complete drag-and-drop actions, finish a drawing stroke, or trigger actions only when the user "commits" to a click. |
| `mousemove` | Fires when a pointing device is moved while it is over an element. | Used for tracking cursor position for custom cursors, tooltips that follow the mouse, drawing on a canvas, or "parallax" hover effects. |
| `mouseover` | Fires when a pointing device is moved onto an element or one of its children. | Used for hover effects, showing tooltips, and highlighting items in a list. It "bubbles," unlike `mouseenter`. |
| `mouseout` | Fires when a pointing device is moved off an element or one of its children. | Used to hide tooltips, reset hover effects, or track when the user's focus leaves a specific UI component. It "bubbles," unlike `mouseleave`. |

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mouse Events Example</title>
  </head>
  <body>
    <button id="myButton">Click Me</button>
    <script>
      const button = document.getElementById('myButton');

      button.addEventListener('click', function(event) {
        console.log('Button clicked');
        console.log('Event type:', event.type);
        console.log('Target element:', event.target);
      });
    </script>
  </body>
</html>
```

**4.2 Load Events**

Events triggered when resources finish loading:
`load` (page, images, etc.) and `DOMContentLoaded` (HTML parsed, before images/CSS finish)

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Load Events Example</title>
  </head>
  <body>
    <script>
      window.addEventListener('load', function(event) {
        console.log('Window fully loaded at', event.timeStamp);
      });

      document.addEventListener('DOMContentLoaded', function(event) {
        console.log('DOM fully loaded and parsed at', event.timeStamp);
      });
    </script>
  </body>
</html>
```
*Note:* `DOMContentLoaded` fires earlier than `load`.

**4.3 Focus Events**

Events triggered when an element gains or loses focus:
`focus`, `blur`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Focus Events Example</title>
  </head>
  <body>
    <input type="text" id="textInput" placeholder="Type something...">
    <script>
      const input = document.getElementById('textInput');

      input.addEventListener('focus', function(event) {
        console.log('Input field focused');
      });

      input.addEventListener('blur', function(event) {
        console.log('Input field lost focus');
      });
    </script>
  </body>
</html>
```

**4.4 Keyboard Events**

Events triggered by keyboard activity:
`keydown` (key pressed down), `keyup` (key released), `keypress` (deprecated)

```html
<html>
  <head>
    <title>Keyboard Events Example</title>
  </head>
  <body>
    <input type="text" id="textInput" placeholder="Type something...">
    <script>
      const input = document.getElementById('textInput');

      input.addEventListener('keydown', function(event) {
        console.log('Key down:', event.key);
      });

      input.addEventListener('keyup', function(event) {
        console.log('Key up:', event.key);
      });
    </script>
  </body>
</html>
```

#### 5. Exercises

**Exercise 1 – Mouse Coordinates**

Write a script that adds a `mousemove` handler to a `<div id="mouseArea">`. The handler should log the cursor’s `clientX` and `clientY` coordinates every time the mouse moves inside the div.

**Solution**
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mouse Coordinates</title>
    <style>
      #mouseArea {
        width: 300px;
        height: 200px;
        border: 2px solid #333;
        margin: 20px;
      }
    </style>
  </head>
  <body>
    <div id="mouseArea">Move mouse here</div>

    <script>
      const area = document.getElementById('mouseArea');

      area.addEventListener('mousemove', function(event) {
        console.log('X:', event.clientX, 'Y:', event.clientY);
      });
    </script>
  </body>
</html>
```
*Why it works:* `event.clientX` and `event.clientY` give the cursor position relative to the viewport. The handler is attached only to `mouseArea`, so coordinates are logged only when the mouse moves inside that element.

**Exercise 2 – Loading Events**

Write a script that adds a `load` handler to `window` and a `DOMContentLoaded` handler to `document`. Each handler should log a message with the event name and its `timeStamp`.

**Solution**
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Loading Events</title>
  </head>
  <body>
    <script>
      window.addEventListener('load', function(event) {
        console.log('load event occurred at', event.timeStamp);
      });

      document.addEventListener('DOMContentLoaded', function(event) {
        console.log('DOMContentLoaded event occurred at', event.timeStamp);
      });
    </script>
  </body>
</html>
```
*What you’ll see:* `DOMContentLoaded` logs first (once the HTML is parsed), then `load` logs later (once images, stylesheets, etc. are fully loaded).

---