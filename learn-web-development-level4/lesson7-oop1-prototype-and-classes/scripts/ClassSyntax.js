// Basic Class Declaration
class Person1 {
    greet() {
        console.log('Hello!');
    }
}

// Create instance
const person1 = new Person1();
person1.greet(); // Hello!

// Class Expression
// Classes can also be created as expressions.
// 1. Named Class Expression
const Person2 = class PersonClass {
    greet() {
        console.log('Hello!');
    }
};

const person2 = new Person2();
person2.greet();

// 2. Unnamed Class Expression
const Person3 = class {
    greet() {
        console.log('Hello!');
    }
};

const person3 = new Person3();
person3.greet();

// Class Fields and Methods
// Class Properties (Fields)
// 1. Using Constructor (Traditional Way)
class User1 {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
}

const user1 = new User1('john_doe', 'john@example.com');

console.log(user1.username);
console.log(user1.email);

// 2. Using Class Fields (Modern ES2022)
class User2 {
    username = 'default_username';
    email = 'default@example.com';

    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
}

// Class Methods
// Methods are defined inside the class body.

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

// Creating Complex Objects
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
