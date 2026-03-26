### Event Optimization 

When a page has many elements or events that fire rapidly (scroll, resize, typing), attaching a handler to every element or running heavy work on every trigger can slow the browser. Optimization focuses on **fewer handlers** and **controlling how often a handler runs**.

#### 9.1 Event Delegation
**What it is**

Instead of attaching a listener to every child, attach one listener to a parent. The event bubbles up, and you check `event.target` to see which child triggered it.

**Why it helps**
- Only one handler in memory.
- Works for elements added later (no need to re-bind).

**Problem without delegation**

```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
<script>
  const list = document.querySelector('ul');
  const items = document.querySelectorAll('#list li');

  items.forEach(item => {
    item.addEventListener('click', function(event) {
      const li = document.createElement('li');
      li.innerText = "New item, event won't fire on it";
      list.appendChild(li);
      alert(`You clicked on: ${event.target.textContent}`);
    });
  });
</script>
```
*New `<li>` elements don’t have a listener.*

**Solution with delegation**

```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
<script>
  const list = document.getElementById('list');
  list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      const li = document.createElement('li');
      li.innerText = "New item, event will fire on it";
      list.appendChild(li);
      alert(`You clicked on: ${event.target.textContent}`);
    }
  });
</script>
```
*Any `<li>` added later will also trigger the handler.*

#### 9.2 Preventing Unnecessary Handlers

1. **Use event delegation** – one handler for many elements.
2. **Use `{ once: true }`** – handler runs only the first time.

```html
<button id="myButton">Click me!</button>
<script>
  const button = document.getElementById('myButton');
  button.addEventListener('click', function(event) {
    alert('You clicked the button');
  }, { once: true });
</script>
```
After the first click, the listener is removed automatically.

> **Debouncing & Throttling** – limit how often a handler executes when the event fires many times.

#### 9.3 Debouncing
**What it is**

Wait until the user stops triggering the event for *wait* ms, then run the function once.

**Use case:** search input – you don’t want to query the server on every keystroke.

**Implementation**

```js
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

window.addEventListener('resize', debounce(() => {
  console.log('Window resized');
}, 300));
```

**Search input example**

```html
<input type="text" id="searchInput" placeholder="Start typing a query...">
<div id="results"></div>

<script>
  const searchInput = document.getElementById('searchInput');
  const results = document.getElementById('results');

  function debounce(func, delay) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  }

  function performSearch(event) {
    const query = event.target.value;
    results.textContent = 'Searching for: ' + query;
    setTimeout(() => {
      results.textContent = 'You searched for: ' + query;
    }, 500);
  }

  const debouncedSearch = debounce(performSearch, 300);
  searchInput.addEventListener('input', debouncedSearch);
</script>
```
The search runs 300 ms after the user stops typing.

#### 9.4 Throttling
**What it is**

Ensure the function runs at most once every *limit* ms, even if the event fires more often.

**Use case:** scroll events – you want updates every 200 ms, not every pixel.

**Implementation**

```js
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

window.addEventListener('scroll', throttle(() => {
  console.log('Window scrolled');
}, 300));
```

**Scrollable container example**

```html
<div id="scrollContainer" style="height: 200px; overflow-y: scroll;">
  <div style="height: 1000px;"></div>
</div>
<div id="status">Start scrolling to see the effect</div>

<script>
  const scrollContainer = document.getElementById('scrollContainer');
  const status = document.getElementById('status');

  function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function(...args) {
      const context = this;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(() => {
          if ((Date.now() - lastRan) >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  }

  function handleScroll(event) {
    status.textContent = 'Scrolling... ' + new Date().toLocaleTimeString();
  }

  const throttledScroll = throttle(handleScroll, 200);
  scrollContainer.addEventListener('scroll', throttledScroll);
</script>
```
The status updates at most every 200 ms.

#### 9.5 Passive Listeners
**What it is**

Mark a listener as `{ passive: true }` to tell the browser the handler won’t call `preventDefault()`. This lets the browser scroll smoothly.

```js
window.addEventListener('scroll', function(event) {
  console.log('Scrolling');
}, { passive: true });
```

---

### Exercises with Solutions

**Exercise 1 – Debouncing Input**

*Requirements*
- `<input>` for text entry and a `<div>` for results.
- Call `search` on input, but only 300 ms after the user stops typing.

*Solution*

```html
<input type="text" id="searchInput" placeholder="Type...">
<div id="results"></div>

<script>
  const searchInput = document.getElementById('searchInput');
  const results = document.getElementById('results');

  function debounce(func, delay) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  }

  function search(event) {
    const query = event.target.value;
    results.textContent = 'You searched for: ' + query;
  }

  searchInput.addEventListener('input', debounce(search, 300));
</script>
```

**Exercise 2 – Scroll Throttling**

*Requirements*
- A scrollable container and a status element.
- Update the status at most every 200 ms with the current scroll position.

*Solution*

```html
<div id="scrollContainer" style="height:200px; overflow-y:scroll; border:1px solid #ccc;">
  <div style="height:1000px; padding:10px;">Scroll me</div>
</div>
<div id="status">Scroll position: 0</div>

<script>
  const scrollContainer = document.getElementById('scrollContainer');
  const status = document.getElementById('status');

  function throttle(func, limit) {
    let lastRan = 0;
    return function(...args) {
      const now = Date.now();
      if (now - lastRan >= limit) {
        func.apply(this, args);
        lastRan = now;
      }
    };
  }

  function updateStatus() {
    status.textContent = 'Scroll position: ' + scrollContainer.scrollTop;
  }

  scrollContainer.addEventListener('scroll', throttle(updateStatus, 200));
</script>
```

**Takeaway**
- **Delegation** → one handler, works for future elements.
- **`once`** → auto-remove after first run.
- **Debounce** → run after activity stops.
- **Throttle** → run at most every N ms.
- **Passive** → improve scrolling performance.

---