
---

# **1. Working with Floating-Point Numbers**

Floating-point numbers (often called **floats**) are numbers that contain a **decimal point**. In JavaScript, all numbers (integers and decimals) are stored using the same `number` type.

Example:

```javascript
let a = 5;        // integer
let b = 5.75;     // floating-point number
```

---

# **1.1 Rounding Floating-Point Numbers**

When converting a floating-point number to an integer, JavaScript **removes the decimal part** (rounds down). However, there are built-in methods for more precise rounding.

## **1. Math.round()**

Rounds to the **nearest integer**.

```javascript
let x = Math.round(4.1); // 4
let y = Math.round(4.5); // 5
let z = Math.round(4.9); // 5
```

✔ If decimal ≥ 0.5 → rounds up

✔ If decimal < 0.5 → rounds down

---

## **2. Math.ceil()**

Rounds **up** to the nearest integer.

```javascript
let x = Math.ceil(4.1); // 5
let y = Math.ceil(4.5); // 5
let z = Math.ceil(4.9); // 5
```

✔ Always goes to the **next highest integer**

---

## **3. Math.floor()**

Rounds **down** to the nearest integer.

```javascript
let x = Math.floor(4.1); // 4
let y = Math.floor(4.5); // 4
let z = Math.floor(4.9); // 4
```

✔ Always goes to the **next lowest integer**

---

## **Quick Memory Tip**

* **round** → nearest
* **ceil (ceiling)** → up
* **floor** → down

---

# **1.2 How Floating-Point Numbers Work**

JavaScript numbers are stored using a **floating-point representation (IEEE 754)**.

Each number consists of:

* **Mantissa (significant digits)**
* **Exponent (scale/power)**

### Example:

```text
123456789 → 1.23456789 × 10⁸
```

Stored as:

* Mantissa → `1.23456789`
* Exponent → `8`

---

## **Key Points**

* Stored in **64 bits (8 bytes)**
* Precision is limited to about **15 digits**
* Can represent very large and very small numbers:

    * Range: approximately `-1.7 × 10³⁰⁸` to `+1.7 × 10³⁰⁸`

---

# **1.3 Precision Loss**

Floating-point numbers are **not exact** due to:

* Binary conversion errors
* Rounding errors
* Limited precision

---

## **Example: Precision Loss**

```javascript
let result = 1000000000 - 0.000000001;
console.log(result); // 1000000000
```

### Why?

* The smaller number is too tiny compared to the large number
* It gets ignored due to limited precision

---

## **Important Insight**

> Programming numbers ≠ Mathematical precision

---

# **1.4 Comparing Floating-Point Numbers**

Direct comparison using `==` or `===` can be unreliable.

---

## **Problem Example**

```javascript
let a = 1000000000.0;
let b = 0.000000001;
let c = a - b;

console.log(a === c); // true (unexpected!)
```

---

## **Another Example**

```javascript
let a = 1.00000000000000001;
let b = 1.00000000000000002;

console.log(a === b); // true
```

---

## **Correct Approach: Use a Threshold (Epsilon)**

Instead of checking exact equality, check if the difference is **very small**.

```javascript
let a = 0.00000000012;
let b = 0.000000000011;

if (Math.abs(a - b) < 0.00001) {
  console.log("equal");
} else {
  console.log("not equal");
}
```

✔ `Math.abs()` returns the absolute difference

✔ Compare against a small value (epsilon)

---

# **2. Exercises with Solutions**

---

## **Exercise 1: Rounding a Number**

### **Problem**

Create a function `ceilAndFloor` that:

* Takes a floating-point number
* Returns an object with:

    * `ceil` → rounded up value
    * `floor` → rounded down value

---

### **Solution**

```javascript
function ceilAndFloor(num) {
  return {
    ceil: Math.ceil(num),
    floor: Math.floor(num)
  };
}

// Example usage
let result = ceilAndFloor(4.7);
console.log(result);
// Output: { ceil: 5, floor: 4 }
```

---

### **Explanation**

* `Math.ceil(num)` → rounds up
* `Math.floor(num)` → rounds down
* Returns results in an object

---

## **Exercise 2: Comparing Floating-Point Numbers**

### **Problem**

Create a function `areFloatsEqual` that:

* Takes two numbers
* Returns `true` if their difference is less than `0.00001`

---

### **Solution**

```javascript
function areFloatsEqual(a, b) {
  const epsilon = 0.00001;
  return Math.abs(a - b) < epsilon;
}

// Example usage
console.log(areFloatsEqual(1.00000001, 1.00000002)); // true
console.log(areFloatsEqual(1.1, 1.2)); // false
```

---

### **Explanation**

* `Math.abs(a - b)` calculates difference
* If difference < epsilon → numbers are “equal”

---

# **3. Summary**

### ✔ Key Takeaways

* Floating-point numbers store decimals using **mantissa + exponent**
* Precision is limited (~15 digits)
* Rounding methods:

    * `Math.round()` → nearest
    * `Math.ceil()` → up
    * `Math.floor()` → down
* Floating-point math can cause **precision errors**
* Never compare floats directly → use **epsilon comparison**

---

