// 1. Conditional Operator if
let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
}

// 2. Operator if...else
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// 3. Operator if...else if...else
let score = 85;

if (score >= 90) {
    console.log("Excellent!");
} else if (score >= 75) {
    console.log("Good!");
} else if (score >= 60) {
    console.log("Satisfactory.");
} else {
    console.log("Unsatisfactory.");
}

// 4. Ternary Operator
let access = (age >= 18) ? "access granted" : "access denied";

console.log(access);

// 5. Switch Statement
let day = "Sunday";
switch (day) {
    case "Monday":
        console.log("It's Monday!");
        break;
    case "Tuesday":
        console.log("It's Tuesday!");
        break;
    case "Wednesday":
        console.log("It's Wednesday!");
        break;
    case "Thursday":
        console.log("It's Thursday!");
        break;
    case "Friday":
        console.log("It's Friday!");
        break
    default:
        console.log("It's the weekend!");
}

// 6. Loops
for (let i = 0; i < 5; i++) {
    console.log(i);
}
