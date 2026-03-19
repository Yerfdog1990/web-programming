// Object Literal (Most Common Method)
// This is the simplest and most commonly used way to create objects.
let person = {
    name: 'John',
    age: 30,
    isStudent: false,
    greet: function() {
        return 'Hello!';
    }
};
console.log(person.greet());
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.isStudent);

// Object Constructor
// Objects can also be created using the built-in Object() constructor.
let animal = new Object();
animal.name = 'John';
animal.age = 30;
animal.isStudent = false;
animal.greet = function() {
    return 'Hello!';
};
console.log(animal.greet());
console.log(animal);
console.log(animal.name);
console.log(animal.age);
console.log(animal.isStudent);

// Constructor Function
// Used to create multiple objects with the same structure.
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
console.log(john);
console.log(john.greet());
console.log(john.age);
console.log(john.isStudent);
console.log(jane);
console.log(jane.greet());
console.log(jane.age);
console.log(jane.isStudent);

// Object.create() Method
// Creates an object using a prototype.
let personPrototype = {
    greet: function() {
        return 'Hello!';
    }
};

let james = Object.create(personPrototype);
james.name = 'John';
james.age = 30;
james.isStudent = false;

console.log(james);
console.log(james.greet());

// Accessing Properties and Methods

// 1. Dot Notation
// Most common way to access properties.
console.log("--------------------\n1. Dot Notation");
console.log(person.name);
console.log(person.age);
console.log(person.greet());

// 2. Bracket Notation
console.log("--------------------\n2. Bracket Notation");
let person1 = {
    'first name': 'John',
    age: 30,
    greet: function() {
        return 'Hello!';
    }
};

console.log(person1['first name']);
console.log(person1['age']);

let propertyName = 'greet';
console.log(person1[propertyName]());

// 3. Modifying and Adding Properties
console.log("--------------------\n3. Modifying and Adding Properties");
let person2 = {
    name: 'John',
    age: 30
};

// Original age
console.log(person2.age);
// Modify
person2.age = 31;
// New age
console.log(person2.age);
// Add new property
person2.isStudent = false;
console.log(person2.isStudent);

// Deleting Properties
delete person.isStudent;
console.log(person.isStudent); // undefined

// Iterating Over Object Properties

// 1. for...in Loop
console.log("--------------------\n1. for...in Loop");
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// 2. Object.keys()
// Returns property names:
console.log("--------------------\n2. Object.keys()");
console.log(Object.keys(person));

//or
console.log("--------------------\n2. Object.keys() (Alternative)");
let keys = Object.keys(person);
console.log(keys); // ['name', 'age', 'isStudent']

// 3. Object.values()
// Returns property values:
console.log("--------------------\n3. Object.values()");
console.log(Object.values(person));

// or
console.log("--------------------\n3. Object.values() (Alternative)");
let values = Object.values(person);
console.log(values); // ['John', 30, false]

// 4. Object.entries()
// Returns key-value pairs:
console.log("--------------------\n4. Object.entries()");
console.log(Object.entries(person));

// or
console.log("--------------------\n4. Object.entries() (Alternative)");
let entries = Object.entries(person);
console.log(entries); // [['name', 'John'], ['age', 30], ['isStudent', false]]

// Checking Property Existence

// 1. in Operator
console.log("--------------------\n1. in Operator");
console.log('name' in person); // true
console.log('isStudent' in person); // true
console.log('height' in person); // false

// 2. hasOwnProperty() Method
console.log("--------------------\n2. hasOwnProperty()");
console.log(person.hasOwnProperty('name'));      // true
console.log(person.hasOwnProperty('isStudent')); // false
