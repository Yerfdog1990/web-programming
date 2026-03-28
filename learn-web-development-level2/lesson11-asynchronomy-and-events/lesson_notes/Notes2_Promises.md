### Promises 

Promises are the standard way to work with asynchronous operations in ES6+. Instead of nesting callbacks, a Promise represents a value that isn’t available yet but will be **fulfilled** or **rejected** later.

#### 2.1 Creating Promises

**States**

A Promise can be in one of three states:
- **Pending** – initial state, operation not finished
- **Fulfilled** – operation succeeded
- **Rejected** – operation failed

**Syntax**
```js
const promise = new Promise((resolve, reject) => {
  // async work
  if (/* success */) {
    resolve(value);   // move to Fulfilled
  } else {
    reject(error);    // move to Rejected
  }
});
```

**Example**

```js
const myPromise = new Promise((resolve, reject) => {
  const success = true; // condition

  if (success) {
    resolve('Operation was successful');
  } else {
    reject('Operation failed');
  }
});
```

#### 2.2 Using Promises

**`.then()`**
Handles the fulfilled value. It can take a second argument for errors, but `.catch()` is preferred.

```js
myPromise.then(
  (successMessage) => {
    console.log(successMessage); // Operation was successful
  },
  (errorMessage) => {
    console.error(errorMessage);
  }
);
```

**`.catch()`**
Handles rejection.

```js
myPromise
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.error(errorMessage); // Operation failed
  });
```

**`.finally()`**
Runs regardless of outcome—useful for cleanup.

```js
myPromise
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.error(errorMessage);
  })
  .finally(() => {
    console.log('Operation completed'); // always runs
  });
```

#### 2.3 Examples of Using Promises

**Example 1 – Asynchronous operation with a timer**

```js
function asyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;

      if (success) {
        resolve('Async operation was successful');
      } else {
        reject('Async operation failed');
      }
    }, 2000);
  });
}

asyncOperation()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log('Async operation completed');
  });
```

*Possible output*
```
Async operation was successful
Async operation completed
```

**Example 2 – Sequential execution**

Chain `.then()` so the second operation starts after the first finishes.

```js
function firstOperation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('First operation completed');
      resolve('First result');
    }, 1000);
  });
}

function secondOperation(result) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Second operation completed');
      resolve(`Second result, received: ${result}`);
    }, 1000);
  });
}

firstOperation()
  .then((result) => {
    return secondOperation(result);
  })
  .then((finalResult) => {
    console.log(finalResult);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log('Both operations completed');
  });
```

*Output*
```
First operation completed
Second operation completed
Second result, received: First result
Both operations completed
```

**Example 3 – Parallel execution with `Promise.all`**

`Promise.all` waits for all promises to fulfill; if any rejects, it rejects immediately.

```js
function operationOne() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Operation One completed');
      resolve('Result One');
    }, 1000);
  });
}

function operationTwo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Operation Two completed');
      resolve('Result Two');
    }, 1500);
  });
}

Promise.all([operationOne(), operationTwo()])
  .then((results) => {
    console.log('All operations completed');
    console.log(results); // ['Result One', 'Result Two']
  })
  .catch((error) => {
    console.error('One of the operations failed', error);
  });
```

*Output*
```
Operation One completed
Operation Two completed
All operations completed
['Result One', 'Result Two']
```

---

### Exercises with Solutions

**Exercise 1 – Asynchronous Operation**

*Requirements*
- `performTask` returns a Promise
- Use `setTimeout` (2 seconds)
- Resolve with `"Task completed successfully."` if `Math.random() > 0.5`
- Reject with `"Task failed."` otherwise
- Handle result with `.then`, `.catch`, `.finally`

*Solution*

```js
function performTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('Task completed successfully.');
      } else {
        reject('Task failed.');
      }
    }, 2000);
  });
}

performTask()
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log('Task attempt finished');
  });
```

**Exercise 2 – Parallel Operations**

*Requirements*
- `loadImage` resolves after 1 second
- `loadData` resolves after 2 seconds
- Use `Promise.all` and log `"All resources loaded"` plus both results

*Solution*

```js
function loadImage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Image data');
    }, 1000);
  });
}

function loadData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('JSON data');
    }, 2000);
  });
}

Promise.all([loadImage(), loadData()])
  .then((results) => {
    console.log('All resources loaded');
    console.log(results); // ['Image data', 'JSON data']
  })
  .catch((error) => {
    console.error('Loading failed', error);
  });
```

**Takeaway**
- Create a Promise with `new Promise((resolve, reject) => …)`.
- Use `.then()` for success, `.catch()` for error, `.finally()` for cleanup.
- Chain `.then()` for sequential steps.
- Use `Promise.all()` to run multiple async tasks in parallel.

---