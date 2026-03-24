// Declaring Static Methods
// 🔹 What are Static Methods?
// Static methods are methods that belong to the class itself, not to instances (objects) of the class.
class MathHelper {
    static add(a, b) {
        return a + b;
    }

    static multiply(a, b) {
        return a * b;
    }
}

console.log(MathHelper.add(5, 3));      // 8
console.log(MathHelper.multiply(5, 3)); // 15

// Using Static Methods
// Static methods are useful in several real-world scenarios:

// 🔹 1. Helper Functions
// Used for utility operations related to a class.
class StringUtil {
    static capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    static reverse(str) {
        return str.split('').reverse().join('');
    }
}

console.log(StringUtil.capitalize('hello')); // Hello
console.log(StringUtil.reverse('hello'));    // olleh

// 🔹 2. Factory Methods
// Used to create objects with custom logic
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    static fromObject(obj) {
        return new Car(obj.brand, obj.model);
    }
}

const carData = { brand: 'Toyota', model: 'Camry' };
const car = Car.fromObject(carData);

console.log(car.brand); // Toyota
console.log(car.model); // Camry

// 🔹 3. Data Processing
// Static methods can process data without needing an instance
class DataProcessor {
    // Formatting data
    static formatCurrency(amount) {
        return `$${amount.toFixed(2)}`;
    }

    static formatDate(date) {
        const options = {year: 'numeric', month: 'long', day: 'numeric'};
        return date.toLocaleDateString('en-US', options);
    }

    // Calculations
    static calculateAverage(numbers) {
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        return sum / numbers.length;
    }

    static calculatePercentage(value, total) {
        return ((value / total) * 100).toFixed(2) + '%';
    }

    // Transformations
    static transformToUpperCase(arr) {
        return arr.map(item => item.toUpperCase());
    }

    static transformObjectKeys(obj) {
        const transformed = {};
        for (let key in obj) {
            transformed[key.toUpperCase()] = obj[key];
        }
        return transformed;
    }
}

// Test Formatting
console.log(DataProcessor.formatCurrency(1234.5));        // $1234.50
console.log(DataProcessor.formatDate(new Date()));        // Current date formatted

// Test Calculations
const scores = [85, 90, 78, 92, 88];
console.log(DataProcessor.calculateAverage(scores));      // 86.6
console.log(DataProcessor.calculatePercentage(75, 100));  // 75.00%

// Test Transformations
const names = ['alice', 'bob', 'charlie'];
console.log(DataProcessor.transformToUpperCase(names));   // ['ALICE', 'BOB', 'CHARLIE']

const user = {name: 'John', age: 30, city: 'NYC'};
console.log(DataProcessor.transformObjectKeys(user));     // { NAME: 'John', AGE: 30, CITY: 'NYC' }


// Static Methods and Inheritance
class Animal {
    static identify() {
        return 'This is an animal';
    }
}

class Dog extends Animal {
    static identify() {
        return 'This is a dog';
    }
}
console.log(Animal.identify()); // This is an animal
console.log(Dog.identify());    // This is a dog

// Accessing Static Methods Inside Other Methods
// Static methods can call other static methods using:
// - this (refers to the class)
// - Class name
class Geometry {
    static calculateArea(radius) {
        return Math.PI * radius * radius;
    }

    static describeCircle(radius) {
        const area = this.calculateArea(radius);
        return `A circle with radius ${radius} has an area of ${area.toFixed(2)}.`;
    }
}

console.log(Geometry.describeCircle(5));
// A circle with radius 5 has an area of 78.54.

// Static Methods and Class Instances
// ❌ Static methods cannot be called on instances
class Calculator {
    static add(a, b) {
        return a + b;
    }
}

const calc = new Calculator();

console.log(Calculator.add(3, 4)); // 7
// console.log(calc.add(3, 4));       // Error