function divide1(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

console.log(divide1(10, 2)); // 5
// console.log(divide1(10, 0)); // Error handled

const { createLogger, format, transports } = require('winston');

const logger = createLogger({ level: 'debug' });

function divide2(a, b) {
    logger.debug(`Dividing ${a} by ${b}`);

    if (b === 0) {
        logger.error("Attempt to divide by zero!");
        return null;
    }

    return a / b;
}

console.log(divide2(10, 0)); // 5

// Example Using debugger Keyword
function faultyFunction(a, b) {
    debugger; // Execution pauses here
    let result = a / b;
    return result;
}

console.log(faultyFunction(10, 0));