// An example of OOP
class Dog {
    constructor(name) {
        this.name = name; // state
    }

    bark() { // behavior
        console.log(this.name + " says Woof!");
    }
}

const dog1 = new Dog("Buddy");
dog1.bark();

// Abstraction
class Car {
    start() {
        console.log("Car started");
    }
}

const car = new Car();
car.start();


// Encapsulation
class BankAccount {
    #balance = 0; // private variable

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance());

// Inheritance
class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}

class Jackal extends Animal {
    bark() {
        console.log("Dog barks");
    }
}

const dog = new Jackal();
dog.speak(); // inherited
dog.bark();

// Polymorphism
class Animal1 {
    speak() {
        console.log("Animal speaks");
    }
}

class Dog1 extends Animal1 {
    speak() {
        console.log("Dog barks");
    }
}

class Cat extends Animal1 {
    speak() {
        console.log("Cat meows");
    }
}

const animals = [new Dog1(), new Cat()];

animals.forEach(animal => animal.speak());