
---

# 📘 6. Loops in JavaScript

Loops in JavaScript allow you to **execute a block of code repeatedly** as long as a specified condition is true. They are essential for automating repetitive tasks and working efficiently with data.

---

# 🔁 6.1 while Loop

The **while loop** runs a block of code **as long as a condition is true**.

## ✅ Syntax

```javascript
while (condition) {
  // code that runs while the condition is true
}
```

## ✅ Example

```javascript
let i = 0;
while (i < 5) {
  console.log(`Iteration number ${i}`);
  i++;
}
```

## ✅ Output

```
Iteration number 0
Iteration number 1
Iteration number 2
Iteration number 3
Iteration number 4
```

## 🔍 Explanation

* The loop runs while `i < 5`
* After each iteration, `i` is increased by 1
* When `i` becomes 5, the loop stops

---

# 🔁 6.2 Executing a Block of Code n Times

A **while loop** can also be used when you want to repeat code a fixed number of times.

## ✅ General Structure

```javascript
initialization
while (condition) {
  block of code
  step
}
```

## ✅ Example

```javascript
let i = 0;
while (i < 5) {
  console.log(`Iteration number ${i}`);
  i++;
}
```

---

# 🔁 6.3 for Loop

The **for loop** is the most commonly used loop when the **number of iterations is known**.

## ✅ Syntax

```javascript
for (initialization; condition; step) {
  // code to be executed
}
```

## ✅ Example

```javascript
for (let i = 0; i < 5; i++) {
  console.log(`Iteration number ${i}`);
}
```

## ✅ Output

```
Iteration number 0
Iteration number 1
Iteration number 2
Iteration number 3
Iteration number 4
```

## 🔍 Explanation

* `let i = 0` → initializes counter
* `i < 5` → loop continues while true
* `i++` → increments after each iteration

---

# 🔁 6.4 do...while Loop

The **do...while loop** executes code **at least once**, even if the condition is false.

## ✅ Syntax

```javascript
do {
  // code runs at least once
} while (condition);
```

## ✅ Example

```javascript
let i = 0;
do {
  console.log(`Iteration number ${i}`);
  i++;
} while (i < 5);
```

## 🔍 Key Point

* Code inside `do` runs **before checking the condition**

## ✅ Special Case Example

```javascript
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 0);
```

## ✅ Output

```
0
```

✔ Even though the condition is false, the loop runs **once**

---

# ⚖️ 6.5 Comparing Loops

| Loop         | When to Use                        | Features                          |
| ------------ | ---------------------------------- | --------------------------------- |
| **for**      | When number of iterations is known | Compact, great for arrays         |
| **while**    | When iterations are unknown        | Condition checked first           |
| **do-while** | When code must run at least once   | Condition checked after execution |

---

# 📌 Practical Examples

## 🔹 1. Looping Through an Array

```javascript
let array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

## ✅ Output

```
1
2
3
4
5
```

---

## 🔹 2. Using while to Accumulate Values

```javascript
let n = 0;
let x = 0;

while (n < 3) {
  n++;
  x += n;
}

console.log(x);
```

## ✅ Output

```
6
```

✔ Calculation: `1 + 2 + 3 = 6`

---

## 🔹 3. do...while Executes At Least Once

```javascript
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 0);
```

## ✅ Output

```
0
```

---

# 🧠 Exercises with Solutions

---

## 📝 Exercise 1: Sum of Numbers up to n

### ✅ Problem

Write a program that:

* Takes a number `n`
* Uses a **while loop**
* Finds the sum from `1` to `n`

---

### ✅ Solution

```javascript
let n = 5; // example input
let sum = 0;
let i = 1;

while (i <= n) {
  sum += i;
  i++;
}

console.log("Sum:", sum);
```

### ✅ Output

```
Sum: 15
```

✔ Explanation:

```
1 + 2 + 3 + 4 + 5 = 15
```

---

## 📝 Exercise 2: Even Numbers Up to 20

### ✅ Problem

Write a program that:

* Uses a **for loop**
* Prints all even numbers from 1 to 20

---

### ✅ Solution

```javascript
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

### ✅ Output

```
2
4
6
8
10
12
14
16
18
20
```

✔ Explanation:

* `i % 2 === 0` checks if number is even

---

# 🎯 Key Takeaways

* Loops help **automate repetitive tasks**
* **while** → best when condition-based
* **for** → best when count is known
* **do...while** → runs **at least once**
* Always ensure loops have a **termination condition** to avoid infinite loops

---

