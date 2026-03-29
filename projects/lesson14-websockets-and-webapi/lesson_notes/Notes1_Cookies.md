
---

# 📘 Working with Cookies in JavaScript

---

# 🔹 5.1 Basic Cookie Properties

---

## ✅ What are Cookies?

Cookies are **small pieces of data** stored in the user's browser.

👉 They are used for:

* Session management (login/authentication)
* User preferences (theme, language)
* Tracking and analytics

---

## 🔍 Historical Context

* Cookies existed **before Web Storage (localStorage/sessionStorage)**
* Still widely used, especially for:

    * Authentication
    * Server communication

---

## 🔹 Main Cookie Properties

---

### ✅ 1. Name and Value

```text
name=value
```

👉 Example:

```javascript
document.cookie = "username=JohnDoe";
```

---

### ✅ 2. Domain and Path

* `domain` → defines which domain can access the cookie
* `path` → defines URL path scope

👉 Example:

```javascript
document.cookie = "username=JohnDoe; path=/";
```

✔ `path=/` → accessible across entire site

---

### ✅ 3. Lifetime

Controls how long the cookie exists.

* `expires` → specific date
* `max-age` → duration in seconds

👉 Example:

```javascript
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2024 23:59:59 GMT";
```

---

### ✅ 4. Security

* `secure` → only sent over HTTPS
* `HttpOnly` → cannot be accessed via JavaScript

👉 Example:

```javascript
document.cookie = "username=JohnDoe; secure";
```

---

# 🔹 Setting Cookies

---

## 📌 Basic Example

```javascript
document.cookie = "username=JohnDoe";
```

---

## 📌 With Additional Parameters

```javascript
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
```

---

## 🔍 Key Insight

* Setting a cookie does **not overwrite all cookies**
* It updates/adds a specific cookie

---

# 🔹 5.2 Managing Cookies

---

# ✅ 1. Reading Cookies

All cookies are stored in:

```javascript
document.cookie
```

👉 Returns a **single string**:

```text
"name=value; name2=value2"
```

---

## 📌 Example Function

```javascript
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
  
  return null;
}
```

---

## 📌 Usage

```javascript
const username = getCookie('username');
console.log(username);
```

---

# ✅ 2. Updating Cookies

👉 Just set the cookie again:

```javascript
document.cookie = "username=JaneDoe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
```

---

# ✅ 3. Deleting Cookies

👉 Set expiration date in the past:

```javascript
document.cookie = "username=JohnDoe; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
```

---

# 🔹 5.3 Cookie Utility Functions

---

## 📌 Full Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>Cookie Example</title>
</head>
<body>

<button onclick="handleSetCookie()">Set Cookie</button>
<button onclick="handleGetCookie()">Get Cookie</button>
<button onclick="handleDeleteCookie()">Delete Cookie</button>

<script>
  function setCookie(name, value, days) {
    let expires = "";

    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }

    document.cookie = name + "=" + value + expires + "; path=/";
  }

  function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');

    for (let c of cookies) {
      c = c.trim();
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length);
      }
    }

    return null;
  }

  function deleteCookie(name) {
    document.cookie = name + "=; Max-Age=0; path=/";
  }

  function handleSetCookie() {
    setCookie("username", "JohnDoe", 7);
    alert("Cookie saved for 7 days");
  }

  function handleGetCookie() {
    const value = getCookie("username");
    alert(value ? value : "Not found");
  }

  function handleDeleteCookie() {
    deleteCookie("username");
    alert("Cookie deleted");
  }
</script>

</body>
</html>
```

---

# 🔹 5.4 Server-Side Cookies (Node.js)

---

## 📌 Example using Express

```javascript
const express = require('express');
const app = express();

app.get('/setcookie', (req, res) => {
  res.cookie('secureServerCookie', 'ServerJohnDoe', {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: true,
    sameSite: 'strict'
  });

  res.send('Secure server cookie set');
});

app.get('/getcookie', (req, res) => {
  const cookie = req.cookies.secureServerCookie;
  res.send(`Cookie value: ${cookie}`);
});

app.listen(3000);
```

---

## 🔍 Key Features

* `httpOnly` → not accessible via JS
* `secure` → HTTPS only
* `sameSite` → prevents CSRF attacks

---

# 🔹 Real-World Uses of Cookies

---

✔ Authentication (session tokens)

✔ User preferences

✔ Tracking user behavior

✔ Personalization

---

# 🔹 Security Considerations

---

## ⚠️ Important

* Cookies are **not encrypted by default**
* Vulnerable to:

    * XSS (Cross-Site Scripting)
    * CSRF (Cross-Site Request Forgery)

---

## ✅ Best Practices

* Use `HttpOnly` for sensitive cookies
* Use `Secure` for HTTPS
* Validate user inputs
* Avoid storing sensitive data directly

---

# 🧪 Exercises with Solutions

---

# ✅ Exercise 1: Cookies Username

---

## 📝 Problem

* Prompt user name
* Save in cookie (7 days)
* Retrieve and display

---

## ✅ Solution

```javascript
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split(';');

  for (let c of cookies) {
    c = c.trim();
    if (c.startsWith(name + "=")) {
      return c.substring(name.length + 1);
    }
  }

  return null;
}

// Prompt user
const username = prompt("Enter your name:");
setCookie("username", username, 7);

// Display cookie
const savedName = getCookie("username");
alert("Saved username: " + savedName);
```

---

# ✅ Exercise 2: Cookie Deletion

---

## 📝 Problem

* Set cookie
* Delete using button

---

## ✅ Solution

```html
<!DOCTYPE html>
<html>
<body>

<button id="deleteBtn">Delete Cookie</button>

<script>
  // Set cookie
  const date = new Date();
  date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);

  document.cookie = "sessionId=12345; expires=" + date.toUTCString() + "; path=/";

  // Delete function
  function deleteCookie() {
    document.cookie = "sessionId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    alert("Cookie deleted");
  }

  document.getElementById("deleteBtn").addEventListener("click", deleteCookie);
</script>

</body>
</html>
```

---

# 🔹 Key Takeaways

---

✔ Cookies store small data in the browser

✔ Stored as key-value pairs

✔ Controlled using:

* expires / max-age
* path / domain

✔ Can be:

* Created
* Read
* Updated
* Deleted

---

# 🚀 Final Insight

👉 Cookies are:

> **A foundational browser storage mechanism mainly used for server-client communication and session management**

---

