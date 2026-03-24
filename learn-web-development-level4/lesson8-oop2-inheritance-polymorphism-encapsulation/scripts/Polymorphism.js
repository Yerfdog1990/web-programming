// 1. Subtype polymorphism via inheritance
class Animal {
    makeSound() {
        console.log('Some generic sound');
    }
}

class Dog extends Animal {
    makeSound() {
        console.log('Woof!');
    }
}

class Cat extends Animal {
    makeSound() {
        console.log('Meow!');
    }
}

function playWithAnimal(animal) {
    animal.makeSound(); // works for any Animal subclass
}

const dog = new Dog();
const cat = new Cat();

playWithAnimal(dog); // Woof!
playWithAnimal(cat); // Meow!
// The same call animal.makeSound() produces different output depending on the actual object.


// 2. Polymorphism through duck typing
class Bird {
    fly() {
        console.log('Flying...');
    }
}

class Airplane {
    fly() {
        console.log('Jet engine roaring...');
    }
}

function takeOff(flyingObject) {
    flyingObject.fly(); // no inheritance required
}

takeOff(new Bird()); // Flying...
takeOff(new Airplane()); // Jet engine roaring...
// takeOff doesn’t care if the argument is a Bird or Airplane — only that it has fly().


// 3. Polymorphism through functions
function greetMorning() {
    console.log('Good morning!');
}

function greetEvening() {
    console.log('Good evening!');
}

function greet(greetingFunction) {
    greetingFunction();
}

greet(greetMorning); // Good morning!
greet(greetEvening); // Good evening!
// greet receives a function and executes it, enabling polymorphic behavior.


// 4.  Simulating method overloading
class Calculator {
    add(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        } else if (Array.isArray(a) && Array.isArray(b)) {
            return a.concat(b);
        } else {
            throw new Error('Invalid arguments');
        }
    }
}

const calc = new Calculator();
console.log(calc.add(1, 2)); // 3
console.log(calc.add([1, 2], [3, 4])); // [1, 2, 3, 4]