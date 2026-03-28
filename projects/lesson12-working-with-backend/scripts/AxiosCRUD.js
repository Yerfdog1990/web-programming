// Using Axios for CRUD

// 1. Create(POST)
const axios = require('axios'); // or import axios from 'axios';

const createData = async (data) => {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
        console.log('Created:', response.data);
    } catch (error) {
        console.error('Error creating data:', error);
    }
};

createData({ title: 'foo', body: 'bar', userId: 1 });

// 2. Read(GET)
const readData = async (id) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        console.log('Read:', response.data);
    } catch (error) {
        console.error('Error reading data:', error);
    }
};

readData(1);

// 3. Update(PUT)
const updateData = async (id, data) => {
    try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, data);
        console.log('Updated:', response.data);
    } catch (error) {
        console.error('Error updating data:', error);
    }
};

updateData(1, { title: 'foo', body: 'bar', userId: 1 });

// 4. Delete(DELETE)
const deleteData = async (id) => {
    try {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (response.status === 200) {
            console.log('Deleted:', id);
        }
    } catch (error) {
        console.error('Error deleting data:', error);
    }
};

deleteData(1);
