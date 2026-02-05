
---

# Forms in HTML: `<form>`

Forms are a crucial part of user interaction on the web. They allow users to enter data—such as usernames, passwords, search queries, or uploaded files—which is then sent to a server for processing.

In HTML, the `<form>` element is used to create forms. It acts as a **container** for form controls like input fields, buttons, checkboxes, radio buttons, and more.

---

## 1.1 The `<form>` Element

The `<form>` tag defines an HTML form and specifies **how and where** the user’s data will be sent.

### Basic Syntax

```html
<form action="URL" method="GET|POST">
  <!-- form controls -->
</form>
```

### Example: Simple Form

```html
<form action="/submit" method="post">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>

  <br>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <br>

  <button type="submit">Submit</button>
</form>
```

### Key Points

* `<form>` wraps all form controls
* Only inputs **inside the form** are submitted
* Each form control should have a `name` attribute so its data can be sent

---

## 1.2 Important `<form>` Attributes

### `action` Attribute

Specifies the URL where the form data will be sent.

```html
<form action="https://example.com/submit">
  <!-- form elements -->
</form>
```

📌 If `action` is omitted, the form submits to the **current page URL**.

---

### `method` Attribute

Defines the HTTP method used to send data.

#### Available values:

* `GET`
* `POST`

```html
<form action="/submit" method="post">
  <!-- form elements -->
</form>
```

---

## 1.3 Methods of Sending Data

### GET Method

Sends form data as **URL query parameters**.

#### Example

```html
<form action="/search" method="get">
  <label for="query">Search:</label>
  <input type="text" id="query" name="query">
  <button type="submit">Search</button>
</form>
```

#### Features of GET

* Data is visible in the URL
* Limited data size
* Can be bookmarked and cached
* ❌ Not suitable for sensitive data

---

### POST Method

Sends form data in the **request body**.

#### Example

```html
<form action="/submit" method="post">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>

  <br>

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required>

  <br>

  <button type="submit">Submit</button>
</form>
```

#### Features of POST

* Data is not visible in the URL
* No practical size limit
* More secure for confidential data
* Not cached or bookmarked

---

## 1.4 Additional `<form>` Attributes

### `enctype` Attribute

Specifies how form data is encoded when sent to the server. Required for file uploads.

```html
<form action="/upload" method="post" enctype="multipart/form-data">
  <label for="file">Upload a file:</label>
  <input type="file" id="file" name="file">
  <button type="submit">Submit</button>
</form>
```

---

### `target` Attribute

Defines where the response is displayed after submission.

| Value     | Description        |
| --------- | ------------------ |
| `_self`   | Same tab (default) |
| `_blank`  | New tab            |
| `_parent` | Parent frame       |
| `_top`    | Topmost frame      |

```html
<form action="/submit" method="post" target="_blank">
  <!-- form elements -->
</form>
```

---

### `novalidate` Attribute

Disables built-in browser validation.

```html
<form action="/submit" method="post" novalidate>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  <button type="submit">Submit</button>
</form>
```

---

## 1.5 Ways to Submit Form Data

### 1. Submit Button

Using `<input>`:

```html
<input type="submit" value="Submit">
```

Using `<button>`:

```html
<button type="submit">Submit</button>
```

---

### 2. Enter Key

Pressing **Enter** inside a text field submits the form automatically.

---

### 3. JavaScript Submission

Forms can be submitted programmatically.

```html
<form id="myForm" action="/submit" method="post">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username">

  <br>

  <label for="password">Password:</label>
  <input type="password" id="password" name="password">

  <br>

  <button type="button" onclick="submitForm()">Submit</button>
</form>

<script>
function submitForm() {
  document.getElementById("myForm").submit();
}
</script>
```

---

## Exercises

---

### 📝 Exercise 1: Login Form

Create a login form that submits data using the **POST** method to `/login`.

#### Requirements

* Use a `<form>` with:

    * `action="/login"`
    * `method="post"`
* Include:

    * Text input for `username`
    * Password input for `password`
    * Submit button
* All elements must be inside the `<form>` tag

---

### 📝 Exercise 2: Search Form

Create a search form that submits data using the **GET** method to `/search`.

#### Requirements

* Use a `<form>` with:

    * `action="/search"`
    * `method="get"`
* Include:

    * One text input with a `name` attribute
    * One submit button
* All elements must be inside the `<form>` tag

---

### ✅ Learning Outcomes

By the end of this lesson, students should be able to:

* Explain the purpose of the `<form>` element
* Use `action` and `method` correctly
* Differentiate between GET and POST
* Build basic login and search forms
* Understand how form data is submitted to a server

---

