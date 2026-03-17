
---

# 📦 8. Arrays in JavaScript

Arrays are used to store **multiple values in a single variable**.

👉 Key idea:

```text
Ordered collection of values (any type)
```

---

# 🧠 8.1 Creating Arrays

JavaScript arrays are:

* ✅ Dynamic (can grow/shrink)
* ✅ Can store mixed types
* ✅ Indexed (start from 0)

---

## 1️⃣ Using Array Literal (Most Common)

```javascript
let array1 = []; // empty array
let array2 = [1, 2, 3]; // numbers
let mixed = [1, "hello", true]; // mixed types
```

---

## 2️⃣ Using Array Constructor

```javascript
let array1 = new Array(); // empty
let array2 = new Array(3); // length 3 (empty slots)
let array3 = new Array(1, 2, 3); // with values
```

⚠️ Note:

```javascript
new Array(3)
```

creates:

```text
[empty × 3]
```

---

## 3️⃣ Filling Array After Creation

```javascript
let array = [];

array[0] = 'apple';
array[1] = 'banana';
array[2] = 'cherry';
```

---

# 🔍 8.2 Accessing Array Elements

## 📌 Index starts from 0

```javascript
let fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Cherry
```

---

## ✏️ Modifying Elements

```javascript
let fruits = ["Apple", "Banana", "Cherry"];

fruits[1] = "Blueberry";

console.log(fruits);
// ["Apple", "Blueberry", "Cherry"]
```

---

## 📏 length Property

```javascript
let fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits.length); // 3
```

---

# ➕➖ 8.3 Adding & Removing Elements

---

## 1️⃣ push() → Add to END

```javascript
let fruits = ['apple', 'banana'];

fruits.push('cherry');

console.log(fruits); // ['apple', 'banana', 'cherry']
console.log(fruits.length); // 3
```

---

## 2️⃣ pop() → Remove from END

```javascript
let fruits = ['apple', 'banana', 'cherry'];

let last = fruits.pop();

console.log(last);   // cherry
console.log(fruits); // ['apple', 'banana']
```

---

## 3️⃣ shift() → Remove from START

```javascript
let fruits = ['apple', 'banana', 'cherry'];

let first = fruits.shift();

console.log(first);  // apple
console.log(fruits); // ['banana', 'cherry']
```

---

## 4️⃣ unshift() → Add to START

```javascript
let fruits = ['banana', 'cherry'];

fruits.unshift('apple');

console.log(fruits); // ['apple', 'banana', 'cherry']
console.log(fruits.length); // 3
```

---

# 🔁 Summary Table

| Method    | Action            |
| --------- | ----------------- |
| push()    | Add to end        |
| pop()     | Remove from end   |
| unshift() | Add to beginning  |
| shift()   | Remove from start |

---

# 🧪 Exercise 1: Array Modification

## ❓ Task

* Create: `["Apple", "Banana", "Cherry"]`
* Change `"Banana"` → `"Blueberry"`
* Add `"Mango"`
* Print array + length

---

## ✅ Solution

```javascript
let fruits = ["Apple", "Banana", "Cherry"];

// Modify second element
fruits[1] = "Blueberry";

console.log(fruits);
// ["Apple", "Blueberry", "Cherry"]

// Add Mango
fruits.push("Mango");

console.log(fruits.length); // 4
```

---

# 🧪 Exercise 2: Adding Elements

## ❓ Task

* Start with empty array
* Add "start1", "start2" → beginning
* Add "end1", "end2" → end
* Print array + length

---

## ✅ Solution

```javascript
let arr = [];

// Add to beginning
arr.unshift("start1");
arr.unshift("start2");

// Add to end
arr.push("end1");
arr.push("end2");

console.log(arr);
// ["start2", "start1", "end1", "end2"]

console.log(arr.length); // 4
```

---

# ⚠️ Common Mistakes

---

## ❌ Mistake 1: Wrong index

```javascript
let arr = ["A", "B"];
console.log(arr[2]); // undefined
```

---

## ❌ Mistake 2: Confusing push vs unshift

```javascript
arr.push("end");    // end
arr.unshift("start"); // beginning
```

---

# 🔥 Interview Tips

---

## 💡 1. Arrays are Objects

```javascript
typeof [] // "object"
```

---

## 💡 2. Dynamic Size

```javascript
let arr = [1, 2];
arr[5] = 10;

console.log(arr);
// [1, 2, empty × 3, 10]
```

---

## 💡 3. Fast vs Slow Operations

| Operation     | Speed   |
| ------------- | ------- |
| push/pop      | ⚡ Fast  |
| shift/unshift | 🐢 Slow |

👉 Because shifting moves all elements

---

# 🚀 Mini Challenge

What is the output?

```javascript
let arr = [1, 2, 3];

arr.shift();
arr.push(4);
arr.unshift(0);

console.log(arr);
```

---

