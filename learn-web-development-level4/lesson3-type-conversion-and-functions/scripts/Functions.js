// Declaring Functions (Function Declarations)

// 1. Non-parameterized function
function sayHello() {
    console.log("Hello, World!");
}
// Calling the function
sayHello();

// 2. Parameterized function
function greet(name) {
    console.log(`Hello, ${name}!`);
}
// Calling the function with a parameter
greet("Alice");

// Note: Function declarations are hoisted because of JavaScript’s hoisting mechanism
console.log(greeting4('Charlie from hoisted function call')); // Works

function greeting4(name) {
    return `Hello, ${name}!`;
}

// Named vs Anonymous Functions

// Anonymous Function (Common)
const greeting1 = function(name) {
    return `Hello, ${name}! Welcome to anonymous function`;
};
console.log(greeting1('Eve'));

// Named Function Expression
const greeting2 = function sayHello(name) {
    return `Hello, ${name}! Welcome to named function expression`;

};
console.log(greeting2('Frank'));

// Note: Named functions are not hoisted. They are only defined when they are called.
//console.log(greetings('Bob')); // Error

const greetings = function(name) {
    return `Hello, ${name}!`;
};
console.log(greetings('Charlie')); // Works

// Arrow Functions

// Example 1: Full Syntax
const greet1 = (name) => {
    return `Hello, ${name}!`;
};
console.log(greet1('Charlie')); // Hello, Charlie!

// Example 2: Short Syntax
const greet2 = name => `Hello, ${name}!`;
console.log(greet2('Dana')); // Hello, Dana!

// Arrow Function Rules

// 1. Single Parameter -> Parentheses are optional
const square = x => x * x;
console.log(square(5));

// 2. Multiple Parameters
const add = (a, b) => a + b;
console.log(add(3, 4));

// 3. No Parameters -> Parentheses are mandatory
const greet3 = () => "Hello!";
console.log(greet3());

// 4. Multiple Statements
const greet4 = (name) => {
    let message = `Hello, ${name}!`;
    if(name === 'Grace') return message;
};
console.log(greet4('Grace'));

// Callback Functions
function greet5(name) {
    return `Hello, ${name}!`;
}

function processUserInput(callback) {
    const name = "Alice";
    console.log(callback(name));
}

processUserInput(greet5);