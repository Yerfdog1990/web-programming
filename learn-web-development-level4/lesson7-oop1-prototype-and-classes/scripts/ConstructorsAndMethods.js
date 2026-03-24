// Class Constructors
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

console.log(person1.name); // Alice
console.log(person2.age);  // 25

// Class Methods
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        this.mileage = 0;
    }

    drive(distance) {
        this.mileage += distance;
        console.log(`${this.brand} ${this.model} drove ${distance} miles. Total mileage: ${this.mileage}`);
    }

    getDetails() {
        return `${this.brand} ${this.model}, Mileage: ${this.mileage}`;
    }
}

const myCar = new Car('Toyota', 'Camry');

myCar.drive(50);
console.log(myCar.getDetails());

// Private Methods and Properties
class BankAccount {
    #balance = 0;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    #validateAmount(amount) {
        if (amount <= 0) {
            throw new Error('Amount must be positive.');
        }
    }

    deposit(amount) {
        this.#validateAmount(amount);
        this.#balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
    }

    withdraw(amount) {
        this.#validateAmount(amount);
        if (amount > this.#balance) {
            throw new Error('Insufficient funds.');
        }
        this.#balance -= amount;
        console.log(`Withdrew ${amount}. New balance: ${this.#balance}`);
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(100);

account.deposit(50);
account.withdraw(30);
console.log("Balance: ", account.getBalance());