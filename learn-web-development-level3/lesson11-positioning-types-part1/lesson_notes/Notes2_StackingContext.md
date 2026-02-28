# 2. Stacking Context

Stacking Context in CSS defines how elements are layered on top of one another along the **Z-axis** (the axis perpendicular to the screen). While normal layout works in two dimensions (X and Y), stacking context introduces depth — determining which element appears in front and which appears behind.

Understanding **z-index** and stacking contexts is essential when working with overlapping elements, modals, dropdowns, tooltips, fixed headers, and complex UI layouts.

---

# 2.1 z-index Property

The `z-index` property controls the stacking order of overlapping elements.

Elements with a higher `z-index` value appear **above** elements with a lower value.

⚠️ Important:
`z-index` only works on **positioned elements**, meaning elements with:

* `position: relative`
* `position: absolute`
* `position: fixed`
* `position: sticky`

---

## Syntax

```css
.element {
  position: relative; /* or absolute, fixed, sticky */
  z-index: number;
}
```

Where:

* `number` is an integer (positive, zero, or negative).
* The greater the value → the higher the element appears in stacking order.

---

## Stacking Rules

Stacking is determined by:

### 1. Position in the document tree

Elements that appear later in the HTML (lower in the document tree) are stacked above earlier ones — if no `z-index` is specified.

### 2. z-index value

Elements with higher `z-index` values are stacked above those with lower values.

---

## Example: Basic z-index Usage

### CSS

```css
.wrapper {
  min-height: 300px;
}

.box {
  position: absolute;
  min-width: 125px;
  min-height: 125px;
  color: white;
}

.box1 {
  z-index: 1;
  top: 50px;
  left: 50px;
  background-color: red;
}

.box2 {
  z-index: 2;
  top: 100px;
  left: 100px;
  background-color: blue;
}

.box3 {
  z-index: 0;
  top: 150px;
  left: 150px;
  background-color: green;
}
```

### HTML

```html
<div class="wrapper">
  <div class="box box1">Box 1</div>
  <div class="box box2">Box 2</div>
  <div class="box box3">Box 3</div>
</div>
```

### Result Explanation

* **Box 2 (z-index: 2)** → appears on top
* **Box 1 (z-index: 1)** → appears in the middle
* **Box 3 (z-index: 0)** → appears at the bottom

Higher number = closer to the user.

---

# 2.2 What Is a Stacking Context?

A **stacking context** is a group of elements that are treated as a single unit when determining stacking order.

Think of it as a “layering bubble.”
Elements inside that bubble are layered relative to each other — but they cannot escape their bubble to overlap elements outside it unless the entire context moves.

---

## When Is a Stacking Context Created?

A stacking context is created when:

1. An element has `position: relative | absolute | fixed | sticky` AND `z-index` is not `auto`.
2. An element has `opacity` less than `1`.
3. An element has:

    * `transform`
    * `filter`
    * `perspective`
    * `clip-path`
    * `mask`
    * `mask-image`
4. An element has:

    * `contain: layout`
    * `contain: paint`
    * `contain: strict`

---

## Example: Creating a Stacking Context

### CSS

```css
.parent {
  position: relative;
  z-index: 10;
  min-height: 300px;
  padding: 20px;
  color: white;
  background-color: #f1c40f;
}

.child-blue {
  position: absolute;
  z-index: 1;
  top: 50px;
  left: 50px;
  min-width: 125px;
  min-height: 125px;
  background-color: #3498db;
}

.child-red {
  position: absolute;
  z-index: 2;
  top: 100px;
  left: 100px;
  min-width: 125px;
  min-height: 125px;
  background-color: #e74c3c;
}
```

### HTML

```html
<div class="parent">
  Parent element
  <div class="child-blue">1</div>
  <div class="child-red">2</div>
</div>
```

---

## Explanation

* `.parent` creates a **new stacking context** because it has `position: relative` and `z-index: 10`.
* `.child-blue` and `.child-red` are stacked **inside that context only**.
* `child-red (z-index: 2)` appears above `child-blue (z-index: 1)`.

However — neither child can escape the parent’s stacking context.

---

# 2.3 Interaction of Stacking Contexts

Elements inside one stacking context cannot overlap elements from another stacking context independently.

Only the **parent stacking contexts** are compared at the root level.

---

## Example: Two Stacking Contexts

### CSS

```css
.wrapper {
  min-height: 500px;
}

.container1 {
  position: relative;
  z-index: 10;
  padding: 20px;
  margin-bottom: 200px;
  background-color: lightgrey;
}

.container2 {
  position: relative;
  z-index: 20;
  padding: 20px;
  background-color: lightpink;
}

.box {
  position: absolute;
  min-width: 125px;
  min-height: 125px;
  color: white;
}

.box1 {
  z-index: 1;
  top: 50px;
  left: 50px;
  background-color: red;
}

.box2 {
  z-index: 2;
  top: 100px;
  left: 100px;
  background-color: blue;
}
```

### HTML

```html
<div class="wrapper">
  <div class="container1">
    <div class="box box1">Box 1</div>
    <div class="box box2">Box 2</div>
  </div>

  <div class="container2">
    <div class="box box1">Box 3</div>
    <div class="box box2">Box 4</div>
  </div>
</div>
```

---

## Explanation

* `.container1` → z-index: 10
* `.container2` → z-index: 20

Because `20 > 10`, **container2 appears above container1 entirely.**

Even if Box 2 inside container1 had `z-index: 999`, it still could not overlap container2 — because stacking contexts are compared as whole units.

---

# 2.4 Negative z-index Values

`z-index` can also be negative.

Elements with negative values appear behind elements with `z-index: 0` or higher.

---

## Example

### CSS

```css
.container {
  min-height: 300px;
}

.box {
  position: absolute;
  min-width: 125px;
  min-height: 125px;
  color: white;
}

.box1 {
  z-index: -1;
  top: 100px;
  left: 100px;
  background-color: #3498db;
}

.box2 {
  z-index: 0;
  top: 150px;
  left: 150px;
  background-color: #e74c3c;
}
```

### HTML

```html
<div class="container">
  <div class="box box1">-1</div>
  <div class="box box2">0</div>
</div>
```

### Explanation

* `.box1` (z-index: -1) appears behind
* `.box2` (z-index: 0) appears in front

---

# Best Practices for Using z-index

* ✔ Minimize usage — avoid unnecessary layering complexity
* ✔ Create stacking contexts consciously
* ✔ Use meaningful z-index scales (e.g., 0, 10, 100, 1000)
* ✔ Avoid extremely large random numbers
* ✔ Keep a consistent layering system (e.g., modal > dropdown > header > content)

---

# Exercise 1: Using z-index Property

## Task

Create three `<div>` elements:

* box1
* box2
* box3

Requirements:

* All must be `position: absolute`
* box1 must be underneath box2
* box3 must be underneath box1
* Use `z-index` to control stacking

---

## Solution

### CSS

```css
.box {
  position: absolute;
  width: 150px;
  height: 150px;
  color: white;
}

.box1 {
  z-index: 1;
  top: 50px;
  left: 50px;
  background: red;
}

.box2 {
  z-index: 2;
  top: 100px;
  left: 100px;
  background: blue;
}

.box3 {
  z-index: 0;
  top: 150px;
  left: 150px;
  background: green;
}
```

### HTML

```html
<div class="box box1">Box 1</div>
<div class="box box2">Box 2</div>
<div class="box box3">Box 3</div>
```

### Stacking Order

Top → Bottom:

1. box2 (z-index: 2)
2. box1 (z-index: 1)
3. box3 (z-index: 0)

---

# Exercise 2: Creating an Overlapping Context

## Task

1. Create a container with class `parent`
2. The parent must create a new stacking context
3. Inside it, create:

    * child1
    * child2
4. child2 must overlap child1

---

## Solution

### CSS

```css
.parent {
  position: relative;
  z-index: 10; /* creates stacking context */
  width: 300px;
  height: 300px;
  background: #f1c40f;
}

.child1 {
  position: absolute;
  z-index: 1;
  width: 150px;
  height: 150px;
  background: #3498db;
  top: 50px;
  left: 50px;
}

.child2 {
  position: absolute;
  z-index: 2;
  width: 150px;
  height: 150px;
  background: #e74c3c;
  top: 100px;
  left: 100px;
}
```

### HTML

```html
<div class="parent">
  <div class="child1">Child 1</div>
  <div class="child2">Child 2</div>
</div>
```

---

## Final Result Explanation

* `.parent` creates a new stacking context.
* Inside it:

    * child1 (z-index: 1)
    * child2 (z-index: 2)
* child2 overlaps child1.
* Neither child can escape the parent’s stacking context.

---

# Final Summary

Stacking Context is one of the most misunderstood CSS concepts.

Key ideas:

* `z-index` only works on positioned elements.
* Higher z-index = closer to the viewer.
* Stacking contexts act as isolated layering groups.
* Elements cannot escape their stacking context.
* Multiple stacking contexts are compared as whole units.
* Negative z-index places elements behind others.

Mastering stacking context allows you to confidently build:

* Modals
* Tooltips
* Dropdown menus
* Sticky headers
* Overlapping cards
* Complex UI systems

Understanding this concept separates beginner CSS developers from advanced ones.

---