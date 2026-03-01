# Centering Elements

Centering elements is one of the most common layout tasks in web design. Proper centering improves:

* Visual balance
* Readability
* Professional appearance

There are different techniques for horizontal and vertical centering in modern CSS. The best method depends on the type of element and layout requirements.

---

# 9.1 Horizontal Centering

## 1. Centering Block Elements Using `margin: auto`

One of the simplest and most widely used techniques for horizontally centering block elements is:

```css
margin: 0 auto;
```

### Example

### CSS

```css
.centered-box {
  width: 200px;
  height: 100px;
  background-color: #3498db;
  margin: 0 auto;
}
```

### HTML

```html
<div class="centered-box"></div>
```

### Code Explanation

* `margin: 0 auto;`

  * `0` → top and bottom margins
  * `auto` → left and right margins automatically adjust
  * This pushes the element to the horizontal center
* The element must have a defined width for centering to work.

---

## 2. Centering Inline Elements Using `text-align`

To center inline or inline-block elements inside a block container, use:

```css
text-align: center;
```

### Example

### CSS

```css
.container {
  text-align: center;
  background-color: #f1c40f;
  padding: 20px;
}

.inline-element {
  background-color: #e74c3c;
  display: inline-block;
  padding: 10px;
  color: white;
}
```

### HTML

```html
<div class="container">
  <div class="inline-element">Inline Element</div>
</div>
```

### Code Explanation

* `text-align: center;`

  * Centers inline and inline-block elements inside the container.
* `display: inline-block;`

  * Allows padding and width while still behaving like inline content.

---

## 3. Centering Elements Using Flexbox

Flexbox provides a powerful and flexible way to center elements horizontally and vertically.

### Example

### CSS

```css
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #2ecc71;
}

.centered-box {
  width: 200px;
  height: 100px;
  background-color: #3498db;
}
```

### HTML

```html
<div class="flex-container">
  <div class="centered-box"></div>
</div>
```

### Code Explanation

* `display: flex;` → Activates Flexbox.
* `justify-content: center;` → Centers horizontally.
* `align-items: center;` → Centers vertically.
* `height: 100vh;` → Makes container full viewport height.

Flexbox is one of the most recommended modern methods.

---

# 9.2 Vertical Centering

Vertical centering used to be difficult in CSS. Modern techniques make it much easier.

---

## 1. Vertical Centering Using Flexbox

Flexbox makes vertical centering simple.

### CSS

```css
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #2ecc71;
}

.centered-box {
  width: 200px;
  height: 100px;
  background-color: #3498db;
}
```

### HTML

```html
<div class="flex-container">
  <div class="centered-box"></div>
</div>
```

### Explanation

* `align-items: center;` centers vertically.
* Works regardless of element height.
* Clean and modern solution.

---

## 2. Centering Using CSS Grid

CSS Grid offers an even shorter syntax.

### CSS

```css
.grid-container {
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: #9b59b6;
}

.centered-box {
  width: 200px;
  height: 100px;
  background-color: #3498db;
}
```

### HTML

```html
<div class="grid-container">
  <div class="centered-box"></div>
</div>
```

### Explanation

* `display: grid;` activates Grid layout.
* `place-items: center;` centers both horizontally and vertically.
* Very concise and powerful.

---

## 3. Vertical Centering Using Absolute Positioning and Transform

This technique works without Flexbox or Grid.

### CSS

```css
.container {
  position: relative;
  height: 100vh;
  background-color: #e74c3c;
}

.centered-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 100px;
  background-color: #3498db;
}
```

### HTML

```html
<div class="container">
  <div class="centered-box"></div>
</div>
```

### Code Explanation

* `position: absolute;` positions element relative to container.
* `top: 50%; left: 50%;` moves element midpoint.
* `transform: translate(-50%, -50%);` corrects offset by half width and height.

This method is useful when Flexbox or Grid cannot be used.

---

## 4. Vertical Centering with Table and Cells

Older but effective technique.

### CSS

```css
.table-container {
  display: table;
  width: 100%;
  height: 100vh;
  background-color: #f39c12;
}

.table-cell {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

.centered-box {
  display: inline-block;
  background-color: #3498db;
  padding: 20px;
  color: white;
}
```

### HTML

```html
<div class="table-container">
  <div class="table-cell">
    <div class="centered-box">Centered Element</div>
  </div>
</div>
```

### Explanation

* `display: table;` simulates a table container.
* `display: table-cell;` allows vertical alignment.
* `vertical-align: middle;` centers vertically.

---

# Exercise 1: Horizontal Centering Using `margin: auto`

## Requirements

* Class: `centered-box`
* Width: 200px
* Height: 100px
* Background color: #3498db
* Horizontally centered using `margin: auto`

---

## Solution

### CSS

```css
.centered-box {
  width: 200px;
  height: 100px;
  background-color: #3498db;
  margin: 0 auto;
}
```

### HTML

```html
<div class="centered-box"></div>
```

### Result

* Box is horizontally centered.
* Equal space appears on left and right.
* Top and bottom margins remain zero.

---

# Exercise 2: Centering Inline Elements Using `text-align`

## Requirements

* Container class: `container`
* Background color: #f1c40f
* Padding: 20px
* Inside it, multiple elements with class `inline-element`
* Inline elements centered horizontally
* Background color: #e74c3c
* Padding: 10px
* White text color

---

## Solution

### CSS

```css
.container {
  background-color: #f1c40f;
  padding: 20px;
  text-align: center;
}

.inline-element {
  display: inline-block;
  background-color: #e74c3c;
  padding: 10px;
  color: white;
  margin: 5px;
}
```

### HTML

```html
<div class="container">
  <div class="inline-element">Item 1</div>
  <div class="inline-element">Item 2</div>
  <div class="inline-element">Item 3</div>
</div>
```

### Result

* Container has yellow background.
* Inline elements are centered horizontally.
* Red background with white text.
* Proper spacing with padding and margin.

---

# Final Summary

## Horizontal Centering Methods

* `margin: auto` → For block elements
* `text-align: center` → For inline elements
* Flexbox → `justify-content: center`
* Grid → `place-items: center`

## Vertical Centering Methods

* Flexbox → `align-items: center`
* Grid → `place-items: center`
* Absolute positioning + transform
* Table-cell method

## Recommended Modern Methods

* Use **Flexbox** for most layouts.
* Use **CSS Grid** for powerful two-dimensional layouts.
* Use older methods only when necessary.

Mastering centering techniques gives you full control over layout alignment and helps create clean, professional web designs.

---
