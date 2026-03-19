// 1. Object Literal Method
// Methods can be defined directly inside an object.
let person = {
    name: 'John',
    age: 30,
    greet: function() {
        return `Hello, my name is ${this.name}`;
    }
};

console.log(person.greet());

// 2. Shorthand Method Syntax (ES6)
// A shorter and cleaner way to define methods.
let person1 = {
    name: 'John',
    age: 30,
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};

console.log(person1.greet());

// 3. Adding Methods After Object Creation
// Methods can be added later.
let person2 = {
    name: 'John',
    age: 30
};

person2.greet = function() {
    return `Hello, my name is ${this.name}`;
};

console.log(person2.greet());

// 4. Using Constructor Functions
// Methods can be included in constructor functions.
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    };
}

let john = new Person('John', 30);
let jane = new Person('Jane', 25);

console.log(john.greet());
console.log(jane.greet());

// Using Object Methods

// 1. Calling Methods with Dot Notation
console.log(person.greet());

// 2. Calling Methods with Bracket Notation
let result = person['greet']();
console.log(result);

// 3. Calling Methods Within Other Methods
let calculator = {
    a: 0,
    b: 0,
    setValues(a, b) {
        this.a = a;
        this.b = b;
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.setValues(2, 3);

console.log(calculator.sum()); // 5
console.log(calculator.mul()); // 6

// 4. Using this in Methods
// The this keyword refers to the current object.
let car = {
    brand: 'Benz',
    model: 'GLE 300',
    getInfo() {
        return `Brand: ${this.brand} \nModel: ${this.model}`;
    }
};

console.log(car.getInfo());

// 5. Passing Methods as Callbacks
let person3 = {
    name: 'John',
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

//setTimeout(person3.greet, 1000); // Hello, my name is undefined

// Fix using bind()
//setTimeout(person3.greet.bind(person), 1000);
// Fix using arrow function
//setTimeout(() => person3.greet(), 1000);

// Sharing Methods

//1. Using Prototypes
//Methods can be shared across all instances.

function Person1(name, age) {
    this.name = name;
    this.age = age;
}

Person1.prototype.greet = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

let john1 = new Person1('John', 30);
let jane1 = new Person1('Jane', 25);

console.log(john1.greet());
console.log(jane1.greet());

// 2. Borrowing Methods (call/apply)
let person4 = {
    name: 'John',
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};

let person5 = {
    name: 'Jane'
};

console.log(person4.greet.call(person5));
console.log(person4.greet.apply(person5));
console.log(person4.greet());