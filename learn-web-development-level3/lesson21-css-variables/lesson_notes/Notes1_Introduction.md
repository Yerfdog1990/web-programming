# Introduction to CSS Variables

## 1.1 What are CSS Variables?

**CSS Variables**, also known as **CSS Custom Properties**, are variables defined in CSS that store reusable values such as:

* Colors
* Font sizes
* Spacing
* Layout values
* Font families
* Any other CSS property value

These variables allow developers to **reuse values across multiple CSS rules**, making stylesheets easier to maintain, update, and scale.

CSS variables are declared using a **double dash (`--`) prefix**, and they are typically defined inside the `:root` selector so that they are accessible throughout the entire document.

### Basic Syntax of CSS Variables

```css
:root {
  --main-color: #3498db;
  --secondary-color: #2ecc71;
  --font-size: 16px;
}
```

Explanation:

* `--main-color` stores the primary color
* `--secondary-color` stores the secondary color
* `--font-size` stores the default font size

These variables can then be reused throughout the stylesheet using the `var()` function.

---

# Main Features of CSS Variables

CSS variables provide several important advantages that improve modern web development.

## 1. Reusability

CSS variables allow developers to **define a value once and reuse it multiple times** throughout the stylesheet.

Example:

```css
:root {
  --primary-color: #3498db;
}

h1 {
  color: var(--primary-color);
}

button {
  background-color: var(--primary-color);
}
```

Benefits:

* Avoids repeating the same value multiple times
* Makes code cleaner and easier to maintain

---

## 2. Flexibility

CSS variables can **change depending on conditions**, including:

* Element states
* Media queries
* JavaScript interactions
* Theme switching

Example using media queries:

```css
:root {
  --font-size: 16px;
}

@media (max-width: 600px) {
  :root {
    --font-size: 14px;
  }
}

body {
  font-size: var(--font-size);
}
```

This allows responsive design using variables.

---

## 3. Inheritance

CSS variables follow the **normal CSS inheritance model**.

This means that:

* Child elements inherit variable values from their parent elements.

Example:

```css
:root {
  --text-color: black;
}

body {
  color: var(--text-color);
}

section {
  --text-color: blue;
}

section p {
  color: var(--text-color);
}
```

Explanation:

* Paragraphs inside `section` will be **blue**
* Paragraphs outside `section` will be **black**

---

## 4. Manageability

CSS variables make **large projects easier to maintain**.

If a value changes, you only update the variable once.

Example without variables:

```css
h1 {
  color: #3498db;
}

button {
  background-color: #3498db;
}

a {
  color: #3498db;
}
```

If the color changes, you must update every occurrence.

Example with variables:

```css
:root {
  --primary-color: #3498db;
}
```

Change it once:

```css
--primary-color: red;
```

All elements update automatically.

---

# 1.2 Examples of CSS Variable Usage

## Example: Using CSS Variables with JavaScript

CSS variables can be modified dynamically using JavaScript.

Example:

```javascript
document.documentElement.style.setProperty('--main-color', '#e74c3c');
```

Explanation:

* `document.documentElement` selects the root (`:root`)
* `setProperty()` updates the value of a CSS variable

This allows **dynamic styling**, such as:

* Dark mode
* Theme switching
* Interactive UI changes

---

# Example 1: Defining and Using Variables

## CSS

```css
:root {
  --main-bg-color: #f0f0f0;
  --main-text-color: #333;
  --primary-color: #3498db;
}

body {
  background-color: var(--main-bg-color);
  color: var(--main-text-color);
}

a {
  color: var(--primary-color);
}

a:hover {
  color: darken(var(--primary-color), 10%);
}
```

## HTML

```html
<body>
  <p>This is a paragraph.</p>
  <a href="#">This is a link</a>
</body>
```

### Explanation

In this example:

Three variables are defined:

| Variable            | Purpose                      |
| ------------------- | ---------------------------- |
| `--main-bg-color`   | Background color of the page |
| `--main-text-color` | Text color                   |
| `--primary-color`   | Link color                   |

These variables are used to:

* Set the **background color**
* Set the **text color**
* Style **links**

This approach ensures that styling is **centralized and reusable**.

---

# 1.3 Changing Variable Values in JavaScript

CSS variables can be updated dynamically using **JavaScript events**.

This makes it possible to implement:

* Theme toggles
* Dark mode
* Interactive UI styles

---

## Example: Theme Toggle

### CSS

```css
:root {
  --main-bg-color: #f0f0f0;
  --main-text-color: #333;
}

body {
  background-color: var(--main-bg-color);
  color: var(--main-text-color);
}
```

---

### HTML

```html
<button id="toggle-theme">Toggle Theme</button>
<p>This is a paragraph.</p>
```

---

### JavaScript

```javascript
document.getElementById('toggle-theme').addEventListener('click', () => {

  const root = document.documentElement;

  if (root.style.getPropertyValue('--main-bg-color') === '#f0f0f0') {

      root.style.setProperty('--main-bg-color', '#333');
      root.style.setProperty('--main-text-color', '#f0f0f0');

  } else {

      root.style.setProperty('--main-bg-color', '#f0f0f0');
      root.style.setProperty('--main-text-color', '#333');

  }
});
```

---

## Explanation

1. The button is selected using:

```javascript
document.getElementById('toggle-theme')
```

2. An event listener is attached for the **click event**.

3. When clicked:

* The current value of `--main-bg-color` is checked.
* If it is **light**, it switches to **dark**.
* If it is **dark**, it switches back to **light**.

4. CSS variables are updated using:

```javascript
setProperty('--variable-name', value)
```

This changes the page theme instantly.

---

# Exercise 1: Defining CSS Variables

## Problem

Define CSS variables for:

* Main background color (`--main-bg-color`)
* Main text color (`--main-text-color`)
* Button color (`--button-color`)

Use these variables to style the page.

### Requirements

* Define variables in `:root`
* Use `--main-bg-color` for body background
* Use `--main-text-color` for paragraph text
* Use `--button-color` for button background

---

## Solution

### CSS

```css
:root {
  --main-bg-color: #f4f4f4;
  --main-text-color: #333;
  --button-color: #3498db;
}

body {
  background-color: var(--main-bg-color);
}

p {
  color: var(--main-text-color);
}

button {
  background-color: var(--button-color);
  color: white;
  padding: 10px;
  border: none;
}
```

### HTML

```html
<body>

<p>This is a paragraph using CSS variables.</p>

<button>Click Me</button>

</body>
```

---

# Exercise 2: Changing CSS with JavaScript

## Problem

Add a button that swaps:

* `--main-bg-color`
* `--main-text-color`

When the button is clicked.

---

## Requirements

* Add a button for user interaction
* Define variables in `:root`
* Use JavaScript to change variables
* Swap colors when clicked

---

## Solution

### CSS

```css
:root {
  --main-bg-color: white;
  --main-text-color: black;
}

body {
  background-color: var(--main-bg-color);
  color: var(--main-text-color);
}
```

---

### HTML

```html
<button id="swap">Swap Colors</button>

<p>This text will change color.</p>
```

---

### JavaScript

```javascript
document.getElementById("swap").addEventListener("click", function(){

  const root = document.documentElement;

  const bg = getComputedStyle(root).getPropertyValue('--main-bg-color');
  const text = getComputedStyle(root).getPropertyValue('--main-text-color');

  root.style.setProperty('--main-bg-color', text);
  root.style.setProperty('--main-text-color', bg);

});
```

---

## Explanation

1. The button is selected.
2. A **click event** is added.
3. JavaScript reads the current variable values.
4. The values are swapped.
5. The page updates automatically.

---

# Summary

CSS Variables (Custom Properties) provide a powerful way to manage styles in modern CSS.

Key benefits include:

* Reusable values across stylesheets
* Dynamic styling with JavaScript
* Easier maintenance and updates
* Support for inheritance
* Improved flexibility and responsiveness

They are widely used in modern web development for:

* Theme systems
* Design systems
* Responsive layouts
* Dark/light mode implementations

---

