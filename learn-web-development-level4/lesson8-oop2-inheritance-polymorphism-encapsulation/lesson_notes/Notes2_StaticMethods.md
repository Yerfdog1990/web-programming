
---

# **8. Static Methods in JavaScript**

## **8.1 Declaring Static Methods**

### 🔹 What are Static Methods?

Static methods are **methods that belong to the class itself**, not to instances (objects) of the class.

👉 This means:

* Called using the **class name**
* Not available on objects created from the class

---

### 🔹 Syntax

```javascript
class ClassName {
  static methodName() {
    // logic here
  }
}
```

---

### ✅ Example: Declaring Static Methods

```javascript
class MathHelper {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

console.log(MathHelper.add(5, 3));      // 8
console.log(MathHelper.multiply(5, 3)); // 15
```

---

### 🔍 Explanation

* `static` keyword defines class-level methods
* Called as:

```javascript
MathHelper.add(5, 3);
```

* ❌ NOT:

```javascript
const obj = new MathHelper();
obj.add(5, 3); // Error
```

---

## **8.2 Using Static Methods**

Static methods are useful in several real-world scenarios:

---

### 🔹 1. Helper Functions

Used for utility operations related to a class.

```javascript
class StringUtil {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static reverse(str) {
    return str.split('').reverse().join('');
  }
}

console.log(StringUtil.capitalize('hello')); // Hello
console.log(StringUtil.reverse('hello'));    // olleh
```

---

### 🔹 2. Factory Methods

Used to **create objects with custom logic**

```javascript
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  static fromObject(obj) {
    return new Car(obj.brand, obj.model);
  }
}

const carData = { brand: 'Toyota', model: 'Camry' };
const car = Car.fromObject(carData);

console.log(car.brand); // Toyota
console.log(car.model); // Camry
```

---

### 🔍 Why Factory Methods?

* Simplifies object creation
* Encapsulates logic
* Useful when working with APIs or JSON data

---

### 🔹 3. Data Processing

Static methods can process data **without needing an instance**

Example:

* Formatting data
* Calculations
* Transformations

---

## **8.3 Static Methods and Inheritance**

### 🔹 Key Idea

👉 Static methods are **inherited by subclasses**

---

### ✅ Example

```javascript
class Animal {
  static identify() {
    return 'This is an animal';
  }
}

class Dog extends Animal {
  static identify() {
    return 'This is a dog';
  }
}

console.log(Animal.identify()); // This is an animal
console.log(Dog.identify());    // This is a dog
```

---

### 🔍 Explanation

* `Dog` inherits static method from `Animal`
* It can also **override** it

---

## **8.4 Accessing Static Methods Inside Other Methods**

Static methods can call other static methods using:

* `this` (refers to the class)
* Class name

---

### ✅ Example

```javascript
class Geometry {
  static calculateArea(radius) {
    return Math.PI * radius * radius;
  }

  static describeCircle(radius) {
    const area = this.calculateArea(radius);
    return `A circle with radius ${radius} has an area of ${area.toFixed(2)}.`;
  }
}

console.log(Geometry.describeCircle(5));
// A circle with radius 5 has an area of 78.54.
```

---

### 🔍 Key Point

* Inside static methods:

    * `this` → refers to the class itself

---

## **8.5 Static Methods and Class Instances**

### ❌ Static methods cannot be called on instances

---

### ✅ Example

```javascript
class Calculator {
  static add(a, b) {
    return a + b;
  }
}

const calc = new Calculator();

console.log(Calculator.add(3, 4)); // 7
console.log(calc.add(3, 4));       // Error
```

---

### 🔍 Error Explanation

```javascript
TypeError: calc.add is not a function
```

👉 Because:

* Static methods are **not part of the instance**

---

# 🧠 Key Concepts Summary

* `static` → defines class-level methods
* Called using **ClassName.method()**
* Not accessible from instances
* Useful for:

    * Utility functions
    * Factory methods
    * Data processing
* Inherited by subclasses
* Can be overridden

---

# 🧪 Exercises with Solutions

---

## ✅ Exercise 1: Static MathHelper

### 🔹 Problem

Create a class with:

* `subtract(a, b)`
* `divide(a, b)`

---

### 💡 Solution

```javascript
class MathHelper {
  static subtract(a, b) {
    return a - b;
  }

  static divide(a, b) {
    return a / b;
  }
}

// Test
console.log(MathHelper.subtract(10, 4)); // 6
console.log(MathHelper.divide(20, 5));   // 4
```

---

### 🔍 Explanation

* Methods are static → called directly on class
* No object creation needed

---

## ✅ Exercise 2: Factory Method User

### 🔹 Problem

Create:

* `User` class → username, email
* Static method `fromObject(obj)`

---

### 💡 Solution

```javascript
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  static fromObject(obj) {
    return new User(obj.username, obj.email);
  }
}

// Test data
const userData = {
  username: 'john_doe',
  email: 'john@example.com'
};

const user = User.fromObject(userData);

console.log(user.username); // john_doe
console.log(user.email);    // john@example.com
```

---

### 🔍 Explanation

* `fromObject` converts plain object → class instance
* Common in:

    * APIs
    * JSON data handling

---

# 🎯 Practice Challenge

Try building:

### 🔹 Class: `BankAccount`

* constructor: name, balance
* static method:

    * `compare(account1, account2)` → returns account with higher balance

---

