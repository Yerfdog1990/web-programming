
---

# 🔁 7. Advanced Loops in JavaScript

---

# 🛑 7.1 `break` Statement

The `break` statement is used to **exit a loop immediately**, even if the condition is still true.

## ✅ Example

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
```

## ✅ Output

```
1
2
3
4
```

## 🔍 Explanation

* Loop stops completely when `i === 5`
* Code after `break` inside the loop is not executed

---

# ⏭️ 7.2 `continue` Statement

The `continue` statement **skips the current iteration** and moves to the next one.

## ✅ Example

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
```

## ✅ Output

```
1
2
4
5
```

## 🔍 Explanation

* When `i === 3`, the loop skips that iteration
* Loop continues with the next value

---

# 🔄 7.3 `for...of` Loop

Used to **iterate over values** in iterable objects like arrays, strings, etc.

## ✅ Syntax

```javascript
for (let variable of iterable) {
  // code
}
```

## ✅ Example (Array)

```javascript
let numbers = [10, 20, 30];

for (let num of numbers) {
  console.log(num);
}
```

## ✅ Output

```
10
20
30
```

## ✅ Example (String)

```javascript
let text = "JS";

for (let char of text) {
  console.log(char);
}
```

## ✅ Output

```
J
S
```

## 🔍 When to Use

* When you **don’t need index**
* Cleaner than traditional `for` loop

---

# 🔄 7.4 `for...in` Loop

Used to **iterate over object properties (keys)**.

## ✅ Syntax

```javascript
for (let key in object) {
  // code
}
```

## ✅ Example

```javascript
let person = {
  name: "John",
  age: 25
};

for (let key in person) {
  console.log(key, person[key]);
}
```

## ✅ Output

```
name John
age 25
```

## 🔍 Key Difference

| Loop     | Iterates Over |
| -------- | ------------- |
| for...of | values        |
| for...in | keys          |

---

# ⚠️ 7.5 Infinite Loops

An **infinite loop** happens when the condition never becomes false.

## ❌ Example (Bad)

```javascript
let i = 0;

while (i < 5) {
  console.log(i);
  // missing i++
}
```

👉 This runs forever because `i` never changes.

---

## ✅ Fixed Version

```javascript
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

---

# 🧠 7.6 Nested Loops

A loop inside another loop.

## ✅ Example

```javascript
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}
```

## ✅ Output

```
i=1, j=1
i=1, j=2
i=2, j=1
i=2, j=2
i=3, j=1
i=3, j=2
```

---

# 🧪 Exercises with Solutions

---

## 📝 Exercise 1: Stop at First Even Number

### Problem

Loop through numbers 1–10 and stop when you find the first even number.

### ✅ Solution

```javascript
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log("First even number:", i);
    break;
  }
}
```

---

## 📝 Exercise 2: Skip Multiples of 3

### Problem

Print numbers from 1–10 but skip multiples of 3.

### ✅ Solution

```javascript
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}
```

---

## 📝 Exercise 3: Sum Using `for...of`

### Problem

Find sum of numbers in an array.

### ✅ Solution

```javascript
let numbers = [1, 2, 3, 4];
let sum = 0;

for (let num of numbers) {
  sum += num;
}

console.log(sum);
```

### ✅ Output

```
10
```

---

## 📝 Exercise 4: Loop Through Object

### Problem

Print all keys and values of an object.

### ✅ Solution

```javascript
let student = {
  name: "Alice",
  grade: "A"
};

for (let key in student) {
  console.log(key + ": " + student[key]);
}
```

---

# 🎯 Final Key Takeaways

* `break` → exits loop completely
* `continue` → skips current iteration
* `for...of` → best for arrays/strings (values)
* `for...in` → best for objects (keys)
* Always avoid **infinite loops**
* Nested loops are powerful but can be costly

---

