
### 4.1 The `async` Keyword
**What it is**

An `async` function lets you write asynchronous code that reads like synchronous code. The `async` keyword (introduced in ES2017) does two things:
- Marks the function as asynchronous
- **Always returns a Promise** — if you return a value, it’s automatically wrapped in `Promise.resolve(value)`

**Syntax**
```javascript
async function name() {
  // function code
}
```

**Example**
```javascript
async function greet() {
  return 'Hello, world!';
}

greet().then((message) => {
  console.log(message); // Hello, world!
});
```

### 4.2 The `await` Keyword
**What it is**

`await` pauses the execution of an `async` function until the awaited promise settles (resolves or rejects). You can only use `await` inside a function declared with `async`.

**Syntax**
```javascript
let result = await promise;
```

**Example**
```javascript
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function greet() {
  await delay(2000);           // pauses 2 seconds
  return 'Hello, world!';
}

async function displayGreeting() {
  const message = await greet();
  console.log(message); // Hello, world! after 2 seconds
}

displayGreeting();
```

### 4.3 Using `async` / `await` — Common Patterns

**Example 1: Awaiting Multiple Promises (Sequential)**

Each `await` waits for the previous one to finish.
```javascript
function fetchData1() {
  return new Promise((resolve) => setTimeout(() => resolve('Data 1'), 1000));
}

function fetchData2() {
  return new Promise((resolve) => setTimeout(() => resolve('Data 2'), 2000));
}

async function fetchAllData() {
  const data1 = await fetchData1();
  console.log(data1); // Data 1 after 1 second

  const data2 = await fetchData2();
  console.log(data2); // Data 2 after 2 seconds (total ~3s)
}

fetchAllData();
```

**Example 2: Parallel Execution with `Promise.all`**

Run multiple promises at the same time; the total time is the longest one.
```javascript
function fetchData1() {
  return new Promise((resolve) => setTimeout(() => resolve('Data 1'), 1000));
}

function fetchData2() {
  return new Promise((resolve) => setTimeout(() => resolve('Data 2'), 2000));
}

async function fetchAllData() {
  const [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);
  console.log(data1); // Data 1 after 2 seconds
  console.log(data2); // Data 2 after 2 seconds
}

fetchAllData();
```

**Example 3: Error Handling with `try…catch`**

`try…catch` works naturally with `await`, making error handling cleaner than `.catch()`.
```javascript
function fetchDataWithError() {
  return new Promise((resolve, reject) =>
    setTimeout(() => reject('Error occurred'), 1000)
  );
}

async function fetchData() {
  try {
    const data = await fetchDataWithError();
    console.log(data);
  } catch (error) {
    console.error('Error:', error); // Error: Error occurred
  }
}

fetchData();
```

**Example 4: `async` in Class Methods**

You can declare class methods as `async`.
```javascript
class DataFetcher {
  async fetchData() {
    const data = await new Promise((resolve) =>
      setTimeout(() => resolve('Fetched Data'), 1000)
    );
    return data;
  }
}

const fetcher = new DataFetcher();
fetcher.fetchData().then((data) => {
  console.log(data); // Fetched Data after 1 second
});
```

**Example 5: Asynchronous Iterators**

Use `async function*` and `for await…of` to consume streams that arrive over time.
```javascript
async function* asyncGenerator() {
  let i = 0;
  while (i < 3) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    yield i++;
  }
}

async function iterateAsyncGenerator() {
  for await (let value of asyncGenerator()) {
    console.log(value); // 0, 1, 2 (1 second apart)
  }
}

iterateAsyncGenerator();
```

---

### Exercises

#### Exercise 1 – Execution Delay
**Task**

Write an async function `delayedMessage(message, delay)` that:
- Waits `delay` milliseconds using `await`
- Returns the `message`
  Call the function and log the result.

**Solution**
```javascript
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function delayedMessage(message, delayMs) {
  await delay(delayMs);
  return message;
}

delayedMessage('Hello after 2 seconds', 2000)
  .then((msg) => console.log(msg));
```

#### Exercise 2 – Parallel Tasks
**Task**

Create `loadResource1` (resolves after 2s) and `loadResource2` (resolves after 3s). Write an async function `loadAllResources` that uses `Promise.all` and `await` to run them in parallel, then logs both results.

**Solution**
```javascript
function loadResource1() {
  return new Promise((resolve) =>
    setTimeout(() => resolve('Resource 1 ready'), 2000)
  );
}

function loadResource2() {
  return new Promise((resolve) =>
    setTimeout(() => resolve('Resource 2 ready'), 3000)
  );
}

async function loadAllResources() {
  const [res1, res2] = await Promise.all([loadResource1(), loadResource2()]);
  console.log(res1); // Resource 1 ready
  console.log(res2); // Resource 2 ready
}

loadAllResources();
```

**Key Takeaways**
- `async` → function always returns a promise.
- `await` → pauses execution inside an `async` function until the promise resolves.
- Use `Promise.all` with `await` for parallel work.
- `try…catch` is the preferred way to handle errors in async functions.

---