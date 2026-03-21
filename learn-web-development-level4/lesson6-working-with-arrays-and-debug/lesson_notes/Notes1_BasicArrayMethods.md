
---

# **7. Core Array Methods**

JavaScript arrays come with powerful built-in methods that make **data manipulation easier and more efficient**.

In this section, we focus on four essential methods:

* `splice()` → modify array (add/remove/replace)
* `slice()` → copy part of an array
* `concat()` → merge arrays
* `indexOf()` → search for elements

---

# **7.1 The `splice()` Method**

The `splice()` method is used to **modify an array in place** by:

* Removing elements
* Adding elements
* Replacing elements

---

## **Syntax**

```javascript
array.splice(start, deleteCount, item1, item2, ...);
```

### **Parameters**

* `start` → index to begin changes
* `deleteCount` → number of elements to remove
* `item1, item2...` → elements to add

---

## **Example 1: Removing Elements**

```javascript id="c1a8sp"
let fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];

let removed = fruits.splice(2, 2);

console.log(fruits);  // ['apple', 'banana', 'fig']
console.log(removed); // ['cherry', 'date']
```

---

## **Example 2: Adding Elements**

```javascript id="9t3kzl"
let fruits = ['apple', 'banana', 'cherry'];

fruits.splice(2, 0, 'date', 'fig');

console.log(fruits);
// ['apple', 'banana', 'date', 'fig', 'cherry']
```

---

## **Example 3: Replacing Elements**

```javascript id="x7j5lq"
let fruits = ['apple', 'banana', 'cherry'];

fruits.splice(1, 1, 'date', 'fig');

console.log(fruits);
// ['apple', 'date', 'fig', 'cherry']
```

---

## **Key Insight**

* `splice()` **modifies the original array**
* Returns **removed elements**

---

# **7.2 The `slice()` Method**

The `slice()` method creates a **new array** by copying part of an existing array.

---

## **Syntax**

```javascript
array.slice(begin, end);
```

### **Parameters**

* `begin` → start index
* `end` → end index (not included)

---

## **Example 1: Copy Part of Array**

```javascript id="g8f4xp"
let fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];

let sliced = fruits.slice(1, 3);

console.log(sliced);
// ['banana', 'cherry']
```

---

## **Example 2: From Beginning**

```javascript id="z6m9pq"
let fruits = ['apple', 'banana', 'cherry'];

let sliced = fruits.slice(0, 2);

console.log(sliced);
// ['apple', 'banana']
```

---

## **Example 3: To End**

```javascript id="p3u8dt"
let fruits = ['apple', 'banana', 'cherry'];

let sliced = fruits.slice(1);

console.log(sliced);
// ['banana', 'cherry']
```

---

## **Key Insight**

* `slice()` **does NOT modify original array**
* End index is **excluded**

---

# **7.3 The `concat()` Method**

The `concat()` method merges arrays into a **new array**.

---

## **Syntax**

```javascript
array1.concat(array2, array3, ...);
```

---

## **Example 1: Merge Two Arrays**

```javascript id="h7v3xk"
let fruits1 = ['apple', 'banana'];
let fruits2 = ['cherry', 'date'];

let combined = fruits1.concat(fruits2);

console.log(combined);
// ['apple', 'banana', 'cherry', 'date']
```

---

## **Example 2: Merge Multiple Arrays**

```javascript id="y5l2rw"
let fruits1 = ['apple', 'banana'];
let fruits2 = ['cherry', 'date'];
let fruits3 = ['fig', 'grape'];

let combined = fruits1.concat(fruits2, fruits3);

console.log(combined);
// ['apple', 'banana', 'cherry', 'date', 'fig', 'grape']
```

---

## **Example 3: Add Elements**

```javascript id="r4c9ps"
let fruits = ['apple', 'banana'];

let moreFruits = fruits.concat('cherry', 'date');

console.log(moreFruits);
// ['apple', 'banana', 'cherry', 'date']
```

---

## **Key Insight**

* Returns a **new array**
* Does **not modify original array**

---

# **7.4 The `indexOf()` Method**

The `indexOf()` method finds the **first occurrence** of an element.

---

## **Syntax**

```javascript
array.indexOf(searchElement, fromIndex);
```

### **Parameters**

* `searchElement` → element to find
* `fromIndex` → starting index

---

## **Example 1: Element Found**

```javascript id="z1n7qw"
let fruits = ['apple', 'banana', 'cherry'];

let index = fruits.indexOf('banana');

console.log(index); // 1
```

---

## **Example 2: Element Not Found**

```javascript id="v9f2oe"
let fruits = ['apple', 'banana', 'cherry'];

let index = fruits.indexOf('date');

console.log(index); // -1
```

---

## **Example 3: Start Searching from Index**

```javascript id="n6t8sl"
let fruits = ['apple', 'banana', 'cherry', 'banana'];

let index = fruits.indexOf('banana', 2);

console.log(index); // 3
```

---

## **Key Insight**

* Returns index if found
* Returns `-1` if not found

---

# **8. Exercises with Solutions**

---

## **Exercise 1: Copying Part of an Array**

### **Problem**

Create a new array with elements from index **1 to 3 (inclusive)**.

---

### **Solution**

```javascript id="d3h7ak"
let fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];

// slice end index is exclusive → use 4
let newFruits = fruits.slice(1, 4);

console.log(newFruits);
// ['banana', 'cherry', 'date']
```

---

### **Explanation**

* Start at index `1`
* End at index `4` (not included)

---

## **Exercise 2: Index Search**

### **Problem**

Find:

* First index of `20`
* Second index of `20` (starting from index 3)

---

### **Solution**

```javascript id="k8s2xp"
let numbers = [10, 20, 30, 40, 50, 20];

// First occurrence
let firstIndex = numbers.indexOf(20);

// Second occurrence (start from index 3)
let secondIndex = numbers.indexOf(20, 3);

console.log(firstIndex);  // 1
console.log(secondIndex); // 5
```

---

### **Explanation**

* First search starts at beginning
* Second search starts at index `3`

---

# **9. Summary**

### ✔ Key Takeaways

| Method      | Modifies Original? | Purpose            |
| ----------- | ------------------ |--------------------|
| `splice()`  | ✅ Yes             | Add/remove/replace |
| `slice()`   | ❌ No              | Copy part of array |
| `concat()`  | ❌ No              | Merge arrays       |
| `indexOf()` | ❌ No              | Find element index |

---

### 🧠 Final Insight

* Use `splice()` when you want to **change the original array**
* Use `slice()` when you want a **safe copy**
* Use `concat()` for **combining arrays**
* Use `indexOf()` for **searching**

---

