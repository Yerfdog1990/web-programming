
---

# Main Form Elements in HTML

Forms are a core part of web applications and allow users to enter, submit, and interact with data. The **main form elements** used for user input are:

* `<input>`
* `<textarea>`
* `<button>`

These elements work together inside a `<form>` to collect data that can be processed by a server or handled using JavaScript.

---

## 2.1 The `<input>` Element

The `<input>` element is the most commonly used form control. It is highly versatile and supports many input types such as text, password, email, file uploads, dates, and more.

### General Syntax

```html
<input type="type" name="name" id="id" value="value" placeholder="placeholder" required>
```

### Common Attributes

| Attribute     | Description                                                   |
| ------------- | ------------------------------------------------------------- |
| `type`        | Defines the type of input (text, password, email, file, etc.) |
| `name`        | Identifies the input when data is submitted                   |
| `id`          | Unique identifier, often linked to `<label>`                  |
| `value`       | Default or pre-filled value                                   |
| `placeholder` | Hint text shown inside the field                              |
| `required`    | Makes the field mandatory                                     |

---

### Example: Text Input Field

```html
<label for="username">Username:</label>
<input
  type="text"
  name="username"
  id="username"
  placeholder="Enter username"
  required
>
```

📌 This creates a **single-line text field** that must be filled before submission.

---

### Common `<input>` Types

```html
<input type="password" placeholder="Password">
<input type="email" placeholder="Email">
<input type="number" placeholder="Age">
<input type="file">
<input type="date">
```

Each type provides built-in browser behavior and validation.

---

## 2.2 The `<textarea>` Element

The `<textarea>` element is used for **multi-line text input**, such as comments, messages, or descriptions. Unlike `<input>`, it allows line breaks and longer text.

### General Syntax

```html
<textarea
  name="name"
  id="id"
  rows="rows"
  cols="cols"
  placeholder="placeholder"
  required>
</textarea>
```

### `<textarea>` Attributes

| Attribute     | Description                     |
| ------------- | ------------------------------- |
| `name`        | Used to identify submitted data |
| `id`          | Unique identifier               |
| `rows`        | Number of visible text lines    |
| `cols`        | Width in characters             |
| `placeholder` | Hint text                       |
| `required`    | Makes input mandatory           |

---

### Usage Example

```html
<label for="comments">Comments:</label>
<textarea
  name="comments"
  id="comments"
  rows="5"
  cols="40"
  placeholder="Enter your comments here..."
  required>
</textarea>
```

---

### Styling `<textarea>` with CSS

```css
textarea {
  width: 75%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
```

```html
<textarea
  name="comments"
  id="comments"
  rows="5"
  placeholder="Enter your comments here..."
  required>
</textarea>
```

📌 The `resize: vertical;` rule limits resizing to up and down only.

---

## 2.3 The `<button>` Element

The `<button>` element is used to trigger actions such as submitting or resetting a form. It is more flexible than `<input type="button">` because it can contain HTML elements.

### General Syntax

```html
<button type="type" name="name" id="id" value="value">
  Button Text
</button>
```

---

### Button Types

| Type     | Description                       |
| -------- | --------------------------------- |
| `submit` | Submits the form                  |
| `reset`  | Resets form fields                |
| `button` | Custom button (no default action) |

---

### Usage Examples

```html
<button type="submit">Submit</button>
<button type="reset">Reset</button>
<button type="button" onclick="alert('Button clicked!')">Click me</button>
```

---

### HTML Inside `<button>`

```html
<button type="submit">
  <img src="submit_icon.png" alt="Send">
  Send
</button>
```

📌 This allows icons, images, and styled content inside buttons.

---

### Styling `<button>` with CSS

```css
button {
  background-color: #4CAF50;
  color: white;
  padding: 15px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
```

```html
<button type="submit">Send</button>
```

---

## Exercises

---

### 📝 Exercise 1: Text Field (Textarea)

**Task:**
Create a multiline text field for entering comments.

**Requirements:**

* Use a `<textarea>` element
* Include `name`, `id`, `rows`, `cols`, and `placeholder`
* Make the field required

---

### 🔘 Exercise 2: Buttons

**Task:**
Create three buttons with different behaviors.

**Requirements:**

* A submit button (`type="submit"`)
* A reset button (`type="reset"`)
* A custom button (`type="button"`) that displays
  **"Button clicked!"** when clicked
* Use JavaScript to show the message

**Hint:**

```html
<button type="button" onclick="alert('Button clicked!')">
  Click me
</button>
```

---

## Summary

* `<input>` is used for single-line and specialized input
* `<textarea>` is used for multi-line text
* `<button>` provides flexible and powerful interaction
* These elements form the **foundation of user input** in both classic and modern web applications

---