//  Example: Basic Inheritance
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

// The super Keyword
// The super keyword is used to access the parent class.

// 🔹 1. Calling the Base Class Constructor
// 👉 Important Rule: You must call super() before using this in a subclass constructor.
class Animal1 {
    constructor(name) {
        this.name = name;
    }
}

class Dog1 extends Animal1 {
    constructor(name, breed) {
        super(name); // calls parent constructor
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog1 = new Dog1('Rex', 'Labrador');

console.log(dog1.name);   // Rex
console.log(dog1.breed);  // Labrador
dog1.speak();             // Rex barks.

// 2. Calling Base Class Methods
class Animal2 {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog2 extends Animal2 {
    speak() {
        super.speak(); // call parent method
        console.log(`${this.name} barks.`);
    }
}

const dog2 = new Dog2('Rex');
dog2.speak();

// Method Overriding
// 🔹 What is Method Overriding?
// When a subclass redefines a method from the parent class.
class Animal3 {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog3 extends Animal3 {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const animal3 = new Animal3('Generic Animal');
animal3.speak(); // Generic Animal makes a noise.

const dog3 = new Dog3('Rex');
dog3.speak(); // Rex barks.

// Adding New Methods in Derived Classes
// A subclass can introduce new functionality not present in the base class.
class Animal4 {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog4 extends Animal4 {
    speak() {
        super.speak();
        console.log(`${this.name} barks.`);
    }

    fetch() {
        console.log(`${this.name} is fetching.`);
    }
}

const dog4 = new Dog4('Rex');
dog4.speak(); // Rex barks.
dog4.fetch(); // Rex is fetching.

// Checking Inheritance
// 🔹 1. instanceof
// Checks if an object belongs to a class.
console.log(dog instanceof Dog);    // true
console.log(dog instanceof Animal); // true

// 🔹 2. isPrototypeOf()
// Checks prototype chain relationship.
console.log(Animal.prototype.isPrototypeOf(Dog.prototype)); // true