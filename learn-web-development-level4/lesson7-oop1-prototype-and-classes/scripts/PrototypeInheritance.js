// Simple Inheritance Example

// Step 1: Base Object
const animal = {
    eat() {
        console.log('Eating...');
    },

    sleep() {
        console.log('Sleeping...');
    }
};

// Step 2: Create Child Object
const dog = Object.create(animal);

dog.bark = function() {
    console.log('Barking...');
};

// Step 3: Use Inheritance
dog.eat();   // Eating...
dog.sleep(); // Sleeping...
dog.bark();  // Barking...

// Deep Prototype Inheritance
// Prototype Chain
// Objects can inherit from other objects, forming a chain:
const animal1 = {
    eat() {
        console.log('Eating...');
    }
};

const mammal = Object.create(animal1);
mammal.walk = function() {
    console.log('Walking...');
};

const dog1 = Object.create(mammal);
dog1.bark = function() {
    console.log('Barking...');
};

dog1.eat();   // Eating...
dog1.walk();  // Walking...
dog1.bark();  // Barking...

// Checking Prototype Chain
console.log(animal1.isPrototypeOf(mammal)); // true
console.log(mammal.isPrototypeOf(dog1));    // true
console.log(animal1.isPrototypeOf(dog1));    // true

// Overriding Methods
// What is Method Overriding?
// A child object can replace a method from its parent.
const animal2 = {
    speak() {
        console.log('Animal speaks');
    }
};

const dog2 = Object.create(animal2);

dog2.speak = function() {
    console.log('Dog barks');
};

animal2.speak(); // Animal speaks
dog2.speak();    // Dog barks

// Calling Parent Method
const animal3 = {
    speak() {
        console.log('Animal speaks');
    }
};

const dog3 = Object.create(animal3);

dog3.speak = function() {
    animal3.speak.call(this);
    console.log('Dog barks');
};

dog3.speak();

// Advanced Usage of Prototype Inheritance
// 1. Extending Built-in Objects
Array.prototype.sum = function() {
    return this.reduce((acc, value) => acc + value, 0);
};

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.sum()); // 15

// 2. Multi-Level Hierarchies
const livingBeing = {
    breathe() {
        console.log('Breathing...');
    }
};

const animal4 = Object.create(livingBeing);
animal4.eat = function() {
    console.log('Eating...');
};

const mammal2 = Object.create(animal4);
mammal2.walk = function() {
    console.log('Walking...');
};

const dog4 = Object.create(mammal2);
dog4.bark = function() {
    console.log('Barking...');
};

dog4.breathe();
dog4.eat();
dog4.walk();
dog4.bark();