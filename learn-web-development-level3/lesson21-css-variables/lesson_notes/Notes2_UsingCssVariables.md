# Using CSS Variables

CSS Variables (also called **Custom Properties**) are a powerful feature in modern CSS that allows developers to define reusable values and use them throughout a stylesheet. They improve **code organization, flexibility, and maintainability** by allowing values such as colors, font sizes, padding, and margins to be stored and reused.

This section explains:

* How to declare CSS variables
* How to use them in CSS rules
* How to override them
* How to combine them with other values
* How to manipulate them using JavaScript
* Practical exercises with solutions

---

# 2.1 Declaring CSS Variables

CSS variables are declared using the **double dash (`--`) prefix** followed by a variable name.

They can be defined in **any CSS selector**, but they are commonly declared in the **`:root` selector** so they become globally available throughout the entire document.

## Syntax for Declaring Variables

```css
selector {
  --variable-name: value;
}
```

Example:

```css
:root {
  --main-bg-color: #f0f0f0;
  --main-text-color: #333;
  --primary-color: #3498db;
  --font-size: 16px;
}
```

### Explanation

This example defines four CSS variables:

| Variable            | Purpose                      |
| ------------------- | ---------------------------- |
| `--main-bg-color`   | Stores the background color  |
| `--main-text-color` | Stores the text color        |
| `--primary-color`   | Stores the main theme color  |
| `--font-size`       | Stores the default font size |

Because these variables are defined in `:root`, they are available to **all elements in the document**.

---

# Using CSS Variables

Once variables are declared, they can be accessed using the **`var()` function**.

## Syntax

```css
selector {
  property: var(--variable-name);
}
```

The `var()` function retrieves the value stored in the CSS variable.

---

### Example: Using CSS Variables

```css
body {
  background-color: var(--main-bg-color);
  color: var(--main-text-color);
  font-size: var(--font-size);
}

a {
  color: var(--primary-color);
}
```

### Explanation

* The **body background** uses `--main-bg-color`
* The **text color** uses `--main-text-color`
* The **font size** uses `--font-size`
* The **link color** uses `--primary-color`

This approach ensures consistent styling across the webpage.

---

# 2.2 Examples of Using CSS Variables

## Example 1: Basic Use of Variables

### CSS

```css
:root {
  --main-bg-color: #f0f0f0;
  --main-text-color: #333;
  --primary-color: #3498db;
  --font-size: 16px;
}

body {
  background-color: var(--main-bg-color);
  color: var(--main-text-color);
  font-size: var(--font-size);
}

a {
  color: var(--primary-color);
}
```

### HTML

```html
<body>
  <p>This is a paragraph with a link to <a href="#">Example.com</a>.</p>
</body>
```

### Result

* The page background will be **light gray**
* The text color will be **dark gray**
* The font size will be **16px**
* The link color will be **blue**

This demonstrates how CSS variables simplify styling across multiple elements.

---

# Example 2: Overriding Variables in Individual Components

CSS variables can be **overridden for specific elements or components**. This provides great flexibility in styling.

### CSS

```css
:root {
  --main-bg-color: #f0f0f0;
  --main-text-color: #333;
  --primary-color: #3498db;
}

.header {
  background-color: var(--primary-color);
  color: var(--main-bg-color);
}

.footer {
  --primary-color: #e74c3c; /* Overriding a variable */
  background-color: var(--primary-color);
  color: var(--main-bg-color);
}
```

### HTML

```html
<div class="header">
  <p>This is the header.</p>
</div>

<div class="footer">
  <p>This is the footer.</p>
</div>
```

### Result

* The **header background** will be **blue**
* The **footer background** will be **red** (because the variable is overridden)
* Both texts will be **light gray**

### Explanation

Variables follow **CSS inheritance rules**:

* The footer overrides `--primary-color`
* This override only affects elements inside `.footer`

---

# Example 3: Combining Variables with Other Values

CSS variables can be combined with other CSS values and functions.

### CSS

```css
:root {
  --padding: 10px;
  --margin: 20px;
}

.container {
  padding: var(--padding);
  margin: var(--margin) auto;
  border: 1px solid black;
}
```

### HTML

```html
<div class="container">
  <p>This is a container with padding and margin.</p>
</div>
```

### Result

* The container will have **10px padding**
* The container will have **20px margin**
* The container will have a **border**

### Explanation

The margin uses a **combination of a variable and a fixed value**:

```
margin: var(--margin) auto;
```

This sets:

* **Top and bottom margin = 20px**
* **Left and right margin = auto (center alignment)**

---

# 2.3 Using CSS Variables in JavaScript

One powerful feature of CSS variables is that they can be **changed dynamically using JavaScript**.

This allows developers to create interactive features such as:

* Theme switching
* Dark mode
* Dynamic layouts
* User-controlled styles

---

## Example: Using CSS Variables in JavaScript

### CSS

```css
:root {
  --bg-color: #ffffff;
  --text-color: #000000;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
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

  if (root.style.getPropertyValue('--bg-color') === '#ffffff') {
    root.style.setProperty('--bg-color', '#333333');
    root.style.setProperty('--text-color', '#ffffff');
  } else {
    root.style.setProperty('--bg-color', '#ffffff');
    root.style.setProperty('--text-color', '#000000');
  }

});
```

---

### Explanation

1. The button is selected using:

```
document.getElementById('toggle-theme')
```

2. A **click event listener** is attached.

3. When clicked:

* The current value of `--bg-color` is checked.
* If the background is **white**, it switches to **dark mode**.
* If the background is **dark**, it switches back to **light mode**.

4. The variables are updated using:

```
setProperty('--variable-name', value)
```

The webpage styles update immediately.

---

# Exercise 1: Basic CSS Variables

## Problem

Define CSS variables for:

* Main background color (`--main-bg-color`)
* Main text color (`--main-text-color`)
* Main link color (`--link-color`)

Use these variables to style:

* `body`
* `p`
* `a`

---

## Requirements

* Define variables inside the `:root` selector
* Use `--main-bg-color` for the body background
* Use `--main-text-color` for paragraph text
* Use `--link-color` for link color

---

## Solution

### CSS

```css
:root {
  --main-bg-color: #f5f5f5;
  --main-text-color: #333;
  --link-color: #3498db;
}

body {
  background-color: var(--main-bg-color);
}

p {
  color: var(--main-text-color);
}

a {
  color: var(--link-color);
}
```

---

### HTML

```html
<body>

<p>This is a paragraph with a <a href="#">link</a>.</p>

</body>
```

---

### Result

* The page background will be **light gray**
* Paragraph text will be **dark gray**
* Links will be **blue**

---

# Exercise 2: CSS Variables and Other Values

## Problem

Define CSS variables for:

* Padding (`--padding`)
* Margin (`--margin`)

Use these variables to style a container element.

---

## Requirements

* Create variables `--padding` and `--margin`
* Use them in `.container`
* Apply padding and margin using variables
* Add a border around the container

---

## Solution

### CSS

```css
:root {
  --padding: 15px;
  --margin: 25px;
}

.container {
  padding: var(--padding);
  margin: var(--margin);
  border: 2px solid black;
}
```

---

### HTML

```html
<div class="container">
  <p>This container uses CSS variables for spacing.</p>
</div>
```

---

### Result

* The container has **15px padding**
* The container has **25px margin**
* The container has a **black border**

---

# Summary

Using CSS variables allows developers to create **cleaner, more maintainable stylesheets**.

Key benefits include:

* Reusable style values
* Easy updates across large projects
* Component-level customization
* Dynamic style changes with JavaScript
* Improved flexibility and scalability

CSS variables are widely used in modern web development for:

* **Theme systems**
* **Design systems**
* **Responsive layouts**
* **Dark/light mode switching**

---

