
---

# **5. Higher-Order Functions**

Higher-order functions are a **core concept in functional programming** and are widely used in JavaScript to write:

* Cleaner code
* Reusable logic
* More abstract and flexible programs

---

# **5.1 Key Concepts**

## **What are Higher-Order Functions?**

A **higher-order function** is a function that:

1. **Takes another function as an argument**, or
2. **Returns a function as a result**, or both

---

## **Why are they important?**

* Treat functions as **first-class objects**
* Promote **code reuse**
* Enable **modular and flexible design**

---

## **Examples of Higher-Order Functions**

* Passing functions as arguments
* Returning functions from other functions

---

# **5.2 Passing Functions as Arguments**

JavaScript provides many built-in higher-order functions, especially for arrays.

---

## **1. forEach()**

Executes a function **for each element** in an array.

```javascript id="qf2gk1"
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number);
});
```

✔ Output: `1 2 3 4 5`

---

## **2. map()**

Creates a **new array** by applying a function to each element.

```javascript id="s9m2nq"
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(function(number) {
  return number * number;
});

console.log(squaredNumbers);
// [1, 4, 9, 16, 25]
```

---

## **3. filter()**

Creates a new array with elements that **pass a condition**.

```javascript id="k1z0el"
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers);
// [2, 4]
```

---

## **4. reduce()**

Reduces an array to a **single value**.

```javascript id="b7r2hs"
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function(total, number) {
  return total + number;
}, 0);

console.log(sum);
// 15
```

---

## **Key Insight**

These methods:

* Accept functions as arguments
* Allow powerful data transformations

---

# **5.3 Returning Functions from Other Functions**

Higher-order functions can also **return new functions**, enabling advanced patterns.

---

## **1. Currying**

Currying transforms a function into a sequence of functions, each taking one argument.

---

### **Example**

```javascript id="gk3d8p"
function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(5)); // 10

const multiplyByThree = multiply(3);
console.log(multiplyByThree(5)); // 15
```

---

## **2. Creating Customizable Functions**

You can generate functions with preset behavior.

---

### **Example**

```javascript id="px7n9f"
function createGreeting(greeting) {
  return function(name) {
    console.log(`${greeting}, ${name}!`);
  };
}

const sayHello = createGreeting('Hello');
sayHello('Alice');

const sayHi = createGreeting('Hi');
sayHi('Bob');
```

---

## **Key Idea**

* Outer function sets configuration
* Inner function uses that configuration

---

# **5.4 Practical Use of Higher-Order Functions**

---

## **1. Function Composition**

Combining multiple functions into one.

```javascript id="v0p9ks"
function compose(...functions) {
  return function(initialValue) {
    return functions.reduceRight((value, func) => func(value), initialValue);
  };
}

const addOne = x => x + 1;
const double = x => x * 2;

const addOneAndDouble = compose(double, addOne);

console.log(addOneAndDouble(5)); // 12
```

✔ Execution order:

* addOne(5) → 6
* double(6) → 12

---

## **2. Asynchronous Higher-Order Functions**

Used with callbacks and timers.

```javascript id="3uvl8g"
function fetchData(callback) {
  setTimeout(() => {
    callback('Data received');
  }, 1000);
}

function processData(data) {
  console.log(data);
}

fetchData(processData);
```

✔ Output after 1 second

---

# **6. Exercises with Solutions**

---

## **Exercise 1: Currying Multiplication**

### **Problem**

Create a function `multiply` using currying.

---

### **Solution**

```javascript id="5w2g7x"
function multiply(a) {
  return function(b) {
    return a * b;
  };
}

// Example usage
console.log(multiply(2)(5)); // 10

const multiplyByThree = multiply(3);
console.log(multiplyByThree(4)); // 12
```

---

### **Explanation**

* First call stores `a`
* Second call uses `b`
* Returns product

---

## **Exercise 2: Greeting Function**

### **Problem**

Create a function `createGreeting` that returns a greeting function.

---

### **Solution**

```javascript id="1zq6lp"
function createGreeting(greeting) {
  return function(name) {
    console.log(`${greeting}, ${name}!`);
  };
}

// Example usage
const greetHello = createGreeting("Hello");
greetHello("Alice"); // Hello, Alice!

const greetHi = createGreeting("Hi");
greetHi("Bob"); // Hi, Bob!
```

---

### **Explanation**

* Outer function sets greeting
* Inner function uses name
* Demonstrates returning functions

---

# **7. Summary**

### ✔ Key Takeaways

* Higher-order functions:

    * Take functions as arguments
    * Return functions
* Common array methods:

    * `forEach()` → iterate
    * `map()` → transform
    * `filter()` → select
    * `reduce()` → aggregate
* Advanced concepts:

    * Currying
    * Function composition
    * Asynchronous callbacks
* Enable:

    * Cleaner code
    * Reusability
    * Flexibility

---

