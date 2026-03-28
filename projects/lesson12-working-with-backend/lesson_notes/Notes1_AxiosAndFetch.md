
### 5.1 Fetch API
**What it is**

The `fetch` API is built into modern browsers. It’s promise-based and gives you a flexible, low-level way to make HTTP requests.

**Main Concepts**
- `fetch(url, options)` → returns a `Promise` that resolves to a `Response` object
- You must call `response.json()` (or `.text()`, `.blob()`) to parse the body
- HTTP errors (404, 500) do **not** reject the promise — you need to check `response.ok`

**Simple GET Request**
```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network error: received an incorrect response from the server');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Request error: ', error);
  });
```

**POST Request**
```javascript
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Request error: ', error));
```

**Fetch Settings (options object)**
```javascript
const options = {
  method: 'GET',          // GET, POST, PUT, DELETE, etc.
  headers: {
    'Content-Type': 'application/json'
  },
  // body: JSON.stringify(data) // for POST/PUT
};

fetch('https://jsonplaceholder.typicode.com/posts/1', options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Request error: ', error));
```

### 5.2 Axios Library
**What it is**

Axios is an external library that wraps HTTP requests with a more convenient API. It adds features fetch lacks out of the box.

**Installation**
- npm: `npm install axios`
- Node.js: `const axios = require('axios');`
- Browser (CDN): `<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>`

**Main Concepts**
- `axios(config)` → returns a Promise that resolves to a response object
- Shortcut methods: `axios.get(url)`, `axios.post(url, data, config)`, `axios.put`, `axios.delete`
- JSON is parsed automatically

**Simple GET Request**
```javascript
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Request error: ', error);
  });
```

**Simple POST Request**
```javascript
axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'foo',
  body: 'bar',
  userId: 1
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Request error: ', error);
  });
```

### 5.3 Configuring Axios
You can pass a config object with `url`, `method`, `headers`, `data`, `params`, `timeout`, etc.

**Basic Config**
```javascript
const config = {
  method: 'get',
  url: 'https://jsonplaceholder.typicode.com/posts/1',
  headers: { 'Content-Type': 'application/json' }
};

axios(config)
  .then(response => console.log(response.data))
  .catch(error => console.error('Request error: ', error));
```

**Query Parameters**
```javascript
axios.get('https://jsonplaceholder.typicode.com/posts', {
  params: { userId: 1 }   // → ?userId=1
})
.then(response => console.log(response.data))
.catch(error => console.error('Request error: ', error));
```

**Extra Features**
- **Timeouts:** `axios.get(url, { timeout: 5000 })`
- **Request cancellation:** use `AbortController`
- **Interceptors:** run code before a request is sent or after a response arrives

**Interceptors Example**
```javascript
axios.interceptors.request.use(config => {
  console.log('Request sent to server: ', new Date());
  return config;
});

axios.interceptors.response.use(response => {
  console.log('Response received from server: ', new Date());
  return response;
});

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => console.log(response.data))
  .catch(error => console.error('Request error: ', error));
```

**Parallel Requests**
```javascript
Promise.all([
  axios.get('https://jsonplaceholder.typicode.com/todos/1'),
  axios.get('https://jsonplaceholder.typicode.com/todos/2')
])
.then(responses => {
  responses.forEach(response => console.log(response.data));
})
.catch(error => console.error('Request error: ', error));
```

### 5.4 Comparing Fetch and Axios

| Feature | Fetch | Axios |
|---------|-------|-------|
| **Ease of Use** | Simple for basics; more boilerplate for complex cases | More convenient API |
| **JSON Support** | Must call `response.json()` manually | Automatic JSON parsing |
| **Timeouts** | No built-in timeout (need `AbortController`) | Built-in `timeout` option |
| **Interceptors** | Not supported | Supported for request/response |
| **Browser Support** | Modern browsers only | Works on older browsers too |

---

### Exercises

#### Exercise 1 – Fetching Data with Axios
**Task**

Write a function `fetchTodo` that performs a GET request to `https://jsonplaceholder.typicode.com/todos/1` using Axios. Log the task data on success, log an error on failure.

**Solution**
```javascript
const axios = require('axios'); // skip this line if using CDN

function fetchTodo() {
  axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Request error: ', error);
    });
}

fetchTodo();
```

#### Exercise 2 – Sending Data with Fetch
**Task**

Write a function `postData` that performs a POST request to `https://jsonplaceholder.typicode.com/posts`. Send `{ title: 'foo', body: 'bar', userId: 1 }` and log the response. Include the `Content-Type: application/json` header.

**Solution**
```javascript
function postData() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Request error: ', error));
}

postData();
```

**Key Takeaways**
- `fetch` is native but requires manual JSON parsing and error checking.
- `axios` auto-parses JSON, supports timeouts, and has interceptors.
- Both use promises and can be combined with `async/await` for cleaner code.

---