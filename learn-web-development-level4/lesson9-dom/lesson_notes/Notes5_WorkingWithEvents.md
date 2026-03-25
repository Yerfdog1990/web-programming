### Working with Events 
#### 5.1 Event Basics

**What are events?**

An event is a signal from the browser that something has happened—like a user clicking a button, pressing a key, or the page finishing loading. Events let you run code in response to those signals.

**Types of Events**

Common categories include:

- **Mouse:** `click`, `dblclick`, `mouseover`, `mouseout`, `mousedown`, `mouseup`, `mousemove`
- **Keyboard:** `keydown`, `keyup`, `keypress`
- **Form:** `submit`, `change`, `focus`, `blur`
- **Document/Window:** `load`, `resize`, `scroll`, `unload`

**Event Handlers**

An event handler (or event listener) is a function that runs when a specific event occurs. It “listens” for the event and then executes.

#### 5.2 Adding Event Handlers

**`addEventListener`**

The preferred way to attach handlers. It’s more flexible than using inline HTML attributes (`onclick`, etc.).

*Syntax*
```js
element.addEventListener(event, handler, options);
```
- `element` – the target element
- `event` – event type, e.g., `'click'`
- `handler` – function to run
- `options` – optional configuration

*Example: Adding a click event handler*
```html
<!DOCTYPE html>
<html>
  <head><title>Event Example</title></head>
  <body>
    <button id="myButton">Click me</button>

    <script>
      const button = document.getElementById('myButton');

      button.addEventListener('click', function() {
        alert('Button clicked!');
      });
    </script>
  </body>
</html>
```

*Example: Adding multiple event handlers*

You can attach more than one handler to the same event; they run in the order they were added.

```html
<!DOCTYPE html>
<html>
  <head><title>Event Example</title></head>
  <body>
    <button id="myButton">Click me</button>

    <script>
      const button = document.getElementById('myButton');

      button.addEventListener('click', function() {
        console.log('First handler');
      });

      button.addEventListener('click', function() {
        console.log('Second handler');
      });
    </script>
  </body>
</html>
```

#### 5.3 Using the `options` Parameter

The `options` object customizes handler behavior:

- `once: true` → handler runs only once, then auto-removes
- `capture: true` → handler runs during the capture phase
- `passive: true` → handler won’t call `preventDefault()`

*Example: Handler that executes only once*
```html
<!DOCTYPE html>
<html>
  <head><title>Event Example</title></head>
  <body>
    <button id="myButton">Click me</button>

    <script>
      const button = document.getElementById('myButton');

      button.addEventListener('click', function() {
        alert('This will be shown only once');
      }, { once: true });
    </script>
  </body>
</html>
```

#### 5.4 Removing Event Handlers

**`removeEventListener`**

Removes a handler that was added with `addEventListener`. You must pass the exact same `event`, `handler`, and `options`.

*Syntax*
```js
element.removeEventListener(event, handler, options);
```

*Example: Removing a click event handler*
```html
<!DOCTYPE html>
<html>
  <head><title>Event Example</title></head>
  <body>
    <button id="myButton">Click me</button>
    <button id="removeButton">Remove Click Handler</button>

    <script>
      const button = document.getElementById('myButton');
      const removeButton = document.getElementById('removeButton');

      function clickHandler() {
        alert('Button clicked!');
      }

      button.addEventListener('click', clickHandler);

      removeButton.addEventListener('click', function() {
        button.removeEventListener('click', clickHandler);
        alert('Click handler removed');
      });
    </script>
  </body>
</html>
```

#### Exercises with Solutions

**Exercise 1 – Multiple Handlers**

*Requirements*
- Include a button.
- Add a first click handler that logs `"First handler"`.
- Add a second click handler that logs `"Second handler"`.
- Both handlers must run sequentially on each click.

*Solution*
```html
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Multiple Handlers</title></head>
<body>
  <button id="myButton">Click me</button>

  <script>
    const button = document.getElementById('myButton');

    button.addEventListener('click', function() {
      console.log('First handler');
    });

    button.addEventListener('click', function() {
      console.log('Second handler');
    });
  </script>
</body>
</html>
```

**Exercise 2 – Removing an Event Listener**

*Requirements*
- Add a click listener to the first button that displays `"Button was clicked"`.
- Add a second button that removes the first button’s click listener.
- Use `addEventListener` and `removeEventListener`.

*Solution*
```html
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Removing an Event Listener</title></head>
<body>
  <button id="myButton">Click me</button>
  <button id="removeButton">Remove Click Handler</button>

  <script>
    const button = document.getElementById('myButton');
    const removeButton = document.getElementById('removeButton');

    function clickHandler() {
      alert('Button was clicked');
    }

    button.addEventListener('click', clickHandler);

    removeButton.addEventListener('click', function() {
      button.removeEventListener('click', clickHandler);
      alert('Click handler removed');
    });
  </script>
</body>
</html>
```

---