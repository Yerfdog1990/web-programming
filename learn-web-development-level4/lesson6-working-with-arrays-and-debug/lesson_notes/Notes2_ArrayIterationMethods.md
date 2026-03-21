
---

# **8. Array Iteration Methods**

Array iteration methods allow you to **process and transform arrays efficiently** using functions. These methods are part of modern JavaScript and help write:

* Cleaner code
* More readable logic
* Functional-style programs

---

## **Common Iteration Methods**

* `forEach()` → iterate (no return)
* `map()` → transform array
* `filter()` → select elements
* `reduce()` → reduce to single value
* `some()` → check if at least one matches
* `every()` → check if all match
* `find()` → get first matching element
* `findIndex()` → get index of first match

---

# **8.1 The `forEach()` Method**

Executes a function **once for each element**.

---

## **Syntax**

```javascript id="a1w2ef"
array.forEach(function(element, index, array) {
  // code
});
```

---

## **Example**

```javascript id="n4k8pt"
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index) => {
  console.log(`Index: ${index}, Value: ${number}`);
});
```

---

## **Key Points**

* Does **not return a new array**
* Cannot be stopped (`break` doesn’t work)

---

# **8.2 The `map()` Method**

Creates a **new array** by transforming each element.

---

## **Syntax**

```javascript id="s2j9vk"
const newArray = array.map((element, index, array) => newValue);
```

---

## **Example**

```javascript id="l7w4mr"
const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map(number => number * number);

console.log(squared);
// [1, 4, 9, 16, 25]
```

---

## **Key Points**

* Returns a **new array**
* Does not modify original array

---

# **8.3 The `filter()` Method**

Creates a new array with elements that **meet a condition**.

---

## **Syntax**

```javascript id="k9r2t1"
const newArray = array.filter((element, index, array) => condition);
```

---

## **Example**

```javascript id="g5y1xp"
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);
// [2, 4]
```

---

## **Key Points**

* Returns filtered elements
* Does not modify original array

---

# **8.4 The `reduce()` Method**

Reduces an array to a **single value**.

---

## **Syntax**

```javascript id="v7k2ls"
const result = array.reduce((accumulator, current) => {
  return newValue;
}, initialValue);
```

---

## **Example**

```javascript id="d8w3rp"
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, number) => acc + number, 0);

console.log(sum);
// 15
```

---

## **Key Points**

* Uses an **accumulator**
* Can calculate totals, averages, etc.

---

# **8.5 The `some()` Method**

Checks if **at least one element** satisfies a condition.

---

## **Example**

```javascript id="j3m7tz"
const numbers = [1, 2, 3, 4, 5];

const hasEvenNumber = numbers.some(number => number % 2 === 0);

console.log(hasEvenNumber);
// true
```

---

## **Key Points**

* Returns `true` or `false`
* Stops when condition is met

---

# **8.6 The `every()` Method**

Checks if **all elements** satisfy a condition.

---

## **Example**

```javascript id="w8y1nc"
const numbers = [1, 2, 3, 4, 5];

const allPositive = numbers.every(number => number > 0);

console.log(allPositive);
// true
```

---

## **Key Points**

* Returns `true` only if all pass
* Stops early if one fails

---

# **8.7 The `find()` Method**

Returns the **first element** that matches a condition.

---

## **Example**

```javascript id="f4u8lo"
const numbers = [1, 2, 3, 4, 5];

const firstEven = numbers.find(number => number % 2 === 0);

console.log(firstEven);
// 2
```

---

## **Key Points**

* Returns element
* Returns `undefined` if not found

---

# **8.8 The `findIndex()` Method**

Returns the **index of the first matching element**.

---

## **Example**

```javascript id="x1m6qp"
const numbers = [1, 2, 3, 4, 5];

const firstEvenIndex = numbers.findIndex(number => number % 2 === 0);

console.log(firstEvenIndex);
// 1
```

---

## **Key Points**

* Returns index
* Returns `-1` if not found

---

# **9. Exercises with Solutions**

---

## **Exercise 1: Student Information**

### **Problem**

Print student names and ages using `forEach()`.

---

### **Solution**

```javascript id="m9d3rf"
const students = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 23 }
];

students.forEach(student => {
  console.log(`Name: ${student.name}, Age: ${student.age}`);
});
```

---

### **Explanation**

* Iterates through each student
* Accesses object properties
* Prints formatted string

---

## **Exercise 2: Number Transformation**

### **Problem**

Create a new array with squares using `map()`.

---

### **Solution**

```javascript id="q2p7xl"
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers);
// [1, 4, 9, 16, 25]
```

---

### **Explanation**

* `map()` transforms each element
* Returns a new array

---

# **10. Summary**

### ✔ Key Comparison

| Method        | Returns Value | Purpose                |
| ------------- | ------------- | ---------------------- |
| `forEach()`   | ❌ No          | Loop through elements  |
| `map()`       | ✅ Array       | Transform elements     |
| `filter()`    | ✅ Array       | Select elements        |
| `reduce()`    | ✅ Any         | Aggregate to one value |
| `some()`      | ✅ Boolean     | At least one matches   |
| `every()`     | ✅ Boolean     | All must match         |
| `find()`      | ✅ Element     | First match            |
| `findIndex()` | ✅ Index       | Index of first match   |

---

### 🧠 Final Insight

* Use `map()` when transforming data
* Use `filter()` when selecting data
* Use `reduce()` for calculations
* Use `some()` / `every()` for conditions
* Use `find()` when you need a single result

---

