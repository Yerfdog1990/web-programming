
### 3.1 Creating Promise Chains
**What it is**

A promise chain is a sequence of asynchronous operations where each step waits for the previous one to finish, then passes its result to the next step. You create the chain by **returning a new promise from a `.then()` callback**. Every `.then()` itself returns a new promise, so you can keep chaining.

**Why it matters**
- Avoids “callback hell” (nested callbacks)
- Makes async flow read top-to-bottom
- Each step gets the value returned by the previous step

**Simple Promise Chain Example**
```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Step 1 completed');
  }, 1000);
});

promise
  .then((result) => {
    console.log(result); // Step 1 completed
    return 'Step 2 completed';
  })
  .then((result) => {
    console.log(result); // Step 2 completed
    return 'Step 3 completed';
  })
  .then((result) => {
    console.log(result); // Step 3 completed
  })
  .catch((error) => {
    console.error(error);
  });
```
*Output*
```
Step 1 completed
Step 2 completed
Step 3 completed
```

**Example with Async Operations**
```javascript
function asyncOperation(step) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${step} completed`);
    }, 1000);
  });
}

asyncOperation('Step 1')
  .then((result) => {
    console.log(result);          // Step 1 completed
    return asyncOperation('Step 2');
  })
  .then((result) => {
    console.log(result);          // Step 2 completed
    return asyncOperation('Step 3');
  })
  .then((result) => {
    console.log(result);          // Step 3 completed
  })
  .catch((error) => {
    console.error(error);
  });
```

### 3.2 Error Handling in Promise Chains
**How it works**

- `.catch()` catches any error that occurs **anywhere upstream** in the chain.
- Once an error is thrown/rejected, all subsequent `.then()` callbacks are skipped until the nearest `.catch()`.

**Error Handling Example**
```javascript
function asyncOperation(step, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject(`${step} failed`);
      else resolve(`${step} completed`);
    }, 1000);
  });
}

asyncOperation('Step 1')
  .then((result) => {
    console.log(result);
    return asyncOperation('Step 2', true); // fails
  })
  .then((result) => {
    console.log(result); // not executed
    return asyncOperation('Step 3');
  })
  .then((result) => {
    console.log(result); // not executed
  })
  .catch((error) => {
    console.error('Error:', error); // Error: Step 2 failed
  });
```

**Handling Errors in a Specific Step**

If you want the chain to continue after an error, handle it locally with a `.catch()` **inside** the step and return a recovery value.
```javascript
asyncOperation('Step 1')
  .then((result) => {
    console.log(result);
    return asyncOperation('Step 2', true)
      .catch((error) => {
        console.warn('Handled error in Step 2:', error);
        return 'Recovered from Step 2 error';
      });
  })
  .then((result) => {
    console.log(result); // Recovered from Step 2 error
    return asyncOperation('Step 3');
  })
  .then((result) => {
    console.log(result); // Step 3 completed
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

### 3.3 Using `finally`

`.finally()` runs **regardless of success or failure** — ideal for cleanup (close connections, hide spinners, etc.).

```javascript
asyncOperation('Step 1')
  .then((result) => {
    console.log(result);
    return asyncOperation('Step 2');
  })
  .then((result) => {
    console.log(result);
    return asyncOperation('Step 3');
  })
  .catch((error) => {
    console.error('Error:', error);
  })
  .finally(() => {
    console.log('All operations completed'); // always runs
  });
```

---

### Exercises

#### Exercise 1 – Promise Chain
**Task**

Write a function `fetchData` that returns a promise simulating an async request with `setTimeout`. Create a chain of three `fetchData` calls. Each step should log the previous result and return a new value. The final step logs the final result.

**Solution**
```javascript
function fetchData(step) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${step} data`);
    }, 800);
  });
}

fetchData('First')
  .then((result) => {
    console.log(result);          // First data
    return fetchData('Second');
  })
  .then((result) => {
    console.log(result);          // Second data
    return fetchData('Third');
  })
  .then((result) => {
    console.log(result);          // Third data
  });
```

#### Exercise 2 – Errors in the Chain
**Task**

Create a function `loadResource` that simulates loading a resource. In a chain of three calls, make the **second call fail**. Handle the error with `.catch()` and add a `.finally()` that runs no matter what.

**Solution**
```javascript
function loadResource(step, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject(`${step} failed to load`);
      else resolve(`${step} loaded`);
    }, 800);
  });
}

loadResource('Resource 1')
  .then((result) => {
    console.log(result);                // Resource 1 loaded
    return loadResource('Resource 2', true); // fails
  })
  .then((result) => {
    console.log(result);                // not executed
    return loadResource('Resource 3');
  })
  .catch((error) => {
    console.error('Error:', error);     // Error: Resource 2 failed to load
  })
  .finally(() => {
    console.log('Load process finished'); // always runs
  });
```

**Key Takeaways**
- Return a promise from `.then()` to keep chaining.
- `.catch()` handles the first error in the chain and stops further `.then()` callbacks.
- Use a local `.catch()` inside a step if you want to recover and continue.
- `.finally()` runs in every case, perfect for cleanup.

---