
### 7.1 Using Callbacks
**Idea**

Before Promises, async errors were passed as the *first* argument to a callback (error-first style). If `error` is truthy, you handle it; otherwise you use `data`.

**Example**
```javascript
function fetchData(callback) {
  setTimeout(() => {
    const error = Math.random() > 0.5 ? new Error('Failed to fetch data') : null;
    const data = error ? null : { id: 1, name: 'John Doe' };
    callback(error, data);
  }, 1000);
}

fetchData((error, data) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Data:', data);
  }
});
```

### 7.2 Using Promises
**Idea**

Promises give a structured way to handle async results:
- `resolve(value)` → success
- `reject(error)` → failure
- Handle success with `.then()`, failure with `.catch()`

**Promise Example**
```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = Math.random() > 0.5 ? new Error('Failed to fetch data') : null;
      if (error) reject(error);
      else resolve({ id: 1, name: 'John Doe' });
    }, 1000);
  });
}

fetchData()
  .then(data => console.log('Data:', data))
  .catch(error => console.error('Error:', error));
```

**Async/Await Example**
`async` functions return promises; `await` pauses execution until the promise settles. Use `try…catch` for errors.
```javascript
async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = Math.random() > 0.5 ? new Error('Failed to fetch data') : null;
      if (error) reject(error);
      else resolve({ id: 1, name: 'John Doe' });
    }, 1000);
  });
}

async function loadData() {
  try {
    const data = await fetchData();
    console.log('Data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

loadData();
```

### 7.3 Global Error Handling
**`window.onerror`**
Catches uncaught synchronous errors.
```javascript
window.onerror = function (message, source, lineno, colno, error) {
  console.error('Global error handler:', error);
};

setTimeout(() => {
  throw new Error('Test error');
}, 1000);
```

**`window.onunhandledrejection`**
Catches uncaught promise rejections.
```javascript
window.onunhandledrejection = function (event) {
  console.error('Unhandled rejection:', event.reason);
};

Promise.reject(new Error('Test unhandled rejection'));
```

### 7.4 Usage Examples

**1. Async HTTP Request with Fetch**
```javascript
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Data:', data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

fetchData();
```

**2. Parallel Requests with `Promise.all`**
```javascript
async function fetchMultipleData() {
  try {
    const [response1, response2] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts/1'),
      fetch('https://jsonplaceholder.typicode.com/posts/2')
    ]);

    if (!response1.ok || !response2.ok) {
      throw new Error('One of the responses was not ok');
    }

    const data1 = await response1.json();
    const data2 = await response2.json();

    console.log('Data 1:', data1);
    console.log('Data 2:', data2);
  } catch (error) {
    console.error('Fetch multiple data error:', error);
  }
}

fetchMultipleData();
```

### Exercises

#### Exercise 1 – Mistakes in async/await
**Task**
- Write `fetchDataAsync` that returns a promise resolving after 1 second with either an error or `{id: 1, name: 'John Doe'}`.
- Write `loadDataAsync` that calls `fetchDataAsync` inside `try…catch`, logging the error or the data.

**Solution**
```javascript
async function fetchDataAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = Math.random() > 0.5 ? new Error('Failed to fetch data') : null;
      if (error) reject(error);
      else resolve({ id: 1, name: 'John Doe' });
    }, 1000);
  });
}

async function loadDataAsync() {
  try {
    const data = await fetchDataAsync();
    console.log('Data:', data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

loadDataAsync();
```

#### Exercise 2 – Global Errors
**Task**
- Set up `window.onerror` and `window.onunhandledrejection`.
- Create an async function that throws an error after 1 second.
- Create a promise that is immediately rejected.
- Both errors should be caught by the global handlers.

**Solution**
```javascript
window.onerror = function (message, source, lineno, colno, error) {
  console.error('Global error handler:', error.message);
};

window.onunhandledrejection = function (event) {
  console.error('Unhandled rejection:', event.reason.message);
};

async function delayedError() {
  await new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Delayed error')), 1000)
  );
}

delayedError(); // caught by window.onerror

Promise.reject(new Error('Immediate rejection')); // caught by window.onunhandledrejection
```

**Key Takeaways**
- **Callbacks:** error as first argument
- **Promises:** `.catch()` handles rejections
- **async/await:** `try…catch` handles rejections
- **Global handlers:** `window.onerror` for sync errors, `window.onunhandledrejection` for uncaught promise rejections

---