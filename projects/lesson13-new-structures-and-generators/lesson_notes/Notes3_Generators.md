
---

# 📘 Generators in JavaScript

---

# 🔹 2.1 Generator Syntax

## ✅ What are Generators?

Generators are **special functions** that allow you to:

* Pause execution
* Resume execution later
* Produce values one at a time

👉 They are very useful for:

* Iterators
* Lazy evaluation
* Asynchronous programming
* Infinite sequences

---

## ✅ Declaring a Generator

Generators are defined using:

```javascript
function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}
```

### 🔍 Key Keywords

* `function*` → declares a generator
* `yield` → pauses execution and returns a value

---

## ✅ Creating a Generator Object

Calling a generator **does NOT execute it immediately**.

```javascript
const gen = generatorFunction();
```

👉 Instead, it returns a **generator object**.

---

## 🔍 Important Concept

* Normal function → runs immediately
* Generator → runs **only when `.next()` is called**

---

# 🔹 2.2 Using Generators

---

## ✅ The `next()` Method

The `.next()` method:

* Starts or resumes execution
* Runs until the next `yield`
* Returns:

```javascript
{
  value: <yielded value>,
  done: <boolean>
}
```

---

## 📌 Example: Using `next()`

```javascript
function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generatorFunction();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
```

---

## ✅ Output

```javascript
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: undefined, done: true }
```

---

## 🔍 Execution Flow

1. First `next()` → runs until `yield 1`
2. Second → resumes → `yield 2`
3. Third → resumes → `yield 3`
4. Fourth → finished

---

# 🔹 Iterating Over a Generator

Generators are **iterable**, so they work with `for...of`.

---

## 📌 Example

```javascript
function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generatorFunction();

for (const value of gen) {
  console.log(value);
}
```

---

## ✅ Output

```javascript
1
2
3
```

---

## 🔍 Important Note

* `for...of` **stops automatically** when `done: true`
* It ignores the final returned value

---

# 🔹 Returning Values in Generators

Generators can use `return`.

---

## 📌 Example

```javascript
function* generatorFunction() {
  yield 1;
  yield 2;
  return 3;
  yield 4; // never runs
}

const gen = generatorFunction();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
```

---

## ✅ Output

```javascript
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: true }
{ value: undefined, done: true }
```

---

## 🔍 Key Insight

* `return` → ends generator immediately
* Any `yield` after `return` is ignored

---

# 🔹 2.3 Advanced Generator Use Cases

---

## ✅ Passing Values into Generators

Generators support **two-way communication**.

---

## 📌 Example

```javascript
function* generatorFunction() {
  const value1 = yield 1;
  const value2 = yield value1 + 2;
  yield value2 + 3;
}

const gen = generatorFunction();

console.log(gen.next());
console.log(gen.next(10));
console.log(gen.next(20));
console.log(gen.next());
```

---

## ✅ Output

```javascript
{ value: 1, done: false }
{ value: 12, done: false }
{ value: 23, done: false }
{ value: undefined, done: true }
```

---

## 🔍 How It Works

* First `next()` → starts generator (no input yet)
* Second `next(10)` → `value1 = 10`
* Third `next(20)` → `value2 = 20`

👉 This is **unique to generators**

---

# 🔹 Error Handling in Generators

Generators can handle errors using `try...catch`.

---

## 📌 Example

```javascript
function* generatorFunction() {
  try {
    yield 1;
    yield 2;
  } catch (error) {
    console.log('Error caught:', error.message);
  }
}

const gen = generatorFunction();

console.log(gen.next());
console.log(gen.throw(new Error('Something went wrong')));
```

---

## ✅ Output

```javascript
{ value: 1, done: false }
Error caught: Something went wrong
{ value: undefined, done: true }
```

---

## 🔍 Key Idea

* `.throw()` injects an error into the generator
* It is caught inside `try...catch`

---

# 🔹 Infinite Generators

Generators can create infinite sequences.

---

## 📌 Example

```javascript
function* infiniteSequence() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const gen = infiniteSequence();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
```

---

## ✅ Output

```javascript
0
1
2
```

---

## ⚠️ Warning

* Infinite generators never end
* Must control usage carefully

---

# 🔹 2.4 Practical Usage Examples

---

## 📌 Example 1: Iterating Over Object

```javascript
function* objectEntries(obj) {
  const keys = Object.keys(obj);

  for (const key of keys) {
    yield [key, obj[key]];
  }
}

const obj = { a: 1, b: 2, c: 3 };

for (const [key, value] of objectEntries(obj)) {
  console.log(`${key}: ${value}`);
}
```

---

## ✅ Output

```javascript
a: 1
b: 2
c: 3
```

---

## 📌 Example 2: Generator as Iterable

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

---

## ✅ Output

```javascript
1
2
3
```

---

# 🔹 Exercises with Solutions

---

# 🧪 Exercise 1: Number Generator

---

## 📝 Problem

Create:

```javascript
sequenceGenerator(start, end)
```

---

## ✅ Solution

```javascript
function* sequenceGenerator(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

// Test
const gen = sequenceGenerator(1, 5);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
```

---

## ✅ Output

```javascript
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 4, done: false }
{ value: 5, done: false }
{ done: true }
```

---

# 🧪 Exercise 2: Dynamic Generator

---

## 📝 Problem

Create a generator that updates its value dynamically.

---

## ✅ Solution

```javascript
function* dynamicUpdateGenerator(initialValue) {
  let current = initialValue;

  while (true) {
    const increment = yield current;
    current += increment;
  }
}

// Test
const gen = dynamicUpdateGenerator(10);

console.log(gen.next());        // start
console.log(gen.next(5));       // +5
console.log(gen.next(10));      // +10
console.log(gen.next(-3));      // -3
```

---

## ✅ Output

```javascript
{ value: 10, done: false }
{ value: 15, done: false }
{ value: 25, done: false }
{ value: 22, done: false }
```

---

## 🔍 Key Insight

* Generator maintains internal state (`current`)
* Values are updated dynamically via `.next(value)`

---

# 🔹 Key Takeaways

---

✔ Generators pause and resume execution
✔ `yield` controls flow
✔ `.next()` drives execution
✔ Generators are both:

* Iterators
* Iterables

✔ Support:

* Two-way communication
* Error handling
* Infinite sequences

---

# 🚀 Final Insight

👉 A generator is:

> **A stateful function that can pause, resume, and communicate during execution**

---

