// Built-in Iterables
// Example 1: Iterating over an Array
const array = [1, 2, 3, 4, 5];

for (const item of array) {
    console.log(item);
}

// Example 2: Iterating over a String
const string = 'hello';

for (const char of string) {
    console.log(char);
}

// Creating Your Own Iterators
// 📌 Example 1: Custom Iterator
function createIterator(array) {
    let index = 0;

    return {
        next: function() {
            if (index < array.length) {
                return { value: array[index++], done: false };
            } else {
                return { done: true };
            }
        }
    };
}

const myIterator = createIterator([1, 2, 3]);

console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());

// Creating Iterables
// To make an object iterable:
// - Add [Symbol.iterator]()
// - Return an iterator

// 📌 Example 2: Iterable using Generator
const myIterable = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }
};

for (const value of myIterable) {
    console.log(value);
}

// Built-in Methods for Iterables

//📌 1. Spread Operator (...) -> Used to expand or copy iterables.
const array1 = [1, 2, 3];
const newArray = [...array1, 4, 5, 6];

console.log(newArray);

// 2. Destructuring -> Extract values from iterables.
const [first, second, third] = [1, 2, 3];

console.log(first);
console.log(second);
console.log(third);

// 📌 3. Array.from() -> Converts iterables into arrays.
const set = new Set([1, 2, 3, 4, 5]);
const array2 = Array.from(set);

console.log(array2);