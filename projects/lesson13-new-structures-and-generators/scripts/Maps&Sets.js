// 🔹 Creating a Map
const map1 = new Map();

// 🔹 Adding Elements (set)
map1.set('key1', 'value1');
map1.set(2, 'value2');
map1.set({ name: 'objectKey' }, 'value3');

console.log(map1);

// 🔹 Retrieving Elements (get)
const map2 = new Map();

map2.set('key1', 'value1');
map2.set(2, 'value2');

console.log(map2.get('key1')); // value1
console.log(map2.get(2));      // value2

// 🔹 Checking for Keys (has)
console.log(map2.has('key1')); // true
console.log(map2.has('key3')); // false

// 🔹 Deleting Elements (delete)
map2.delete('key1');
console.log(map2.has('key1')); // false

console.log(map2);

// 🔹 Clearing the Map (clear)
map2.clear();
console.log(map2.size); // 0

// 🔹 Iterating Over a Map
const map3 = new Map();
map3.set('key1', 'value1');
map3.set(2, 'value2');

for (const [key, value] of map3) {
    console.log(`${key}: ${value}`);
}


// 🔹 Creating a Set
const set1 = new Set();

// 🔹 Adding Elements (add)
set1.add(1);
set1.add('value2');
set1.add({ name: 'objectValue' });

console.log(set1);

// 🔍 Duplicate Behavior
set1.add(2);
set1.add(2); // ignored
console.log(set1);
// 👉 Set automatically removes duplicates

// 🔹 Checking Values (has)
console.log(set1.has(1));        // true
console.log(set1.has('value3')); // false

// 🔹 Deleting Elements (delete)
set1.delete(1);
console.log(set1.has(1)); // false

// 🔹 Clearing the Set (clear)
set1.clear();
console.log(set1.size); // 0

// 🔹 Iterating Over a Set
const set2 = new Set();
set2.add(1);
set2.add('value2');

for (const value of set2) {
    console.log(value);
}