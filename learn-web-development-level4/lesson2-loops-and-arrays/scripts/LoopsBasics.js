// 1. while Loop
// The while loop runs a block of code as long as a condition is true.
let i = 0;
while (i < 5) {
    console.log(`Iteration number ${i}`);
    i++;
}

// 2. for Loop
// The for loop is the most commonly used loop when the number of iterations is known.
for (let i = 0; i < 5; i++) {
    console.log(`Iteration number ${i}`);
}


//Looping Through an Array
let array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
// do...while Loop
// The do...while loop executes code at least once, even if the condition is false.
let x = 0;
do {
    console.log(`Iteration number ${i}`);
    x++;
} while (x < 5);

// Using while to Accumulate Values
let n = 0;
let y = 0;

while (n < 3) {
    n++;
    y += n;
}

console.log(y);

// do...while Executes At Least Once
let z = 0;

do {
    console.log(z);
    z++;
} while (z < 0);