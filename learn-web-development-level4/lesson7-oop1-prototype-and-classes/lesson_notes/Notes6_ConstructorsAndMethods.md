# **Constructors and Methods in JavaScript Classes**

---

## **6.1 Class Constructors**

### **What is a Constructor?**

A **constructor** is:

> A special method that is automatically called when a new object (instance) is created from a class.

---

### **Purpose of a Constructor**

* Initialize object properties
* Set starting values
* Perform setup tasks

---

### **Syntax**

```javascript
class ClassName {
  constructor(parameters) {
    // initialization code
  }
}
```

---

### **Example: Person Class**

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

console.log(person1.name); // Alice
console.log(person2.age);  // 25
```

---

### **Explanation**

* `constructor(name, age)` → receives values
* `this.name`, `this.age` → store values in object
* `new Person()` → calls constructor automatically

---

### **Default Constructor**

If you don’t define a constructor, JavaScript creates one automatically.

```javascript
class Animal {}

const animal = new Animal();
console.log(animal);
```

✔ Equivalent to:

```javascript
constructor() {}
```

---

## **6.2 Class Methods**

### **What are Methods?**

Methods are:

> Functions defined inside a class that describe object behavior.

---

### **Key Features**

* Stored in the **prototype**
* Shared by all instances
* Called using `object.method()`

---

### **Syntax**

```javascript
class ClassName {
  constructor() {}

  method1() {}
  method2() {}
}
```

---

### **Example: Car Class**

```javascript
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.mileage = 0;
  }

  drive(distance) {
    this.mileage += distance;
    console.log(`${this.brand} ${this.model} drove ${distance} miles. Total mileage: ${this.mileage}`);
  }

  getDetails() {
    return `${this.brand} ${this.model}, Mileage: ${this.mileage}`;
  }
}

const myCar = new Car('Toyota', 'Camry');

myCar.drive(50);
console.log(myCar.getDetails());
```

---

### **Explanation**

* `drive()` → updates mileage
* `getDetails()` → returns information
* Methods operate on object data using `this`

---

## **6.3 Private Methods and Properties**

### **What are Private Members?**

Private members:

> Are hidden from outside the class using `#`

---

### **Example: BankAccount**

```javascript
class BankAccount {
  #balance = 0;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  #validateAmount(amount) {
    if (amount <= 0) {
      throw new Error('Amount must be positive.');
    }
  }

  deposit(amount) {
    this.#validateAmount(amount);
    this.#balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
  }

  withdraw(amount) {
    this.#validateAmount(amount);
    if (amount > this.#balance) {
      throw new Error('Insufficient funds.');
    }
    this.#balance -= amount;
    console.log(`Withdrew ${amount}. New balance: ${this.#balance}`);
  }

  getBalance() {
    return this.#balance;
  }
}
```

---

### **Using the Class**

```javascript
const account = new BankAccount(100);

account.deposit(50);
account.withdraw(30);
console.log(account.getBalance());
```

---

### **Important Rule**

```javascript
account.#balance; // ❌ SyntaxError
```

✔ Private members:

* Only accessible inside the class
* Enforce **encapsulation**

---

## **Exercises with Solutions**

---

### **Exercise 1: Class Product**

#### **Task**

* Create `Product` class
* Properties: `name`, `price`
* Create multiple objects

---

#### ✅ **Solution**

```javascript
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);
const product3 = new Product("Tablet", 600);

console.log(product1);
console.log(product2);
console.log(product3);
```

---

### **Exercise 2: Class Library**

#### **Task**

* Property: `name`
* Array: `books`
* Methods: `addBook()`, `listBooks()`

---

#### ✅ **Solution**

```javascript
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(bookName) {
    this.books.push(bookName);
  }

  listBooks() {
    return this.books;
  }
}

const library = new Library("City Library");

library.addBook("1984");
library.addBook("To Kill a Mockingbird");

console.log(library.listBooks());
```

✔ Output:

```javascript
["1984", "To Kill a Mockingbird"]
```

---

### **Exercise 3: Add Method to Product**

#### **Task**

Add method to display product info

---

#### ✅ **Solution**

```javascript
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getDetails() {
    return `${this.name} costs $${this.price}`;
  }
}

const product = new Product("Laptop", 1200);
console.log(product.getDetails());
```

---

### **Exercise 4: Validate Input (Private Method)**

#### **Task**

Add private validation

---

#### ✅ **Solution**

```javascript
class Product {
  #validatePrice(price) {
    if (price <= 0) {
      throw new Error("Invalid price");
    }
  }

  constructor(name, price) {
    this.#validatePrice(price);
    this.name = name;
    this.price = price;
  }
}

const product = new Product("Book", 20);
console.log(product);
```

---

## **Key Takeaways**

* **Constructor**

    * Initializes objects
    * Runs automatically when using `new`

* **Methods**

    * Define behavior
    * Shared via prototype

* **Private Members (`#`)**

    * Protect internal data
    * Improve security and design

---

## **Final Insight**

> Constructors create objects, methods give them behavior.

Together, they form the foundation of:

* Object-Oriented Programming
* Clean, reusable, scalable code

---

