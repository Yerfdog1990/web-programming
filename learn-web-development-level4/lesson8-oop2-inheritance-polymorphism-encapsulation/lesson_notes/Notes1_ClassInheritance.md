
---

# **7. Class Inheritance in JavaScript**

## **7.1 Basics of Inheritance**

### 🔹 What is Inheritance?

Inheritance is a core concept in **Object-Oriented Programming (OOP)** that allows a class to **reuse properties and methods** from another class.

* **Base Class (Superclass):** The original class
* **Derived Class (Subclass):** The class that inherits

### 🔹 Syntax

```javascript
class ChildClass extends ParentClass {
  // additional properties and methods
}
```

---

### ✅ Example: Basic Inheritance

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Rex');
dog.speak(); // Rex barks.
```

### 🔹 Explanation

* `Animal` → base class
* `Dog` → derived class using `extends`
* `Dog` overrides the `speak()` method

---

## **7.2 The `super` Keyword**

The `super` keyword is used to **access the parent class**.

---

### 🔹 1. Calling the Base Class Constructor

👉 Important Rule:
You **must call `super()` before using `this`** in a subclass constructor.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // calls parent constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Rex', 'Labrador');

console.log(dog.name);   // Rex
console.log(dog.breed);  // Labrador
dog.speak();             // Rex barks.
```

---

### 🔹 2. Calling Base Class Methods

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    super.speak(); // call parent method
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Rex');
dog.speak();
```

### Output:

```
Rex makes a noise.
Rex barks.
```

---

## **7.3 Method Overriding**

### 🔹 What is Method Overriding?

When a subclass **redefines a method** from the parent class.

---

### ✅ Example

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const animal = new Animal('Generic Animal');
animal.speak(); // Generic Animal makes a noise.

const dog = new Dog('Rex');
dog.speak(); // Rex barks.
```

---

## **7.4 Adding New Methods in Derived Classes**

A subclass can introduce **new functionality** not present in the base class.

---

### ✅ Example

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }

  fetch() {
    console.log(`${this.name} is fetching.`);
  }
}

const dog = new Dog('Rex');
dog.speak(); // Rex barks.
dog.fetch(); // Rex is fetching.
```

---

## **7.5 Checking Inheritance**

### 🔹 1. `instanceof`

Checks if an object belongs to a class.

```javascript
console.log(dog instanceof Dog);    // true
console.log(dog instanceof Animal); // true
```

---

### 🔹 2. `isPrototypeOf()`

Checks prototype chain relationship.

```javascript
console.log(Animal.prototype.isPrototypeOf(Dog.prototype)); // true
```

---

# 🧠 Key Concepts Summary

* `extends` → used for inheritance
* `super()` → calls parent constructor
* Method overriding → redefine parent methods
* Subclasses can add new methods
* Use `instanceof` to verify inheritance

---

# 🧪 Exercises with Solutions

---

## ✅ Exercise 1: Inheritance with `super`

### 🔹 Problem

Create:

* `Employee` class → name, salary
* `Manager` class → inherits Employee + department

---

### 💡 Solution

```javascript
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary); // call parent constructor
    this.department = department;
  }
}

// Create instances
const emp = new Employee('Alice', 5000);
const mgr = new Manager('Bob', 8000, 'IT');

// Output
console.log(emp.name, emp.salary);
// Alice 5000

console.log(mgr.name, mgr.salary, mgr.department);
// Bob 8000 IT
```

---

### 🔍 Explanation

* `Manager` inherits from `Employee`
* `super(name, salary)` initializes parent properties
* New property: `department`

---

## ✅ Exercise 2: Method Hunt in Predator

### 🔹 Problem

* Create `Animal` class → name + speak()
* Create `Predator` class → inherits Animal + hunt()

---

### 💡 Solution

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Predator extends Animal {
  hunt() {
    console.log(`${this.name} is hunting.`);
  }
}

// Create instance
const predator = new Predator('Lion');

// Call methods
predator.speak(); // Lion makes a noise.
predator.hunt();  // Lion is hunting.
```

---

### 🔍 Explanation

* `Predator` inherits `speak()` from `Animal`
* Adds new method `hunt()`

---

# 🎯 Practice Challenge (Try Yourself)

Create a class hierarchy:

* `Vehicle` → brand
* `Car` → inherits Vehicle + model
* Add method `drive()` in Car

👉 Try:

* Override a method
* Use `super`
* Check with `instanceof`

---

