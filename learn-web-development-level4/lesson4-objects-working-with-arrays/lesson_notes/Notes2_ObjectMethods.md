
---

# **7. Object Methods in JavaScript**

## **7.1 Creating Object Methods**

### **What are Object Methods?**

Object methods are **functions stored as properties inside an object**.
They allow objects to **perform actions** and define behavior.

---

## **1. Object Literal Method**

Methods can be defined directly inside an object.

```javascript
let person = {
  name: 'John',
  age: 30,
  greet: function() {
    return `Hello, my name is ${this.name}`;
  }
};

console.log(person.greet());
```

✔ Output:

```
Hello, my name is John
```

✔ Uses `this` to refer to the object itself

---

## **2. Shorthand Method Syntax (ES6)**

A shorter and cleaner way to define methods.

```javascript
let person = {
  name: 'John',
  age: 30,
  greet() {
    return `Hello, my name is ${this.name}`;
  }
};

console.log(person.greet());
```

✔ Preferred in modern JavaScript

✔ More readable

---

## **3. Adding Methods After Object Creation**

Methods can be added later.

```javascript
let person = {
  name: 'John',
  age: 30
};

person.greet = function() {
  return `Hello, my name is ${this.name}`;
};

console.log(person.greet());
```

✔ Useful when modifying objects dynamically

---

## **4. Using Constructor Functions**

Methods can be included in constructor functions.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    return `Hello, my name is ${this.name}`;
  };
}

let john = new Person('John', 30);
let jane = new Person('Jane', 25);

console.log(john.greet());
console.log(jane.greet());
```

✔ Creates multiple objects with the same method

---

# **7.2 Using Object Methods**

## **1. Calling Methods with Dot Notation**

```javascript
console.log(person.greet());
```

✔ Most common way

---

## **2. Calling Methods with Bracket Notation**

```javascript
let result = person['greet']();
console.log(result);
```

✔ Useful when method name is dynamic

---

## **3. Calling Methods Within Other Methods**

```javascript
let calculator = {
  a: 0,
  b: 0,
  setValues(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};

calculator.setValues(2, 3);

console.log(calculator.sum()); // 5
console.log(calculator.mul()); // 6
```

✔ Methods can interact with each other

---

## **4. Using `this` in Methods**

The `this` keyword refers to the **current object**.

```javascript
let car = {
  brand: 'Toyota',
  model: 'Camry',
  getInfo() {
    return `Brand: ${this.brand}, Model: ${this.model}`;
  }
};

console.log(car.getInfo());
```

✔ Output:

```
Brand: Toyota, Model: Camry
```

---

## **5. Passing Methods as Callbacks**

⚠ Problem: `this` may be lost

```javascript
let person = {
  name: 'John',
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

setTimeout(person.greet, 1000);
```

✔ Output:

```
Hello, my name is undefined
```

### **Fix using bind()**

```javascript
setTimeout(person.greet.bind(person), 1000);
```

### **Fix using arrow function**

```javascript
setTimeout(() => person.greet(), 1000);
```

✔ Both preserve correct `this`

---

# **7.3 Sharing Methods**

## **1. Using Prototypes**

Methods can be shared across all instances.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  return `Hello, my name is ${this.name}`;
};

let john = new Person('John', 30);
let jane = new Person('Jane', 25);

console.log(john.greet());
console.log(jane.greet());
```

✔ More memory efficient

✔ Shared method for all objects

---

## **2. Borrowing Methods (call/apply)**

```javascript
let person1 = {
  name: 'John',
  greet() {
    return `Hello, my name is ${this.name}`;
  }
};

let person2 = {
  name: 'Jane'
};

console.log(person1.greet.call(person2));
```

✔ Output:

```
Hello, my name is Jane
```

✔ Allows reuse of methods

---

# **Exercises with Solutions**

---

## **Exercise 1: Shortened Syntax**

### **Task**

Create a `user` object with:

* username
* email
* method `getDetails()` using shorthand syntax

---

### **Solution**

```javascript
let user = {
  username: 'john_doe',
  email: 'john@example.com',
  getDetails() {
    return `Username: ${this.username}, Email: ${this.email}`;
  }
};

console.log(user.getDetails());
```

✔ Output:

```
Username: john_doe, Email: john@example.com
```

---

## **Exercise 2: Method After Creation**

### **Task**

* Create object `product`
* Add method `getProductInfo()` after creation

---

### **Solution**

```javascript
let product = {
  name: 'Laptop',
  price: 1200
};

product.getProductInfo = function() {
  return `Product: ${this.name}, Price: $${this.price}`;
};

console.log(product.getProductInfo());
```

✔ Output:

```
Product: Laptop, Price: $1200
```

---

# **Summary**

* Object methods are **functions inside objects**
* Ways to create methods:

    * Object literal
    * Shorthand syntax (ES6)
    * After object creation
    * Constructor functions
* Methods are accessed using:

    * Dot notation
    * Bracket notation
* `this` refers to the **object calling the method**
* Be careful when passing methods as callbacks (use `bind` or arrow functions)
* Methods can be shared using:

    * Prototypes
    * call() / apply()

---

