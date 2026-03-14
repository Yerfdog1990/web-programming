# Custom Properties and Inheritance

CSS **Custom Properties** (commonly called **CSS variables**) are an important feature of modern CSS that help developers manage styles efficiently. They improve **performance, maintainability, flexibility, and readability** of stylesheets.

This section explains:

* What custom properties are
* How they affect performance
* Their impact on code organization
* How inheritance works with variables
* Global and local variables
* A full implementation example
* Exercises with solutions

---

# 3.1 Custom Properties

## What are Custom Properties?

**Custom properties** are user-defined CSS values that can be reused throughout a stylesheet.

They are declared using a **double dash (`--`) prefix** and accessed using the **`var()` function**.

They are also commonly called **CSS variables**.

Custom properties allow developers to:

* Store reusable values
* Reduce duplication
* Maintain consistent styling
* Easily update design values

---

## Declaring Custom Properties

Custom properties are typically defined in the `:root` selector so that they are available globally throughout the document.

### Example

```css
:root {
  --main-color: #3498db;
  --padding: 10px;
}
```

### Explanation

Two custom properties are declared:

| Variable       | Purpose                         |
| -------------- | ------------------------------- |
| `--main-color` | Stores the main theme color     |
| `--padding`    | Stores a reusable padding value |

---

## Using Custom Properties

Once declared, custom properties can be used with the **`var()` function**.

### Example

```css
background-color: var(--main-color);
padding: var(--padding);
```

Explanation:

* `var(--main-color)` retrieves the stored color value
* `var(--padding)` retrieves the padding value

This allows styles to reuse values across multiple elements.

---

# 3.2 Impact on Performance

Using CSS variables can positively impact **performance and efficiency** of web applications.

## 1. Optimization Through Reuse

CSS variables reduce **code duplication** by allowing the same value to be reused multiple times.

This reduces:

* CSS file size
* Maintenance effort
* Risk of inconsistencies

### Example

```css
:root {
  --main-color: #3498db;
}

.header {
  background-color: var(--main-color);
}

.footer {
  background-color: var(--main-color);
}
```

### Explanation

The same variable (`--main-color`) is used in multiple places.

If the color changes, developers only update it **once** in `:root`.

---

## 2. Caching and Rendering

Browsers can efficiently **cache CSS variables**, improving rendering performance.

When a variable changes:

* The browser recalculates styles **once**
* Instead of recalculating the entire stylesheet

This reduces **rendering workload**.

---

## 3. Dynamic Updates

CSS variables can be updated dynamically using **JavaScript**.

This allows styles to change **without recalculating the entire page layout**.

### Example

```javascript
document.documentElement.style.setProperty('--main-color', '#e74c3c');
```

Explanation:

* `document.documentElement` selects the root element
* `setProperty()` changes the variable value
* All elements using `--main-color` update automatically

This makes CSS variables ideal for:

* Dark mode
* Theme switching
* Dynamic UI styling

---

# 3.3 Impact on Code Organization

CSS variables significantly improve **code organization** and readability.

---

# Centralized Style Management

Variables allow developers to define styles **in a single location**.

### Example

```css
:root {
  --font-size: 16px;
  --line-height: 1.5;
}

body {
  font-size: var(--font-size);
  line-height: var(--line-height);
}
```

### Explanation

* Font size and line height are defined once
* Any change automatically updates the entire site

This simplifies large projects.

---

# Inheritance and Context

CSS variables follow the **normal CSS inheritance rules**.

Child elements automatically inherit variables from their parent elements.

### Example

```css
:root {
  --base-font-size: 16px;
}

.container {
  font-size: var(--base-font-size);
}

.container .heading {
  font-size: calc(var(--base-font-size) * 1.5);
}
```

### Explanation

* `.container` uses the base font size
* `.heading` increases the size using the `calc()` function
* The value is derived from the same variable

This ensures consistent typography.

---

# Improving Code Readability

CSS variables improve readability by allowing developers to use **meaningful names**.

### Example

```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
}

.primary-button {
  background-color: var(--primary-color);
}

.secondary-button {
  background-color: var(--secondary-color);
}
```

### Explanation

Instead of using raw color values, meaningful variable names explain the purpose of the style.

This makes code easier to understand.

---

# Local and Global Variables

CSS variables can be defined either **globally** or **locally**.

| Type             | Description                               |
| ---------------- | ----------------------------------------- |
| Global variables | Declared in `:root`, available everywhere |
| Local variables  | Declared in specific selectors            |

---

## Example

```css
:root {
  --global-padding: 10px;
}

.section {
  --section-padding: 20px;
  padding: var(--section-padding);
}

.item {
  padding: var(--global-padding);
}
```

### Explanation

* `.section` uses its own **local padding**
* `.item` uses the **global padding**

This allows flexible styling for components.

---

# 3.4 Full Implementation Example

This example demonstrates **inheritance and local variable overriding**.

### CSS

```css
:root {
  --main-padding: 10px;
  --main-margin: 20px;
  --primary-color: #3498db;
}

.container {
  padding: var(--main-padding);
  margin: var(--main-margin);
}

.container .header {
  --primary-color: #e74c3c; /* Local variable override */
  color: var(--primary-color);
}

.container .content {
  color: var(--primary-color); /* Uses root variable value */
}
```

---

### HTML

```html
<div class="container">
  <div class="header">This is the header</div>
  <div class="content">This is the content</div>
</div>
```

---

## Explanation

In this example:

* `--primary-color` is defined globally in `:root`
* `.content` inherits the root value (**blue**)
* `.header` overrides the variable locally (**red**)

Result:

| Element    | Color Used |
| ---------- | ---------- |
| `.header`  | Red        |
| `.content` | Blue       |

This demonstrates how **variable inheritance and overrides work together**.

---

# Exercise 1: CSS Reuse

## Problem

Define variables for:

* Main color (`--main-color`)
* Main font size (`--main-font-size`)

Use these variables to style:

* Headings (`h1`, `h2`)
* Text elements (`p`, `span`)

---

## Requirements

* Create variables `--main-color` and `--main-font-size`
* Use variables for headings
* Apply variables to text elements

---

## Solution

### CSS

```css
:root {
  --main-color: #3498db;
  --main-font-size: 18px;
}

h1, h2 {
  color: var(--main-color);
  font-size: calc(var(--main-font-size) * 1.5);
}

p, span {
  color: var(--main-color);
  font-size: var(--main-font-size);
}
```

---

### HTML

```html
<h1>Main Heading</h1>
<h2>Sub Heading</h2>

<p>This is a paragraph.</p>
<span>This is a span element.</span>
```

---

### Result

* All text uses the **same color**
* Headings have **larger font sizes**
* Paragraphs and spans use the **base font size**

---

# Exercise 2: CSS Override

## Problem

Define CSS variables:

* `--main-color`
* `--main-padding`

Use these variables to style:

* A `div` container
* `.header`
* `.content`

Override the variable inside `.header`.

---

## Requirements

* Define variables in `:root`
* Use variables for styling
* Override `--main-color` in `.header`
* Apply overridden color to header text

---

## Solution

### CSS

```css
:root {
  --main-color: #3498db;
  --main-padding: 20px;
}

div {
  padding: var(--main-padding);
}

.header {
  --main-color: #e74c3c;
  color: var(--main-color);
}

.content {
  color: var(--main-color);
}
```

---

### HTML

```html
<div>

  <div class="header">
    Header Section
  </div>

  <div class="content">
    Content Section
  </div>

</div>
```

---

### Result

| Element    | Color                     |
| ---------- | ------------------------- |
| `.header`  | Red (overridden variable) |
| `.content` | Blue (root variable)      |

---

# Summary

CSS **Custom Properties and Inheritance** provide powerful mechanisms for managing styles in modern web development.

Key benefits include:

* Reusable style values
* Centralized style management
* Improved performance through caching
* Dynamic updates via JavaScript
* Clear and readable code
* Flexible styling through inheritance and overrides

Developers widely use CSS variables for:

* **Theme systems**
* **Design systems**
* **Responsive layouts**
* **Dark/light mode switching**

---
