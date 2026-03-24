// Encapsulation with Closures (Before ES2022)
function createCounter() {
    let count = 0; // This is our 'private' variable

    return {
        increment() {
            count++;
            console.log(count);
        },
        decrement() {
            count--;
            console.log(count);
        },
        getCount() {
            return count;
        }
    };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
console.log(counter.getCount()); // 2
counter.decrement(); // 1
// console.log(counter.count); // This would be undefined, showing 'count' is private

// Private Fields in ES2022
// ES2022 brought in true private fields and methods using the # symbol.
class Person {
    #name; // private field
    #age; // private field

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }

    setName(name) {
        this.#name = name;
    }

    setAge(age) {
        if (age > 0) { // Simple validation example
            this.#age = age;
        }
    }
}

const person = new Person('Alice', 30);
console.log(person.getName()); // "Alice"
console.log(person.getAge()); // 30

person.setName('Bob');
person.setAge(25);

console.log(person.getName()); // "Bob"
console.log(person.getAge()); // 25

// console.log(person.#name); // This would throw an error: 'Private field '#name' must be declared in an enclosing class'

// Private Methods
// Just like fields, methods can also be private using the # symbol.
class BankAccount {
    #balance; // private field

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            this.#logTransaction('deposit', amount); // Calling a private method internally
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            this.#logTransaction('withdraw', amount); // Calling a private method internally
        }
    }

    getBalance() {
        return this.#balance;
    }

    #logTransaction(type, amount) { // Private method
        console.log(`Transaction: ${type} -> ${amount}`);
    }
}

const account = new BankAccount(1000);
account.deposit(500); // "Transaction: deposit 500"
console.log("Balance: ", account.getBalance()); // 1500

account.withdraw(200); // "Transaction: withdraw 200"
console.log("Balance: ", account.getBalance()); // 1300

// account.#logTransaction('test', 100); // This would throw an error: 'Private field '#logTransaction' must be declared in an enclosing class'