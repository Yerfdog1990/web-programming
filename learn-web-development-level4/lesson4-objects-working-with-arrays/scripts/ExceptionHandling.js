// 1. The try...catch Block
try {
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    console.error('An error occurred:', error);
}

// 2. The finally Block
try {
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    console.error('An error occurred:', error);
} finally {
    console.log('This will always execute.');
}

// 3. The throw Statement
function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed.');
    }
    return a / b;
}

try {
    let result = divide(10, 0);
    console.log(result);
} catch (error) {
    console.error('An error occurred:', error.message);
}

// Advanced Examples and Use Cases

// 1. Handling Multiple Errors
try {
    JSON.parse('{ malformed JSON string }');
} catch (error) {
    if (error instanceof SyntaxError) {
        console.error('JSON Syntax Error:', error.message);
    } else {
        console.error('Unexpected Error:', error);
    }
} finally {
    console.log('Parsing attempt finished.');
}

// 2. Nested try...catch
try {
    try {
        let result = division(10, 0);
        console.log(result);
    } catch (innerError) {
        console.error('Inner catch:', innerError.message);
        throw innerError;
    }
} catch (outerError) {
    console.error('Outer catch:', outerError.message);
} finally {
    console.log('Nested try...catch finished.');
}

function division(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed.');
    }
    return a / b;
}

// 3. Using finally for Cleanup
    function openFile(filePath) {
        console.log(`Opening file: ${filePath}`);
        return { name: filePath }; // Returning a mock file object
    }

    function closeFile(file) {
        console.log(`Closing file: ${file.name}`);
    }

    function readFile(filePath) {
        let file;
        try {
            file = openFile(filePath);
        } catch (error) {
            console.error('Error reading file:', error.message);
        } finally {
            if (file) {
                closeFile(file);
            }
            console.log('File processing finished.');
        }
    }

    readFile('scripts/example.txt');