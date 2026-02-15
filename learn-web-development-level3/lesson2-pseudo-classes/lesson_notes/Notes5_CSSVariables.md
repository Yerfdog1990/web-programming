# 10. CSS Variables (Custom Properties)

## 10.1 Introduction to CSS Variables

**CSS Variables**, also called **CSS Custom Properties**, allow developers to store values in one place and reuse them throughout the stylesheet.

They make CSS:

* More flexible
* Easier to maintain
* More readable
* Ideal for large projects and themes

Instead of repeating values like colors and sizes multiple times, you define them once and reuse them.

---

# 10.2 Declaring Variables

CSS variables are declared using:

```
--variable-name
```

They are commonly declared inside the `:root` selector so they are available globally.

---

## Syntax

```css
:root {
  --variable-name: value;
}
```

---

## Example: Declaring Variables

```css
:root {
  --main-color: #3498db;
  --secondary-color: #2ecc71;
  --font-size: 16px;
}
```

Here we declared three variables:

* `--main-color`
* `--secondary-color`
* `--font-size`

---

# 10.3 Using Variables

To use a CSS variable, we use the `var()` function.

---

## Syntax

```css
selector {
  property: var(--variable-name);
}
```

---

## Example

```css
body {
  background-color: var(--main-color);
  color: var(--secondary-color);
  font-size: var(--font-size);
}
```

* ✔ Background uses main color
* ✔ Text uses secondary color
* ✔ Font size is consistent

---

# 10.4 Inheritance and Overriding Variables

CSS variables are **inherited** by child elements.

This means:

* If declared in `:root`, they are available everywhere.
* They can be overridden inside specific selectors.

---

## Example: Overriding Variables

### HTML

```html
<div class="header">Header</div>
<div class="footer">Footer</div>
```

### CSS

```css
:root {
  --main-color: #3498db;
}

.header {
  --main-color: #e74c3c;
  background-color: var(--main-color);
}

.footer {
  background-color: var(--main-color);
}
```

### Result

* `.header` → Red background (#e74c3c)
* `.footer` → Blue background (#3498db)

* ✔ Header overrides the variable
* ✔ Footer uses the root value

---

# 10.5 Benefits of CSS Variables

## 1. Simplified Style Management

Change value once → applied everywhere.

Example:

```css
:root {
  --primary-color: blue;
}
```

Changing `blue` to `green` updates the entire website.

---

## 2. Improved Readability

Instead of:

```css
color: #3498db;
```

Use:

```css
color: var(--main-color);
```

This makes the purpose clearer.

---

## 3. Dynamic Updates with JavaScript

Variables can be modified dynamically:

```javascript
document.documentElement.style.setProperty('--main-color', 'purple');
```

This allows theme switching and interactive design.

---

# Exercise 1: Variable Declaration

## Task

1. Declare variables inside `:root`
2. Define:

    * `--bg-color` → #f0f0f0
    * `--text-color` → #333333
    * `--font-size` → 18px
3. Apply them to elements on the page

---

## Sample HTML

```html
<h1>Welcome</h1>
<p>This is a paragraph.</p>
```

---

## Sample Solution

```css
:root {
  --bg-color: #f0f0f0;
  --text-color: #333333;
  --font-size: 18px;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  font-size: var(--font-size);
}
```

* ✔ Background becomes light gray
* ✔ Text becomes dark gray
* ✔ Font size becomes 18px

---

# Exercise 2: Using Variables

## Task

1. Declare two variables:

    * `--text-color`
    * `--font-size`
2. Apply:

    * `--text-color` to `<h1>`
    * `--text-color` and `--font-size` to `<p>`

---

## Sample Solution

```css
:root {
  --text-color: #333333;
  --font-size: 18px;
}

h1 {
  color: var(--text-color);
}

p {
  color: var(--text-color);
  font-size: var(--font-size);
}
```

* ✔ Headings use variable text color
* ✔ Paragraphs use variable text color
* ✔ Paragraphs use variable font size

---

# Advanced Example: Theming

## Light Theme

```css
:root {
  --bg-color: white;
  --text-color: black;
}
```

## Dark Theme Override

```css
.dark-theme {
  --bg-color: #121212;
  --text-color: #e0e0e0;
}
```

Now switching themes becomes easy:

```html
<body class="dark-theme">
```

---

# Important Notes

* ✔ Variables are case-sensitive
* ✔ Must start with `--`
* ✔ Use `var()` to access them
* ✔ Can be overridden
* ✔ Are inherited

---

# Common Mistake

Incorrect:

```css
color: --main-color;
```

Correct:

```css
color: var(--main-color);
```

---

# Summary

CSS Variables:

* Store reusable values
* Improve maintainability
* Support inheritance
* Can be overridden
* Allow dynamic updates
* Simplify theme creation

---

