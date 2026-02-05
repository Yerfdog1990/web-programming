
---

# Element `<input>`

The `<input>` element is one of the most important HTML form elements. It is used to collect data from users in many different ways, depending on the value of its `type` attribute.

Common input types include:

* `button`
* `checkbox`
* `radio`
* `text`
* `email`
* `password`
* and many others

In this lesson, we focus on **button, checkbox, and radio inputs**.

---

## 3.1 Element `<input type="button">`

The `<input type="button">` element creates a **clickable button with no default behavior**.

Unlike:

* `type="submit"` → submits a form
* `type="reset"` → resets form values

`type="button"` **does nothing on its own**.
It is typically used **with JavaScript** to trigger custom actions.

---

### Basic Syntax

```html
<input type="button" value="Click Me">
```

* The button appears on the page
* Clicking it does nothing unless JavaScript is added

---

### Key Attributes

#### 1. `value`

Defines the text displayed on the button.

```html
<input type="button" value="Click Me">
```

---

#### 2. `onclick`

Executes JavaScript code when the button is clicked.

```html
<input type="button" value="Click Me" onclick="alert('Button clicked!')">
```

---

### Example: Calling a JavaScript Function

```html
<input type="button" value="Show Alert" onclick="showAlert()">

<script>
  function showAlert() {
    alert('This is an alert!');
  }
</script>
```

---

### Example: Changing an Element’s Style

```html
<input type="button" value="Change Color" onclick="changeColor()">
<p id="text">This is a paragraph.</p>

<script>
  function changeColor() {
    document.getElementById('text').style.color = 'blue';
  }
</script>
```

---

### When to Use `type="button"`

Use it when:

* You want full control with JavaScript
* You do **not** want to submit a form
* You are triggering UI interactions (toggle, animation, color change)

---

## 3.2 Element `<input type="checkbox">`

The `<input type="checkbox">` element allows users to **select one or multiple options**.

Each checkbox works **independently** unless handled by JavaScript.

---

### Basic Example

```html
<label for="subscribe">Subscribe to newsletter:</label>
<input type="checkbox" id="subscribe" name="subscribe" value="yes">
```

---

### Key Attributes

#### 1. `name`

Defines the name sent to the server when the form is submitted.

```html
<input type="checkbox" name="subscribe">
```

---

#### 2. `value`

Defines the value sent **only if the checkbox is checked**.

```html
<input type="checkbox" name="subscribe" value="yes">
```

---

#### 3. `checked`

Makes the checkbox **checked by default**.

```html
<input type="checkbox" name="subscribe" value="yes" checked>
```

---

### Example: Multiple Checkboxes

```html
<p>Select your interests:</p>

<input type="checkbox" name="interest" value="sports"> Sports<br>
<input type="checkbox" name="interest" value="music"> Music<br>
<input type="checkbox" name="interest" value="movies"> Movies<br>
```

Users can select **any number** of options.

---

### Example: Pre-selected Checkbox

```html
<input type="checkbox" name="terms" value="agree" checked>
I agree to the terms and conditions
```

---

## 3.3 Element `<input type="radio">`

Radio buttons allow users to **select only one option** from a group.

Radio buttons are grouped by sharing the **same `name` attribute**.

---

### Basic Example

```html
<p>Choose your gender:</p>

<input type="radio" id="male" name="gender" value="male">
<label for="male">Male</label><br>

<input type="radio" id="female" name="gender" value="female">
<label for="female">Female</label>
```

---

### Key Attributes

#### 1. `name`

Groups radio buttons together.

```html
<input type="radio" name="gender" value="male">
<input type="radio" name="gender" value="female">
```

Only **one** option can be selected per group.

---

#### 2. `value`

Defines the value sent when selected.

```html
<input type="radio" name="gender" value="male">
```

---

#### 3. `checked`

Selects a radio button by default.

```html
<input type="radio" name="gender" value="male" checked>
```

---

### Example: Color Selection

```html
<p>Choose a color:</p>

<input type="radio" name="color" value="red"> Red<br>
<input type="radio" name="color" value="green"> Green<br>
<input type="radio" name="color" value="blue"> Blue<br>
```

---

### Example: Pre-selected Radio Button

```html
<input type="radio" name="subscription" value="monthly" checked> Monthly<br>
<input type="radio" name="subscription" value="yearly"> Yearly<br>
```

---

# Exercises

## Exercise 1: Checkbox (Newsletter Subscription)

**Task:**
Create an HTML form with a checkbox for newsletter subscription.

### Requirements:

* Use a `<form>` element as the container
* Include an `<input>` with `type="checkbox"`
* The checkbox must be **checked by default**
* Display the text **"Subscribe to newsletter"**
* Place the checkbox and text **inside the form**

### Expected Output (Example Code)

```html
<form>
  <input type="checkbox" name="newsletter" checked>
  Subscribe to newsletter
</form>
```

---

## Exercise 2: Radio Buttons (Gender Selection)

**Task:**
Create a form with radio buttons for selecting gender.

### Requirements:

* Use a `<form>` element
* Create **two radio buttons**
* Both radio buttons must share the same `name`
* Each radio button must have a unique `value`
* The **Male** option must be selected by default
* Add labels **Male** and **Female**

### Expected Output (Example Code)

```html
<form>
  <input type="radio" id="male" name="gender" value="male" checked>
  <label for="male">Male</label><br>

  <input type="radio" id="female" name="gender" value="female">
  <label for="female">Female</label>
</form>
```

---

# Form Submission Examples

Form submission is how user input is sent to a server for processing.
This is done using the `<form>` element together with a **submit control**.

---

## 1. Basic Form Submission (GET)

```html
<form action="/submit" method="get">
  <label>
    Username:
    <input type="text" name="username">
  </label>

  <input type="submit" value="Send">
</form>
```

### How it works

* `action` → URL where the data is sent
* `method="get"` → data is appended to the URL
* Clicking the **submit button** sends the form

### Example URL after submission

```
/submit?username=john
```

---

## 2. Form Submission (POST)

```html
<form action="/login" method="post">
  <label>
    Email:
    <input type="email" name="email">
  </label><br>

  <label>
    Password:
    <input type="password" name="password">
  </label><br>

  <button type="submit">Login</button>
</form>
```

### Why POST?

* Data is sent in the request body
* More secure for sensitive data
* No URL length limitation

---

## 3. Submitting a Form with `<input type="submit">`

```html
<form action="/register" method="post">
  <input type="text" name="username" placeholder="Username">
  <input type="submit" value="Register">
</form>
```

* The button **automatically submits** the form
* No JavaScript required

---

## 4. Submitting a Form with `<button type="submit">`

```html
<form action="/register" method="post">
  <input type="text" name="username">

  <button type="submit">
    Register
  </button>
</form>
```

This behaves exactly like `input type="submit"` but is **more flexible**.

---

## 5. Preventing Form Submission (JavaScript)

```html
<form onsubmit="return false;">
  <input type="text">
  <button type="submit">Submit</button>
</form>
```

Or:

```html
<form id="myForm">
  <button type="submit">Submit</button>
</form>

<script>
  document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form not submitted');
  });
</script>
```

This is common in **modern JavaScript frameworks**.

---

# Comparison: `<input type="button">` vs `<button>`

Although they look similar, these elements are **not the same**.

---

## 1. `<input type="button">`

```html
<input type="button" value="Click Me">
```

### Characteristics

* Self-closing tag
* Text is defined using `value`
* **No default behavior**
* Requires JavaScript to do anything useful

### Example with JavaScript

```html
<input type="button" value="Show Alert" onclick="alert('Hello!')">
```

---

## 2. `<button>`

```html
<button>Click Me</button>
```

### Characteristics

* Has opening and closing tags
* Can contain **HTML inside** (icons, spans, images)
* Default `type` is **submit** when inside a form
* More flexible and modern

### Example with HTML content

```html
<button>
  <strong>Save</strong> ✔
</button>
```

---

## 3. Key Differences (Table)

| Feature             | `<input type="button">` | `<button>`             |
| ------------------- | ----------------------- | ---------------------- |
| Closing tag         | ❌ No                    | ✅ Yes                  |
| Inner HTML          | ❌ No                    | ✅ Yes                  |
| Default behavior    | None                    | `submit` (inside form) |
| Styling flexibility | Limited                 | High                   |
| Accessibility       | Less flexible           | Better                 |
| Modern usage        | Rare                    | Preferred              |

---

## 4. Important Gotcha 🚨

```html
<form>
  <button>Click Me</button>
</form>
```

⚠️ This **submits the form** because:

* `<button>` defaults to `type="submit"`

### Correct usage when you don’t want submission

```html
<button type="button">Click Me</button>
```

---

## 5. Best Practice (Professional Work)

✅ **Use `<button>`** in most cases

❌ Avoid `<input type="button">` unless required by legacy code

```html
<button type="button">Action</button>
<button type="submit">Submit</button>
```

---

## Key Takeaways

* Forms submit data using `submit` controls
* `<input type="submit">` and `<button type="submit">` submit forms
* `<input type="button">` does **nothing by default**
* `<button>` is more powerful, flexible, and accessible
* Always set `type` explicitly on `<button>`

---

# GET vs POST (In-Depth Comparison)

HTTP defines **GET** and **POST** as *request methods* with **different intent and semantics**, not just different syntax.

---

## 1. Core Purpose (The Big Idea)

| Method   | Primary Purpose                                   |
| -------- | ------------------------------------------------- |
| **GET**  | Retrieve data (read-only)                         |
| **POST** | Send data to be processed (create / change state) |

> **Rule of thumb:**
> If the request changes anything on the server → **POST**
> If it only fetches data → **GET**

---

## 2. Where the Data Goes

### GET

* Data is sent in the **URL**
* Uses a query string

```http
GET /search?q=html&page=2 HTTP/1.1
```

```html
<form method="get" action="/search">
  <input name="q">
  <button type="submit">Search</button>
</form>
```

---

### POST

* Data is sent in the **request body**
* Not visible in the URL

```http
POST /login HTTP/1.1
Content-Type: application/x-www-form-urlencoded

email=user@mail.com&password=secret
```

```html
<form method="post" action="/login">
  <input name="email">
  <input name="password">
  <button type="submit">Login</button>
</form>
```

---

## 3. Visibility & Security

| Aspect                    | GET     | POST               |
| ------------------------- |-------- |--------------------|
| Visible in URL            | ✅ Yes  | ❌ No              |
| Stored in browser history | ✅ Yes  | ❌ No              |
| Logged by servers         | ✅ Yes  | Sometimes          |
| Safe for passwords        | ❌ No   | ⚠️ Only with HTTPS |

⚠️ **Important:**
POST is **not encryption**.
Only **HTTPS** protects data in transit.

---

## 4. Data Size Limits

### GET

* URL length is limited
* Browser & server dependent
* Typically ~2–8 KB

```http
/search?query=very-long-text... ❌
```

### POST

* No practical size limit
* Can send:

    * Large text
    * JSON
    * Files
    * Binary data

---

## 5. Caching Behavior

| Feature              | GET   | POST                |
| -------------------- | ----- | --------------------|
| Can be cached        | ✅ Yes | ❌ No (by default) |
| Can be bookmarked    | ✅ Yes | ❌ No              |
| Can be shared as URL | ✅ Yes | ❌ No              |

### Example

```http
GET /products?page=2
```

✔ Cacheable

✔ Bookmarkable

```http
POST /checkout
```

❌ Never cache

❌ Never bookmark

---

## 6. Idempotency (Very Important Concept)

### GET → **Idempotent**

Calling it multiple times gives the **same result**.

```http
GET /users/5
GET /users/5
```

No side effects.

---

### POST → **Not idempotent**

Each call may change server state.

```http
POST /orders
POST /orders
```

❌ Two orders may be created

---

## 7. Browser Behavior

### GET

* Reloading page = repeat request
* Safe

### POST

* Reloading page shows warning:

> “Confirm Form Resubmission?”

Because repeating POST can:

* Create duplicates
* Charge money
* Submit forms again

---

## 8. Form Submissions Compared

### Search form → GET

```html
<form method="get" action="/search">
  <input name="q">
  <button>Search</button>
</form>
```

Why GET?

* Read-only
* Bookmarkable
* Shareable

---

### Login / Registration → POST

```html
<form method="post" action="/login">
  <input name="email">
  <input name="password">
  <button>Login</button>
</form>
```

Why POST?

* Sensitive data
* Changes server state
* Must not be cached

---

## 9. REST API Perspective (Professional Level)

| Action          | HTTP Method |
| --------------- | ----------- |
| Fetch resource  | GET         |
| Create resource | POST        |
| Update resource | PUT / PATCH |
| Delete resource | DELETE      |

Example:

```http
GET    /users        → list users
POST   /users        → create user
GET    /users/10     → get user
```

---

## 10. Content Types (POST Advantage)

POST supports multiple payload formats:

| Content-Type                        | Usage        |
| ----------------------------------- | ------------ |
| `application/x-www-form-urlencoded` | HTML forms   |
| `multipart/form-data`               | File uploads |
| `application/json`                  | APIs         |
| `text/plain`                        | Raw text     |

GET has **no request body** (by convention).

---

## 11. SEO Impact

| Method | SEO Friendly |
| ------ | ------------ |
| GET    | ✅ Yes       |
| POST   | ❌ No        |

Search engines:

* Crawl GET URLs
* Ignore POST requests

---

## 12. Common Misconceptions ❌

❌ “POST is secure”

✅ HTTPS is secure

❌ “GET can’t send data”

✅ It can — via query string

❌ “POST is only for forms”

✅ POST is used heavily in APIs

---

## 13. When to Use What (Cheat Sheet)

| Use Case      | Method |
| ------------- | ------ |
| Search        | GET    |
| Filter / Sort | GET    |
| Login         | POST   |
| Registration  | POST   |
| File upload   | POST   |
| Payment       | POST   |
| Fetch data    | GET    |
| Submit form   | POST   |

---

## 14. Teaching Summary (Student-Friendly)

> **GET asks for data**
> **POST sends data to be processed**

* GET → visible, bookmarkable, cacheable
* POST → hidden, safer, powerful
* Choose based on **intent**, not habit

---

## Key Takeaways

* `<input type="button">` has **no default behavior**
* `<input type="checkbox">` allows **multiple selections**
* `<input type="radio">` allows **only one selection per group**
* `checked` sets default selections
* `name` controls grouping and data submission

---

