// 1. User Management in a Web Application
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
    constructor(username, email, role) {
        super(username, email);
        this.role = role;
    }

    deleteUser(user) {
        console.log(`${this.username} with the role ${this.role} deleted user ${user.username}.`);
    }
}

class Guest extends User {
    constructor(username, email, role) {
        super(username, email);
        this.role = role;
    }

    requestAccess() {
        console.log(`${this.username} with the role ${this.role} requested access.`);
    }
}

// Demo
const admin = new Admin('John', 'admin@example.com', 'admin');
const guest = new Guest('James', 'guest@example.com', 'guest');

admin.login();               // John logged in.
admin.deleteUser(guest);     // John with the role admin deleted user James.
admin.logout();              // John logged out.

guest.login();               // James logged in.
guest.requestAccess();       // James with the role guest requested access.
guest.logout();              // James logged out.


console.log("\n----------------------- Product Management in an Online Store ---------------------")
// 2. Product Management in an Online Store
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


console.log("\n----------------------- Library Management ---------------------")
// Library Management
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