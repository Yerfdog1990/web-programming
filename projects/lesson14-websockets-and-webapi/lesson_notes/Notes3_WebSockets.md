
---

# 📘 Introduction to WebSockets

---

# 🔹 6.1 Basic WebSocket Concepts

---

## ✅ What is WebSocket?

**WebSocket** is a communication protocol that enables:

> 🔁 **Full-duplex (two-way) communication over a single TCP connection**

👉 This means:

* Client and server can **send messages anytime**
* No need to repeatedly request data like HTTP

---

## 🔍 Why WebSockets?

Traditional HTTP:

* Request → Response → Connection closes

WebSocket:

* Persistent connection
* Real-time communication

---

## ✅ Advantages of WebSocket

---

### 🔁 1. Two-way Communication

* Both client and server can send messages anytime

---

### ⚡ 2. Lower Latency

* No repeated HTTP requests
* Faster communication

---

### 🖥️ 3. Reduced Server Load

* Fewer requests
* Persistent connection

---

## 🔹 Main Components

---

### ✅ 1. WebSocket Client

* Runs in browser
* Initiates connection

---

### ✅ 2. WebSocket Server

* Accepts connections
* Handles communication

---

# 🔹 6.2 Working with WebSocket in JavaScript

---

## ✅ Creating a Connection

```javascript
const socket = new WebSocket('ws://server.example.com/chat');
```

---

## 🔍 Important

* `ws://` → insecure WebSocket
* `wss://` → secure WebSocket (HTTPS equivalent)

---

# 🔹 WebSocket Events

---

| Event     | Description            |
| --------- | ---------------------- |
| `open`    | Connection established |
| `message` | Message received       |
| `error`   | Error occurred         |
| `close`   | Connection closed      |

---

## 📌 Example: Basic WebSocket Client

```javascript
const socket = new WebSocket('ws://server.example.com/chat');

socket.addEventListener('open', () => {
  console.log('Connected to the WebSocket server');
  socket.send('Hello Server!');
});

socket.addEventListener('message', (event) => {
  console.log('Message from server:', event.data);
});

socket.addEventListener('error', (event) => {
  console.error('WebSocket error:', event);
});

socket.addEventListener('close', () => {
  console.log('Disconnected from WebSocket server');
});
```

---

# 🔹 6.3 WebSocket Server (Node.js)

---

## ✅ Installation

```bash
npm install ws
```

---

## 📌 Example Server

```javascript
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('New client connected');

  ws.on('message', (message) => {
    console.log('Received:', message);
    ws.send(`Server says: ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is running on ws://localhost:8080');
```

---

# 🔹 6.4 Events and Methods

---

## ✅ Client-Side Events

* `onopen`
* `onmessage`
* `onclose`
* `onerror`

---

## ✅ Client Methods

```javascript
socket.send(data);
socket.close();
```

---

## ✅ Server-Side Events

* `connection`
* `message`
* `close`
* `error`

---

## ✅ Server Methods

```javascript
ws.send(data);
ws.close();
```

---

# 🔹 6.5 Practical Example: Real-Time Chat

---

# 📌 Client-Side (HTML + JS)

```html
<!DOCTYPE html>
<html>
<head>
  <title>WebSocket Chat</title>
</head>
<body>

<input type="text" id="message" placeholder="Enter your message" />
<button onclick="sendMessage()">Send</button>

<div id="chat"></div>

<script>
  const socket = new WebSocket('ws://localhost:8080');
  const chat = document.getElementById('chat');

  socket.onopen = function() {
    console.log('WebSocket is open now.');
  };

  socket.onmessage = function(event) {
    const message = document.createElement('p');
    message.textContent = event.data;
    chat.appendChild(message);
  };

  socket.onclose = function() {
    console.log('WebSocket is closed now.');
  };

  socket.onerror = function(event) {
    console.error('WebSocket error:', event);
  };

  function sendMessage() {
    const input = document.getElementById('message');
    socket.send(input.value);
    input.value = '';
  }
</script>

</body>
</html>
```

---

# 📌 Server-Side (Broadcast Chat)

```javascript
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (ws) => {
  console.log('New client connected!');

  ws.on('message', (message) => {
    console.log('Received:', message);

    server.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });

  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
});

console.log('WebSocket server is running on ws://localhost:8080');
```

---

# 🧪 Exercises with Solutions

---

# ✅ Exercise 1: WebSocket Connection

---

## 📝 Problem

* Connect to `ws://echo.websocket.org`
* Send message
* Handle all events

---

## ✅ Solution

```javascript
const socket = new WebSocket('ws://echo.websocket.org');

socket.onopen = function() {
  console.log('Connection established');
  socket.send('Hello WebSocket!');
};

socket.onmessage = function(event) {
  console.log('Received:', event.data);
};

socket.onerror = function(error) {
  console.error('Error:', error);
};

socket.onclose = function() {
  console.log('Connection closed');
};
```

---

# ✅ Exercise 2: WebSocket Chat

---

## 📝 Problem

* Input + button
* Send messages
* Display received messages

---

## ✅ Solution

```html
<!DOCTYPE html>
<html>
<body>

<input type="text" id="msg" placeholder="Type message">
<button onclick="sendMsg()">Send</button>

<div id="output"></div>

<script>
  const socket = new WebSocket('ws://localhost:8080');
  const output = document.getElementById('output');

  socket.onmessage = function(event) {
    const p = document.createElement('p');
    p.textContent = event.data;
    output.appendChild(p);
  };

  function sendMsg() {
    const input = document.getElementById('msg');
    socket.send(input.value);
    input.value = '';
  }
</script>

</body>
</html>
```

---

# 🔹 Key Takeaways

---

✔ WebSocket enables real-time communication

✔ Persistent connection (unlike HTTP)

✔ Full-duplex (two-way) messaging

✔ Ideal for:

* Chat apps
* Games
* Notifications

---

# 🚀 Final Insight

👉 WebSockets are:

> **The foundation of real-time web applications**

---

