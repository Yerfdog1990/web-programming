
---

# 📘 Web Storage in JavaScript

---

# 🔹 4.1 localStorage and sessionStorage

---

## ✅ What is Web Storage?

**Web Storage** allows web applications to store data directly in the user's browser.

👉 It is part of **HTML5** and provides a simple key-value storage mechanism.

---

## 🔍 Why Use Web Storage?

* Store user data locally
* Improve performance (no server requests)
* Persist data across sessions or within a session

---

# 🔹 Types of Web Storage

---

## ✅ 1. localStorage

### 📌 Definition

`localStorage` stores data **indefinitely** in the browser.

### 🔍 Characteristics

* Data persists after:

    * Page reload
    * Browser close
    * Computer restart
* Shared across:

    * All tabs/windows of the same domain

---

### 📌 Example

```javascript id="u6x03p"
localStorage.setItem("username", "John");
console.log(localStorage.getItem("username")); // John
```

---

## ✅ 2. sessionStorage

### 📌 Definition

`sessionStorage` stores data **only for one session**.

### 🔍 Characteristics

* Data is deleted when:

    * Tab or window is closed
* Not shared across tabs

---

### 📌 Example

```javascript id="huhqej"
sessionStorage.setItem("sessionUser", "Alice");
console.log(sessionStorage.getItem("sessionUser")); // Alice
```

---

# 🔹 Common API (Same for Both)

---

## ✅ Methods

| Method                | Description          |
| --------------------- | -------------------- |
| `setItem(key, value)` | Save data            |
| `getItem(key)`        | Retrieve data        |
| `removeItem(key)`     | Remove specific data |
| `clear()`             | Remove all data      |

---

## ✅ Properties

| Property     | Description      |
| ------------ | ---------------- |
| `length`     | Number of items  |
| `key(index)` | Get key by index |

---

## 📌 Example

```javascript id="dtdi5g"
localStorage.setItem("name", "Godfrey");

console.log(localStorage.getItem("name"));
console.log(localStorage.length);

localStorage.removeItem("name");
localStorage.clear();
```

---

# 🔹 4.2 Usage Examples

---

# 📌 Example 1: localStorage (Save & Load Username)

```html
<!DOCTYPE html>
<html>
  <head>
    <title>localStorage Example</title>
  </head>
  <body>
    <h1>localStorage Example</h1>
    <input type="text" id="username" placeholder="Enter your username">
    <button id="saveButton">Save</button>
    <button id="loadButton">Load</button>

    <script>
      const saveButton = document.getElementById('saveButton');
      const loadButton = document.getElementById('loadButton');
      const usernameInput = document.getElementById('username');

      saveButton.addEventListener('click', function() {
        const username = usernameInput.value;
        localStorage.setItem('username', username);
        alert('Username saved!');
      });

      loadButton.addEventListener('click', function() {
        const savedUsername = localStorage.getItem('username');

        if (savedUsername) {
          usernameInput.value = savedUsername;
          alert('Username loaded!\n' + savedUsername);
        } else {
          alert('No username found.');
        }
      });
    </script>
  </body>
</html>
```

---

# 📌 Example 2: sessionStorage (Temporary Data)

```html
<!DOCTYPE html>
<html>
  <head>
    <title>sessionStorage Example</title>
  </head>
  <body>
    <h1>sessionStorage Example</h1>
    <input type="text" id="sessionData" placeholder="Enter some data">
    <button id="saveSessionButton">Save</button>
    <button id="loadSessionButton">Load</button>

    <script>
      const saveSessionButton = document.getElementById('saveSessionButton');
      const loadSessionButton = document.getElementById('loadSessionButton');
      const sessionDataInput = document.getElementById('sessionData');

      saveSessionButton.addEventListener('click', function() {
        const data = sessionDataInput.value;
        sessionStorage.setItem('data', data);
        alert('Data saved in session!');
      });

      loadSessionButton.addEventListener('click', function() {
        const savedData = sessionStorage.getItem('data');

        if (savedData) {
          sessionDataInput.value = savedData;
          alert('Data loaded from session!\n' + savedData);
        } else {
          alert('No data found in session.');
        }
      });
    </script>
  </body>
</html>
```

---

# 🔹 4.3 Comparing localStorage and sessionStorage

---

## 🔍 Key Differences

| Feature     | localStorage   | sessionStorage   |
| ----------- | -------------- | ---------------- |
| Duration    | Permanent      | Session only     |
| Scope       | All tabs       | Current tab only |
| Persistence | Yes            | No               |
| Use case    | Long-term data | Temporary data   |

---

## 📌 Comparison Example

```html
<script>
  localStorage.setItem('persistentData', 'This data persists across sessions');
  console.log(localStorage.getItem('persistentData'));

  sessionStorage.setItem('temporaryData', 'This data persists only during the session');
  console.log(sessionStorage.getItem('temporaryData'));
</script>
```

---

# 🔹 4.4 Use Cases

---

## ✅ When to Use localStorage

* User preferences (theme, language)
* Shopping cart data
* Login state (non-sensitive)
* Data shared across tabs

---

## ✅ When to Use sessionStorage

* Form data during a session
* Temporary UI state
* Single-tab applications

---

# 🔹 Security and Privacy

---

## ⚠️ Important Considerations

### 🔐 1. No Encryption

* Data is stored as plain text
* Encrypt sensitive data before storing

---

### ⚠️ 2. XSS Attacks

* Malicious scripts can access storage
* Always validate and sanitize inputs

---

### 📦 3. Storage Limits

* Typically **5–10 MB per domain**
* Avoid storing large data

---

### 🧹 4. Data Management

* Remove outdated data
* Use `clear()` or `removeItem()`

---

# 🧪 Exercises with Solutions

---

# ✅ Exercise 1: Saving Settings (localStorage)

---

## 📝 Problem

* Save username and theme
* Load and apply on page load

---

## ✅ Solution

```html
<!DOCTYPE html>
<html>
<head>
  <title>Settings</title>
</head>
<body>

<input type="text" id="username" placeholder="Username">
<select id="theme">
  <option value="light">Light</option>
  <option value="dark">Dark</option>
</select>

<button id="save">Save</button>

<script>
  const username = document.getElementById("username");
  const theme = document.getElementById("theme");

  // Load saved data
  window.onload = function() {
    const savedUser = localStorage.getItem("username");
    const savedTheme = localStorage.getItem("theme");

    if (savedUser) username.value = savedUser;
    if (savedTheme) {
      theme.value = savedTheme;
      document.body.className = savedTheme;
    }
  };

  // Save data
  document.getElementById("save").onclick = function() {
    localStorage.setItem("username", username.value);
    localStorage.setItem("theme", theme.value);

    document.body.className = theme.value;

    alert("Settings saved!");
  };
</script>

</body>
</html>
```

---

# ✅ Exercise 2: Form Data (sessionStorage)

---

## 📝 Problem

* Save form data dynamically
* Restore on reload
* Provide reset option

---

## ✅ Solution

```html
<!DOCTYPE html>
<html>
<head>
  <title>Form Data</title>
</head>
<body>

<input type="text" id="name" placeholder="Name">
<input type="email" id="email" placeholder="Email">
<textarea id="message" placeholder="Message"></textarea>

<button id="reset">Reset</button>

<script>
  const fields = ["name", "email", "message"];

  // Load saved data
  window.onload = function() {
    fields.forEach(id => {
      const value = sessionStorage.getItem(id);
      if (value) document.getElementById(id).value = value;
    });
  };

  // Save on change
  fields.forEach(id => {
    document.getElementById(id).addEventListener("input", function() {
      sessionStorage.setItem(id, this.value);
    });
  });

  // Reset data
  document.getElementById("reset").onclick = function() {
    sessionStorage.clear();
    fields.forEach(id => document.getElementById(id).value = "");
  };
</script>

</body>
</html>
```

---

# 🔹 Key Takeaways

---

✔ Web Storage stores data in the browser
✔ `localStorage` → long-term storage
✔ `sessionStorage` → temporary storage
✔ Same API for both
✔ Easy to use but requires security awareness

---

# 🚀 Final Insight

👉 Web Storage is:

> **A lightweight, client-side database for modern web applications**

---

