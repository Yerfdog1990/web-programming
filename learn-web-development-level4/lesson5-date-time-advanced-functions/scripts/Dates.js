// Creating a Date Object

// 1. Current Date and Time
// If no arguments are passed, it returns the current date and time.
const now = new Date();
console.log(now);

// 2. Specific Date (String Format)
const specificDate = new Date('2024-07-07T10:00:00');
console.log(specificDate);
// ✔ Uses ISO-like string format

// 3. Using Numeric Values
const anotherDate = new Date(2024, 6, 7, 10, 0, 0);
console.log(anotherDate);

// Date Object Methods


// 1. Getting Date Components
const currentDate = new Date();

console.log(currentDate.getFullYear()); // Year
console.log(currentDate.getMonth());    // Month (0–11)
console.log(currentDate.getDate());     // Day (1–31)
console.log(currentDate.getHours());    // Hours (0–23)
console.log(currentDate.getMinutes());  // Minutes (0–59)
console.log(currentDate.getSeconds());  // Seconds (0–59)

// 2. Setting Date Components
const date = new Date();

date.setFullYear(2025);
date.setMonth(0); // January
date.setDate(15);
date.setHours(12);
date.setMinutes(30);
date.setSeconds(45);

console.log(date.toString());

// Formatting Dates
// JavaScript provides several methods to convert dates into readable strings.

// 1. toLocaleDateString()
// Formats date only based on locale.
const currentDate1 = new Date();

console.log(currentDate1.toLocaleDateString('en-US')); // MM/DD/YYYY
console.log(currentDate1.toLocaleDateString('en-GB')); // DD/MM/YYYY
console.log(currentDate1.toLocaleDateString('ru-RU')); // DD.MM.YYYY

// 2. toLocaleTimeString()
// Formats time only.
const currentTime = new Date();

console.log(currentTime.toLocaleTimeString('en-CA'));
console.log(currentTime.toLocaleTimeString('en-GB'));

// 3. toLocaleString()
// Formats date + time together.
const currentDate_Time = new Date();

console.log(currentDate_Time.toLocaleString('en-CA'));
console.log(currentDate_Time.toLocaleString('en-GB'));

// 4. toISOString()
// Returns date in ISO 8601 format (standard format used in APIs).

const currentDate2 = new Date();

console.log(currentDate2.toISOString());
// Example: "2026-03-20T01:53:57.109Z"


// Formatting Numbers
// 1. Number.toLocaleString()
// Formats numbers according to locale.

const number1 = 1234567.89;

console.log(number1.toLocaleString());        // Default locale
console.log(number1.toLocaleString('de-DE')); // German format

// 2. Intl.NumberFormat
// Provides more control over formatting.

const number2 = 1234567.89;

const usFormatter = new Intl.NumberFormat('en-US');
console.log(usFormatter.format(number2));

const deFormatter = new Intl.NumberFormat('de-DE');
console.log(deFormatter.format(number2));

// Currency Formatting
const customFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

console.log(customFormatter.format(number2)); // "$1,234,567.89"