// 1. Mixins and Composition
// Mixins and composition are alternatives to classical inheritance.
// They let you assemble behavior from small, reusable pieces instead of building deep class hierarchies.

// Example 1: Mixins
const CanEat1 = {
    eat1() {
        console.log(`${this.name} is eating...`);
    }
};

const CanWalk1 = {
    walk1() {
        console.log(`${this.name} is walking...`);
    }
};

class Person1 {
    constructor(name) {
        this.name = name;
    }
}

// Copy methods from mixins to the class prototype
Object.assign(Person1.prototype, CanEat1, CanWalk1);

const person1 = new Person1('John');
person1.eat1();  // Eating...
person1.walk1(); // Walking...

// 2. Composition
// Composition builds objects by combining other objects or functions rather than inheriting from them.

// Example 1: Function composition
function canEat2(obj) {
    obj.eat = function() {
        console.log(`${this.name} is eating...`);
    };
}

function canWalk2(obj) {
    obj.walk = function() {
        console.log(`${this.name} is walking...`);
    };
}

function Person2(name) {
    this.name = name;
}

const person2 = new Person2('George');
canEat2(person2);
canWalk2(person2);

person2.eat();  // Eating...
person2.walk(); // Walking...

// Example 2: Composition with classes
class CanEat3 {
    eat() {
        console.log('Eating...');
    }
}

class CanWalk3 {
    walk() {
        console.log('Walking...');
    }
}

class Person3 {
    constructor(name) {
        this.name = name;
        // Create instances of CanEat and CanWalk
        this.eater = new CanEat3();
        this.walker = new CanWalk3();
    }

    // Delegate methods to the corresponding instances
    eat() {
        this.eater.eat();
    }

    walk() {
        this.walker.walk();
    }
}

const person3 = new Person3('Michael');
person3.eat();  // Eating...
person3.walk(); // Walking...