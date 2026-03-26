### Custom Events 

Custom events let you create your own event types instead of relying only on built-in ones like `click` or `keydown`. They’re great for letting different parts of an app talk to each other without tight coupling.

#### 8.1 Creating Custom Events

You use the `CustomEvent` constructor:

```js
const event = new CustomEvent(type, { detail: additionalData });
```

- **type** – a string name for your event (e.g., `'myCustomEvent'`)
- **detail** – an object that carries any data you want the listener to receive

Example:

```js
const myEvent = new CustomEvent('myCustomEvent', { detail: { message: 'Hello, world!' } });
```

#### 8.2 Dispatching Custom Events

You fire the event with `element.dispatchEvent(event)`. The element must have a listener for that event name.

```html
<button id="myButton">Button</button>
<script>
  const button = document.getElementById('myButton');

  // Listen for the custom event
  button.addEventListener('myCustomEvent', function(event) {
    console.log('Custom event received:', event.detail.message);
  });

  // Create and dispatch it
  const myEvent = new CustomEvent('myCustomEvent', { detail: { message: 'Hello, world!' } });
  button.dispatchEvent(myEvent);
</script>
```

**Console**
```
Custom event received: Hello, world!
```

#### 8.3 Applying Custom Events (Component Communication)

They’re useful for component-to-component communication.

```html
<div id="moduleA">Module A</div>
<div id="moduleB">Module B</div>
<script>
  const moduleA = document.getElementById('moduleA');
  const moduleB = document.getElementById('moduleB');

  function notifyModuleB() {
    const event = new CustomEvent('notifyB', { detail: { message: 'Data from Module A' } });
    moduleB.dispatchEvent(event);
  }

  moduleB.addEventListener('notifyB', function(event) {
    console.log('Module B received:', event.detail.message);
  });

  notifyModuleB();
</script>
```

**Console**
```
Module B received: Data from Module A
```

#### 8.4 Custom Event Parameters

`CustomEvent` accepts three extra flags:

- `bubbles` (default `false`) – if `true`, the event travels up the DOM tree
- `cancelable` (default `false`) – if `true`, you can call `event.preventDefault()`
- `composed` (default `false`) – if `true`, the event can cross shadow-DOM boundaries

Example with bubbling:

```html
<div id="container">
  <button id="myButton">Button</button>
</div>
<script>
  const container = document.getElementById('container');
  const button = document.getElementById('myButton');

  container.addEventListener('customEvent', function(event) {
    console.log('Container received:', event.detail.message);
  });

  button.addEventListener('customEvent', function(event) {
    console.log('Button received:', event.detail.message);
  });

  const myEvent = new CustomEvent('customEvent', {
    detail: { message: 'Hello from button' },
    bubbles: true,
    cancelable: true,
    composed: false
  });

  button.dispatchEvent(myEvent);
</script>
```

**Console**
```
Button received: Hello from button
Container received: Hello from button
```

---

### Exercises with Solutions

**Exercise 1 – Save Notification**

*Requirements*
- Create a `dataSaved` custom event with message `"Data has been saved successfully"`.
- Find the button with id `saveButton`.
- On button click, dispatch the `dataSaved` event.
- Log the message when the event is received.

*Solution*

```html
<button id="saveButton">Save</button>
<script>
  const saveButton = document.getElementById('saveButton');

  saveButton.addEventListener('dataSaved', function(event) {
    console.log(event.detail.message);
  });

  saveButton.addEventListener('click', function() {
    const dataSaved = new CustomEvent('dataSaved', {
      detail: { message: 'Data has been saved successfully' }
    });
    saveButton.dispatchEvent(dataSaved);
  });
</script>
```

**Exercise 2 – Text Update**

*Requirements*
- Create a `updateText` event with `detail: { text: 'Updated text' }`.
- Listen for `updateText` on `#textContainer` and set its `textContent` to `event.detail.text`.
- Dispatch the event when `#updateButton` is clicked.

*Solution*

```html
<div id="textContainer">Original text</div>
<button id="updateButton">Update</button>

<script>
  const textContainer = document.getElementById('textContainer');
  const updateButton = document.getElementById('updateButton');

  textContainer.addEventListener('updateText', function(event) {
    textContainer.textContent = event.detail.text;
  });

  updateButton.addEventListener('click', function() {
    const updateText = new CustomEvent('updateText', {
      detail: { text: 'Updated text' }
    });
    textContainer.dispatchEvent(updateText);
  });
</script>
```

**Takeaway**

Custom events give you a clean way to signal actions and pass payloads between components. Use `detail` for data, and set `bubbles: true` if you want the event to travel up the DOM.

---