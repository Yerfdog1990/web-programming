
---

# 🔁 Control Flow in Loops (JavaScript)

Control flow statements like **`break`** and **`continue`** allow you to control how loops behave. They help you:

* Exit a loop early
* Skip specific iterations
* Write cleaner and more efficient logic

---

# 🔹 10.1 The `break` Statement

## ✅ Definition

The **`break`** statement is used to **immediately terminate a loop**.

Once `break` runs:

➡️ The loop stops completely

➡️ Execution continues after the loop

---

## 🧠 Syntax

```javascript
break;
```

---

## 📌 Example: Exiting a `for` Loop

```javascript
for (let i = 0; i < 10; i++) {

  if (i === 5) {
    break; // stop the loop when i = 5
  }

  console.log(i);
}
```

### ✅ Output:

```
0
1
2
3
4
```

👉 The loop stops **before printing 5**

---

## 💡 When to Use `break`

* Stop searching when a value is found
* Exit loops early to improve performance
* Avoid unnecessary iterations

---

# 🔹 10.2 The `continue` Statement

## ✅ Definition

The **`continue`** statement is used to **skip the current iteration** and move to the next one.

👉 Unlike `break`, it **does NOT stop the loop**

---

## 🧠 Syntax

```javascript
continue;
```

---

## 📌 Example: Skipping Even Numbers (for loop)

```javascript
for (let i = 0; i < 10; i++) {

  if (i % 2 === 0) {
    continue; // skip even numbers
  }

  console.log(i);
}
```

### ✅ Output:

```
1
3
5
7
9
```

---

## 📌 Example: `continue` in a `while` Loop

```javascript
let i = 0;

while (i < 10) {
  i++;

  if (i % 2 === 0) {
    continue; // skip even numbers
  }

  console.log(i);
}
```

### ✅ Output:

```
1
3
5
7
9
```

---

## 💡 When to Use `continue`

* Skip unwanted values
* Filter results inside loops
* Avoid deeply nested `if` statements

---

# 🔹 10.3 `break` vs `continue`

| Statement  | Description               | Behavior                |
| ---------- | ------------------------- | ----------------------- |
| `break`    | Stops the loop completely | Exits loop immediately  |
| `continue` | Skips current iteration   | Moves to next iteration |

---

## 🧠 Quick Comparison Example

```javascript
for (let i = 1; i <= 5; i++) {

  if (i === 3) break;
  console.log(i);
}
// Output: 1 2
```

```javascript
for (let i = 1; i <= 5; i++) {

  if (i === 3) continue;
  console.log(i);
}
// Output: 1 2 4 5
```

---

# 🔹 10.4 Using `break` and `continue` in Nested Loops

## 🔁 Nested Loops

A loop inside another loop.

---

## 📌 Example: `break` in Nested Loop

```javascript
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {

    if (i === 1 && j === 1) {
      break; // exits INNER loop only
    }

    console.log(`i = ${i}, j = ${j}`);
  }
}
```

### ✅ Output:

```
i = 0, j = 0
i = 0, j = 1
i = 0, j = 2
i = 1, j = 0
i = 2, j = 0
i = 2, j = 1
i = 2, j = 2
```

👉 Only the **inner loop stops**, outer loop continues

---

## 📌 Example: `continue` in Nested Loop

```javascript
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {

    if (i === 1 && j === 1) {
      continue; // skip only this iteration
    }

    console.log(`i = ${i}, j = ${j}`);
  }
}
```

### ✅ Output:

```
i = 0, j = 0
i = 0, j = 1
i = 0, j = 2
i = 1, j = 0
i = 1, j = 2
i = 2, j = 0
i = 2, j = 1
i = 2, j = 2
```

---

# 🧪 Exercises with Solutions

---

## ✅ Exercise 1: Breaking at 7

### 🔹 Problem

Loop from **0 to 10**, stop when number is **7**

---

### 💻 Solution

```javascript
for (let i = 0; i <= 10; i++) {

  if (i === 7) {
    break;
  }

  console.log(i);
}
```

### ✅ Output:

```
0
1
2
3
4
5
6
```

---

## ✅ Exercise 2: Skipping Even Numbers

### 🔹 Problem

Loop from **1 to 10**, print **only odd numbers**

---

### 💻 Solution

```javascript
for (let i = 1; i <= 10; i++) {

  if (i % 2 === 0) {
    continue;
  }

  console.log(i);
}
```

### ✅ Output:

```
1
3
5
7
9
```

---

# 🧠 Key Takeaways

✔ `break` → stops the loop completely

✔ `continue` → skips current iteration

✔ Both improve control and efficiency

✔ Useful in **searching, filtering, and nested loops**

---

