
---

# 📘 Iterables and Iterators in JavaScript

## 🔹 1.1 Basic Concepts

### ✅ What are Iterables?

An **iterable** is any object that can be looped over using constructs like:

* `for...of`
* Spread operator `...`
* Destructuring

👉 For an object to be iterable, it **must implement**:

```javascript
[Symbol.iterator]()
```

This method returns an **iterator**.

---

### ✅ What are Iterators?

An **iterator** is an object that defines how to access elements one by one.

It must have a method:

```javascript
next()
```

The `next()` method returns:

```javascript
{
  value: <current value>,
  done: <true or false>
}
```

* `value` → current item
* `done` → whether iteration is finished

---

### 🔁 Relationship Between Iterables and Iterators

* Iterable → has `[Symbol.iterator]()`
* Iterator → has `next()`

👉 When you loop:

```javascript
for (let item of iterable)
```

JavaScript:

1. Calls `[Symbol.iterator]()`
2. Gets an iterator
3. Repeatedly calls `next()`

---

## 🔹 Built-in Iterables

JavaScript already provides many iterable objects:

* Arrays
* Strings
* `Set`
* `Map`

---

### 📌 Example 1: Iterating over an Array

```javascript
const array = [1, 2, 3, 4, 5];

for (const item of array) {
  console.log(item);
}
```

**Output:**

```
1 2 3 4 5
```

---

### 📌 Example 2: Iterating over a String

```javascript
const string = 'hello';

for (const char of string) {
  console.log(char);
}
```

**Output:**

```
h e l l o
```

---

## 🔹 1.2 Creating Your Own Iterators

### 📌 Example 1: Custom Iterator

```javascript
function createIterator(array) {
  let index = 0;

  return {
    next: function() {
      if (index < array.length) {
        return { value: array[index++], done: false };
      } else {
        return { done: true };
      }
    }
  };
}

const myIterator = createIterator([1, 2, 3]);

console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
```

**Output:**

```
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ done: true }
```

---

### 🔹 Creating Iterables

To make an object iterable:

* Add `[Symbol.iterator]()`
* Return an iterator

---

### 📌 Example 2: Iterable using Generator

```javascript
const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
};

for (const value of myIterable) {
  console.log(value);
}
```

**Output:**

```
1 2 3
```

👉 `yield` pauses execution and returns values one at a time.

---

## 🔹 1.3 Built-in Methods for Iterables

---

### 📌 1. Spread Operator (...)

Used to expand or copy iterables.

```javascript
const array = [1, 2, 3];
const newArray = [...array, 4, 5, 6];

console.log(newArray);
```

**Output:**

```
[1, 2, 3, 4, 5, 6]
```

---

### 📌 2. Destructuring

Extract values from iterables.

```javascript
const [first, second, third] = [1, 2, 3];

console.log(first);
console.log(second);
console.log(third);
```

**Output:**

```
1 2 3
```

---

### 📌 3. Array.from()

Converts iterables into arrays.

```javascript
const set = new Set([1, 2, 3, 4, 5]);
const array = Array.from(set);

console.log(array);
```

**Output:**

```
[1, 2, 3, 4, 5]
```

---

# 🧪 Exercises with Solutions

---

## ✅ Exercise 1: Number Range Iterator

### 📝 Problem

Create a function:

```javascript
createRangeIterator(start, end)
```

---

### ✅ Solution

```javascript
function createRangeIterator(start, end) {
  let current = start;

  return {
    next() {
      if (current <= end) {
        return { value: current++, done: false };
      } else {
        return { done: true };
      }
    }
  };
}

// Test
const rangeIterator = createRangeIterator(1, 5);

console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
```

---

### ✅ Output

```
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 4, done: false }
{ value: 5, done: false }
{ done: true }
```

---

## ✅ Exercise 2: Fibonacci Iterable

### 📝 Problem

Create an iterable object that generates Fibonacci numbers up to `n`.

---

### ✅ Solution

```javascript
const myIterable = {
  limit: 50,

  *[Symbol.iterator]() {
    let a = 0, b = 1;

    while (a <= this.limit) {
      yield a;
      [a, b] = [b, a + b];
    }
  }
};

// Test
for (const num of myIterable) {
  console.log(num);
}
```

---

### ✅ Output (for limit = 50)

```
0 1 1 2 3 5 8 13 21 34
```

---

# 🧠 Key Takeaways

✔ Iterables define **how objects are looped over**
✔ Iterators define **how values are produced step-by-step**
✔ `[Symbol.iterator]()` → returns iterator
✔ `next()` → controls iteration

---

# ⚡ Real-World Use Cases

* Data streaming
* Lazy evaluation (generate values only when needed)
* Custom data structures
* Infinite sequences (e.g., Fibonacci)

---

