# Document Flow

Understanding **document flow** is essential for mastering CSS layout. Document flow determines how elements are positioned and how they interact with one another on a web page.

Positioning in CSS controls:

* How elements are arranged
* How they relate to neighboring elements
* Whether they affect the layout of other elements

---

# 8.1 Normal Flow

## What Is Normal Flow?

In normal document flow:

* Elements are placed in the order defined in the HTML.
* Block elements stack vertically.
* Inline elements sit next to each other horizontally.

### Block Elements

Examples:

* `<div>`
* `<p>`
* `<h1>`

Characteristics:

* Take up the full width of their parent container.
* Appear one below another.
* Start on a new line.

### Inline Elements

Examples:

* `<span>`
* `<a>`
* `<em>`

Characteristics:

* Take up only as much width as needed.
* Appear side by side.
* Do not start on a new line.

---

## Example: Block vs Inline in Normal Flow

### CSS

```css
.block {
  background-color: lightblue;
  margin: 10px;
  padding: 10px;
}

.inline {
  background-color: lightcoral;
  margin: 5px;
  padding: 5px;
}
```

### HTML

```html
<div class="block">Block element</div>

<span class="inline">Inline element</span>
<span class="inline">Inline element</span>
```

### What Happens?

* The `.block` element appears on its own line and takes full width.
* The `.inline` elements appear next to each other on the same line.
* Elements follow the order defined in HTML.

This is the default behavior of the browser.

---

# 8.2 Impact of Positioning on Document Flow

Different positioning types change how elements behave in relation to normal flow.

---

## 1. Static Positioning

Default value: `position: static`

### Impact on Flow:

* Elements remain in normal flow.
* Positioned according to HTML order.
* Cannot be moved using `top`, `left`, `right`, `bottom`.

### Summary:

Static positioning does not change document flow.

---

## 2. Relative Positioning

`position: relative`

### Behavior:

* Element remains in normal flow.
* Can be offset using:

  * `top`
  * `right`
  * `bottom`
  * `left`
* Other elements behave as if it has not moved.

### Impact on Flow:

* Stays in flow.
* Offset does NOT affect neighboring elements.
* Leaves original space reserved.

---

## 3. Absolute Positioning

`position: absolute`

### Behavior:

* Removed from normal flow.
* Positioned relative to the closest positioned ancestor.
* If no positioned ancestor exists, positioned relative to `<html>` or `<body>`.

### Impact on Flow:

* Removed from flow.
* Other elements behave as if it does not exist.
* Does not occupy space in layout.

---

## 4. Fixed Positioning

`position: fixed`

### Behavior:

* Removed from normal flow.
* Positioned relative to browser window.
* Stays in place during scrolling.

### Impact on Flow:

* Removed from flow.
* Other elements act as if it is not there.
* Does not move when page scrolls.

---

## 5. Sticky Positioning

`position: sticky`

### Behavior:

* Acts like relative positioning initially.
* Becomes fixed after reaching scroll threshold.

### Impact on Flow:

* Remains in flow until threshold is reached.
* After threshold, behaves like fixed.
* Stops affecting flow once fixed.

---

# 8.3 Visual Examples of Impact on Flow

---

# Example 1: Fixed Positioning

### CSS

```css
.wrapper {
  height: 200px;
  overflow: auto;
}

.fixed {
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: lightcoral;
  padding: 10px;
}

.content {
  background: linear-gradient(white, lightgray);
}
```

### HTML

```html
<div class="wrapper">
  <div class="fixed">Fixed element</div>
  <div class="content">
    Scrollable content...
  </div>
</div>
```

### What Happens?

* The `.fixed` element is removed from normal flow.
* It stays at the top-right of the browser window.
* It remains visible during scrolling.
* Other elements behave as if it does not exist.

---

# Example 2: Sticky Positioning

### CSS

```css
.wrapper {
  height: 200px;
  overflow: auto;
}

.sticky {
  position: sticky;
  top: 0;
  background-color: lightgreen;
  padding: 10px;
}

.content {
  background: linear-gradient(white, lightgray);
}
```

### HTML

```html
<div class="wrapper">
  <div class="sticky">Sticky element</div>
  <div class="content">
    Scrollable content...
  </div>
</div>
```

### What Happens?

* The `.sticky` element starts in normal flow.
* When scrolling reaches `top: 0`, it becomes fixed.
* It stops being fixed once the parent container ends.
* Initially affects layout, later behaves like fixed.

---

# Exercise 1: Creating a Block Element

## Requirements

* Class: `block`
* Must be a block element (`display: block`)
* Light blue background
* Padding: 15px
* Margin: 10px
* Several elements placed one after another

---

## Solution

### CSS

```css
.block {
  display: block;
  background-color: lightblue;
  padding: 15px;
  margin: 10px;
}
```

### HTML

```html
<div class="block">Block 1</div>
<div class="block">Block 2</div>
<div class="block">Block 3</div>
```

### Result

* Each element appears on its own line.
* Each takes full width of parent container.
* Spacing appears between them due to margins.
* Padding creates internal spacing.

---

# Exercise 2: Creating Inline Elements

## Requirements

* Class: `inline`
* Must be inline elements
* Light coral background
* Padding: 5px
* Margin: 5px
* Several elements placed on one line

---

## Solution

### CSS

```css
.inline {
  display: inline;
  background-color: lightcoral;
  padding: 5px;
  margin: 5px;
}
```

### HTML

```html
<span class="inline">Inline 1</span>
<span class="inline">Inline 2</span>
<span class="inline">Inline 3</span>
<span class="inline">Inline 4</span>
```

### Result

* All elements appear on one line.
* Only take up necessary width.
* Margin creates spacing between elements.
* Padding creates space inside elements.

---

# Final Summary

## Normal Flow

* Elements follow HTML order.
* Block elements stack vertically.
* Inline elements sit horizontally.

## Positioning and Flow

| Position Type | In Normal Flow? | Affects Other Elements? | Scroll Behavior            |
| ------------- | --------------- | ----------------------- | -------------------------- |
| static        | Yes             | Yes                     | Scrolls normally           |
| relative      | Yes             | Yes (space reserved)    | Scrolls normally           |
| absolute      | No              | No                      | Scrolls normally           |
| fixed         | No              | No                      | Stays fixed                |
| sticky        | Yes → No        | Yes → No                | Becomes fixed at threshold |

Understanding document flow helps you:

* Predict layout behavior
* Prevent overlapping issues
* Control spacing and alignment
* Build structured, responsive designs

Mastering document flow is foundational for advanced CSS layout techniques.

---
