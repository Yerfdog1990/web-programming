
---

# 🔁 9. for...of and for...in Loops in JavaScript

Both loops are used for **iteration**, but they serve **different purposes**.

```text
for...of → values
for...in → keys (properties)
```

---

# 🔹 9.1 for...of Loop

## 🧠 Definition

The `for...of` loop is used to iterate over **iterable objects** such as:

* Arrays
* Strings
* Sets
* Maps

---

## 📌 Syntax

```javascript
for (let variable of iterable) {
  // code
}
```

---

## ✅ Example

```javascript
let array = [1, 2, 3, 4, 5];

for (let value of array) {
  console.log(value);
}
```

✔ Output:

```text
1 2 3 4 5
```

---

## 🍎 Using with Arrays

```javascript
let fruits = ['apple', 'banana', 'cherry'];

for (let fruit of fruits) {
  console.log(fruit);
}
```

✔ Output:

```text
apple
banana
cherry
```

👉 You directly get **values**, not indices.

---

## 🔤 Using with Strings

```javascript
let str = 'Hello';

for (let char of str) {
  console.log(char);
}
```

✔ Output:

```text
H e l l o
```

👉 Iterates character by character.

---

# 🔹 9.2 for...in Loop

## 🧠 Definition

The `for...in` loop is used to iterate over **object properties (keys)**.

---

## 📌 Syntax

```javascript
for (let key in object) {
  // code
}
```

---

## ✅ Example

```javascript
let obj = {a: 1, b: 2, c: 3};

for (let key in obj) {
  console.log(key + ': ' + obj[key]);
}
```

✔ Output:

```text
a: 1
b: 2
c: 3
```

---

## 👤 Using with Objects

```javascript
let user = {
  name: 'John',
  age: 30,
  isAdmin: true
};

for (let key in user) {
  console.log(key + ': ' + user[key]);
}
```

✔ Output:

```text
name: John
age: 30
isAdmin: true
```

👉 You get:

* `key` → property name
* `user[key]` → value

---

## ⚠️ Using with Arrays (Not Recommended)

```javascript
let array = ['apple', 'banana', 'cherry'];

for (let index in array) {
  console.log(index + ': ' + array[index]);
}
```

✔ Output:

```text
0: apple
1: banana
2: cherry
```

⚠️ Problem:

* Iterates over **indices (keys)**
* Can include **extra properties**
* Slower than `for...of`

👉 Use `for...of` for arrays instead ✅

---

# 🔍 9.3 Comparison: for...of vs for...in

| Feature       | for...of ✅      | for...in ⚠️       |
| ------------- | --------------- | ----------------- |
| Iterates over | Values          | Keys (properties) |
| Best for      | Arrays, strings | Objects           |
| Array usage   | ✔ Recommended   | ❌ Not recommended |
| Output        | Element value   | Index or key      |

---

# 🧠 Key Difference (IMPORTANT)

```javascript
for (let value of array) → value
for (let index in array) → index
```

---

# 🧪 Exercise 1: Array Iteration

## ❓ Task

* Create array [1–10]
* Use `for...of`
* Print each number
* Calculate total sum

---

## ✅ Solution

```javascript
let numbers = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;

for (let num of numbers) {
  console.log(num);
  sum += num;
}

console.log("Sum:", sum);
```

✔ Output:

```text
1 2 3 4 5 6 7 8 9 10
Sum: 55
```

---

# 🧪 Exercise 2: Iterating Over Properties

## ❓ Task

* Create object with:

    * name
    * age
    * profession
* Use `for...in`
* Print: `"key: value"`

---

## ✅ Solution

```javascript
let user = {
  name: "Alice",
  age: 25,
  profession: "Engineer"
};

for (let key in user) {
  console.log(key + ": " + user[key]);
}
```

✔ Output:

```text
name: Alice
age: 25
profession: Engineer
```

---

# ⚠️ Common Mistakes

---

## ❌ Mistake 1: Using for...in for arrays

```javascript
for (let i in arr) { } // ❌ avoid
```

✔ Use:

```javascript
for (let value of arr) { } // ✅
```

---

## ❌ Mistake 2: Forgetting bracket notation

```javascript
user.key // ❌ wrong (looks for "key")
user[key] // ✅ correct
```

---

# 🔥 Interview Tips

---

## 💡 1. When to Use What

```text
Arrays → for...of
Objects → for...in
```

---

## 💡 2. Get both index + value (advanced)

```javascript
let arr = ['a', 'b', 'c'];

arr.entries(); // used with for...of
```

---

## 💡 3. Cleaner code than traditional loops

```javascript
// Old way
for (let i = 0; i < arr.length; i++) { }

// Modern way
for (let val of arr) { }
```

---

# 🚀 Mini Challenge

What will this print?

```javascript
let str = "JS";

for (let i in str) {
  console.log(i);
}
```

👉 Answer:

```text
0
1
```

✔ Because `for...in` gives **indices (keys)**

---

# 🎯 Final Takeaway

```text
for...of → values (arrays, strings)
for...in → keys (objects)
```

---

