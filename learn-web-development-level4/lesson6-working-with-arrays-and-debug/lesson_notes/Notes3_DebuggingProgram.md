
---

# **9. Program Debugging**

Debugging is the process of **finding, analyzing, and fixing errors (bugs)** in a program. It is a crucial skill for developers because even small mistakes can cause programs to behave incorrectly.

---

# **9.1 How Bugs Appear**

## **What is a Bug?**

A **bug** is any error or flaw in a program that causes it to produce incorrect results or crash.

---

## **History of the Term “Bug”**

* The term dates back to the **1940s**
* A famous case occurred in **1947** at Harvard University
* Engineers found a **moth inside a computer (Mark II)** causing a malfunction
* They logged it as the **first actual “bug”**

---

## **What is Debugging?**

Debugging is the process of:

* Finding errors
* Understanding why they happen
* Fixing them
* Ensuring they don’t happen again

---

## **Debugging Process**

### 1. **Error Detection**

Identify that something is wrong
Example:

```javascript
console.log(10 / 0); // Infinity (unexpected)
```

---

### 2. **Error Reproduction**

Repeat the issue to understand it:

```javascript
function divide(a, b) {
  return a / b;
}

console.log(divide(10, 0)); // Reproducing error
```

---

### 3. **Problem Diagnosis**

Find the cause (division by zero)

---

### 4. **Error Fixing**

```javascript
function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}
```

---

### 5. **Testing**

```javascript
console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // Error handled
```

---

# **9.2 Debugging Tools and Methods**

---

## **1. Logging**

Logging helps track what’s happening in your program.

---

### **Example Using `console.log`**

```javascript
function add(a, b) {
  console.log("a:", a, "b:", b);
  return a + b;
}

add(2, 3);
```

---

### **Advanced Logging with Winston**

```javascript
const { createLogger, format, transports } = require('winston');

const logger = createLogger({ level: 'debug' });

function divide(a, b) {
  logger.debug(`Dividing ${a} by ${b}`);
  
  if (b === 0) {
    logger.error("Attempt to divide by zero!");
    return null;
  }
  
  return a / b;
}

console.log(divide(10, 2)); // 5
```

---

## **2. Using Debuggers**

Debuggers allow you to:

* Pause execution
* Inspect variables
* Step through code

---

### **Popular Debuggers**

* Chrome DevTools
* Firefox Developer Tools
* Node.js Debugger
* Visual Studio Code Debugger

---

### **Example Using `debugger` Keyword**

```javascript
function faultyFunction(a, b) {
  debugger; // Execution pauses here
  let result = a / b;
  return result;
}

console.log(faultyFunction(10, 0));
```

---

## **What Happens**

* Program stops at `debugger`
* You can inspect variables and step through execution

---

# **9.3 Using Debug (Step-by-Step)**

---

## **Debugging Workflow**

### **1. Set Breakpoints**

Pause code at important points:

```javascript
debugger;
```

---

### **2. Step Execution**

* Step into → go inside functions
* Step over → skip function details
* Step out → exit function

---

### **3. Variable Analysis**

Check values:

```javascript
let x = 10;
let y = 0;
console.log(x / y); // inspect values
```

---

### **4. Fix the Error**

```javascript
if (y === 0) {
  console.log("Invalid operation");
}
```

---

### **5. Retest**

Ensure program works correctly after fixing

---

# **10. Exercises with Solutions**

---

## **Exercise 1: Filtering Numbers**

### **Problem**

Filter even numbers from an array.

---

### **Solution**

```javascript
const numbers = [1,2,3,4,5,6,7,8,9,10];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);
// [2, 4, 6, 8, 10]
```

---

### **Explanation**

* `% 2 === 0` checks if number is even
* `filter()` creates a new array

---

## **Exercise 2: Array Sum**

### **Problem**

Find sum using `reduce()`.

---

### **Solution**

```javascript
const numbers = [10, 20, 30, 40, 50];

const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum);
// 150
```

---

### **Explanation**

* `acc` stores accumulated value
* Each number is added to total

---

# **11. Common Debugging Mistakes**

* ❌ Not checking edge cases (e.g., divide by zero)
* ❌ Ignoring error messages
* ❌ Not using logs or debugger
* ❌ Assuming code works without testing

---

# **12. Summary**

### ✔ Key Concepts

* A **bug** is an error in code
* **Debugging** is fixing those errors
* Steps:

    1. Detect
    2. Reproduce
    3. Diagnose
    4. Fix
    5. Test

---

### 🧠 Final Insight

* Debugging is not just fixing errors—it’s about **understanding your code deeply**
* Tools like logging and debuggers make debugging faster and easier

---

