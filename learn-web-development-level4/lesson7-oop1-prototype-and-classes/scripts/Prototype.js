// Example: Basic Prototype Inheritance
const parent = {
    greet() {
        console.log('Hello from parent');
    }
};

const child1 = {
    __proto__: parent
};

child1.greet(); // Hello from parent

// Creating and Using Prototypes
// 1. Using Object.create()
// Creates a new object with a given prototype.
const parent1 = {
    greet() {
        console.log('Hello from parent');
    }
};

const child = Object.create(parent);

child.greet(); // Hello from parent

// 2. Adding Methods to a Prototype
const animal = {
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
};

const dog = Object.create(animal);
dog.name = 'Buddy';

dog.speak(); // Buddy makes a noise

// 3. Changing an Object’s Prototype
const animal2 = {
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
    __proto__: animal2,
    quack() {
        console.log('Duck quacks');
    }
};

Object.setPrototypeOf(duck, bird);

duck.fly();   // Bird flies
duck.quack(); // Duck quacks

// Working with Prototypes
// 1. Checking an Object’s Prototype
const parent2 = {
    greet() {
        console.log('Hello from parent');
    }
};

const child2 = Object.create(parent2);

console.log(Object.getPrototypeOf(child2) === parent2); // true

// 2. Checking Instance with instanceof
function Person(name) {
    this.name = name;
}

const john = new Person('John');

console.log(john instanceof Person); // true

// 3. Iterating Over Properties
// Including Prototype Properties
const parent3 = {
    greet() {
        console.log('Hello from parent');
    }
};

const child3 = Object.create(parent3);
child3.name = 'Child';

for (let key in child3) {
    console.log(key);
}