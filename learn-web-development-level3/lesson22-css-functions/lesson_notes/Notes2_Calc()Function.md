# Function `calc()` in CSS

The **`calc()` function** in CSS allows developers to perform mathematical calculations directly within CSS properties. This makes it possible to create **dynamic, flexible, and responsive styles** without relying on JavaScript.

Using `calc()`, you can combine different measurement units such as:

* Pixels (`px`)
* Percentages (`%`)
* `em`
* `rem`
* Viewport units (`vw`, `vh`)

This ability makes it easier to design **adaptive layouts** that automatically adjust to screen sizes and container dimensions.

---

# 6.1 Basic Features of `calc()` Function

The **`calc()` function** enables mathematical operations inside CSS. It allows developers to calculate values for:

* Width
* Height
* Margin
* Padding
* Border
* Font size
* Positioning

This helps in building layouts that respond dynamically to changes in screen size.

The function supports **four basic mathematical operations**:

| Operation      | Example             |
| -------------- | ------------------- |
| Addition       | `calc(100% + 20px)` |
| Subtraction    | `calc(50% - 10px)`  |
| Multiplication | `calc(10px * 2)`    |
| Division       | `calc(100px / 2)`   |

---

## Syntax

```css
selector {
  property: calc(expression);
}
```

Where **expression** contains the mathematical calculation.

---

## Example

### HTML

```html
<div>
  Lorem ipsum odor amet, consectetuer adipiscing elit. Montes malesuada pharetra mi suscipit suspendisse ornare.
  Fringilla feugiat cursus finibus commodo, faucibus himenaeos.
</div>
```

### CSS

```css
div {
  width: calc(100% - 50px);
  margin: calc(1em + 10px);
  background: lightblue;
}
```

### Explanation

In this example:

* **Width** is calculated as **100% minus 50px**
* **Margin** is calculated as **1em plus 10px**

This demonstrates how `calc()` combines **relative and fixed units**.

---

# 6.2 Examples of Using the `calc()` Function

## 1. Addition and Subtraction

The most common use of `calc()` is **adding and subtracting values** to control layout spacing precisely.

---

## Example 1: Adding Percentages and Pixels

This example calculates the container width as **100% of the parent width minus 40 pixels**.

### HTML

```html
<div class="container">
  Lorem ipsum odor amet, consectetuer adipiscing elit. Montes malesuada pharetra mi suscipit suspendisse ornare.
  Fringilla feugiat cursus finibus commodo, faucibus himenaeos.
</div>
```

### CSS

```css
.container {
  width: calc(100% - 40px);
  margin: 20px;
  background: lightgreen;
}
```

### Explanation

* The container takes **full width minus 40px**
* This leaves space for margins or other elements.

---

## Example 2: Subtracting a Fixed Value

This example calculates sidebar width by subtracting **250px** from the full width.

### HTML

```html
<div class="sidebar">
  <ul>
    <li><a href="#"></a>Article 1</li>
    <li><a href="#"></a>Article 2</li>
    <li><a href="#"></a>Article 3</li>
  </ul>
</div>
```

### CSS

```css
.sidebar {
  width: calc(100% - 250px);
  background: tomato;
}
```

### Explanation

This layout leaves **250px space** for another element such as a **main content area**.

---

# 2. Multiplication and Division

`calc()` can also perform multiplication and division for proportional layouts.

---

## Example 3: Multiplication

In this example, height is calculated using multiplication.

### HTML

```html
<div class="element">Element</div>
```

### CSS

```css
.element {
  height: calc(20px * 3);
  background: lightpink;
}
```

### Explanation

* `20px * 3 = 60px`
* Final height becomes **60px**

---

## Example 4: Division

This example divides the container width into **three equal columns**.

### HTML

```html
<div class="box">
  Box
</div>
```

### CSS

```css
.box {
  width: calc(100% / 3);
  background: yellow;
}
```

### Explanation

Each element occupies **one-third of the parent width**.

---

# 6.3 Combining Different Units

One of the most powerful features of `calc()` is the ability to **combine different units** in a single calculation.

This allows for **adaptive and responsive designs**.

---

## Example 5: Combining Percentages and Pixels

This example calculates the header height based on the viewport.

### HTML

```html
<header class="header">
  <nav>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
</header>
```

### CSS

```css
.header {
  height: calc(100vh - 100px);
  background: lightgreen;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 10px;
}
```

### Explanation

* `100vh` = full viewport height
* `100vh - 100px` leaves space for margins or other elements.

---

# Dynamic Calculations of Dimensions

`calc()` helps dynamically calculate element sizes.

---

## Example 6: Dynamic Calculation of Width

This example subtracts margins from the full width.

### HTML

```html
<div class="content">
  Lorem ipsum odor amet, consectetuer adipiscing elit. Montes malesuada pharetra mi suscipit suspendisse ornare.
  Fringilla feugiat cursus finibus commodo, faucibus himenaeos.
</div>
```

### CSS

```css
.content {
  width: calc(100% - 2 * 20px);
  background: lightgreen;
}
```

### Explanation

* Margin on both sides = `20px + 20px`
* Total removed from width = `40px`

---

# 6.4 Using `calc()` in Media Queries

`calc()` can also be used in **media queries** to create responsive styles.

---

## Example 7: Adaptive Padding in Media Queries

### HTML

```html
<div class="container">
  Lorem ipsum odor amet, consectetuer adipiscing elit. Montes malesuada pharetra mi suscipit suspendisse ornare.
  Fringilla feugiat cursus finibus commodo, faucibus himenaeos.
</div>
```

### CSS

```css
.container {
  padding: 10px;
  background: tomato;
}

@media (min-width: 600px) {
  .container {
    padding: calc(10px + 2vw);
  }
}
```

### Explanation

When the screen width exceeds **600px**, padding increases dynamically based on viewport width.

---

## Example 8: Adaptive Sizes with CSS Variables

### HTML

```html
<div class="container">
  Lorem ipsum odor amet, consectetuer adipiscing elit.
</div>
```

### CSS

```css
:root {
  --main-padding: 20px;
}

.container {
  padding: var(--main-padding);
  background: yellow;
}

@media (max-width: 600px) {
  .container {
    padding: calc(var(--main-padding) / 2);
  }
}
```

### Explanation

* Default padding = **20px**
* On smaller screens → padding becomes **10px**

---

# 6.5 Pros and Cons

## Advantages of Using `calc()`

### 1. Flexibility

The `calc()` function allows developers to combine different units and perform calculations dynamically.

Example:

```css
width: calc(100% - 40px);
```

---

### 2. Dynamic Style Management

With `calc()`, element dimensions can adjust automatically depending on layout requirements.

This makes designs **more responsive and adaptive**.

---

### 3. Simplifying Complex Calculations

`calc()` eliminates the need for **JavaScript for simple mathematical calculations**.

All calculations can be handled directly in CSS.

---

## Limitations and Features

### 1. Spaces Around Operators

Operators must have spaces around them.

Correct:

```css
width: calc(100% - 50px);
```

Incorrect:

```css
width: calc(100%-50px);
```

---

### 2. Browser Compatibility

The `calc()` function is supported by most modern browsers, but compatibility checks may be necessary for older browsers.

---

### 3. Performance

Very complex calculations or frequent recalculations may slightly increase **rendering time**.

However, in most cases the performance impact is minimal.

---

# Exercises

# Exercise 1: Height with `calc()`

### Task

Create an element with class **`combined-height`**.

Use `calc()` to set its height to:

**50% of the parent height minus 20px**

Add:

* Background
* Padding

---

### Solution

```css
.combined-height {
  height: calc(50% - 20px);
  background: lightblue;
  padding: 15px;
}
```

### Example HTML

```html
<div class="combined-height">
  Combined height element
</div>
```

---

# Exercise 2: Padding with `calc()`

### Task

Create an element with class **`responsive-padding`**.

Requirements:

* Default padding = **10px**
* When screen width is greater than **600px**
* Padding should become **10px + 2vw**

The element must have:

* Border
* Background

---

### Solution

```css
.responsive-padding {
  padding: 10px;
  border: 2px solid black;
  background: lightgray;
}

@media (min-width: 600px) {
  .responsive-padding {
    padding: calc(10px + 2vw);
  }
}
```

### Example HTML

```html
<div class="responsive-padding">
  Responsive padding element
</div>
```

---

# Summary

The **`calc()` function** is a powerful CSS tool that allows developers to perform mathematical calculations directly in stylesheets.

Key features include:

* Performing **addition, subtraction, multiplication, and division**
* **Combining multiple units**
* Creating **responsive layouts**
* Reducing the need for **JavaScript calculations**

`calc()` is widely used in modern CSS for **dynamic layouts, adaptive spacing, and responsive design**.

---