// Global Scope

// Example 1: Global Variables
var globalVar = 'I am a global variable';

function showGlobalVar() {
    console.log(globalVar); // Access to global variable
}

showGlobalVar();
console.log(globalVar);

// Example 2: Global Functions
function globalFunction() {
    return 'I am a global function';
}

console.log(globalFunction());

// Local Scope (Function Scope)
function localScopeExample() {
    var localVar = 'I am a local variable';
    console.log(localVar);
}

localScopeExample();
//console.log(localVar); // ❌ Error

// Block Scope
if (true) {
    let blockVar = 'I am a block-scoped variable';
    console.log(blockVar);
}

//console.log(blockVar); // ❌ Error

// Example 6: const in Loop
/*
for (const i = 0; i < 3; i++) {
    console.log(i);
}

console.log(i); // ❌ Error
*/

// Example 7: Nested Blocks
if (true) {
    let outerVar = 'I am in the outer block';

    if (true) {
        let innerVar = 'I am in the inner block';

        console.log(outerVar);
        console.log(innerVar);
    }

    console.log(outerVar);
    //console.log(innerVar); // ❌ Error
}