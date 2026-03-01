# Floating Elements

Floating elements using the `float` and `clear` properties were among the first techniques used to create complex layouts in web design. Although modern layout systems such as Flexbox and Grid are often preferred today, understanding floating is still important for:

* Working with legacy projects
* Understanding CSS layout fundamentals
* Creating simple layouts
* Wrapping text around images

---

# 7.1 The `float` Property

The `float` property allows an element to **float to the left or right**, causing surrounding content (such as text) to wrap around it.

It is commonly used for:

* Wrapping text around images
* Creating simple column layouts
* Aligning elements horizontally

---

## Syntax

```css
.element {
  float: left; /* or right */
}
```

---

## Values of the `float` Property

* **left** – The element floats to the left, and subsequent elements wrap around it on the right.
* **right** – The element floats to the right, and subsequent elements wrap around it on the left.
* **none** – Default value. The element does not float.
* **inherit** – Inherits the float value from its parent.

---

## Example: Using `float`

### CSS

```css
.float-left {
  float: left;
  width: 200px;
  height: 200px;
  background-color: lightblue;
}

.float-right {
  float: right;
  width: 200px;
  height: 200px;
  background-color: lightgreen;
}

.content {
  background-color: lightgrey;
  padding: 10px;
}
```

### HTML

```html
<div class="float-left">Left Float</div>
<div class="float-right">Right Float</div>

<div class="content">
  <p>
    This is some content that will wrap around the floated elements.
    The left floated element will be placed to the left, and the right
    floated element will be placed to the right.
  </p>
</div>
```

### What Happens?

* The first box floats left.
* The second box floats right.
* The paragraph wraps around both floated elements.
* Floated elements are removed from normal document flow but still affect surrounding content.

---

# 7.2 The `clear` Property

The `clear` property controls how elements behave around floated elements.

It prevents an element from wrapping around floats on a specified side.

---

## Syntax

```css
.element {
  clear: left; /* or right or both */
}
```

---

## Values of the `clear` Property

* **left** – Prevent wrapping on the left side.
* **right** – Prevent wrapping on the right side.
* **both** – Prevent wrapping on both sides.
* **none** – Default value. Allows wrapping on both sides.

---

## Example: Using `clear`

### CSS

```css
.float-left {
  float: left;
  width: 200px;
  height: 200px;
  background-color: lightblue;
}

.float-right {
  float: right;
  width: 200px;
  height: 200px;
  background-color: lightgreen;
}

.clear {
  clear: both;
  background-color: lightcoral;
  padding: 10px;
}

.content {
  background-color: lightgrey;
  padding: 10px;
}
```

### HTML

```html
<div class="float-left">Left Float</div>
<div class="float-right">Right Float</div>

<div class="clear">Cleared Element</div>

<div class="content">
  <p>
    This content will not wrap around the floated elements
    because of the cleared element above.
  </p>
</div>
```

### What Happens?

* The `.clear` element stops wrapping around the floated elements.
* It moves below both floats because of `clear: both`.
* The content below starts normally after the floats.

---

# The "Clearfix" Technique

When all child elements inside a parent are floated, the parent’s height may collapse because floated elements are removed from normal flow.

To fix this, use the **clearfix** technique.

### CSS

```css
.container::after {
  content: "";
  display: table;
  clear: both;
}
```

### HTML

```html
<div class="container">
  <div class="sidebar">Sidebar Content</div>
  <div class="main">Main Content</div>
</div>
```

The pseudo-element clears the floats, forcing the parent container to properly contain its floated children.

---

# 7.3 Pros and Cons of Using `float`

## Pros

### 1. Simplicity

Easy to create simple layouts using float.

### 2. Wide Browser Support

Supported by all modern browsers, including older versions.

### 3. Flexibility

Can:

* Wrap text around images
* Create multi-column layouts
* Align content left or right

---

## Cons

### 1. Challenges with Complex Layouts

Difficult when:

* Vertical alignment is required
* Equal height columns are needed
* Responsive layouts become complex

### 2. Parent Height Collapse

If all child elements are floated:

* Parent height may collapse
* Requires clearfix or additional fixes

### 3. Obsolescence

Modern layout methods like Flexbox and Grid are more powerful and flexible.

---

# Example: Two-Column Layout Using `float` and `clear`

### CSS

```css
.container {
  width: 100%;
}

.sidebar {
  float: left;
  width: 25%;
  background-color: lightblue;
  padding: 10px;
}

.main {
  float: left;
  width: 75%;
  background-color: lightgreen;
  padding: 10px;
}

.footer {
  clear: both;
  background-color: lightcoral;
  padding: 10px;
  text-align: center;
}
```

### HTML

```html
<div class="container">
  <div class="sidebar">Sidebar Content</div>
  <div class="main">Main Content</div>
  <div class="footer">Footer Content</div>
</div>
```

### What Happens?

* Sidebar floats left (25% width).
* Main content floats left (75% width).
* Footer clears both floats and appears below them.

---

# Exercise 1: Creating a Floating Element

## Requirements

* Class name: `float-left`
* Must use `float: left`
* Width: 150px
* Height: 150px
* Margin: 10px
* Text must wrap around it on the right

---

## Solution

### CSS

```css
.float-left {
  float: left;
  width: 150px;
  height: 150px;
  margin: 10px;
  background-color: lightblue;
}

.content {
  padding: 10px;
}
```

### HTML

```html
<div class="float-left">Floating Box</div>

<div class="content">
  <p>
    This text wraps around the floating element.
    Because the box floats to the left,
    the content flows around it on the right side.
    Add more text here to clearly see the wrapping behavior.
  </p>
</div>
```

### Result

* The box floats to the left.
* Text wraps around it on the right.
* Margin creates spacing around the floating element.

---

# Exercise 2: Applying the `clear` Property

## Requirements

* Class name: `clear-both`
* Must use `clear: both`
* Width: 100%
* Height: 50px
* Must have background color
* Must appear below two floating elements (`float-left` and `float-right`)

---

## Solution

### CSS

```css
.float-left {
  float: left;
  width: 150px;
  height: 150px;
  background-color: lightblue;
}

.float-right {
  float: right;
  width: 150px;
  height: 150px;
  background-color: lightgreen;
}

.clear-both {
  clear: both;
  width: 100%;
  height: 50px;
  background-color: lightcoral;
}
```

### HTML

```html
<div class="float-left">Left Float</div>
<div class="float-right">Right Float</div>

<div class="clear-both">
  Cleared Element
</div>
```

### Result

* Two elements float left and right.
* The `clear-both` element moves below them.
* It does not wrap around either floating element.
* The background color helps visualize its position.

---

# Final Summary

* `float` moves elements left or right and allows content to wrap.
* `clear` controls wrapping behavior around floated elements.
* Floated elements are removed from normal document flow.
* Parent containers may collapse when all children are floated.
* The clearfix technique fixes collapsed parent issues.
* Float is still important for legacy projects and text wrapping.
* Modern layout systems (Flexbox and Grid) are preferred for complex layouts.

Understanding `float` and `clear` builds a strong foundation for mastering CSS layout techniques.

---
