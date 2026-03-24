
---

# 🔥 **Static Methods vs Instance Methods**

---

## ✅ **1. Instance Methods**

### **Definition**

Instance methods are:

> Methods that belong to an **object (instance)** of a class.

---

### **Key Features**

* Called on **objects**
* Can access **instance data (`this`)**
* Used for **object-specific behavior**

---

### **Example**

```javascript
class User {
  constructor(username) {
    this.username = username;
  }

  greet() {
    console.log("Hello, " + this.username);
  }
}

const user1 = new User("Alice");
user1.greet(); // Hello, Alice
```

---

### **Important**

```javascript
user1.greet(); // ✅ correct
User.greet();  // ❌ ERROR
```

---

## ✅ **2. Static Methods**

### **Definition**

Static methods are:

> Methods that belong to the **class itself**, not instances.

---

### **Key Features**

* Called on the **class**
* Cannot access instance data (`this.username`)
* Used for **utility or helper functions**

---

### **Example**

```javascript
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(5, 3)); // 8
```

---

### **Important**

```javascript
MathUtils.add(5, 3); // ✅ correct
const obj = new MathUtils();
obj.add(5, 3);       // ❌ ERROR
```

---

## ⚖️ **Comparison Table**

| Feature       | Instance Method     | Static Method        |
| ------------- | ------------------- | -------------------- |
| Belongs to    | Object              | Class                |
| Called using  | `object.method()`   | `Class.method()`     |
| Access `this` | Yes (instance data) | No instance data     |
| Use case      | Object behavior     | Utility/helper logic |

---

# 🧠 **When to Use Each**

### ✅ Use Instance Methods When:

* You need object-specific data
* Behavior depends on `this`

---

### ✅ Use Static Methods When:

* Logic does NOT depend on instance
* Utility/helper functions
* Factory methods

---

# 🔥 **Real-World Example 1: Banking System**

---

## 🏦 **BankAccount Class**

```javascript
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  // ✅ Instance method
  deposit(amount) {
    this.balance += amount;
    console.log(`${this.owner} deposited ${amount}`);
  }

  // ✅ Instance method
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
      return;
    }
    this.balance -= amount;
    console.log(`${this.owner} withdrew ${amount}`);
  }

  // ✅ Static method
  static bankRules() {
    return "Minimum balance is $0. No overdraft allowed.";
  }
}
```

---

## **Usage**

```javascript
const acc1 = new BankAccount("Alice", 100);

acc1.deposit(50);
acc1.withdraw(30);

console.log(BankAccount.bankRules());
```

---

## 🔍 **Explanation**

* `deposit()` → instance method (depends on account)
* `withdraw()` → instance method
* `bankRules()` → static (same for all accounts)

---

# 🔥 **Real-World Example 2: Library System**

---

## 📚 **Library Class**

```javascript
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  // ✅ Instance method
  addBook(book) {
    this.books.push(book);
  }

  // ✅ Instance method
  listBooks() {
    return this.books;
  }

  // ✅ Static method
  static libraryInfo() {
    return "Libraries store and lend books.";
  }
}
```

---

## **Usage**

```javascript
const lib = new Library("City Library");

lib.addBook("1984");
lib.addBook("The Hobbit");

console.log(lib.listBooks());

console.log(Library.libraryInfo());
```

---

## 🔍 **Explanation**

* `addBook()` → affects specific library
* `listBooks()` → depends on instance
* `libraryInfo()` → general info → static

---

# 🔥 **Bonus: Static Factory Method**

Static methods can also **create objects**:

```javascript
class User {
  constructor(name) {
    this.name = name;
  }

  static createGuest() {
    return new User("Guest");
  }
}

const guest = User.createGuest();
console.log(guest.name); // Guest
```

---

# 🚨 **Common Mistakes**

### ❌ Trying to access instance data in static method

```javascript
static wrong() {
  console.log(this.username); // ❌ undefined
}
```

---

### ❌ Calling static method on instance

```javascript
const user = new User("John");
user.createGuest(); // ❌ ERROR
```

---

# 🧠 **Final Takeaway**

* **Instance methods** → for object behavior
* **Static methods** → for general/shared logic

---

## 💡 Simple Rule

> If it needs `this` → instance method
> If it doesn’t → static method

---

# 🔥 **1. Static Properties**

---

## ✅ **What are Static Properties?**

Static properties are:

> Variables that belong to the **class itself**, not to instances.

---

## 🔑 **Key Characteristics**

* Declared using `static`
* Shared across all instances
* Accessed using the **class name**, not objects

---

## 📌 **Example**

```javascript
class User {
  static role = "guest";
}

console.log(User.role); // guest
```

---

## ❌ **Wrong Usage**

```javascript
const user = new User();
console.log(user.role); // ❌ undefined
```

---

## 🧠 **When to Use Static Properties**

* Constants
* Shared configuration
* Counters
* Global class-level data

---

## 🔥 **Example: Counter**

```javascript
class User {
  static count = 0;

  constructor(name) {
    this.name = name;
    User.count++;
  }
}

new User("Alice");
new User("Bob");

console.log(User.count); // 2
```

---

# 🔥 **2. Private Static Methods**

---

## ✅ **What are Private Static Methods?**

Private static methods are:

> Methods that belong to the class **and are hidden from outside access**

---

## 🔑 **Syntax**

```javascript
static #methodName() {}
```

---

## 📌 **Example**

```javascript
class MathUtils {
  static #validateNumber(num) {
    if (typeof num !== "number") {
      throw new Error("Invalid number");
    }
  }

  static square(num) {
    this.#validateNumber(num);
    return num * num;
  }
}

console.log(MathUtils.square(5)); // 25
```

---

## ❌ **Not Accessible Outside**

```javascript
MathUtils.#validateNumber(5); // ❌ SyntaxError
```

---

## 🔍 **How It Works**

* `#validateNumber` is:

    * Private ✅
    * Static ✅
* Only accessible **inside the class**

---

# ⚖️ **Comparison: Static vs Private Static**

| Feature              | Static Method    | Private Static Method |
| -------------------- | ---------------- | --------------------- |
| Access outside class | ✅ Yes           | ❌ No                 |
| Belongs to class     | ✅ Yes           | ✅ Yes                |
| Used for             | Public utilities | Internal logic        |

---

# 🔥 **Real-World Example: Banking System**

---

## 🏦 **Bank Class**

```javascript
class Bank {
  static bankName = "Global Bank";

  static #validateAmount(amount) {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }
  }

  static processTransaction(amount) {
    this.#validateAmount(amount);
    console.log(`Processed transaction of $${amount}`);
  }
}
```

---

## **Usage**

```javascript
console.log(Bank.bankName);

Bank.processTransaction(100);
```

---

## ❌ **Not Allowed**

```javascript
Bank.#validateAmount(100); // ❌ Error
```

---

# 🔥 **Real-World Example: User System**

---

```javascript
class User {
  static userCount = 0;

  constructor(name) {
    this.name = name;
    User.#incrementCount();
  }

  static #incrementCount() {
    User.userCount++;
  }

  static getUserCount() {
    return User.userCount;
  }
}

new User("Alice");
new User("Bob");

console.log(User.getUserCount()); // 2
```

---

# 🧠 **Key Concepts Simplified**

---

## 🔹 Static Property

👉 “Shared data for the whole class”

---

## 🔹 Static Method

👉 “Utility function for the class”

---

## 🔹 Private Static Method

👉 “Hidden helper function for the class”

---

# 🚨 **Common Mistakes**

---

### ❌ Accessing static property from instance

```javascript
user.userCount; // ❌ undefined
```

---

### ❌ Accessing private static method outside

```javascript
Class.#method(); // ❌ SyntaxError
```

---

### ❌ Using `this` incorrectly

Inside static methods:

```javascript
this === ClassName
```

---

# 🧠 **Final Takeaway**

* **Static properties** → shared class-level data
* **Static methods** → public utility functions
* **Private static methods** → hidden internal logic

---

## 💡 Simple Rule

> If it belongs to the class → use `static`
> If it must be hidden → use `#`

---

