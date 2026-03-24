# **Introduction to Object-Oriented Programming (OOP)**

---

## **2.1 Main Concepts of OOP**

### **What is OOP?**

Object-Oriented Programming (OOP) is a programming paradigm where:

> Everything in a program is treated as an **object**.

An **object** is:

* **Data (state)** + **Methods (behavior)**

---

### **State and Behavior**

| Concept  | Meaning                     |
| -------- | --------------------------- |
| State    | Data stored in variables    |
| Behavior | Actions (methods/functions) |

---

### **Example**

```javascript
class Dog {
  constructor(name) {
    this.name = name; // state
  }

  bark() { // behavior
    console.log(this.name + " says Woof!");
  }
}

const dog1 = new Dog("Buddy");
dog1.bark();
```

✅ **Explanation:**

* `name` → state
* `bark()` → behavior
* `dog1` → object

---

### **Classes and Objects**

* **Class** → blueprint/template
* **Object** → instance of a class

---

### **Class Hierarchy**

Classes are organized in hierarchies, similar to biology:

* Animal → Mammal → Dog

This helps structure large programs with **thousands or millions of objects**.

---

## **Core Principles of OOP**

There are **four main principles**:

1. Abstraction
2. Encapsulation
3. Inheritance
4. Polymorphism

---

## **2.2 Abstraction**

### **Definition**

Abstraction means:

> Focusing on important features and hiding unnecessary details.

---

### **Real-Life Example**

* Job roles in a company
* You see responsibilities, not internal processes

---

### **Programming Example**

```javascript
class Car {
  start() {
    console.log("Car started");
  }
}

const car = new Car();
car.start();
```

✔ You don’t know how the engine works — only how to use it.

---

### **Key Idea**

* Simplifies complex systems
* Helps organize large programs

---

## **2.3 Encapsulation**

### **Definition**

Encapsulation means:

> Hiding internal implementation and exposing only what is necessary.

---

### **Real-Life Analogy**

* Airplane passenger vs pilot
* You only interact with simple controls (ticket, seat)

---

### **JavaScript Example**

```javascript
class BankAccount {
  #balance = 0; // private variable

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance());
```

✅ **Explanation:**

* `#balance` is hidden
* Only accessible via methods

---

### **Benefits**

* Protects data
* Simplifies usage
* Reduces errors

---

## **2.4 Inheritance**

### **Definition**

Inheritance allows:

> One class to reuse properties and methods of another class.

---

### **Real-Life Idea**

Instead of building from scratch:

* Reuse an existing solution
* Modify it

---

### **JavaScript Example**

```javascript
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

const dog = new Dog();
dog.speak(); // inherited
dog.bark();
```

---

### **Benefits**

* Code reuse
* Easier maintenance
* Faster development

---

## **2.5 Polymorphism**

### **Definition**

Polymorphism means:

> One interface, many implementations.

---

### **Real-Life Example**

Driving:

* Truck, car, ambulance
* Same controls, different systems

---

### **JavaScript Example**

```javascript
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}

const animals = [new Dog(), new Cat()];

animals.forEach(animal => animal.speak());
```

✅ Same method → different behavior

---

### **Why It Matters**

* Flexibility
* Scalability
* Cleaner code

---

## **OOP Summary**

| Principle     | Purpose             |
| ------------- | ------------------- |
| Abstraction   | Simplify complexity |
| Encapsulation | Hide details        |
| Inheritance   | Reuse code          |
| Polymorphism  | Flexible behavior   |

---

## **Exercises with Solutions**

---

### **Exercise 1: Method Inheritance (`__proto__`)**

#### **Task**

* Create `parent` object with `greet()`
* Create `child` using `__proto__`
* Call method from child

---

#### ✅ **Solution**

```javascript
const parent = {
  greet() {
    console.log("Hello from parent");
  }
};

const child = {
  __proto__: parent
};

// Call method
child.greet();
```

✔ Output:

```
Hello from parent
```

---

### **Exercise 2: Using `Object.create()`**

#### **Task**

* Create `animal` object with `speak()`
* Create `dog` using `Object.create()`
* Add `name` property
* Call method

---

#### ✅ **Solution**

```javascript
const animal = {
  speak() {
    console.log(this.name + " says: Animal speaks");
  }
};

const dog = Object.create(animal);

dog.name = "Rex";

dog.speak();
```

✔ Output:

```
Rex says: Animal speaks
```

---

### **Exercise 3: Identify OOP Principles**

#### **Code**

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " speaks");
  }
}
```

#### ✅ **Answer**

* **Encapsulation** → data inside class
* **Abstraction** → simple interface
* **Object** → instance of class

---

### **Exercise 4: Create Your Own Inheritance**

#### **Task**

Create:

* `Vehicle` class
* `Car` class inherits from it

---

#### ✅ **Solution**

```javascript
class Vehicle {
  move() {
    console.log("Vehicle is moving");
  }
}

class Car extends Vehicle {
  drive() {
    console.log("Car is driving");
  }
}

const car = new Car();
car.move();
car.drive();
```

---

## **Final Key Takeaways**

* OOP organizes programs using **objects and classes**
* Objects = **state + behavior**
* Four pillars:

    * Abstraction
    * Encapsulation
    * Inheritance
    * Polymorphism
* OOP helps manage **large, complex programs**

---

