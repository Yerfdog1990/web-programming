### Practical OOP Examples 

These examples show how the four OOP pillars—classes, inheritance, encapsulation, and polymorphism—look in real-world scenarios.

---

#### 12.1 User Management in a Web Application

**Concept:**

Use a base `User` class for shared behavior, then extend it for role-specific actions.

**Code**

```js
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  login() {
    console.log(`${this.username} logged in.`);
  }

  logout() {
    console.log(`${this.username} logged out.`);
  }
}

class Admin extends User {
  constructor(username, email) {
    super(username, email);
    this.role = 'admin';
  }

  deleteUser(user) {
    console.log(`${this.username} deleted user ${user.username}.`);
  }
}

class Guest extends User {
  constructor(username, email) {
    super(username, email);
    this.role = 'guest';
  }

  requestAccess() {
    console.log(`${this.username} requested access.`);
  }
}

// Demo
const admin = new Admin('adminUser', 'admin@example.com');
const guest = new Guest('guestUser', 'guest@example.com');

admin.login();               // adminUser logged in.
admin.deleteUser(guest);     // adminUser deleted user guestUser.
admin.logout();              // adminUser logged out.

guest.login();               // guestUser logged in.
guest.requestAccess();       // guestUser requested access.
guest.logout();              // guestUser logged out.
```

**Key points**
- `Admin` and `Guest` inherit `login`/`logout` from `User`.
- Each subclass adds its own method while still using the parent’s functionality.

---

#### 12.2 Product Management in an Online Store

**Concept:**

Polymorphism: different product types override `calculateDiscount()` while sharing the same interface.

**Code**

```js
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  calculateDiscount() {
    return this.price * 0.1; // Default 10% discount
  }

  display() {
    console.log(`${this.name} - $${this.price.toFixed(2)}`);
  }
}

class Electronics extends Product {
  constructor(name, price, brand) {
    super(name, price);
    this.brand = brand;
  }

  calculateDiscount() {
    return this.price * 0.2; // 20% discount for electronics
  }
}

class Clothing extends Product {
  constructor(name, price, size) {
    super(name, price);
    this.size = size;
  }

  calculateDiscount() {
    return this.price * 0.15; // 15% discount for clothing
  }
}

// Demo
const laptop = new Electronics('Laptop', 1000, 'BrandX');
const tshirt = new Clothing('T-Shirt', 20, 'M');

laptop.display(); // Laptop - $1000.00
console.log(`Discount: $${laptop.calculateDiscount().toFixed(2)}`); // Discount: $200.00

tshirt.display(); // T-Shirt - $20.00
console.log(`Discount: $${tshirt.calculateDiscount().toFixed(2)}`); // Discount: $3.00
```

**Key points**
- `Product.calculateDiscount()` provides a default.
- `Electronics` and `Clothing` override it, so calling the same method yields different results.

---

#### 12.3 Library Management

**Concept:**

Inheritance + polymorphism for items, plus a container class (`Library`) that manages them.

**Code**

```js
class LibraryItem {
  constructor(title, year) {
    this.title = title;
    this.year = year;
  }

  display() {
    console.log(`${this.title} (${this.year})`);
  }
}

class Book extends LibraryItem {
  constructor(title, year, author) {
    super(title, year);
    this.author = author;
  }

  display() {
    console.log(`${this.title} by ${this.author} (${this.year})`);
  }
}

class Magazine extends LibraryItem {
  constructor(title, year, issueNumber) {
    super(title, year);
    this.issueNumber = issueNumber;
  }

  display() {
    console.log(`${this.title} - Issue ${this.issueNumber} (${this.year})`);
  }
}

class Library {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
    console.log(`Added: ${item.title}`);
  }

  removeItem(title) {
    this.items = this.items.filter(item => item.title !== title);
    console.log(`Removed: ${title}`);
  }

  displayItems() {
    this.items.forEach(item => item.display());
  }
}

// Demo
const library = new Library();

const book = new Book('JavaScript: The Good Parts', 2008, 'Douglas Crockford');
const magazine = new Magazine('JavaScript Weekly', 2021, 450);

library.addItem(book);      // Added: JavaScript: The Good Parts
library.addItem(magazine);  // Added: JavaScript Weekly

library.displayItems();
// JavaScript: The Good Parts by Douglas Crockford (2008)
// JavaScript Weekly - Issue 450 (2021)

library.removeItem('JavaScript Weekly'); // Removed: JavaScript Weekly
library.displayItems(); // JavaScript: The Good Parts by Douglas Crockford (2008)
```

**Key points**
- `Book` and `Magazine` inherit from `LibraryItem` and override `display()`.
- `Library` treats any `LibraryItem` the same way via `display()`.

---

#### 12.4 Exercises with Solutions

**Exercise 1 – User Classes**

*Requirements*
- `User` with `username`, `email`, `login()`, `logout()`.
- `Admin` extends `User` and adds `deleteUser(user)`.
- `Guest` extends `User` and adds `requestAccess()`.

*Solution*

```js
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  login() { console.log(`${this.username} logged in.`); }
  logout() { console.log(`${this.username} logged out.`); }
}

class Admin extends User {
  deleteUser(user) {
    console.log(`${this.username} deleted user ${user.username}.`);
  }
}

class Guest extends User {
  requestAccess() {
    console.log(`${this.username} requested access.`);
  }
}

const u = new User('alice', 'alice@example.com');
const a = new Admin('bob', 'bob@example.com');
const g = new Guest('cara', 'cara@example.com');

u.login(); u.logout();
a.login(); a.deleteUser(u); a.logout();
g.login(); g.requestAccess(); g.logout();
```

**Exercise 2 – Library Classes**

*Requirements*
- `LibraryItem` with `title`, `year`, `display()`.
- `Book` extends `LibraryItem`, adds `author`, overrides `display()`.
- `Magazine` extends `LibraryItem`, adds `issueNumber`, overrides `display()`.

*Solution*

```js
class LibraryItem {
  constructor(title, year) {
    this.title = title;
    this.year = year;
  }
  display() {
    console.log(`${this.title} (${this.year})`);
  }
}

class Book extends LibraryItem {
  constructor(title, year, author) {
    super(title, year);
    this.author = author;
  }
  display() {
    console.log(`${this.title} by ${this.author} (${this.year})`);
  }
}

class Magazine extends LibraryItem {
  constructor(title, year, issueNumber) {
    super(title, year);
    this.issueNumber = issueNumber;
  }
  display() {
    console.log(`${this.title} - Issue ${this.issueNumber} (${this.year})`);
  }
}

const b = new Book('Clean Code', 2008, 'Robert C. Martin');
const m = new Magazine('Tech Today', 2024, 12);

b.display(); // Clean Code by Robert C. Martin (2008)
m.display(); // Tech Today - Issue 12 (2024)
```

**Takeaway:**
- Classes are the fundamental building blocks of OOP.
- Inheritance enables sharing behavior across related classes.
- Polymorphism enables different classes to behave differently.
- These patterns let you model domain entities once, reuse shared behavior, and add specialized behavior without duplicating code—exactly what OOP is built for.

---