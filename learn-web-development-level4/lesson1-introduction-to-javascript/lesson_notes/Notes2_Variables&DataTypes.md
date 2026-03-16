# Variables and Data Types in JavaScript

JavaScript is a flexible and dynamic programming language that allows developers to store and manipulate data using variables. Variables act as containers for storing values such as numbers, text, or logical values. JavaScript provides several ways to declare variables and supports multiple primitive data types that represent simple values.

In this lecture, we will explore three main ways to declare variables in JavaScript (`var`, `let`, and `const`) and examine the primitive data types used in the language.

---

# 2.1 Variables in JavaScript

JavaScript is a **dynamically typed language**. This means that variables do not need to have a fixed data type. A variable can store different types of values at different times during program execution.

For example, a variable may initially store a number and later store a string.

To create a variable, you write a declaration statement like this:

```javascript
var name;
```

You can also assign a value at the time of declaration:

```javascript
var name = "John";
```

JavaScript provides **three main ways** to declare variables:

* `var`
* `let`
* `const`

Each method behaves slightly differently and has its own use cases.

---

# The `var` Operator

Variables declared using `var` have **function scope or global scope**. This means the variable is accessible throughout the entire function in which it is declared, or globally if declared outside any function.

Another important behavior of `var` variables is **hoisting**.

## Hoisting with `var`

Hoisting means that the variable declaration is moved to the **top of its scope during execution**, but the assignment remains where it is written.

Example:

```javascript
console.log(x); // undefined
var x = 10;
console.log(x); // 10
```

Output:

```
undefined
10
```

This happens because JavaScript interprets the code like this:

```javascript
var x;
console.log(x); // undefined
x = 10;
console.log(x); // 10
```

The variable is declared at the top, but its value is assigned later.

Because of this behavior, `var` can sometimes cause confusion and bugs in programs.

---

# The `let` Operator

To fix the limitations of `var`, JavaScript introduced the `let` keyword.

Variables declared with `let` have **block scope**.

A block is typically defined by curly braces `{}` such as those used in:

* `if` statements
* loops
* functions

Example:

```javascript
if (true) {
  let y = 20;
  console.log(y); // 20
}

console.log(y); // ReferenceError
```

Output:

```
20
Uncaught ReferenceError: y is not defined
```

In this case, the variable `y` exists only inside the `if` block and cannot be accessed outside it.

Block scope helps prevent accidental access or modification of variables.

---

# The `const` Operator

Variables declared with `const` also have **block scope**, similar to `let`. However, they **cannot be reassigned after initialization**.

Example:

```javascript
const x = 30;
console.log(x); // 30

x = 40; // Error
```

Output:

```
30
TypeError: Assignment to constant variable
```

However, if a constant variable stores an **object**, the object’s properties can still be modified.

Example:

```javascript
const obj = { name: "Alice" };

obj.name = "Bob"; // allowed

console.log(obj.name); // Bob
```

The reference to the object remains constant, but the object's contents can change.

---

# Important Clarification: Hoisting of `let` and `const`

Note that just like `var`, `let` and `const` are also **hoisted**. In reality:

* `var`, `let`, and `const` are **all hoisted**.
* However, `let` and `const` behave differently because they are placed in a **Temporal Dead Zone (TDZ)**.

## Temporal Dead Zone (TDZ)

The **Temporal Dead Zone** is the period between the start of a block and the point where the variable is declared.

During this time, the variable exists in memory but **cannot be accessed**.

Example:

```javascript
console.log(a);
let a = 5;
```

Output:

```
ReferenceError: Cannot access 'a' before initialization
```

Here:

* The variable `a` is hoisted
* But it is inaccessible until the declaration line is reached

This prevents accidental usage of variables before they are defined.

The same rule applies to `const`.

Example:

```javascript
console.log(b);
const b = 10;
```

This also produces a **ReferenceError** because of the TDZ.

---

## Function Scope vs Block Scope in JavaScript

In JavaScript, **scope** refers to the area of a program where a variable can be accessed. Understanding scope is essential because it controls **where variables are visible and usable in your code**. Two important types of scope are **function scope** and **block scope**.

---

# 1. Function Scope

A variable has **function scope** when it is accessible **anywhere inside the function in which it is declared**, but not outside that function.

Variables declared using the **`var` keyword** are function scoped.

### Example

```javascript
function testFunction() {
  var message = "Hello from function";

  console.log(message); // Accessible inside the function
}

testFunction();

console.log(message); // Error
```

### Output

```
Hello from function
ReferenceError: message is not defined
```

### Explanation

* The variable `message` is declared inside the function.
* It can be used anywhere inside that function.
* Outside the function, the variable does not exist.

---

### Important Behavior of `var` with Blocks

Even if `var` is declared inside a block (like an `if` statement), it still belongs to the **entire function**, not just the block.

### Example

```javascript
function example() {

  if (true) {
    var x = 10;
  }

  console.log(x); // Accessible here
}

example();
```

### Output

```
10
```

### Explanation

Even though `x` was declared inside the `if` block, `var` ignores block boundaries and attaches the variable to the entire function.

---

# 2. Block Scope

A variable has **block scope** when it is only accessible **within the block `{}` where it is declared**.

Blocks are commonly created by:

* `if` statements
* `for` loops
* `while` loops
* functions
* standalone `{}` blocks

Variables declared with **`let` and `const`** are block scoped.

---

### Example with `let`

```javascript
if (true) {
  let y = 20;
  console.log(y); // Accessible here
}

console.log(y); // Error
```

### Output

```
20
ReferenceError: y is not defined
```

### Explanation

* The variable `y` exists only inside the `if` block.
* Outside the block, the variable does not exist.

---

### Example with `const`

```javascript
if (true) {
  const z = 30;
  console.log(z);
}

console.log(z); // Error
```

### Output

```
30
ReferenceError: z is not defined
```

Just like `let`, `const` variables are also limited to the block where they are declared.

---

# 3. Visual Illustration

### Function Scope (`var`)

```
function example() {

    var a = 5;

    if (true) {
        var b = 10;
    }

    console.log(a); // accessible
    console.log(b); // accessible
}
```

Both `a` and `b` are accessible anywhere inside the function.

---

### Block Scope (`let` / `const`)

```
function example() {

    let a = 5;

    if (true) {
        let b = 10;
        console.log(b); // accessible
    }

    console.log(a); // accessible
    console.log(b); // ERROR
}
```

Here, `b` exists only inside the block.

---

# 4. Key Differences

| Feature                    | Function Scope           | Block Scope                  |
| -------------------------- | ------------------------ | ---------------------------- |
| Applies to                 | `var`                    | `let`, `const`               |
| Visibility                 | Entire function          | Only inside `{}` block       |
| Behavior inside `if`/loops | Accessible outside block | Not accessible outside block |
| Modern usage               | Rarely recommended       | Preferred                    |

---

# 5. Practical Example

### Using `var` (Function Scope)

```javascript
function scoreExample() {

  if (true) {
    var score = 100;
  }

  console.log(score);
}

scoreExample();
```

Output:

```
100
```

---

### Using `let` (Block Scope)

```javascript
function scoreExample() {

  if (true) {
    let score = 100;
  }

  console.log(score);
}

scoreExample();
```

Output:

```
ReferenceError: score is not defined
```

---

# 6. Why Block Scope is Better

Block scope helps prevent **unexpected variable access** and **bugs** in large programs.

Benefits include:

* Better variable control
* Reduced accidental overwriting
* Clearer program structure
* Safer code in loops and conditions

Because of this, **modern JavaScript developers prefer `let` and `const` instead of `var`.**

---

# 2.2 Primitive Data Types

Primitive data types represent simple values that are not objects. JavaScript includes several primitive data types that serve as the building blocks for more complex structures.

---

# Number Type

The **Number** type represents numeric values. JavaScript does not distinguish between integers and floating point numbers.

Examples:

```javascript
let num = 42;
let pi = 3.14;
```

Numbers can be used in mathematical operations:

```javascript
let sum = 10 + 5;
console.log(sum); // 15
```

---

# String Type

The **String** type represents textual data.

Strings may contain:

* letters
* numbers
* symbols
* emojis

Examples:

```javascript
let greeting = "Hello, world!";
let facepalm = "🤦";
let char = 'x';
```

Strings can be created using either single quotes or double quotes.

---

# Boolean Type

The **Boolean** type represents logical values:

* `true`
* `false`

Example:

```javascript
let isTrue = true;
let isFalse = false;
```

Booleans are commonly used in conditions:

```javascript
let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome back!");
}
```

---

# Null Type

The **null** type represents the **intentional absence of a value**.

Example:

```javascript
let empty = null;
```

It is often used when a variable is intentionally set to "no value".

---

# Undefined Type

The **undefined** type represents a variable that has been declared but **not assigned a value**.

Example:

```javascript
let notAssigned;

console.log(notAssigned);
```

Output:

```
undefined
```

This indicates that the variable exists but has not been initialized.

---

# 2.3 Comparison of `var`, `let`, and `const`

The three variable declarations have important differences.

| Characteristic | var                | let       | const       |
| -------------- | ------------------ | --------- | ----------- |
| Scope          | Function or global | Block     | Block       |
| Hoisting       | Yes                | Yes (TDZ) | Yes (TDZ)   |
| Reassignment   | Allowed            | Allowed   | Not allowed |
| Initialization | Optional           | Optional  | Required    |

In modern JavaScript:

* `var` is used less frequently
* `let` is used when a variable’s value may change
* `const` is preferred when the value should not change

Using `let` and `const` helps reduce bugs and improves code clarity.

---

# Exercises

## Exercise 1: var, let, and const

Write a program where you declare three variables named `a`, `b`, and `c` using `var`, `let`, and `const`. Assign the values 10, 20, and 30 respectively and print them to the console.

### Solution

```javascript
var a = 10;
let b = 20;
const c = 30;

console.log(a);
console.log(b);
console.log(c);
```

Output:

```
10
20
30
```

This program demonstrates how each variable declaration works and shows that they can all store numeric values.

---

# Exercise 2: Block Scope

Create a program that demonstrates block scope using `let` and `var`.

### Solution

```javascript
if (true) {
  let x = 10;
  console.log(x); // 10
}

console.log(x); // ReferenceError
```

Output:

```
10
ReferenceError: x is not defined
```

Here, `x` is limited to the block where it is declared.

---

### Using `var`

```javascript
if (true) {
  var y = 20;
}

console.log(y); // 20
```

Output:

```
20
```

Because `var` has **function scope**, the variable `y` remains accessible outside the block.

---

# Conclusion

Variables are essential components of JavaScript programming because they store and manage data during program execution. JavaScript provides three primary ways to declare variables: `var`, `let`, and `const`.

* **Function scope** means variables exist throughout the entire function. (`var`)
* **Block scope** means variables exist only inside the block `{}` where they are declared. (`let`, `const`)
* Block scope provides better control and is widely used in modern JavaScript development.

While `var` was historically the standard method, modern JavaScript development prefers `let` and `const` due to their block scope and improved control over reassignment. Additionally, JavaScript includes several primitive data types such as numbers, strings, booleans, null, and undefined, which represent the most basic values in the language.

Understanding variables and data types is fundamental to writing effective JavaScript programs and serves as the foundation for building more complex applications.

---