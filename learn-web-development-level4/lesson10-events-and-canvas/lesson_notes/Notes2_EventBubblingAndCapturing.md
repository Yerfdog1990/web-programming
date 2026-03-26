### Event Bubbling and Capturing 

When you interact with an element, the event doesn’t just happen *at* that element — it travels through the DOM tree. This journey is called **event propagation** and it has two directions.

#### 7.1 Event Bubbling
**What it is**

The event starts at the *target* element (where you clicked) and then bubbles **up** through its ancestors to the `document`.

**How it works**
```html
<div id="parent">
  <button id="child">Click Me</button>
</div>

<script>
  const parent = document.getElementById('parent');
  const child = document.getElementById('child');

  parent.addEventListener('click', function(event) {
    console.log('Parent clicked');
  });

  child.addEventListener('click', function(event) {
    console.log('Child clicked');
  });
</script>
```

**Console output when clicking the button**
```
Child clicked
Parent clicked
```
The child handler runs first, then the parent handler.

#### 7.2 Event Capturing
**What it is**

The event starts at the *root* and travels **down** through ancestors to the target.

**How it works**
Set the third argument of `addEventListener` to `true`.

```html
<div id="parent">
  <button id="child">Click Me</button>
</div>

<script>
  const parent = document.getElementById('parent');
  const child = document.getElementById('child');

  parent.addEventListener('click', function(event) {
    console.log('Parent clicked');
  }, true);   // capture phase

  child.addEventListener('click', function(event) {
    console.log('Child clicked');
  });
</script>
```

**Console output when clicking the button**
```
Parent clicked
Child clicked
```
The parent handler runs first, then the child handler.

#### 7.3 Three-Phase Event Propagation Model
1. **Capturing phase** – root → parent → target
2. **Target phase** – event is at the element that was clicked
3. **Bubbling phase** – target → parent → root

By default `addEventListener` uses the bubbling phase (`false`). Pass `true` to use the capturing phase.

**Controlling propagation**
- `event.stopPropagation()` – stops the event from continuing to other ancestors (applies in both phases).
- `event.stopImmediatePropagation()` – stops propagation *and* prevents any other handlers on the same element from running.
- `event.preventDefault()` – cancels the browser’s default action (e.g., following a link, submitting a form).

#### 7.4 Example Using `stopPropagation`

```html
<div id="parent">
  <button id="child">Click Me</button>
</div>

<script>
  const parent = document.getElementById('parent');
  const child = document.getElementById('child');

  parent.addEventListener('click', function(event) {
    console.log('Parent clicked');
  });

  child.addEventListener('click', function(event) {
    console.log('Child clicked');
    event.stopPropagation(); // parent won’t be notified
  });
</script>
```

**Console output**
```
Child clicked
```
The parent handler never fires.

---

### Exercises with Solutions

**Exercise 1 – Cancel Navigation**

*Requirements*
- Select `<a id="myLink">`.
- Prevent navigation with `preventDefault()`.
- Log `"Navigation cancelled"`.

*Solution*

```html
<a id="myLink" href="https://example.com">Go</a>

<script>
  const myLink = document.getElementById('myLink');

  myLink.addEventListener('click', function(event) {
    event.preventDefault();               // stop the link
    console.log('Navigation cancelled');
  });
</script>
```

**Exercise 2 – Stopping Propagation**

*Requirements*
- `div` handler logs `"Click inside div"`.
- `button` handler logs `"Button clicked"` and calls `stopPropagation()`.

*Solution*

```html
<div id="box" style="padding:20px; background:#eee;">
  <button id="btn">Click Me</button>
</div>

<script>
  const box = document.getElementById('box');
  const btn = document.getElementById('btn');

  box.addEventListener('click', function() {
    console.log('Click inside div');
  });

  btn.addEventListener('click', function(event) {
    console.log('Button clicked');
    event.stopPropagation(); // prevents div handler
  });
</script>
```

**Takeaway**
- Use **bubbling** for delegation (handle clicks on many children from a parent).
- Use **capturing** when you need to intercept an event before child handlers run.
- Use `stopPropagation` when a child should handle the event exclusively, and `preventDefault` when you want to block the browser’s default action.

---