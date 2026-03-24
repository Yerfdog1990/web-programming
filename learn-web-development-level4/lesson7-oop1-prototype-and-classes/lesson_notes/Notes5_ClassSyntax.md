# **Class Syntax in JavaScript**

---

## **5.1 Class Declaration**

### **What is a Class?**

A **class** in JavaScript is:

> A structured way to create objects and handle inheritance.

✔ Introduced in **ES6 (ECMAScript 2015)**

✔ Built on top of **prototype-based inheritance** (syntactic sugar)

---

### **Basic Class Declaration**

```javascript
class Person {
  greet() {
    console.log('Hello!');
  }
}

// Create instance
const person = new Person();
person.greet(); // Hello!
```

---

### **Explanation**

* `class Person` → defines a class
* `greet()` → method
* `new Person()` → creates an instance

---

## **Class Expression**

Classes can also be created as expressions.

---

### **1. Named Class Expression**

```javascript
const Person = class PersonClass {
  greet() {
    console.log('Hello!');
  }
};

const person = new Person();
person.greet();
```

---

### **2. Unnamed Class Expression**

```javascript
const Person = class {
  greet() {
    console.log('Hello!');
  }
};

const person = new Person();
person.greet();
```

---

### **Key Insight**

* Class declarations are **hoisted differently** (not like functions)
* Class expressions allow **flexibility**

---

## **5.2 Class Fields and Methods**

---

### **Class Properties (Fields)**

---

### **1. Using Constructor (Traditional Way)**

```javascript
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
}

const user = new User('john_doe', 'john@example.com');

console.log(user.username);
console.log(user.email);
```

---

### **2. Using Class Fields (Modern ES2022)**

```javascript
class User {
  username = 'default_username';
  email = 'default@example.com';

  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
}
```

---

### **Explanation**

| Approach     | Description                           |
| ------------ | ------------------------------------- |
| Constructor  | Define properties inside constructor  |
| Class fields | Define properties outside constructor |

---

### **Class Methods**

Methods are defined inside the class body.

```javascript
class Animal {
  speak() {
    console.log('Animal speaks');
  }

  eat() {
    console.log('Animal eats');
  }
}

const animal = new Animal();
animal.speak();
animal.eat();
```

---

### **Important Note**

* Methods are stored in the **prototype**
* All instances share the same methods

---

## **5.3 Examples of Using Classes**

---

### **Creating Complex Objects**

```javascript
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  startEngine() {
    console.log(`${this.brand} ${this.model} engine started.`);
  }

  stopEngine() {
    console.log(`${this.brand} ${this.model} engine stopped.`);
  }
}

const myCar = new Car('Toyota', 'Camry');

myCar.startEngine();
myCar.stopEngine();
```

---

### **Explanation**

* Combines **data (brand, model)** and **behavior (methods)**
* Makes code reusable and organized

---

## **Exercises with Solutions**

---

### **Exercise 1: Class Person**

#### **Task**

* Create class `Person`
* Add `greet()` method
* Create instance and call method

---

#### ✅ **Solution**

```javascript
class Person {
  greet() {
    console.log("Hello!");
  }
}

const person = new Person();
person.greet();
```

✔ Output:

```
Hello!
```

---

### **Exercise 2: User Class**

#### **Task**

* Fields: `username`, `email`
* Methods: `getUsername()`, `getEmail()`

---

#### ✅ **Solution**

```javascript
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  getUsername() {
    return this.username;
  }

  getEmail() {
    return this.email;
  }
}

const user = new User("john_doe", "john@example.com");

console.log(user.getUsername());
console.log(user.getEmail());
```

✔ Output:

```
john_doe
john@example.com
```

---

### **Exercise 3: Add Another Method**

#### **Task**

Add method `displayInfo()` to print both fields.

---

#### ✅ **Solution**

```javascript
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  displayInfo() {
    console.log(this.username + " - " + this.email);
  }
}

const user = new User("alice", "alice@example.com");
user.displayInfo();
```

---

### **Exercise 4: Create Your Own Class**

#### **Task**

Create a `Book` class with:

* title
* author
* method `describe()`

---

#### ✅ **Solution**

```javascript
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  describe() {
    console.log(this.title + " by " + this.author);
  }
}

const book = new Book("1984", "George Orwell");
book.describe();
```

---

## **Key Takeaways**

* `class` provides a **clean syntax** for objects
* Classes are built on **prototypes**
* Use:

    * `constructor` → initialize data
    * methods → define behavior
* Class fields (ES2022) simplify property definition

---

## **Final Insight**

> Classes don’t replace prototypes — they make them easier to use.

Understanding classes helps you:

* Write **cleaner code**
* Build **scalable applications**
* Understand modern frameworks like React

---

