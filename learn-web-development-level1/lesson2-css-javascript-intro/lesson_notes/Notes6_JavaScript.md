
---

## Introduction to JavaScript

Before diving deep into HTML, let’s take a moment to meet something powerful and exciting — **JavaScript**.

JavaScript is a programming language used to make web pages **dynamic and interactive**. With JavaScript, you can:

* Respond to user actions like clicks and typing
* Change content on a web page
* Show messages or alerts
* Communicate with servers
* Create animations, games, and interactive forms

At this stage, we won’t study JavaScript in depth yet. However, you’ll occasionally see it used in examples, so it’s important to understand **how JavaScript fits into an HTML document**.

---

## 1. The `<script>` Tag

JavaScript is added to an HTML page using the **`<script>` tag**. This tag tells the browser that the code inside it is JavaScript.

A `<script>` tag can be placed in different parts of an HTML document, but for now, we’ll focus on simple usage.

### Example: JavaScript inside HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Introduction to JavaScript</title>
</head>
<body>
    <h1>Welcome to my website!</h1>

    <script>
        alert('Hello, world!');
    </script>
</body>
</html>
```

### What’s happening here?

* The `<script>` tag contains JavaScript code.
* `alert('Hello, world!');` displays a popup message when the page loads.
* The browser executes this JavaScript as it reads the HTML.

---

## 2. Adding External JavaScript Files

As projects grow, writing JavaScript directly inside HTML becomes messy. A better practice is to keep JavaScript in **separate files**.

This improves:

* Code organization
* Readability
* Reusability

### Including an external JavaScript file

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Introduction to JavaScript</title>
    <script src="script.js" defer></script>
</head>
<body>
    <h1>Welcome to my website!</h1>
</body>
</html>
```

### The JavaScript file (`script.js`)

```javascript
alert('Hello, world!');
```

### Important points

* `src="script.js"` tells the browser where the JavaScript file is.
* The `defer` attribute tells the browser to:

    * Load the HTML first
    * Run the JavaScript **after** the page is fully loaded

This prevents errors and improves performance.

---

## 3. Inline JavaScript

Just like CSS can be written directly inside an HTML element using the `style` attribute, JavaScript can also be written **inline** using event attributes.

### Example: Inline CSS (recap)

```html
<p style="color:red">Red</p>
```

### Example: Inline JavaScript

```html
<p style="color:red" onclick="this.style.color = 'blue';">
    Red
</p>
```

### How this works

* `onclick` is an event attribute that runs JavaScript when the element is clicked.
* `this` refers to the element that was clicked.
* `this.style.color = 'blue'` changes the text color to blue.

When the user clicks the paragraph, the color changes instantly — no page reload needed.

---

## Key Takeaways

* JavaScript makes web pages interactive and dynamic
* The `<script>` tag is used to add JavaScript to HTML
* JavaScript can be:

    * Embedded inside HTML
    * Linked as an external file
    * Written inline using event attributes
* External scripts with `defer` are cleaner and more professional

Later on, you’ll learn how to properly connect JavaScript to HTML without inline code — just like we moved CSS out of style attributes.

---

Love it — this will really lock the concepts in 🔒
Here’s a **complete add-on section** you can drop straight into your lesson.

---

## JavaScript, HTML, and CSS — Roles Comparison

Before practicing, let’s clearly separate **who does what** on a webpage.

### 🧱 HTML — Structure

HTML defines **what exists** on the page.

Examples:

* Headings
* Paragraphs
* Images
* Buttons
* Forms

Think of HTML as the **skeleton** of a webpage.

```html
<button>Click me</button>
```

---

### 🎨 CSS — Styling

CSS controls **how things look**.

Examples:

* Colors
* Fonts
* Layout
* Spacing
* Animations

Think of CSS as the **clothes and makeup** of the webpage.

```css
button {
    background-color: blue;
    color: white;
}
```

---

### ⚡ JavaScript — Behavior

JavaScript controls **how things behave**.

Examples:

* What happens when you click a button
* Changing text dynamically
* Showing alerts
* Validating forms

Think of JavaScript as the **brain and muscles** of the webpage.

```javascript
alert("Button clicked!");
```

---

### Quick Summary Table

| Technology | Purpose   | Question it answers  |
| ---------- | --------- | -------------------- |
| HTML       | Structure | What is on the page? |
| CSS        | Styling   | How does it look?    |
| JavaScript | Behavior  | What does it do?     |

---

## Hands-On JavaScript Click Exercise 👆

Let’s build a **simple interactive example** using JavaScript.

### Goal

When the user clicks a button:

* The text changes
* The color changes

---

### Step 1: HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Click Exercise</title>
</head>
<body>

    <p id="message">Click the button below</p>
    <button onclick="changeText()">Click Me</button>

    <script>
        function changeText() {
            document.getElementById("message").innerText = "You clicked the button!";
            document.getElementById("message").style.color = "green";
        }
    </script>

</body>
</html>
```

---

### What’s happening here?

* `onclick="changeText()"`
  → Runs JavaScript when the button is clicked

* `function changeText()`
  → A JavaScript function (a reusable block of code)

* `document.getElementById("message")`
  → Finds the paragraph

* `innerText`
  → Changes the text

* `style.color`
  → Changes the color

🎉 This is real interactivity — powered by JavaScript.

---

### Challenge (Optional 💡)

Ask students to:

* Change the text color to **blue**
* Change the message text again
* Add a second button with a different message

---

## Mini Quiz 🧠 (Check Your Understanding)

### Question 1

Which language is responsible for **page structure**?

* A. CSS
* B. JavaScript
* C. HTML

<details>
<summary>Answer</summary>
✅ C. HTML
</details>

---

### Question 2

Which language is used to **change what happens when a user clicks a button**?

* A. HTML
* B. CSS
* C. JavaScript

<details>
<summary>Answer</summary>
✅ C. JavaScript
</details>

---

### Question 3

What does the `<script>` tag do?

* A. Styles the page
* B. Adds JavaScript to HTML
* C. Creates HTML elements

<details>
<summary>Answer</summary>
✅ B. Adds JavaScript to HTML
</details>

---

### Question 4

What does `onclick` do?

* A. Changes page color
* B. Runs JavaScript when an element is clicked
* C. Links CSS

<details>
<summary>Answer</summary>
✅ B. Runs JavaScript when an element is clicked
</details>

---

### Question 5

Which line changes text color using JavaScript?

* A. `color: red;`
* B. `style.color = "red";`
* C. `<color>red</color>`

<details>
<summary>Answer</summary>
✅ B. `style.color = "red";`
</details>

---
