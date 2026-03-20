
---

# **4. Timers in JavaScript**

Timers allow you to **delay execution** or **repeat actions over time**. They are widely used in web development for:

* Animations
* Auto-updating content
* Delayed messages
* Periodic tasks

---

## **Main Timer Methods**

* `setTimeout()` → runs code **once after a delay**
* `setInterval()` → runs code **repeatedly at intervals**

---

# **4.1 setTimeout() Function**

The `setTimeout()` function executes a function **once after a specified delay**.

---

## **Syntax**

```javascript id="5hsk9x"
const timeoutID = setTimeout(callback, delay, ...args);
```

### **Parameters**

* `callback` → function to execute
* `delay` → time in milliseconds
* `args` → optional arguments

---

## **Example**

```javascript id="3b5p0k"
// Function to run
function greet() {
  console.log('Hello, world!');
}

// Run after 2 seconds
const timeoutID = setTimeout(greet, 2000);
```

✔ Output appears after 2 seconds

---

## **Example with Arguments**

```javascript id="drtnut"
function greet(name) {
  console.log(`Hello, ${name}!`);
}

setTimeout(greet, 2000, 'Alice');
```

---

# **4.2 Canceling setTimeout()**

Use `clearTimeout()` to **cancel a scheduled function**.

---

## **Example**

```javascript id="mrtld0"
function greet() {
  console.log('Hello, world!');
}

const timeoutID = setTimeout(greet, 2000);

// Cancel before execution
clearTimeout(timeoutID);
```

✔ The function will NOT run

---

# **4.3 setInterval() Function**

The `setInterval()` function executes a function **repeatedly at fixed intervals**.

---

## **Syntax**

```javascript id="ljrtk0"
const intervalID = setInterval(callback, delay, ...args);
```

---

## **Example**

```javascript id="t9r17y"
function greet() {
  console.log('Hello, world!');
}

// Run every 2 seconds
const intervalID = setInterval(greet, 2000);
```

✔ Runs continuously every 2 seconds

---

## **Example with Arguments**

```javascript id="o5pjmj"
function greet(name) {
  console.log(`Hello, ${name}!`);
}

setInterval(greet, 2000, 'Alice');
```

---

# **4.4 Canceling setInterval()**

Use `clearInterval()` to stop repeated execution.

---

## **Example**

```javascript id="khr75r"
function greet() {
  console.log('Hello, world!');
}

const intervalID = setInterval(greet, 2000);

// Stop after 10 seconds
setTimeout(() => {
  clearInterval(intervalID);
  console.log('Interval cleared');
}, 10000);
```

✔ Combines `setTimeout()` + `clearInterval()`

---

# **4.5 Practical Examples**

---

## **Example 1: Auto-Updating Time (Live Clock)**

```html id="d9p7lq"
<!DOCTYPE html>
<html>
  <body>
    <h1>Current Time</h1>
    <div id="time"></div>

    <script>
      function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        document.getElementById('time').textContent = timeString;
      }

      updateTime(); // Initial call
      setInterval(updateTime, 1000); // Update every second
    </script>
  </body>
</html>
```

✔ Updates time every second

---

## **Example 2: Periodic Data Request**

```javascript id="b9mn7v"
function fetchData() {
  console.log('Fetching data...');
}

const intervalID = setInterval(fetchData, 10000);

// Stop after 1 minute
setTimeout(() => {
  clearInterval(intervalID);
  console.log('Stopped fetching data');
}, 60000);
```

✔ Simulates repeated server requests

---

# **5. Exercises with Solutions**

---

## **Exercise 1: Delayed Message**

### **Problem**

Create a function `delayedMessage` that:

* Takes a message and delay
* Logs message after delay

---

### **Solution**

```javascript id="6cb28z"
function delayedMessage(message, delay) {
  setTimeout(() => {
    console.log(message);
  }, delay);
}

// Example usage
delayedMessage("Hello after 3 seconds!", 3000);
```

---

### **Explanation**

* `setTimeout()` delays execution
* Arrow function ensures message is logged later

---

## **Exercise 2: Time Update (Clock)**

### **Problem**

Create a function `startClock` that:

* Updates element with id `"clock"`
* Displays time in `"HH:MM"`
* Updates every second

---

### **Solution**

```javascript id="byws69"
function startClock() {
  function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    // Add leading zero if needed
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    const timeString = `${hours}:${minutes}`;

    document.getElementById('clock').textContent = timeString;
  }

  updateClock(); // Initial call
  setInterval(updateClock, 1000);
}
```

---

### **Explanation**

* `getHours()` and `getMinutes()` retrieve time
* Formatting ensures `"HH:MM"`
* `setInterval()` updates every second

---

# **6. Summary**

### ✔ Key Takeaways

* `setTimeout()` → runs **once after delay**
* `setInterval()` → runs **repeatedly**
* `clearTimeout()` → cancels timeout
* `clearInterval()` → stops interval
* Timers are essential for:

    * UI updates
    * Animations
    * Scheduled tasks
* Can pass arguments into timer functions

---

