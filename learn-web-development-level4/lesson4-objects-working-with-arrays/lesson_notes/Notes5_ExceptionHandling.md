
---

# **10. Exception Handling in JavaScript**

## **What is Exception Handling?**

Exception handling is a mechanism used to **handle runtime errors** in a program so that it:

* Does not crash unexpectedly
* Can recover gracefully
* Improves reliability and user experience

### **Key Keywords**

* `try` → block of code that may cause an error
* `catch` → handles the error
* `finally` → always executes
* `throw` → creates custom errors

---

# **10.1 The try...catch Block**

## **Syntax**

```javascript id="2fxwq8"
try {
  // Code that may throw an exception
} catch (error) {
  // Code to handle the exception
}
```

---

## **How it Works**

* Code inside `try` is executed first
* If an error occurs → execution jumps to `catch`
* The `error` object contains details about the error

---

## **Example**

```javascript id="2o5h0s"
try {
  let result = 10 / 0;
  console.log(result);
} catch (error) {
  console.error('An error occurred:', error);
}
```

✔ Output:

```id="8p3k1y"
Infinity
```

⚠ Note: Division by zero is **not an error in JavaScript**, so `catch` is not triggered.

---

# **10.2 The finally Block**

## **Syntax**

```javascript id="9yfrc7"
try {
  // Code
} catch (error) {
  // Handle error
} finally {
  // Always executes
}
```

---

## **Key Idea**

The `finally` block:

* Runs **whether an error occurs or not**
* Used for cleanup tasks

---

## **Example**

```javascript id="4g2knt"
try {
  let result = 10 / 0;
  console.log(result);
} catch (error) {
  console.error('An error occurred:', error);
} finally {
  console.log('This will always execute.');
}
```

✔ Output:

```id="9r0m4b"
Infinity
This will always execute.
```

---

# **10.3 The throw Statement**

## **Syntax**

```javascript id="4x18ut"
throw expression;
```

* Used to **manually generate errors**
* Can throw:

    * Strings
    * Numbers
    * Objects
    * Error objects (recommended)

---

## **Example: Custom Error**

```javascript id="c16gzo"
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

try {
  let result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.error('An error occurred:', error.message);
}
```

✔ Output:

```id="j4n7kq"
An error occurred: Division by zero is not allowed.
```

---

# **10.4 Advanced Examples and Use Cases**

---

## **1. Handling Multiple Errors**

```javascript id="h6n2tw"
try {
  JSON.parse('{ malformed JSON string }');
} catch (error) {
  if (error instanceof SyntaxError) {
    console.error('JSON Syntax Error:', error.message);
  } else {
    console.error('Unexpected Error:', error);
  }
} finally {
  console.log('Parsing attempt finished.');
}
```

✔ Output:

```id="5jz2k1"
JSON Syntax Error: ...
Parsing attempt finished.
```

---

## **2. Nested try...catch**

```javascript id="w8c9rs"
try {
  try {
    let result = divide(10, 0);
    console.log(result);
  } catch (innerError) {
    console.error('Inner catch:', innerError.message);
    throw innerError;
  }
} catch (outerError) {
  console.error('Outer catch:', outerError.message);
} finally {
  console.log('Nested try...catch finished.');
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}
```

✔ Output:

```id="m3k7zt"
Inner catch: Division by zero is not allowed.
Outer catch: Division by zero is not allowed.
Nested try...catch finished.
```

---

## **3. Using finally for Cleanup**

```javascript id="7u9k3v"
function readFile(filePath) {
  let file;
  try {
    file = openFile(filePath);
  } catch (error) {
    console.error('Error reading file:', error.message);
  } finally {
    if (file) {
      closeFile(file);
    }
    console.log('File processing finished.');
  }
}
```

✔ Ensures resources are always released

---

# ⚠️ **Best Practices**

* Use `try...catch` for **runtime errors only**
* Avoid overusing it for normal logic
* Always handle or log errors properly
* Use `finally` for cleanup tasks
* Prefer `Error` objects when using `throw`

---

# **Exercises with Solutions**

---

## **Exercise 1: Error Handling**

### **Task**

* Try to log an undefined variable
* Catch the error and display message

---

### **Solution**

```javascript id="3f6kq9"
try {
  console.log(undefinedVar);
} catch (error) {
  console.error(error.message);
}
```

✔ Output:

```id="1b8x2w"
undefinedVar is not defined
```

---

## **Exercise 2: finally Block**

### **Task**

* Create function `processData`
* Print message in `try`
* Always print cleanup message in `finally`

---

### **Solution**

```javascript id="9n4v7s"
function processData() {
  try {
    console.log("Processing data");
  } finally {
    console.log("Cleanup resources");
  }
}

processData();
```

✔ Output:

```id="k3t7p2"
Processing data
Cleanup resources
```

---

# **Summary**

* Exception handling improves **program stability**
* Main components:

    * `try` → risky code
    * `catch` → handle errors
    * `finally` → always runs
    * `throw` → create custom errors
* Advanced usage:

    * Multiple error handling
    * Nested try...catch
    * Resource cleanup

---

