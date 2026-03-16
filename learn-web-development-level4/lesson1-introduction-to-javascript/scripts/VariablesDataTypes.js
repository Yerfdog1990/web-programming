// 1. Global variables
 var myGlobalName = "John";
function myGlobalVariable() {
    console.log(myGlobalName, " -> Global variable accessed from the function scope");
}
myGlobalVariable();
console.log(myGlobalName, " -> Global variable accessed from the global scope");

// 2. Local variables
function myLocalVariable() {
    // a) using "let"
    let myLocalName = "Jane";
    console.log(myLocalName, " -> Local variable accessed from the function scope");

    // b) using "const"
    const myConstName = "Bob";
    console.log(myConstName, " -> Local variable accessed from the function scope");
}
myLocalVariable();
//console.log(myLocalName, " -> Local variable cannot be accessed from the global scope"); // ReferenceError: myLocalName is not defined
//console.log(myConstName, " -> Local variable cannot be accessed from the global scope"); // ReferenceError: myConstName is not defined

// 3. Function scope vs. Block scope

// Case 1: Function scope with a local variable
function testFunctionScopeCase1() {
    let message = "Hello from function scope";

    if (true) {
        var x = 10;
        const y = 15;
        let z = 20;
    }
    console.log(x); // Accessible here
    //console.log(y); // Inaccessible here -> ReferenceError: y is not defined
    //console.log(z); // Inaccessible here -> ReferenceError: z is not defined
    console.log(message); // Accessible inside the function
}
testFunctionScopeCase1();
//console.log(message); // ReferenceError: message is not defined

// console.log(x);  // ReferenceError: x is not defined
// console.log(y); // Inaccessible here -> ReferenceError: y is not defined
// console.log(z); // Inaccessible here -> ReferenceError: z is not defined


// Case 2: Block scope declared with "let"
if (true) {
    let y = 20;
    console.log(y); // Accessible here
}

// console.log(y); // ReferenceError: y is not defined

// Case 3: Block scope declared with "const"
if (true) {
    const z = 30;
    console.log(z);
}

//console.log(z); // ReferenceError: z is not defined


// Data types

// 1.Number Type
let sum = 10 + 5;
console.log("10 + 5 = ", sum); // 15

// 2.String Type
let greeting = "Hello, world!";
console.log(greeting);

//3.Boolean Type
let isLoggedIn = true;
console.log(isLoggedIn);

if (!isLoggedIn) {
    console.log("Welcome back!");
} else {
    console.log("Please log in.");
}

// 4.Null Type
let nullValue = null; // A variable is intentionally set to "no value"
console.log(nullValue); // null

// 5.Undefined Type
let undefinedValue; // A variable that has been declared but not assigned a value.
console.log(undefinedValue); // undefined


