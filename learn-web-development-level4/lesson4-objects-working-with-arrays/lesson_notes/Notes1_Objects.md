
---

# **6. Objects in JavaScript**

## **6.1 Creating Objects**

### **What is an Object?**

An **object** is a collection of data stored as **key–value pairs**, where:

* **Key (property name)** → identifies the data
* **Value** → can be any data type (string, number, boolean, function, etc.)

Objects are widely used to represent real-world entities.

---

## **1. Object Literal (Most Common Method)**

This is the simplest and most commonly used way to create objects.

```javascript
let person = {
  name: 'John',
  age: 30,
  isStudent: false,
  greet: function() {
    return 'Hello!';
  }
};
```

✔ Easy to read and write

✔ Best for creating single objects

---

## **2. Object Constructor**

Objects can also be created using the built-in `Object()` constructor.

```javascript
let person = new Object();
person.name = 'John';
person.age = 30;
person.isStudent = false;
person.greet = function() {
  return 'Hello!';
};
```

✔ Works the same as object literal

✖ More verbose (less preferred)

---

## **3. Constructor Function**

Used to create multiple objects with the same structure.

```javascript
function Person(name, age, isStudent) {
  this.name = name;
  this.age = age;
  this.isStudent = isStudent;
  this.greet = function() {
    return 'Hello!';
  };
}

let john = new Person('John', 30, false);
let jane = new Person('Jane', 25, true);
```

✔ Useful for creating many similar objects

✔ Acts like a blueprint

---

## **4. Object.create() Method**

Creates an object using a prototype.

```javascript
let personPrototype = {
  greet: function() {
    return 'Hello!';
  }
};

let john = Object.create(personPrototype);
john.name = 'John';
john.age = 30;
john.isStudent = false;
```

✔ Allows prototype-based inheritance

---

# **6.2 Accessing Properties and Methods**

## **1. Dot Notation**

Most common way to access properties.

```javascript
console.log(person.name);  
console.log(person.age);   
console.log(person.greet());
```

✔ Simple and readable

---

## **2. Bracket Notation**

Used when:

* Property names have spaces
* Property name is stored in a variable

```javascript
let person = {
  'first name': 'John',
  age: 30,
  greet: function() {
    return 'Hello!';
  }
};

console.log(person['first name']);
console.log(person['age']);

let propertyName = 'greet';
console.log(person[propertyName]());
```

✔ More flexible than dot notation

---

## **3. Modifying and Adding Properties**

```javascript
let person = {
  name: 'John',
  age: 30
};

// Modify
person.age = 31;

// Add new property
person.isStudent = false;
```

---

## **4. Deleting Properties**

```javascript
delete person.isStudent;
console.log(person.isStudent); // undefined
```

---

# **6.3 Iterating Over Object Properties**

## **1. for...in Loop**

```javascript
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

✔ Iterates through all properties

---

## **2. Object.keys()**

Returns property names:

```javascript
let keys = Object.keys(person);
console.log(keys); // ['name', 'age', 'isStudent']
```

---

## **3. Object.values()**

Returns property values:

```javascript
let values = Object.values(person);
console.log(values); // ['John', 30, false]
```

---

## **4. Object.entries()**

Returns key-value pairs:

```javascript
let entries = Object.entries(person);
console.log(entries);
// [['name', 'John'], ['age', 30], ['isStudent', false]]
```

---

# **6.4 Checking Property Existence**

## **1. in Operator**

```javascript
console.log('name' in person);       // true
console.log('isStudent' in person);  // false
```

---

## **2. hasOwnProperty() Method**

```javascript
console.log(person.hasOwnProperty('name'));      // true
console.log(person.hasOwnProperty('isStudent')); // false
```

✔ Checks only own properties (not inherited)

---

# **Exercises with Solutions**

---

## **Exercise 1: Object Properties**

### **Task**

Create an object `book` with:

* title
* author
* year
  Add method `getSummary()`.

---

### **Solution**

```javascript
let book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  year: 1925,
  getSummary: function() {
    return `${this.title} by ${this.author}, published in ${this.year}`;
  }
};

console.log(book.getSummary());
```

✔ Output:

```
The Great Gatsby by F. Scott Fitzgerald, published in 1925
```

---

## **Exercise 2: Modifying Properties**

### **Task**

* Create object `user` with name and age
* Update age
* Add email
* Log all properties

---

### **Solution**

```javascript
let user = {
  name: 'Alice',
  age: 25
};

// Modify age
user.age = 26;

// Add email
user.email = 'alice@example.com';

// Log all properties
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}
```

✔ Output:

```
name: Alice
age: 26
email: alice@example.com
```

---

# **Summary**

* Objects store data as **key–value pairs**
* Common creation methods:

    * Object literal (most used)
    * Constructor
    * Constructor function
    * Object.create()
* Properties can be:

    * Accessed (dot/bracket)
    * Modified or deleted
* Objects can be iterated using:

    * `for...in`, `Object.keys()`, `Object.values()`, `Object.entries()`
* Property existence can be checked using:

    * `in` operator
    * `hasOwnProperty()`

---

