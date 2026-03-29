// Linear Congruential Generator
let a = 41;
let c = 11119;
let m = 11113;
let seed = 1;

function getNextRandom() {
    seed = (a * seed + c) % m;
    return seed;
}

for (let t = 0; t < 10; t++) {
    console.log(getNextRandom());
}

// The switch Statement
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName); // Wednesday

// Nullish Coalescing Operator (??)
let foo = null ?? 'default';
console.log(foo); // 'default'

let bar = 0 ?? 'default';
console.log(bar); // 0

let baz = undefined ?? 'default';
console.log(baz); // 'default'