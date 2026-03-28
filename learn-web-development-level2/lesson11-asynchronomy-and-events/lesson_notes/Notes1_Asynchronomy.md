### Asynchrony 

JavaScript is single-threaded, meaning it runs one piece of code at a time. **Asynchrony** lets you start long-running work (network request, timer, file I/O) without freezing the page. The browser handles the work in the background and calls your callback when it’s ready.

#### 1.1 Basic Concepts

**Single-threaded nature**

JavaScript executes statements one after another on a single main thread. Asynchronous operations don’t run on that thread; the browser handles them and queues a callback for later.

**Event Loop**

The Event Loop is the scheduler that decides when queued callbacks run.

- **Message Queue (Macrotask Queue)** – holds tasks like `setTimeout`, `setInterval`, I/O, UI events. Processed one at a time.
- **Microtask Queue** – holds higher-priority tasks like `Promise.then`, `queueMicrotask`, `MutationObserver`. Processed *before* the next macrotask.

The loop works like this:
1. Run all synchronous code.
2. Run all microtasks.
3. Run one macrotask.
4. Repeat.

**Common Asynchronous Operations**
- Timers: `setTimeout`, `setInterval`
- Event handlers: click, keyup, etc.
- Network requests: `XMLHttpRequest`, `fetch`
- File I/O (Node.js)

#### 1.2 Timers

**`setTimeout`**

Executes a function once after a delay (in milliseconds).

```js
console.log('Start');

setTimeout(() => {
  console.log('Executed after 2 seconds');
}, 2000);

console.log('End');
```

**Output**
```
Start
End
Executed after 2 seconds
```
Even though the delay is 2000 ms, `'End'` prints immediately because `setTimeout` is queued.

**`setInterval`**

Repeats a function every *interval* ms until cleared.

```js
let counter = 0;

const intervalID = setInterval(() => {
  counter++;
  console.log(`Counter: ${counter}`);
  if (counter >= 5) {
    clearInterval(intervalID);
  }
}, 1000);
```

**Output**
```
Counter: 1
Counter: 2
Counter: 3
Counter: 4
Counter: 5
```

#### 1.3 Event Handlers

Event handlers are callbacks invoked when a user action occurs.

```html
<button id="myButton">Click me</button>
<script>
  const button = document.getElementById('myButton');

  button.addEventListener('click', () => {
    console.log('Button clicked!');
  });
</script>
```
Clicking the button adds the callback to the Message Queue.

#### 1.4 Network Requests

`XMLHttpRequest` (older API) lets you fetch data asynchronously.

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    console.log(response);
  }
};

xhr.send();
```

When the response arrives, the callback is placed in the Message Queue.

#### 1.5 Event Loop in Action

```js
console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 1');
});

setTimeout(() => {
  console.log('Timeout 2');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 2');
});

console.log('End');
```

**Output**
```
Start
End
Promise 1
Promise 2
Timeout 1
Timeout 2
```

**Why this order**
1. `console.log('Start')` – synchronous
2. `setTimeout(..., 0)` – macrotask queued
3. `Promise.resolve().then(...)` – microtask queued
4. `setTimeout(..., 0)` – macrotask queued
5. `Promise.resolve().then(...)` – microtask queued
6. `console.log('End')` – synchronous
7. Microtasks run → `Promise 1`, `Promise 2`
8. Macrotasks run → `Timeout 1`, `Timeout 2`

Microtasks always run before the next macrotask, even if the timeout is 0 ms.

---

### Exercises with Solutions

**Exercise 1 – Timers and Intervals**

*Requirements*
- After 3 seconds, log `"Hello!"`
- Every 1 second, log the current time
- Stop the interval after 10 seconds

*Solution*

```js
function runTimers() {
  // 3-second delayed message
  setTimeout(() => {
    console.log('Hello!');
  }, 3000);

  // Every-second timer
  let seconds = 0;
  const intervalID = setInterval(() => {
    seconds++;
    console.log(new Date().toLocaleTimeString());
    if (seconds >= 10) {
      clearInterval(intervalID);
    }
  }, 1000);
}

runTimers();
```

**Exercise 2 – Event Loop Order**

*Requirements*
- Include `setTimeout` with 0 ms
- Include `Promise.resolve().then(...)`
- Include synchronous `console.log`
- Log the order

*Solution*

```js
console.log('1: synchronous');

setTimeout(() => {
  console.log('4: setTimeout 0ms');
}, 0);

Promise.resolve().then(() => {
  console.log('3: Promise then');
});

console.log('2: synchronous');
```

**Output**
```
1: synchronous
2: synchronous
3: Promise then
4: setTimeout 0ms
```

**Takeaway**
- Synchronous code runs first.
- Microtasks (promises) run next.
- Macrotasks (`setTimeout`, `setInterval`) run last.

---