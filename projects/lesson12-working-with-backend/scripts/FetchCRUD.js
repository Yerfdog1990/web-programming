// Using Fetch for CRUD

// 1. Create(POST)
const createData = async (data) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    const result = await response.json();
    console.log('Created:', result);
};

createData({ title: 'foo', body: 'bar', userId: 1 });

// 2. Read(GET)
const readData = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const result = await response.json();
    console.log('Read:', result);
};

readData(1);

// 3. Update(PUT)
const updateData = async (id, data) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    const result = await response.json();
    console.log('Updated:', result);
};

updateData(1, { title: 'foo', body: 'bar', userId: 1 });

// 4. Delete(DELETE)
const deleteData = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        console.log('Deleted:', id);
    } else {
        console.error('Failed to delete:', id);
    }
};

deleteData(1);