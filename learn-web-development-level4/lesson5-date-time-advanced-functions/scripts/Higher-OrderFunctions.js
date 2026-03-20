// Passing Functions as Arguments
// JavaScript provides many built-in higher-order functions, especially for arrays.

// 1. forEach()
// Executes a function for each element in an array.
const numbers1 = [1, 2, 3, 4, 5];

numbers1.forEach(function(number) {
    console.log(number);
});

// 2. map()
// Creates a new array by applying a function to each element.
const numbers2 = [1, 2, 3, 4, 5];

const squaredNumbers = numbers2.map(function(number) {
    return number * number;
});

console.log(squaredNumbers);
// [1, 4, 9, 16, 25]


// 3. filter()
// Creates a new array with elements that pass a condition.
const numbers3 = [1, 2, 3, 4, 5];

const evenNumbers = numbers3.filter(function(number) {
    return number % 2 === 0;
});

console.log(evenNumbers);
// [2, 4]

// 4. reduce()
// Reduces an array to a single value.
const numbers4 = [1, 2, 3, 4, 5];

const sum = numbers4.reduce(function(total, number) {
    return total + number;
}, 0);

console.log(sum);
// 15

// Returning Functions from Other Functions
// Higher-order functions can also return new functions, enabling advanced patterns.


// 1. Currying
// Currying transforms a function into a sequence of functions, each taking one argument.

// Example
function multiply(a) {
    return function(b) {
        return a * b;
    };
}

const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(5)); // 10

const multiplyByThree = multiply(3);
console.log(multiplyByThree(5)); // 15

// 2. Creating Customizable Functions
// You can generate functions with preset behavior.

// Example
function createGreeting(greeting) {
    return function(name) {
        console.log(`${greeting}, ${name}!`);
    };
}

const sayHello = createGreeting('Hello');
sayHello('Alice');

const sayHi = createGreeting('Hi');
sayHi('Bob');