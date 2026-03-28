// Example 1 – Asynchronous operation with a timer
function asyncOperation1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;

            if (success) {
                resolve('Async operation was successful');
            } else {
                reject('Async operation failed');
            }
        }, 2000);
    });
}

asyncOperation1()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log('Async operation completed');
    });

// Example 2 – Sequential execution
// Chain .then() so the second operation starts after the first finishes.
function asyncOperation2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;

            if (success) {
                resolve('Async operation was successful');
            } else {
                reject('Async operation failed');
            }
        }, 2000);
    });
}

asyncOperation2()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log('Async operation completed');
    });

// Example 3 – Parallel execution with Promise.all
// Promise.all waits for all promises to fulfill; if any rejects, it rejects immediately.
function operationOne() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Operation One completed');
            resolve('Result One');
        }, 1000);
    });
}

function operationTwo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Operation Two completed');
            resolve('Result Two');
        }, 1500);
    });
}

Promise.all([operationOne(), operationTwo()])
    .then((results) => {
        console.log('All operations completed');
        console.log(results); // ['Result One', 'Result Two']
    })
    .catch((error) => {
        console.error('One of the operations failed', error);
    });