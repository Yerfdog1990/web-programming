// 1. Basic Syntax
// Extract values from an object into variables:
const person = {
    name: 'John',
    age: 30,
    isStudent: false
};

const { name, age, isStudent } = person;

console.log(name);
console.log(age);
console.log(isStudent);

// 2. Assigning to New Variable Names
// You can rename variables while destructuring:
const person1 = {
    name: 'John',
    age: 30
};

const { name: personName, age: personAge } = person1;

console.log(personName);
console.log(personAge);

// 3. Default Values
// If a property does not exist, a default value is used:
const person2 = {
    name1: 'John',
    age1: 30
};

const { name1, isStudent1 = true } = person2;

console.log(isStudent1);
console.log(name1);

// 4. Nested Destructuring
// Extract values from nested objects:
const person3 = {
    name2: 'John',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const { name2, address: { city, country } } = person3;

console.log(city);
console.log(country);
console.log(name2);

// 5. Destructuring in Function Parameters
function greet({ name, age }) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

const person5 = {
    name: 'John',
    age: 30
};

greet(person5);

// Array Destructuring

// 1. Basic Syntax
const fruits = ['apple', 'banana', 'cherry'];
const [first, second, third] = fruits;

console.log(first);
console.log(second);
console.log(third);

// 2. Skipping Elements
const fruits1 = ['berry', 'pineapple', 'orange'];
const [first1, , third1] = fruits1;

console.log(first1);
console.log(third1);

// 3. Default Values
const fruits2 = ['apple'];
const [first2, second2 = 'lemon'] = fruits2;

console.log(second2);

// 4. Nested Destructuring
const numbers = [1, [2, 3], 4];
const [one, [two, three], four] = numbers;

console.log(two);
console.log(three);

// 5. Destructuring in Function Parameters
function getFullName([firstName, lastName]) {
    return `${firstName} ${lastName}`;
}

const nameArray = ['John', 'Doe'];

console.log(getFullName(nameArray));

// Practical Uses of Destructuring
// 1. Swapping Variables
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

// 2. Extracting Nested Data (e.g., API Response)
const response = {
    data: {
        user: {
            id: 1,
            name6: 'John Doe',
            email: 'john@example.com'
        }
    }
};

const { data: { user: { id, name6, email } } } = response;

console.log(name6);
console.log(email);

// 3. Default Values in Functions
function createUser({ name = 'Anonymous', age = 0, isAdmin = false } = {}) {
    return {
        name,
        age,
        isAdmin
    };
}

console.log(createUser({ name: 'Alice', age: 25 }));
console.log(createUser());

// 4. Using Rest Operator with Arrays
    const numbers1 = [1, 2, 3, 4, 5];
const [first3, second3, ...rest] = numbers1;

console.log(first3);
console.log(second3);
console.log(rest);
