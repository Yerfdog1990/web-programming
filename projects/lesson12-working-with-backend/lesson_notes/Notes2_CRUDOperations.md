
### 6.1 Introduction to CRUD
**What CRUD means**

CRUD stands for the four basic operations you perform on data:
- **Create** → Add a new record
- **Read** → Retrieve existing records
- **Update** → Modify an existing record
- **Delete** → Remove a record

**HTTP Methods for CRUD**

Web APIs map these operations to HTTP verbs:
- **POST** → Create a new resource
- **GET** → Read/retrieve a resource
- **PUT** → Update (replace the entire resource)
- **PATCH** → Update (modify part of the resource)
- **DELETE** → Delete a resource

**Why CRUD matters**

CRUD is the foundation of most web apps — creating user accounts, editing profiles, viewing lists, deleting items. It defines how the client talks to the server.

**Tools**

- **Fetch API** – built into browsers, promise-based
- **Axios** – popular library with a simpler API, automatic JSON parsing, timeouts, interceptors

---

### 6.2 Using Fetch for CRUD

**Create (POST)**
```javascript
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
```

**Read (GET)**
```javascript
const readData = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const result = await response.json();
  console.log('Read:', result);
};

readData(1);
```

**Update (PUT)**
```javascript
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
```

**Delete (DELETE)**
```javascript
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
```

### 6.3 Using Axios for CRUD
Axios auto-parses JSON and throws errors for bad status codes.

**Create (POST)**
```javascript
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
```

**Read (GET)**
```javascript
const readData = async (id) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log('Read:', response.data);
  } catch (error) {
    console.error('Error reading data:', error);
  }
};

readData(1);
```

**Update (PUT)**
```javascript
const updateData = async (id, data) => {
  try {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, data);
    console.log('Updated:', response.data);
  } catch (error) {
    console.error('Error updating data:', error);
  }
};

updateData(1, { title: 'foo', body: 'bar', userId: 1 });
```

**Delete (DELETE)**
```javascript
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
```

### 6.4 Tips for Using CRUD
- **Error Handling:** Wrap calls in `try…catch` (Axios) or check `response.ok` (Fetch)
- **Data Validation:** Validate data before sending it
- **Authentication:** Add access tokens in request headers
- **Pagination & Filtering:** Use query params (`?page=2&limit=10`)
- **Caching:** Cache frequent GET results to reduce network load

---

### Exercises

#### Exercise 1 – Creating a Record with Fetch
**Task**

Write an async function `createPost` that POSTs `{ title: 'New Post', body: 'This is a new post', userId: 1 }` to `https://jsonplaceholder.typicode.com/posts` and logs the result. Handle errors.

**Solution**
```javascript
async function createPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'New Post', body: 'This is a new post', userId: 1 })
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('Error creating post:', error);
  }
}

createPost();
```

#### Exercise 2 – Updating a Record with Fetch
**Task**

Write an async function `updatePost` that PUTs `{ title: 'Updated Post', body: 'This post has been updated', userId: 1 }` to `https://jsonplaceholder.typicode.com/posts/1` and logs the updated result. Handle errors.

**Solution**
```javascript
async function updatePost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'Updated Post', body: 'This post has been updated', userId: 1 })
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('Error updating post:', error);
  }
}

updatePost();
```

**Key Takeaways**
- CRUD = Create (POST), Read (GET), Update (PUT/PATCH), Delete (DELETE)
- Fetch gives you low-level control; you must parse JSON and check `response.ok`
- Axios simplifies the API, auto-parses JSON, and handles errors more ergonomically

---