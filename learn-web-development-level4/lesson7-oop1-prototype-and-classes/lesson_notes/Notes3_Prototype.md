# **Introduction to Prototypes in JavaScript**

---

## **3.1 Prototype Concept**

### **What is a Prototype?**

A **prototype** is:

> An object from which other objects **inherit properties and methods**.

In JavaScript:

* Every object has a hidden property called **`[[Prototype]]`**
* This points to another object (its prototype)

---

### **Prototype Chain**

Prototypes can link to other prototypes, forming a **chain**:

```
object → prototype → prototype → null
```

This is called the **prototype chain**.

✔ If a property/method is not found:

* JavaScript looks up the chain

---

### **Example: Basic Prototype Inheritance**

```javascript
const parent = {
  greet() {
    console.log('Hello from parent');
  }
};

const child = {
  __proto__: parent
};

child.greet(); // Hello from parent
```

✅ **Explanation:**

* `child` does not have `greet()`
* JavaScript looks at its prototype (`parent`)
* Finds and executes the method

---

### **The `__proto__` Property**

* Points to the object's prototype
* Used for inheritance (though modern JS prefers other methods)

---

## **3.2 Creating and Using Prototypes**

---

### **1. Using `Object.create()`**

Creates a new object with a given prototype.

```javascript
const parent = {
  greet() {
    console.log('Hello from parent');
  }
};

const child = Object.create(parent);

child.greet(); // Hello from parent
```

✔ Recommended way to create prototype relationships

---

### **2. Adding Methods to a Prototype**

```javascript
const animal = {
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
};

const dog = Object.create(animal);
dog.name = 'Buddy';

dog.speak(); // Buddy makes a noise
```

✅ All objects inheriting from `animal` can use `speak()`

---

### **3. Changing an Object’s Prototype**

```javascript
const animal = {
  speak() {
    console.log('Animal speaks');
  }
};

const bird = {
  fly() {
    console.log('Bird flies');
  }
};

const duck = {
  __proto__: animal,
  quack() {
    console.log('Duck quacks');
  }
};

Object.setPrototypeOf(duck, bird);

duck.fly();   // Bird flies
duck.quack(); // Duck quacks
```

---

## **3.3 Working with Prototypes**

---

### **1. Checking an Object’s Prototype**

```javascript
const parent = {
  greet() {
    console.log('Hello from parent');
  }
};

const child = Object.create(parent);

console.log(Object.getPrototypeOf(child) === parent); // true
```

---

### **2. Checking Instance with `instanceof`**

```javascript
function Person(name) {
  this.name = name;
}

const john = new Person('John');

console.log(john instanceof Person); // true
```

✔ Checks if object belongs to a constructor/prototype

---

### **3. Iterating Over Properties**

#### **Including Prototype Properties**

```javascript
const parent = {
  greet() {
    console.log('Hello from parent');
  }
};

const child = Object.create(parent);
child.name = 'Child';

for (let key in child) {
  console.log(key);
}
```

✔ Output:

```
name
greet
```

---

#### **Only Own Properties**

```javascript
console.log(Object.keys(child)); // ['name']

for (const [key, value] of Object.entries(child)) {
  console.log(key, value);
}
```

✔ Output:

```
name Child
```

---

## **Exercises with Solutions**

---

### **Exercise 1: Methods in Prototype**

#### **Task**

* Create `machine` with `start()`
* Create `robot` inheriting from it
* Add `stop()` to prototype
* Call `stop()`

---

#### ✅ **Solution**

```javascript
const machine = {
  start() {
    console.log("Machine started");
  }
};

const robot = Object.create(machine);

// Add method to prototype
machine.stop = function() {
  console.log("Machine stopped");
};

// Call method
robot.stop();
```

✔ Output:

```
Machine stopped
```

---

### **Exercise 2: Prototype Chain**

#### **Task**

* `organism` → `live()`
* `animal` → `move()`
* `bird` → `fly()`
* Set chain: bird → animal → organism

---

#### ✅ **Solution**

```javascript
const organism = {
  live() {
    console.log("Organism lives");
  }
};

const animal = {
  move() {
    console.log("Animal moves");
  }
};

const bird = {
  fly() {
    console.log("Bird flies");
  }
};

// Set prototype chain
Object.setPrototypeOf(animal, organism);
Object.setPrototypeOf(bird, animal);

// Call methods
bird.live(); // from organism
bird.move(); // from animal
bird.fly();  // own method
```

✔ Output:

```
Organism lives
Animal moves
Bird flies
```

---

### **Exercise 3: Check Prototype**

#### **Task**

Check if an object inherits from another.

#### ✅ **Solution**

```javascript
const parent = {};
const child = Object.create(parent);

console.log(Object.getPrototypeOf(child) === parent); // true
```

---

### **Exercise 4: Iterate Properties**

#### **Task**

Show difference between inherited and own properties.

#### ✅ **Solution**

```javascript
const parent = { greet() {} };
const child = Object.create(parent);
child.name = "Alex";

// All properties
for (let key in child) {
  console.log(key);
}

// Own only
console.log(Object.keys(child));
```

---

## **Key Takeaways**

* Every object has a **prototype**
* Prototypes enable **inheritance**
* JavaScript uses **prototype-based inheritance**
* Important tools:

    * `__proto__`
    * `Object.create()`
    * `Object.setPrototypeOf()`
    * `Object.getPrototypeOf()`
* Prototype chains allow **shared behavior**

---

## **Final Insight**

> Prototypes are the foundation of inheritance in JavaScript.

Understanding them deeply will make:

* Classes easier
* OOP clearer
* Code more powerful

---

