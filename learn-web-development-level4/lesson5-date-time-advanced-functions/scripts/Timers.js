// 1. setTimeout() Function
// The setTimeout() function executes a function once after a specified delay.
// Function to run
function greet1() {
    console.log('Hello, world!');
}

// Run after 2 seconds
//const timeoutID = setTimeout(greet1, 2000);

// Example with Arguments
function greet2(name) {
    console.log(`Hello, ${name}!`);
}

setTimeout(greet2, 2000, 'Alice');

// 2. Canceling setTimeout()
// Use clearTimeout() to cancel a scheduled function.
function greet3() {
    console.log('Hello, world!');
}

const timeoutID2 = setTimeout(greet3, 2000);

// Cancel before execution
clearTimeout(timeoutID2);

// 3. setInterval() Function
// The setInterval() function executes a function repeatedly at fixed intervals.

// Example
function greet4() {
    console.log('Hello, world!');
}

// Run every 2 seconds
//const intervalID = setInterval(greet4, 2000);

// Example with Arguments
    function greet5(name) {
        console.log(`Hello, ${name}!`);
    }

//setInterval(greet5, 2000, 'Alice');

// 4. Canceling setInterval()
// Use clearInterval() to stop repeated execution.

// Example
function greet6() {
    console.log('Hello, world!');
}

const intervalID3 = setInterval(greet6, 2000);

// Stop after 10 seconds
setTimeout(() => {
    clearInterval(intervalID3);
    console.log('Interval cleared');
}, 10000);

// Example 2: Periodic Data Request
function fetchData() {
  console.log('Fetching data...');
}

const intervalID4 = setInterval(fetchData, 10000);

// Stop after 1 minute
setTimeout(() => {
  clearInterval(intervalID4);
  console.log('Stopped fetching data');
}, 60000);
