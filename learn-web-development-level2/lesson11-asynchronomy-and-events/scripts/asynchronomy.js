//  Timers

// 1. setTimeout
// Executes a function once after a delay (in milliseconds).
console.log('Start');

setTimeout(() => {
    console.log('Executed after 2 seconds');
}, 2000);

console.log('End');

// Repeats a function every interval ms until cleared.
let counter = 0;

const intervalID = setInterval(() => {
    counter++;
    console.log(`Counter: ${counter}`);
    if (counter >= 5) {
        clearInterval(intervalID);
    }
}, 1000);

