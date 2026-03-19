
---

# **9. Rest and Spread Operations in JavaScript**

## **Overview**

The **rest (`...`)** and **spread (`...`)** operators use the same syntax (`...`) but serve **different purposes**:

* **Spread → expands (unpacks) values**
* **Rest → collects (packs) values**

✔ Makes code cleaner and more flexible

✔ Widely used with arrays, objects, and functions

---

# **9.1 Spread Operator (`...`)**

## **What is Spread?**

The spread operator **unpacks elements** from:

* Arrays
* Objects

into individual values.

---

## **1. Copying an Array**

```javascript id="q5r0va"
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray);
```

✔ Output:

```id="t84c6g"
[1, 2, 3]
```

✔ Creates a **shallow copy**

---

## **2. Merging Arrays**

```javascript id="m8yzs2"
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];

console.log(combinedArray);
```

✔ Output:

```id="6n6p1g"
[1, 2, 3, 4, 5, 6]
```

---

## **3. Passing Arguments to Functions**

```javascript id="ib2h9l"
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
```

✔ Output:

```id="x8y4qf"
6
```

✔ Converts array into individual arguments

---

## **4. Copying an Object**

```javascript id="7e9qv2"
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };

console.log(copiedObject);
```

---

## **5. Merging Objects**

```javascript id="rqg4xl"
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combinedObject = { ...obj1, ...obj2 };

console.log(combinedObject);
```

✔ Output:

```id="y9l2kz"
{ a: 1, b: 2, c: 3, d: 4 }
```

---

# **9.2 Rest Operator (`...`)**

## **What is Rest?**

The rest operator **collects multiple values into a single variable (array or object)**.

---

## **1. Rest Parameters in Functions**

```javascript id="ylb4ba"
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(4, 5, 6, 7));
```

✔ Output:

```id="c4s9gn"
6
22
```

✔ Accepts **any number of arguments**

---

## **2. Array Destructuring with Rest**

```javascript id="fpl6kz"
const [first, second, ...rest] = [1, 2, 3, 4, 5];

console.log(first);
console.log(second);
console.log(rest);
```

✔ Output:

```id="xv0q3d"
1
2
[3, 4, 5]
```

---

## **3. Object Destructuring with Rest**

```javascript id="7hxtbq"
const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };

console.log(a);
console.log(b);
console.log(rest);
```

✔ Output:

```id="4y0c2n"
1
2
{ c: 3, d: 4 }
```

---

# **9.3 Real-World Applications**

## **1. Merging Objects with Overrides**

```javascript id="6n9t2o"
const defaultSettings = { theme: 'dark', showNotifications: true };
const userSettings = { showNotifications: false, fontSize: 14 };

const settings = { ...defaultSettings, ...userSettings };

console.log(settings);
```

✔ Output:

```id="o8r7x1"
{ theme: 'dark', showNotifications: false, fontSize: 14 }
```

✔ Later values override earlier ones

---

## **2. Splitting Arrays**

```javascript id="j5k1we"
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const [first, second, ...rest] = numbers;

const firstHalf = rest.slice(0, Math.floor(rest.length / 2));
const secondHalf = rest.slice(Math.floor(rest.length / 2));

console.log(firstHalf);
console.log(secondHalf);
```

---

# ⚠️ **Key Difference Between Rest and Spread**

| Feature   | Spread (`...`)                  | Rest (`...`)                   |
| --------- | ------------------------------- | ------------------------------ |
| Purpose   | Unpack values                   | Collect values                 |
| Usage     | Arrays, objects, function calls | Function params, destructuring |
| Direction | Expands                         | Groups                         |

---

# **Exercises with Solutions**

---

## **Exercise 1: Combining Arrays (Spread)**

### **Task**

* Create `array1` → `[1, 2, 3]`
* Create `array2` → `[4, 5, 6]`
* Combine using spread

---

### **Solution**

```javascript id="r6y5k9"
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];

console.log(combinedArray);
```

✔ Output:

```id="z9m1x2"
[1, 2, 3, 4, 5, 6]
```

---

## **Exercise 2: Destructuring with Rest**

### **Task**

* Create object `person`
* Extract `name`, `age`
* Store remaining properties in `restProperties`

---

### **Solution**

```javascript id="b4k9pn"
const person = {
  name: 'John',
  age: 30,
  email: 'john@example.com',
  country: 'USA'
};

const { name, age, ...restProperties } = person;

console.log(restProperties);
```

✔ Output:

```id="c2m7y8"
{ email: 'john@example.com', country: 'USA' }
```

---

# **Summary**

* `...` is used for both **rest and spread**
* **Spread**

    * Expands arrays/objects
    * Used in copying, merging, function calls
* **Rest**

    * Collects remaining elements
    * Used in functions and destructuring
* Key benefits:

    * Cleaner code
    * Flexible argument handling
    * Easier data manipulation

---
