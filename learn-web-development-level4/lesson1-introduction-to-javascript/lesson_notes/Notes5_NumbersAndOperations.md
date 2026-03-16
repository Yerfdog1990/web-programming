# Numbers and Operations in JavaScript

Numbers are essential in programming because they allow developers to perform calculations, process data, and implement logic in applications. JavaScript provides a powerful numeric system that supports arithmetic operations, mathematical functions, and conversion between strings and numbers.

In JavaScript, numbers are handled primarily using the **Number data type**, which represents both integers and floating-point values. Additionally, the **BigInt** type was introduced in 2020 to work with extremely large integers.

---

# 3.1 Number Type

In JavaScript, the **Number** data type is used for both integers and decimal numbers. Unlike some programming languages that have separate types for integers and floating-point numbers, JavaScript uses a single type for both.

### Examples

```javascript
let integer = 42;           // Integer
let float = 3.14;           // Floating-point number
let bigInt = 12345678901234567890n; // Big integer
```

Explanation:

* `42` is an integer.
* `3.14` is a floating-point number.
* `12345678901234567890n` is a **BigInt**, which is used when numbers exceed the safe integer limit of JavaScript.

BigInt allows developers to work with numbers larger than those supported by the standard Number type.

---

# Operations with Numbers

JavaScript supports many **arithmetic operations** that allow developers to perform calculations.

## Arithmetic Operations

| Operation      | Syntax   | Description                       | Example  | Result |
| -------------- | -------- | --------------------------------- | -------- | ------ |
| Addition       | `a + b`  | Adds two numbers                  | `5 + 3`  | 8      |
| Subtraction    | `a - b`  | Subtracts one number from another | `10 - 4` | 6      |
| Multiplication | `a * b`  | Multiplies two numbers            | `7 * 3`  | 21     |
| Division       | `a / b`  | Divides one number by another     | `20 / 5` | 4      |
| Remainder      | `a % b`  | Returns remainder of division     | `10 % 3` | 1      |
| Exponentiation | `a ** b` | Raises a number to a power        | `2 ** 3` | 8      |

### Example

```javascript
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000
```

---

# Increment and Decrement

Increment and decrement operators increase or decrease a value by **one**.

| Operation           | Syntax | Description                |
| ------------------- | ------ | -------------------------- |
| Increment (prefix)  | `++a`  | Increases value before use |
| Increment (postfix) | `a++`  | Uses value then increases  |
| Decrement (prefix)  | `--a`  | Decreases value before use |
| Decrement (postfix) | `a--`  | Uses value then decreases  |

### Example

```javascript
let a = 5;

console.log(++a); // 6 (increment first)

let b = 5;

console.log(b++); // 5 (returns old value)
console.log(b);   // 6
```

Decrement example:

```javascript
let c = 5;

console.log(--c); // 4
```

---

# Combined Assignment Operations

JavaScript also provides **combined assignment operators** that simplify calculations.

| Operation                 | Syntax   | Description            | Example  | Result |
| ------------------------- | -------- | ---------------------- | -------- | ------ |
| Addition assignment       | `a += b` | Adds and assigns       | `x += 5` | 15     |
| Subtraction assignment    | `a -= b` | Subtracts and assigns  | `x -= 3` | 7      |
| Multiplication assignment | `a *= b` | Multiplies and assigns | `x *= 2` | 20     |
| Division assignment       | `a /= b` | Divides and assigns    | `x /= 2` | 5      |
| Remainder assignment      | `a %= b` | Remainder and assigns  | `x %= 3` | 1      |

### Example

```javascript
let x = 10;

x += 5;  // x = 15
x -= 3;  // x = 12
x *= 2;  // x = 24
x /= 4;  // x = 6
x %= 4;  // x = 2

console.log(x);
```

---

# 3.2 Built-in Math Methods

JavaScript provides the **Math object**, which contains many useful mathematical functions.

---

## 1. Math.round()

Rounds a number to the **nearest integer**.

```javascript
let rounded = Math.round(4.6);
console.log(rounded); // 5
```

---

## 2. Math.ceil()

Rounds a number **upward** to the nearest integer.

```javascript
let ceil = Math.ceil(4.2);
console.log(ceil); // 5
```

---

## 3. Math.floor()

Rounds a number **downward**.

```javascript
let floor = Math.floor(4.8);
console.log(floor); // 4
```

---

## 4. Math.random()

Generates a **random number between 0 and 1**.

```javascript
let random = Math.random();
console.log(random);
```

---

## 5. Math.max() and Math.min()

These functions return the **maximum or minimum** value.

```javascript
let max = Math.max(1, 2, 3, 4);
let min = Math.min(1, 2, 3, 4);

console.log(max); // 4
console.log(min); // 1
```

---

## 6. Math.sqrt()

Returns the **square root** of a number.

```javascript
let sqrt = Math.sqrt(16);
console.log(sqrt); // 4
```

---

## 7. Math.pow()

Raises a number to a specified power.

```javascript
let pow = Math.pow(2, 3);
console.log(pow); // 8
```

---

# 3.3 Parsing Strings to Numbers

Sometimes numbers are stored as **strings**. JavaScript provides functions to convert strings into numbers.

---

## parseInt()

Converts a string into an **integer**.

```javascript
let int = parseInt('123');

console.log(int); // 123
```

---

## parseFloat()

Converts a string into a **floating-point number**.

```javascript
let float = parseFloat('3.14');

console.log(float); // 3.14
```

---

## Number()

Converts a value into a number.

```javascript
let num = Number('42');

console.log(num); // 42
```

---

# Value Checking Functions

## isNaN()

Checks if a value is **Not a Number**.

```javascript
let isNotNumber = isNaN('hello');

console.log(isNotNumber); // true
```

---

## isFinite()

Checks if a value is a **finite number**.

```javascript
let finite = isFinite(10);
let notFinite = isFinite(Infinity);

console.log(finite); // true
console.log(notFinite); // false
```

---

# 3.4 Number Features in JavaScript

## 1. Number Limits

JavaScript numbers are stored using **double-precision floating-point format**, which has certain limits.

Important constants include:

```javascript
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
```

Other special numeric values include:

* `Infinity`
* `-Infinity`
* `NaN` (Not a Number)

---

## 2. Number Precision

Floating-point arithmetic can sometimes produce unexpected results.

Example:

```javascript
let sum = 0.1 + 0.2;

console.log(sum);
```

Output:

```
0.30000000000000004
```

This occurs because decimal numbers cannot always be represented exactly in binary format.

This issue exists in **many programming languages**, not just JavaScript.

---

## 3. Safe Integers

JavaScript defines a range of **safe integers** that can be represented accurately.

```javascript
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
```

Values:

* Maximum safe integer = `2^53 - 1`
* Minimum safe integer = `-(2^53 - 1)`

Numbers beyond this range may lose precision.

---

# Exercises

# Exercise 1: Math Methods

Write a program that generates **two random numbers between 0 and 100**, rounds them to the nearest integer, and finds the maximum and minimum values.

### Solution

```javascript
let num1 = Math.round(Math.random() * 100);
let num2 = Math.round(Math.random() * 100);

let max = Math.max(num1, num2);
let min = Math.min(num1, num2);

console.log("Random number 1:", num1);
console.log("Random number 2:", num2);
console.log("Maximum:", max);
console.log("Minimum:", min);
```

Example Output:

```
Random number 1: 76
Random number 2: 45
Maximum: 76
Minimum: 45
```

---

# Exercise 2: String Conversion

Write a program that converts a string to a number using three different methods.

### Solution

```javascript
let str = "123.45";

let integer = parseInt(str);
let floating = parseFloat(str);
let number = Number(str);

console.log("Using parseInt:", integer);
console.log("Using parseFloat:", floating);
console.log("Using Number:", number);
```

Output:

```
Using parseInt: 123
Using parseFloat: 123.45
Using Number: 123.45
```

Explanation:

* `parseInt()` extracts only the integer part.
* `parseFloat()` keeps the decimal.
* `Number()` converts the entire string into a number.

---

# Conclusion

Numbers are a fundamental data type in JavaScript used for calculations and data processing. JavaScript provides powerful arithmetic operators, assignment operations, and built-in mathematical functions through the Math object. Developers can also convert strings into numbers using parsing functions such as `parseInt()`, `parseFloat()`, and `Number()`.

Although JavaScript numbers are flexible and powerful, developers must be aware of limitations such as floating-point precision and safe integer ranges. Understanding these concepts helps programmers write more reliable and accurate numerical computations in JavaScript applications.

---