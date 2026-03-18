
---

# 🧠 **4. Function Parameters — Deep Explanation**

---

# 🔑 **1. What Actually Happens When You Call a Function**

## Example

```javascript
function greet(name, age) {
  return `Hello, ${name}! You are ${age} years old.`;
}

greet('Alice', 30);
```

---

## 🔍 Step-by-Step (VERY IMPORTANT)

### **Step 1: Function Definition (Memory Phase)**

```javascript
function greet(name, age) { ... }
```

👉 JavaScript stores:

```
greet → function(name, age)
```

---

### **Step 2: Function Call**

```javascript
greet('Alice', 30);
```

---

### **Step 3: Parameter Assignment**

Inside the function:

```
name = 'Alice'
age  = 30
```

👉 This is called **parameter binding**

---

### **Step 4: Execution**

```javascript
return `Hello, Alice! You are 30 years old.`;
```

---

# 🎯 **Key Idea**

> Parameters are like **local variables** that receive values when the function is called.

---

# ⚠️ **2. What If Arguments Are Missing?**

## Example

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(5));
```

---

## 🔍 What Happens Internally

```
a = 5
b = undefined
```

👉 So:

```
5 + undefined = NaN
```

---

# 🔥 **Why `undefined` Causes Problems**

* `undefined` means **no value assigned**
* Many operations (like math) don’t work with it

---

# ✅ **Solution: Manual Handling**

```javascript
function greet(name) {
  if (name === undefined) {
    name = "Guest";
  }
  return `Hello, ${name}!`;
}
```

---

# 🚀 **3. Default Parameters (Modern Solution)**

---

## Example

```javascript
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
```

---

## 🔍 What Happens Internally

### Case 1:

```javascript
greet("Alice");
```

```
name = "Alice"
```

---

### Case 2:

```javascript
greet();
```

```
name = undefined → replaced with "Guest"
```

---

### ⚠️ Important Detail

```javascript
greet(undefined); // uses default ✅
greet(null);      // does NOT use default ❌
```

👉 Because:

* Default only triggers for `undefined`

---

# 🧠 **4. Default Parameters with Expressions**

## Example

```javascript
function calculatePrice(price, tax = price * 0.2) {
  return price + tax;
}
```

---

## 🔍 Internal Behavior

```javascript
calculatePrice(100);
```

```
price = 100
tax = 100 * 0.2 = 20
```

---

```javascript
calculatePrice(100, 15);
```

```
price = 100
tax = 15 (default ignored)
```

---

# ⚠️ **Execution Order (VERY IMPORTANT)**

Parameters are evaluated **left → right**

```javascript
function test(a, b = a * 2) {
  return b;
}
```

```javascript
test(5); // 10
```

👉 Because `a` is already defined when `b` is calculated

---

# 📦 **5. Rest Parameters (Deep Understanding)**

---

## Example

```javascript
function sumAll(...numbers) {
  return numbers;
}

sumAll(1, 2, 3, 4);
```

---

## 🔍 What Happens Internally

```
numbers = [1, 2, 3, 4]
```

👉 Rest parameter:

* Collects all extra arguments
* Stores them in an array

---

# 🧠 **With Fixed + Rest**

```javascript
function showItems(firstItem, ...others) {
  console.log(firstItem);
  console.log(others);
}

showItems("apple", "banana", "cherry");
```

---

## Internally:

```
firstItem = "apple"
others = ["banana", "cherry"]
```

---

# ⚠️ **Rules (Exam Critical)**

### ❗ Must be last

```javascript
function test(...a, b) {} // ❌ error
```

---

### ❗ Only one allowed

```javascript
function test(...a, ...b) {} // ❌ error
```

---

# 🔬 **6. Parameters and Memory (VERY IMPORTANT)**

---

## Primitive Values (Copy)

```javascript
function change(x) {
  x = 10;
}

let a = 5;
change(a);

console.log(a); // 5
```

---

## 🔍 Explanation

```
a = 5 → copied into x
x = 10 → does NOT affect a
```

---

## Objects (Reference)

```javascript
function change(obj) {
  obj.value = 10;
}

let data = { value: 5 };
change(data);

console.log(data.value); // 10
```

---

## 🔍 Explanation

```
obj → points to same object as data
changes affect original
```

---

# ⚠️ **Exam Trap**

```javascript
function test(arr) {
  arr = [1, 2, 3];
}

let x = [5];
test(x);

console.log(x); // [5]
```

👉 Reassignment does NOT affect original reference

---

# 🧪 **7. Deep Exercise Walkthrough**

---

## **Exercise: Price with Tax**

```javascript
function calculatePrice(price, tax = price * 0.1) {
  return price + tax;
}
```

---

### Case 1:

```javascript
calculatePrice(100);
```

```
price = 100
tax = 10
result = 110
```

---

### Case 2:

```javascript
calculatePrice(100, 20);
```

```
price = 100
tax = 20
result = 120
```

---

# 🧪 **Exercise: First and Rest**

```javascript
function showItems(firstItem, ...others) {
  console.log(firstItem);
  console.log(others);
}
```

---

### Call:

```javascript
showItems("apple", "banana", "cherry");
```

---

### Internally:

```
firstItem = "apple"
others = ["banana", "cherry"]
```

---

# ⚠️ **Common Exam Mistakes (VERY IMPORTANT)**

---

## ❌ Missing Arguments

```javascript
function add(a, b) {
  return a + b;
}

add(5); // NaN
```

---

## ❌ Default Not Triggering

```javascript
greet(null); // ❌ not default
```

---

## ❌ Wrong Rest Usage

```javascript
function test(...a, b) {} // ❌
```

---

## ❌ Confusing Parameters & Arguments

```javascript
function test(a, b) {} // parameters
test(1, 2);           // arguments
```

---

# 🎯 **Final Deep Summary**

---

## 🧠 **How Parameters Work Internally**

1. Function is defined
2. Function is called
3. Arguments are passed
4. Parameters receive values
5. Function executes

---

## 🔑 **Key Concepts**

* Parameters = placeholders
* Arguments = actual values
* Missing arguments = `undefined`
* Default parameters = fallback values
* Rest parameters = collect many values

---

# 🧠 **Ultimate Memory Trick**

> “Arguments go in, parameters take shape, defaults protect, rest gathers, and execution completes.”

---

