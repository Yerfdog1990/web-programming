// var
console.log(x); // undefined
var x = 10;
console.log(x); // 10

// let
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;
console.log(y); // 20

// const
console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 30;
console.log(z); // 30