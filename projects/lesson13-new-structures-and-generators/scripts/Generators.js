// Using Generators
// ✅ The next() Method
function* generatorFunction1() {
    yield 1;
    yield 2;
    yield 3;
}

const gen1 = generatorFunction1();

console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());

// 🔹 Iterating Over a Generator
// Generators are iterable, so they work with for...of.
function* generatorFunction2() {
    yield 1;
    yield 2;
    yield 3;
}

const gen2 = generatorFunction2();

for (const value of gen2) {
    console.log(value);
}

// Returning Values in Generators
// Generators can use the "return" keyword.
function* generatorFunction3() {
    yield 1;
    yield 2;
    return 3;
    yield 4; // never runs
}

const gen3 = generatorFunction3();

console.log(gen3.next());
console.log(gen3.next());
console.log(gen3.next());
console.log(gen3.next());

// Advanced Generator Use Cases
// ✅ Passing Values into Generators
// Generators support two-way communication.
function* generatorFunction4() {
    const value1 = yield 1;
    const value2 = yield value1 + 2;
    yield value2 + 3;
}

const gen4 = generatorFunction4();

console.log(gen4.next());
console.log(gen4.next(10));
console.log(gen4.next(20));
console.log(gen4.next());

// 🔹 Error Handling in Generators
// Generators can handle errors using try...catch.
function* generatorFunction5() {
    try {
        yield 1;
        yield 2;
    } catch (error) {
        console.log('Error caught:', error.message);
    }
}

const gen5 = generatorFunction5();

console.log(gen5.next());
console.log(gen5.throw(new Error('Something went wrong')));

// 🔹 Infinite Generators
// Generators can create infinite sequences.
function* infiniteSequence6() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const gen6 = infiniteSequence6();

console.log(gen6.next().value);
console.log(gen6.next().value);
console.log(gen6.next().value);
console.log(gen6.next().value);
console.log(gen6.next().value);
console.log(gen6.next().value);