
---

# 9. Form Events

To make forms functional, you need to understand and manage the events that happen when users interact with form elements. Form events allow JavaScript to respond to user actions such as typing, clicking buttons, selecting text, or submitting a form.

---

## 9.1 Main Form Events

In HTML, forms can trigger various events when users interact with elements like input fields, buttons, checkboxes, radio buttons, and select lists.

**Main form events include:**

* **submit**

    * Triggered when a form is submitted
* **reset**

    * Triggered when a form is reset to its initial values
* **focus**

    * Triggered when an element gains focus
* **blur**

    * Triggered when an element loses focus
* **change**

    * Triggered when the value of a form element changes and loses focus
* **input**

    * Triggered every time the value of a form element changes
* **select**

    * Triggered when text is selected inside an input or textarea

---

## 9.2 The `submit` Event

* The `submit` event happens when a user submits a form.
* Commonly triggered by clicking a **Submit** button.
* Used to:

    * Validate data before sending it to the server
    * Prevent submission if there are errors
    * Perform custom actions before submission

### Example: Handling the submit event

#### HTML

```html
<form id="my-form" action="/submit" method="post">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username">
  <button type="submit">Submit</button>
</form>
```

#### JavaScript

```javascript
const form = document.getElementById('my-form');

form.addEventListener('submit', function (event) {
  const username = document.getElementById('username').value;

  if (username === '') {
    alert('Please enter a username.');
    event.preventDefault(); // prevent form submission
  }
});
```

---

## 9.3 The `reset` Event

* The `reset` event occurs when a form is reset.
* Usually triggered by clicking a **Reset** button.
* Useful for:

    * Clearing validation messages
    * Logging form resets
    * Showing user feedback

### Example: Handling the reset event

#### HTML

```html
<form id="my-form">
  <label for="name">Name:</label><br>
  <input type="text" id="name" name="name"><br><br>

  <label for="email">Email:</label><br>
  <input type="email" id="email" name="email"><br><br>

  <label for="password">Password:</label><br>
  <input type="password" id="password" name="password">

  <div style="margin-top: 10px">
    <button type="reset">Reset</button>
  </div>
</form>

<p id="log"></p>
```

#### JavaScript

```javascript
const form = document.getElementById('my-form');
const log = document.getElementById('log');

form.addEventListener('reset', function () {
  log.textContent = 'Form has been reset!';
});
```

---

## 9.4 The `focus` and `blur` Events

* **focus**

    * Triggered when an input gains focus
    * Used to show hints or guidance
* **blur**

    * Triggered when an input loses focus
    * Often used for validation

### Example: Handling the focus event

#### HTML

```html
<form id="my-form">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username">
  <div id="username-hint" style="display: none;">
    You'll see this hint when the field is focused.
    It'll remain visible even after focus is shifted.
  </div>
</form>
```

#### JavaScript

```javascript
const usernameInput = document.getElementById('username');
const hint = document.getElementById('username-hint');

usernameInput.addEventListener('focus', function () {
  hint.style.display = 'block';
});
```

---

### Example: Handling the blur event

#### HTML

```html
<form id="my-form">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username">
  <div id="username-error" style="display: none; color: red;">
    Error will show only if the field is empty after losing focus
  </div>
</form>
```

#### JavaScript

```javascript
const usernameInput = document.getElementById('username');
const error = document.getElementById('username-error');

usernameInput.addEventListener('blur', function () {
  error.style.display = usernameInput.value === '' ? 'block' : 'none';
});
```

---

## 9.5 The `input` Event

* Fires **every time** the value of a form element changes
* Does **not** require losing focus
* Ideal for:

    * Real-time validation
    * Live feedback
    * Character counters

### Example: Real-time email validation

#### HTML

```html
<html lang="en">
<head>
  <style>
    input {
      outline: none;
    }
    .valid {
      border-color: green;
    }
    .invalid {
      border-color: red;
    }
  </style>
</head>
<body>
  <form id="my-form">
    <label for="email">Email:</label>
    <div id="wrapper">
      <input type="email" id="email" name="email">
    </div>
  </form>
</body>
</html>
```

#### JavaScript

```javascript
const emailInput = document.getElementById('email');

emailInput.addEventListener('input', function () {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(emailInput.value)) {
    emailInput.classList.add('valid');
    emailInput.classList.remove('invalid');
  } else {
    emailInput.classList.add('invalid');
    emailInput.classList.remove('valid');
  }
});
```

---

## 9.6 The `select` Event

* Triggered when a user selects text inside an input or textarea
* Useful for:

    * Showing copy hints
    * Enabling copy buttons

### Example: Handling the select event

#### HTML

```html
<form id="my-form">
  <label for="text">Enter text:</label>
  <input type="text" id="text" name="text">
  <div id="select-message"></div>
</form>
```

#### JavaScript

```javascript
document.addEventListener('DOMContentLoaded', function () {
  const textInput = document.getElementById('text');
  const selectMessage = document.getElementById('select-message');

  textInput.addEventListener('select', function () {
    selectMessage.textContent = 'You selected some text!';
  });
});
```

---

## 9.7 The `change` Event

* Fires when:

    * A value changes **and**
    * The element loses focus
* Commonly used with:

    * `<select>`
    * Checkboxes
    * Radio buttons

### Example: Handling the change event

#### HTML

```html
<form id="my-form">
  <label for="color-select">Choose a color:</label>
  <select id="color-select" name="color">
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
  </select>
</form>
```

#### JavaScript

```javascript
document.addEventListener('DOMContentLoaded', function () {
  const selectElement = document.getElementById('color-select');

  selectElement.addEventListener('change', function () {
    alert('You selected the color: ' + selectElement.value);
  });
});
```

---

## Exercise 1: Form Reset

### Task

Create an HTML form with:

* An email input field
* A reset button
* A reset event handler that displays **"Form has been reset"**

### Solution

#### HTML

```html
<form id="reset-form">
  <label for="email">Email:</label>
  <input type="email" id="email">
  <button type="reset">Reset</button>
</form>
```

#### JavaScript

```javascript
const form = document.getElementById('reset-form');

form.addEventListener('reset', function () {
  alert('Form has been reset');
});
```

---

## Exercise 2: Focus and Blur Validation

### Task

* Show the hint **"Enter your username"** on focus
* Hide the hint on blur
* Show error **"Username cannot be empty"** if the field is empty on blur

### Solution

#### HTML

```html
<form>
  <label for="username">Username:</label>
  <input type="text" id="username">

  <div id="hint" style="display:none;">Enter your username</div>
  <div id="error" style="display:none; color:red;">Username cannot be empty</div>
</form>
```

#### JavaScript

```javascript
const input = document.getElementById('username');
const hint = document.getElementById('hint');
const error = document.getElementById('error');

input.addEventListener('focus', function () {
  hint.style.display = 'block';
  error.style.display = 'none';
});

input.addEventListener('blur', function () {
  hint.style.display = 'none';
  error.style.display = input.value === '' ? 'block' : 'none';
});
```

---

