# Sticky Positioning

## 6.1 `position: sticky`

Sticky positioning (`position: sticky`) in CSS combines the behavior of **relative** and **fixed** positioning.

An element with `position: sticky`:

* Behaves like a **relatively positioned** element at first.
* Becomes **fixed** once a defined scroll threshold is reached.
* Stays fixed until another scroll boundary is reached.
* Works only **within its parent container**.
* Loses its fixed behavior when the parent container goes out of the viewport.

This makes sticky positioning ideal for headers, navigation bars, sidebars, and table headers.

---

## How Sticky Positioning Works

Sticky positioning requires:

1. `position: sticky`
2. At least one directional property:

  * `top`
  * `right`
  * `bottom`
  * `left`

### Syntax

```css
.element {
  position: sticky;
  top: value;
  right: value;
  bottom: value;
  left: value;
}
```

### Explanation of Properties

* **top** – Distance from the top edge of the browser window to the element
* **right** – Distance from the right edge of the browser window
* **bottom** – Distance from the bottom edge of the browser window
* **left** – Distance from the left edge of the browser window

⚠️ At least one of these must be defined for sticky to work.

---

## Example 1: Sticky Header Inside a Scrollable Container

### CSS

```css
.wrapper {
  height: 200px;
  overflow: auto;
}

.header {
  position: sticky;
  top: 0;
  background-color: deepskyblue;
  padding: 10px;
  font-size: 24px;
  color: white;
}

.content {
  margin-top: 25px;
  background-color: lightgrey;
  padding: 20px;
}
```

### HTML

```html
<div class="wrapper">
  <div class="header">Sticky Header</div>
  <div class="content">
    <!-- Long scrollable content -->
    Suspendisse tellus sem...
  </div>
</div>
```

### What Happens?

* The `.header` behaves like a normal element initially.
* When its top reaches the top of the wrapper viewport (`top: 0`), it becomes fixed.
* It remains visible while scrolling.
* Once the `.wrapper` scroll area ends, the sticky behavior stops.

---

## 6.2 Pros and Cons of Sticky Positioning

### Pros

### 1. Enhances User Interface

Sticky headers, navigation bars, and sidebars:

* Improve navigation
* Keep important content visible
* Improve accessibility on long pages

---

### 2. Combines Relative and Fixed Advantages

* Stays in normal document flow
* Maintains layout spacing
* Becomes fixed only when necessary
* Provides natural scrolling behavior

---

### 3. Easy to Implement

* Requires minimal CSS
* No JavaScript needed
* Clean and simple syntax

---

### Cons

### 1. Limited Support in Older Browsers

* Supported in modern browsers
* May not work in older versions
* May require fallback solutions

---

### 2. Dependent on Parent Container

* Works only inside its parent
* Stops being sticky when parent leaves viewport
* Parent must not have restrictive overflow issues

---

### 3. Possible Content Overlap

* Sticky elements may overlap other content
* Layout must account for element size
* Height and width planning is important

---

## 6.3 More Examples of Sticky Positioning

---

# Example 2: Sticky Sidebar

A sidebar that remains visible while scrolling content.

### CSS

```css
.wrapper {
  height: 200px;
  overflow: auto;
}

.container {
  display: flex;
}

.sidebar {
  position: sticky;
  top: 0;
  left: 0;
  width: 200px;
  height: 100px;
  background-color: lightgreen;
  padding: 10px;
}

.content {
  background-color: lightgrey;
  padding: 20px;
}
```

### HTML

```html
<div class="wrapper">
  <div class="container">
    <div class="sidebar">Sticky Sidebar</div>
    <div class="content">
      <!-- Long content -->
      Suspendisse tellus sem...
    </div>
  </div>
</div>
```

### Behavior

* The sidebar sticks to the top.
* It remains visible while scrolling.
* It stops when the parent wrapper ends.

---

# Example 3: Sticky Table Header

Useful for large tables with many rows.

### CSS

```css
.wrapper {
  height: 200px;
  overflow: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
}

th {
  position: sticky;
  top: 0;
  background-color: deepskyblue;
  color: white;
}

tbody {
  min-height: 300px;
  display: block;
}

tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}
```

### HTML

```html
<div class="wrapper">
  <table>
    <thead>
      <tr>
        <th>Header</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Data 1</td><td>Data 2</td><td>Data 3</td></tr>
      <!-- Many more rows -->
    </tbody>
  </table>
</div>
```

### Behavior

* The table header stays fixed at the top.
* The table body scrolls.
* Ideal for large datasets.

---

# Exercise 1: Sticky Header

## Requirements

* Create a header with class `sticky-header`
* Height: 60px
* Positioned at the top of the page
* Must remain visible when scrolling
* Add long scrollable content below

---

## Solution

### CSS

```css
body {
  margin: 0;
}

.sticky-header {
  position: sticky;
  top: 0;
  height: 60px;
  background-color: darkblue;
  color: white;
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.content {
  padding: 20px;
}
```

### HTML

```html
<div class="sticky-header">
  My Sticky Header
</div>

<div class="content">
  <p>Long scrollable content...</p>
  <p>Repeat content multiple times to enable scrolling.</p>
  <p>Long scrollable content...</p>
  <p>Long scrollable content...</p>
  <p>Long scrollable content...</p>
</div>
```

### Result

* Header remains visible at the top.
* Page content scrolls normally.
* Header never disappears while scrolling.

---

# Exercise 2: Sticky Table Header

## Requirements

* Multiple columns and rows
* Vertical scrolling enabled
* Header must:

  * Stay in place
  * Be 40px high
  * Be painted blue

---

## Solution

### CSS

```css
.wrapper {
  height: 300px;
  overflow: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
}

th {
  position: sticky;
  top: 0;
  height: 40px;
  background-color: blue;
  color: white;
}
```

### HTML

```html
<div class="wrapper">
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Country</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>John</td><td>john@email.com</td><td>USA</td></tr>
      <tr><td>Mary</td><td>mary@email.com</td><td>UK</td></tr>
      <tr><td>Alex</td><td>alex@email.com</td><td>Canada</td></tr>
      <!-- Repeat many rows to enable scrolling -->
    </tbody>
  </table>
</div>
```

### Result

* The table header remains fixed.
* Only table rows scroll.
* Header is 40px high and blue.

---

# Key Takeaways

* `position: sticky` combines relative and fixed behavior.
* Requires a threshold (`top`, `bottom`, etc.).
* Works only within the parent container.
* Ideal for:

  * Headers
  * Sidebars
  * Navigation menus
  * Table headers
* Easy to implement with minimal CSS.
* Must plan layout carefully to avoid overlap issues.

---

If you'd like, I can also create a comparison table of **relative vs absolute vs fixed vs sticky positioning** for complete clarity.

---
