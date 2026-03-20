
---

# **6. Closures**

Closures are one of the **most powerful and important concepts in JavaScript**. They allow functions to **remember and access variables from their outer scope**, even after that outer function has finished executing.

---

# **6.1 What Closures Are**

## **Definition**

A **closure** is:

> A combination of a function and the **lexical environment** in which it was created.

---

## **Key Properties**

### **1. Lexical Environment**

* Refers to the scope where a function is defined
* Includes variables available at that time

---

### **2. Context Preservation**

* A function **remembers variables from its outer scope**
* Even after the outer function has finished running

---

## **Why Closures Matter**

* Enable **data persistence**
* Allow **private variables**
* Support **functional programming patterns**

---

# **6.2 Closure Examples**

---

## **Example 1: Simple Closure**

```javascript id="r2xq9l"
function outerFunction() {
  let outerVariable = 'I am from the outer function';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closure = outerFunction();
closure(); // "I am from the outer function"
```

---

### **Explanation**

* `innerFunction` remembers `outerVariable`
* Even after `outerFunction` has finished execution

---

## **Example 2: Counter with Closure**

```javascript id="xk7g3p"
function createCounter() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

---

### **Explanation**

* `count` is preserved between calls
* Each call updates the same variable

---

## **Example 3: Closure in a Loop**

```javascript id="p4s8we"
function createArrayWithClosures() {
  let arr = [];

  for (let i = 0; i < 3; i++) {
    arr[i] = function() {
      console.log(i);
    };
  }

  return arr;
}

const closures = createArrayWithClosures();

closures[0](); // 0
closures[1](); // 1
closures[2](); // 2
```

---

### **Explanation**

* `let` creates a new `i` for each iteration
* Each function remembers its own value

---

# **6.3 Complex Use Cases for Closures**

---

## **1. Partial Application**

```javascript id="m1z4vd"
function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const double = multiply(2);

console.log(double(5));  // 10
console.log(double(10)); // 20
```

---

### **Explanation**

* `a` is fixed
* Function becomes reusable

---

## **2. Data Hiding (Private Variables)**

```javascript id="r8y3no"
function createPerson(name, age) {
  let _name = name;
  let _age = age;

  return {
    getName: function() {
      return _name;
    },
    getAge: function() {
      return _age;
    },
    setName: function(newName) {
      _name = newName;
    },
    setAge: function(newAge) {
      _age = newAge;
    }
  };
}

const person = createPerson('John', 30);

console.log(person.getName()); // John

person.setName('Jane');

console.log(person.getName()); // Jane
console.log(person.getAge());  // 30
```

---

### **Explanation**

* `_name` and `_age` are **private**
* Only accessible through methods

---

## **3. Memoization (Optimization)**

```javascript id="7bq5ml"
function memoize(fn) {
  const cache = {};

  return function(...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;

    return result;
  };
}

function slowFunction(num) {
  console.log('Computing...');
  return num * 2;
}

const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(5)); // Computing... 10
console.log(memoizedFunction(5)); // 10 (cached)
```

---

### **Explanation**

* Stores results in `cache`
* Avoids repeated calculations

---

# **7. Exercises with Solutions**

---

## **Exercise 1: Counter with Closure**

### **Problem**

Create two independent counters using closures.

---

### **Solution**

```javascript id="g5x9rk"
function createCounter() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

// Create two counters
const counter1 = createCounter();
const counter2 = createCounter();

// Test counters
console.log(counter1()); // 1
console.log(counter1()); // 2

console.log(counter2()); // 1
console.log(counter2()); // 2
```

---

### **Explanation**

* Each counter has its own `count`
* Closures keep them independent

---

## **Exercise 2: Private Variables**

### **Problem**

Create a function with private `name` and `age`.

---

### **Solution**

```javascript id="z2k4ts"
function createPerson(name, age) {
  let _name = name;
  let _age = age;

  return {
    getName() {
      return _name;
    },
    getAge() {
      return _age;
    },
    setName(newName) {
      _name = newName;
    },
    setAge(newAge) {
      _age = newAge;
    }
  };
}

// Example usage
const person = createPerson("Alice", 25);

console.log(person.getName()); // Alice
person.setName("Bob");
console.log(person.getName()); // Bob
```

---

### **Explanation**

* Variables are hidden inside closure
* Access controlled via methods

---

# **8. Summary**

### ✔ Key Takeaways

* Closures = function + lexical environment
* Functions remember outer variables even after execution
* Common use cases:

    * Counters
    * Private variables
    * Function factories
    * Memoization
* Benefits:

    * Data encapsulation
    * Reusability
    * Better abstraction

---

