
---

# **Functions in JavaScript**

## **3. Overview**

Functions are one of the **core building blocks** in JavaScript. They allow developers to group code into reusable units that perform specific tasks.

### **Why Functions Are Important**

Functions help you:

* **Reuse code** instead of rewriting it multiple times
* **Organize logic** into manageable sections
* **Improve readability** of programs
* **Break down complex problems** into smaller parts

---

## **What is a Function?**

A function is a **block of code that executes when it is called**.

It can:

* Accept **inputs (parameters)**
* Perform some **operations**
* Return an **output (result)**

---

## **Basic Example**

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
```

### **Explanation**

1. Function `add` is declared with parameters `a` and `b`
2. It returns the sum of the two values
3. Calling `add(2, 3)` executes the function
4. Output is `5`

---

# **3.1 Declaring Functions (Function Declarations)**

## **Definition**

A **function declaration** defines a named function using the `function` keyword.

---

## **Syntax**

```javascript
function name(parameters) {
  // function body
}
```

---

## **Example**

```javascript id="7d7axp"
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('Alice')); // Hello, Alice!
```

---

## **Detailed Explanation**

* `function` → keyword used to declare a function
* `greet` → function name
* `(name)` → parameter (input)
* `return` → sends back the result

---

## **Hoisting (Very Important Concept)**

Function declarations are **hoisted**, meaning:

* JavaScript moves them to the top of their scope before execution

---

### **Example**

```javascript id="gq9qyo"
console.log(greet('Alice'));

function greet(name) {
  return `Hello, ${name}!`;
}
```

### **Explanation**

* Even though the function is written after the call, it still works
* This is because of **hoisting**

---

## **When to Use Function Declarations**

* When you need reusable functions
* When order of code execution should not matter

---

# **3.2 Function Expressions**

## **Definition**

A **function expression** is when a function is assigned to a variable.

---

## **Syntax**

```javascript
const name = function(parameters) {
  // function body
};
```

---

## **Example**

```javascript id="s7kmok"
const greet = function(name) {
  return `Hello, ${name}!`;
};

console.log(greet('Bob')); // Hello, Bob!
```

---

## **Detailed Explanation**

* A variable `greet` is declared
* A function is assigned to it
* The function can now be used via the variable

---

## **Important Feature: Not Hoisted**

```javascript id="yrde0h"
console.log(greet('Bob')); // Error

const greet = function(name) {
  return `Hello, ${name}!`;
};
```

### **Explanation**

* Function expressions are **not hoisted**
* They must be defined before use

---

## **Named vs Anonymous Functions**

### **Anonymous Function (Common)**

```javascript
const greet = function(name) {
  return `Hello, ${name}!`;
};
```

---

### **Named Function Expression**

```javascript
const greet = function sayHello(name) {
  return `Hello, ${name}!`;
};
```

---

## **When to Use Function Expressions**

* When functions are used as values
* When passing functions as arguments
* When defining functions conditionally

---

# **3.3 Arrow Functions**

## **Definition**

Arrow functions provide a **short and modern syntax** for writing functions.

---

## **Basic Syntax**

```javascript
const name = (parameters) => {
  // function body
};
```

---

## **Example 1: Full Syntax**

```javascript id="ptj9an"
const greet = (name) => {
  return `Hello, ${name}!`;
};

console.log(greet('Charlie')); // Hello, Charlie!
```

---

## **Example 2: Short Syntax**

```javascript id="69qg3u"
const greet = name => `Hello, ${name}!`;

console.log(greet('Dana')); // Hello, Dana!
```

---

## **Arrow Function Rules**

### **1. Single Parameter**

Parentheses are optional:

```javascript
const square = x => x * x;
```

---

### **2. Multiple Parameters**

```javascript
const add = (a, b) => a + b;
```

---

### **3. No Parameters**

```javascript
const greet = () => "Hello!";
```

---

### **4. Multiple Statements**

```javascript
const greet = (name) => {
  let message = `Hello, ${name}!`;
  return message;
};
```

---

## **Important Feature: No Own `this`**

Arrow functions:

* Do NOT have their own `this`
* Inherit `this` from surrounding code

---

## **Why This Matters**

Useful in:

* Event handlers
* Callbacks
* Array methods

---

# **3.4 Comparing Function Types**

---

## **1. Hoisting**

| Type                 | Hoisted | Can Call Before Declaration |
| -------------------- | ------- | --------------------------- |
| Function Declaration | Yes     | Yes                         |
| Function Expression  | No      | No                          |
| Arrow Function       | No      | No                          |

---

## **2. `this` Behavior**

| Type                 | `this`           |
| -------------------- | ---------------- |
| Function Declaration | Own `this`       |
| Function Expression  | Own `this`       |
| Arrow Function       | Inherited `this` |

---

## **3. Syntax Comparison**

| Type                 | Syntax Length | Use Case               |
| -------------------- | ------------- | ---------------------- |
| Function Declaration | Medium        | General use            |
| Function Expression  | Medium        | Flexible usage         |
| Arrow Function       | Short         | Simple/quick functions |

---

# **3.5 Practical Examples**

---

## **Example 1: Function for Calculation**

```javascript
function multiply(a, b) {
  return a * b;
}

console.log(multiply(3, 4)); // 12
```

---

## **Example 2: Function Expression**

```javascript
const divide = function(a, b) {
  return a / b;
};

console.log(divide(10, 2)); // 5
```

---

## **Example 3: Arrow Function**

```javascript
const subtract = (a, b) => a - b;

console.log(subtract(10, 5)); // 5
```

---

# **Exercises with Solutions**

---

## **Exercise 1: Function in a Variable**

### **Problem**

Create a function expression that:

* Takes parameter `name`
* Returns `"Hello, {name}!"`
* Call with `'Bob'`

---

### **Solution**

```javascript id="yq2n0b"
const greet = function(name) {
  return `Hello, ${name}!`;
};

console.log(greet('Bob')); // Hello, Bob!
```

---

### **Explanation**

* Function is stored in variable
* Called using variable name
* Returns formatted string

---

## **Exercise 2: Arrow Function**

### **Problem**

Create an arrow function that:

* Takes parameter `name`
* Returns `"Hello, {name}!"`
* Call with `'Charlie'`

---

### **Solution**

```javascript id="j6d3lm"
const greet = name => `Hello, ${name}!`;

console.log(greet('Charlie')); // Hello, Charlie!
```

---

### **Explanation**

* Arrow function simplifies syntax
* No `return` needed for single expression

---

# **Common Mistakes (Exam Focused)**

---

## **1. Forgetting `return`**

```javascript
const greet = name => {
  `Hello, ${name}!`;
};
```

❌ Returns `undefined`

---

## **2. Calling Before Declaration**

```javascript
console.log(greet());

const greet = () => {};
```

❌ Error

---

## **3. Confusing Arrow Function Syntax**

```javascript
const greet = name => return "Hello"; // ❌
```

---

## **4. Misusing `this`**

Arrow functions:

* Do NOT create their own `this`

---

# **Final Summary**

* Functions are essential for structuring JavaScript programs
* Three main types:

    * **Function Declarations** → hoisted, reusable
    * **Function Expressions** → flexible, not hoisted
    * **Arrow Functions** → concise, modern
* Key differences:

    * Hoisting behavior
    * Syntax
    * `this` handling

---

# **4. Callbacks and Higher-Order Functions (VERY IMPORTANT)**

## **4.1 What is a Callback Function?**

A **callback function** is a function that is:

* Passed as an argument to another function
* Executed later inside that function

---

## **Basic Example**

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

function processUserInput(callback) {
  const name = "Alice";
  console.log(callback(name));
}

processUserInput(greet);
```

---

## **Step-by-Step Explanation**

1. `greet` is a normal function
2. `processUserInput` accepts a function as a parameter (`callback`)
3. Inside it, `callback(name)` is executed
4. `greet` is passed → so it becomes the callback

---

## **Important Rule**

👉 When passing a function as a callback:

```javascript
processUserInput(greet);   // ✅ correct

processUserInput(greet()); // ❌ wrong (this calls it immediately)
```

---

## **Real-Life Analogy**

A callback is like:

* Ordering food → you give instructions
* Restaurant calls you when ready → callback is executed later

---

# **4.2 Higher-Order Functions**

## **Definition**

A **higher-order function** is a function that:

1. Takes another function as an argument, OR
2. Returns a function

---

## **Example 1: Function as Argument**

```javascript
function greet(name) {
  return `Hello, ${name}`;
}

function executeFunction(fn) {
  console.log(fn("Bob"));
}

executeFunction(greet);
```

---

## **Example 2: Function Returning Another Function**

```javascript
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
```

---

## **Step-by-Step**

1. `multiplier(2)` returns a function
2. That function remembers `factor = 2`
3. `double(5)` → `5 * 2 = 10`

---

# **4.3 Built-in Higher-Order Functions (VERY IMPORTANT)**

These are heavily tested in exams.

---

## **1. forEach()**

```javascript
const numbers = [1, 2, 3];

numbers.forEach(function(num) {
  console.log(num);
});
```

✔ Executes function for each element

❌ Does NOT return a new array

---

## **2. map()**

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6]
```

✔ Returns a new array

---

## **3. filter()**

```javascript
const numbers = [1, 2, 3, 4];

const even = numbers.filter(num => num % 2 === 0);

console.log(even); // [2, 4]
```

✔ Filters elements

---

## **4. reduce() (IMPORTANT)**

```javascript
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 10
```

---

## **Key Terms**

| Term                  | Meaning                               |
| --------------------- | ------------------------------------- |
| Callback              | Function passed into another          |
| Higher-order function | Function that takes/returns functions |

---

# **Common Mistakes (Callbacks & HOFs)**

---

## **1. Calling Instead of Passing**

```javascript
setTimeout(greet(), 1000); // ❌

setTimeout(greet, 1000);   // ✅
```

---

## **2. Not Returning in map()**

```javascript
const result = [1,2,3].map(num => {
  num * 2; // ❌ no return
});
```

---

## **3. Confusing forEach vs map**

* `forEach` → no return
* `map` → returns new array

---

# **5. Closures (VERY IMPORTANT & COMMON IN EXAMS)**

---

## **5.1 What is a Closure?**

A **closure** is when:

> A function remembers variables from its outer scope even after the outer function has finished execution.

---

## **Basic Example**

```javascript
function outer() {
  let count = 0;

  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();

console.log(counter()); // 1
console.log(counter()); // 2
```

---

## **Step-by-Step Explanation**

1. `outer()` runs → creates `count = 0`
2. Returns `inner()` function
3. `outer()` is finished BUT…
4. `inner()` still remembers `count`
5. Each call updates the same variable

---

## **Key Idea**

👉 The inner function **"closes over"** the outer variables

---

## **5.2 Visual Diagram (Memory Behavior)**

```
Execution Context:

outer()
  count = 0
  ↓ returns inner()

counter() → inner()
  remembers:
    count = 0 → 1 → 2 → 3
```

---

## **5.3 Another Example**

```javascript
function greet(message) {
  return function(name) {
    return `${message}, ${name}`;
  };
}

const sayHello = greet("Hello");

console.log(sayHello("Alice")); // Hello, Alice
```

---

## **Explanation**

* `greet("Hello")` returns a function
* That function remembers `"Hello"`

---

# **5.4 Why Closures Are Useful**

Closures are used for:

* Data privacy
* Function factories
* Maintaining state

---

## **Example: Private Variable**

```javascript
function createCounter() {
  let count = 0;

  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    }
  };
}

const counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
```

---

# **Common Closure Mistakes (EXAM FOCUS)**

---

## **1. Expecting New Variable Each Call**

```javascript
function test() {
  let x = 0;
  return () => x++;
}

const fn = test();

console.log(fn()); // 0
console.log(fn()); // 1
```

👉 Same variable is reused

---

## **2. Loop Closure Issue**

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

### Output:

```
3
3
3
```

---

## **Fix with `let`**

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

### Output:

```
0
1
2
```

---

# **6. Exam-Style Tricky Questions**

---

## **Question 1**

```javascript
function test(fn) {
  return fn(5);
}

function square(x) {
  return x * x;
}

console.log(test(square));
```

### ✅ Answer:

```
25
```

---

## **Question 2**

```javascript
const result = [1,2,3].map(num => {
  num * 2;
});

console.log(result);
```

### ✅ Answer:

```
[undefined, undefined, undefined]
```

👉 Missing `return`

---

## **Question 3**

```javascript
function outer() {
  let x = 10;
  return function() {
    return x;
  };
}

const fn = outer();
console.log(fn());
```

### ✅ Answer:

```
10
```

---

## **Question 4**

```javascript
function counter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

const c1 = counter();
const c2 = counter();

console.log(c1(), c1(), c2());
```

### ✅ Answer:

```
1 2 1
```

👉 Separate closures

---

# **7. Coding Challenges (With Solutions)**

---

## **Challenge 1: Custom map Function**

### **Problem**

Implement your own `map`

---

### **Solution**

```javascript
function myMap(arr, callback) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

console.log(myMap([1,2,3], x => x * 2)); // [2,4,6]
```

---

## **Challenge 2: Counter Using Closure**

### **Problem**

Create a function that keeps increasing count

---

### **Solution**

```javascript
function createCounter() {
  let count = 0;

  return function() {
    return ++count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
```

---

## **Challenge 3: Function Returning Function**

```javascript
function power(exponent) {
  return function(base) {
    return base ** exponent;
  };
}

const square = power(2);

console.log(square(4)); // 16
```

---

# **Final Summary**

---

## **Callbacks**

* Functions passed as arguments
* Executed later

---

## **Higher-Order Functions**

* Take functions OR return functions
* Examples: `map`, `filter`, `reduce`

---

## **Closures**

* Functions remember outer variables
* Used for state and data privacy

---

## **Exam Focus**

* Difference between passing vs calling
* `map` vs `forEach`
* Closure memory behavior
* Loop + closure traps

---

