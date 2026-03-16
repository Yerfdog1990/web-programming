# Comparison Operators in JavaScript

## Introduction

**Comparison operators** in JavaScript are used to **compare two values**.
They evaluate the relationship between the values and return a **Boolean result**:

* `true`
* `false`

These operators are commonly used inside **conditional statements** such as `if`, `if...else`, loops, and other logical expressions.

Example:

```javascript
let a = 10;
let b = 5;

console.log(a > b);
```

Output:

```
true
```

Because `10` is greater than `5`.

---

# Types of Comparison Operators

| Operator | Name                  | Description                                        | Example     | Result |
| -------- | --------------------- | -------------------------------------------------- | ----------- | ------ |
| `==`     | Equal to              | Checks if values are equal (after type conversion) | `5 == "5"`  | true   |
| `===`    | Strict equal          | Checks value **and type**                          | `5 === "5"` | false  |
| `!=`     | Not equal             | Checks if values are not equal                     | `5 != 3`    | true   |
| `!==`    | Strict not equal      | Checks value and type difference                   | `5 !== "5"` | true   |
| `>`      | Greater than          | Checks if left value is greater                    | `7 > 4`     | true   |
| `<`      | Less than             | Checks if left value is smaller                    | `3 < 8`     | true   |
| `>=`     | Greater than or equal | Checks if greater or equal                         | `5 >= 5`    | true   |
| `<=`     | Less than or equal    | Checks if smaller or equal                         | `4 <= 6`    | true   |

---

# 1. Equal Operator `==`

The **equal operator (`==`)** compares two values but allows **type conversion**.

Example:

```javascript
console.log(5 == "5");
```

Output

```
true
```

Explanation:

JavaScript converts `"5"` into a number before comparing.

```
5 == 5
```

Result: `true`

---

# 2. Strict Equal Operator `===`

The **strict equal operator (`===`)** compares both:

* value
* data type

Example:

```javascript
console.log(5 === "5");
```

Output

```
false
```

Explanation:

```
number 5 !== string "5"
```

So the result is **false**.

---

# 3. Not Equal Operator `!=`

This operator checks whether two values are **not equal**.

Example:

```javascript
console.log(10 != 5);
```

Output

```
true
```

Because `10` is not equal to `5`.

---

# 4. Strict Not Equal Operator `!==`

This operator checks if values or types are **different**.

Example:

```javascript
console.log(5 !== "5");
```

Output

```
true
```

Because the values have **different types**.

---

# 5. Greater Than `>`

Checks whether the left value is greater than the right value.

Example:

```javascript
console.log(10 > 7);
```

Output

```
true
```

---

# 6. Less Than `<`

Checks whether the left value is smaller than the right value.

Example:

```javascript
console.log(3 < 9);
```

Output

```
true
```

---

# 7. Greater Than or Equal `>=`

Checks whether the value is **greater than or equal to** another value.

Example:

```javascript
console.log(10 >= 10);
```

Output

```
true
```

---

# 8. Less Than or Equal `<=`

Checks whether the value is **less than or equal to** another value.

Example:

```javascript
console.log(4 <= 6);
```

Output

```
true
```

---

# Example Using Comparison Operators in `if`

```javascript
let age = 20;

if (age >= 18) {
  console.log("You can vote.");
}
```

Output

```
You can vote.
```

Because `20 >= 18` is **true**.

---

# Important Difference: `==` vs `===`

Example:

```javascript
console.log(0 == false);
console.log(0 === false);
```

Output

```
true
false
```

Explanation:

`==` converts values before comparing.

```
0 == false → true
```

But `===` compares both **value and type**.

```
number !== boolean
```

So the result is **false**.

✅ **Best Practice**

Most developers prefer using:

```
===  and  !==
```

because they avoid unexpected type conversions.

---

# Exercises with Solutions

## Exercise 1

Check if two numbers are equal using the strict equality operator.

### Solution

```javascript
let a = 10;
let b = 10;

console.log(a === b);
```

Output

```
true
```

---

# Exercise 2

Check whether a number is greater than another number.

### Solution

```javascript
let x = 15;
let y = 8;

console.log(x > y);
```

Output

```
true
```

---

# Exercise 3

Write a program that checks whether a user is allowed to enter a website. Access is allowed only if the user is **18 or older**.

### Solution

```javascript
let age = 16;

if (age >= 18) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}
```

Output

```
Access denied
```

---

## JavaScript Comparison Confusion Table (`null`, `undefined`, `0`, `false`, `""`)

JavaScript has **type coercion**, which means values can be **automatically converted to another type** during comparison. Because of this, some comparisons produce results that confuse many developers.

Understanding these cases is very helpful for **debugging and technical interviews**.

---

# 1. Common Confusing Comparisons

| Expression           | Result | Explanation                  |
| -------------------- | ------ | ---------------------------- |
| `0 == false`         | true   | `false` converts to `0`      |
| `"" == false`        | true   | empty string converts to `0` |
| `"0" == false`       | true   | `"0"` converts to number `0` |
| `null == undefined`  | true   | special rule in JavaScript   |
| `null === undefined` | false  | different types              |
| `0 === false`        | false  | number vs boolean            |
| `"" === false`       | false  | string vs boolean            |

---

# 2. Example Demonstration

```javascript
console.log(0 == false);
console.log("" == false);
console.log("0" == false);
console.log(null == undefined);
console.log(null === undefined);
```

Output:

```
true
true
true
true
false
```

---

# 3. Why This Happens (Type Conversion)

When using `==`, JavaScript **automatically converts values** before comparing.

Example:

```javascript
console.log(0 == false);
```

Internally JavaScript converts it to:

```
0 == 0
```

Result:

```
true
```

---

# 4. Comparison with `===`

The **strict equality operator (`===`)** does **not convert types**.

Example:

```javascript
console.log(0 === false);
```

Output:

```
false
```

Because:

```
number !== boolean
```

---

# 5. `null` and `undefined` Special Case

These two values behave differently from others.

Example:

```javascript
console.log(null == undefined);
console.log(null === undefined);
```

Output:

```
true
false
```

Explanation:

* `null == undefined` → JavaScript treats them as equal.
* `null === undefined` → strict comparison checks type.

```
null type → object
undefined type → undefined
```

---

# 6. Empty String Behavior

Example:

```javascript
console.log("" == 0);
console.log("" == false);
```

Output:

```
true
true
```

Because an empty string converts to **0**.

```
"" → 0
false → 0
```

So:

```
0 == 0
```

---

# 7. Visual Type Conversion Flow

When `==` is used:

```
Boolean → Number
String → Number
null ↔ undefined
```

Example:

```
false → 0
"" → 0
"5" → 5
```

---

# 8. Real Bug Example

Many beginners accidentally create bugs like this:

```javascript
let value = "";

if (value == false) {
  console.log("This runs!");
}
```

Output:

```
This runs!
```

Why?

```
"" → 0
false → 0
0 == 0 → true
```

---

# 9. Best Practice

Professional JavaScript developers usually avoid `==` and use **strict comparison**.

Recommended:

```javascript
===
!==
```

Example:

```javascript
if (value === false) {
   // safer comparison
}
```

This prevents unexpected type conversions.

---

# 10. Quick Developer Cheat Sheet

| Comparison           | Result |
| -------------------- | ------ |
| `false == 0`         | true   |
| `false === 0`        | false  |
| `"" == 0`            | true   |
| `"" === 0`           | false  |
| `null == undefined`  | true   |
| `null === undefined` | false  |

---

✅ **Rule most developers follow**

> Always use `===` and `!==` unless you specifically need type conversion.

---

# Summary

Comparison operators are essential for decision-making in JavaScript. They allow programs to compare values and return **true or false** results.

Key points:

* They compare two values.
* The result is always **Boolean**.
* `==` allows **type conversion**.
* `===` checks **value and type**.
* Developers usually prefer **strict comparison (`===`)**.

---

