// Example 1: Simple Closure
function outerFunction() {
    let outerVariable = 'I am from the outer function';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

// const closure = outerFunction();
// closure(); // "I am from the outer function"
outerFunction()();


// Example 2: Counter with Closure
function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Example 3: Closure in a Loop
function createArrayWithClosures() {
    let arr = [];

    for (let i = 0; i < 3; i++) {
        arr[i] = function() {
            console.log(i);
        };
    }

    return arr;
}

const closures = createArrayWithClosures();

closures[0](); // 0
closures[1](); // 1
closures[2](); // 2


// Complex Use Cases for Closures
// 1. Partial Application
function multiply(a) {
    return function(b) {
        return a * b;
    };
}

const double = multiply(2);

console.log(double(5));  // 10
console.log(double(10)); // 20

// 2. Data Hiding (Private Variables)
function createPerson(name, age) {
    let _name = name;
    let _age = age;

    return {
        getName: function() {
            return _name;
        },
        getAge: function() {
            return _age;
        },
        setName: function(newName) {
            _name = newName;
        },
        setAge: function(newAge) {
            _age = newAge;
        }
    };
}

const person = createPerson('John', 30);

console.log(person.getName()); // John

person.setName('Jane');

console.log(person.getName()); // Jane
console.log(person.getAge());  // 30

// 3. Memoization (Optimization)
function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);

        if (cache[key]) {
            return cache[key];
        }

        const result = fn(...args);
        cache[key] = result;

        return result;
    };
}

function slowFunction(num) {
    console.log('Computing...');
    return num * 2;
}

const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(5)); // Computing... 10
console.log(memoizedFunction(5)); // 10 (cached)
