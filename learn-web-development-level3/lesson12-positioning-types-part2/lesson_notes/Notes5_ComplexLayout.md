# 10. Creating Complex Layouts

Creating complex layouts requires combining multiple CSS techniques such as:

* **Flexbox**
* **CSS Grid**
* **Positioning (`fixed`, `sticky`, `relative`, `absolute`)**
* **Float (legacy method)**
* **Box model control (`box-sizing`, margins, padding)**

In this lecture, we will build real-world layouts including:

1. Two-Column Blog Layout with Fixed Navigation
2. Single Page Website with Sticky Header and Footer
3. Multi-Level Navigation Bar

Each section includes explanation, code, and exercises with solutions.

---

# 10.1 Two-Column Layout (Blog Layout with Fixed Navigation)

## Layout Structure

This layout contains:

* Header
* Fixed navigation bar
* Main content
* Sidebar
* Footer

The navigation remains fixed at the top while scrolling, and the main content + sidebar are arranged using **Flexbox**.

---

## Full Example

### CSS

```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

/* Header */
.header {
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
}

/* Fixed Navigation */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #444;
  color: white;
  padding: 10px;
  box-sizing: border-box;
  z-index: 1000;
}

/* Flex Container */
.container {
  display: flex;
  margin-top: 60px; /* prevents overlap with fixed navbar */
}

/* Main Content (3/4 width) */
.main-content {
  flex: 3;
  padding: 20px;
}

/* Sidebar (1/4 width) */
.sidebar {
  flex: 1;
  padding: 20px;
  background-color: #f4f4f4;
}

/* Footer */
.footer {
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
}
```

---

### HTML

```html
<div class="header">My Blog</div>
<div class="navbar">Navigation</div>

<div class="container">
  <div class="main-content">
    <h1>Main Content</h1>
    <p>Here is the main content of the blog.</p>
  </div>

  <div class="sidebar">
    <h2>Sidebar</h2>
    <p>Links and other content.</p>
  </div>
</div>

<div class="footer">Footer</div>
```

---

## Explanation

### 1️⃣ Fixed Navigation

```css
position: fixed;
top: 0;
```

* Keeps navbar visible at all times
* Removed from normal document flow
* Requires `margin-top` on `.container` to prevent overlap

---

### 2️⃣ Flexbox for Two Columns

```css
display: flex;
```

Inside `.container`.

```css
.main-content { flex: 3; }
.sidebar { flex: 1; }
```

This creates a 3:1 ratio:

* Main content → 75%
* Sidebar → 25%

---

### Why Flexbox?

* Automatically responsive
* Equal height columns
* Easy proportional sizing

---

# 10.2 Single Page Website (Sticky Header and Footer)

This layout includes:

* Header (sticky)
* Main content (scrollable)
* Footer (sticky)
* Full viewport height structure

---

## Full Example

### CSS

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  font-family: Arial, sans-serif;
}

/* Sticky Header */
.header {
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* Main Content */
.main {
  flex: 1;
  padding: 20px;
  background-color: #f4f4f4;
  overflow-y: auto;
}

/* Sticky Footer */
.footer {
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
  position: sticky;
  bottom: 0;
  z-index: 1000;
}
```

---

### HTML

```html
<div class="header">Sticky Header</div>

<div class="main">
  <h1>Main Content</h1>
  <p>Scroll to see sticky behavior.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
</div>

<div class="footer">Sticky Footer</div>
```

---

## Explanation

### 1️⃣ Flexbox Page Structure

```css
display: flex;
flex-direction: column;
min-height: 100vh;
```

* Makes page full height
* Allows `.main` to expand

---

### 2️⃣ `flex: 1`

```css
.main { flex: 1; }
```

* Takes remaining vertical space
* Makes content area flexible

---

### 3️⃣ Sticky Positioning

```css
position: sticky;
top: 0;
bottom: 0;
```

* Header sticks to top
* Footer sticks to bottom
* Remains within parent scrolling context

---

# 10.3 Multi-Level Navigation Bar (Dropdown Menu)

This layout uses:

* Nested lists
* Hover pseudo-classes
* Absolute positioning

---

## Full Example

### CSS

```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.navbar {
  background-color: #333;
  overflow: hidden;
}

.navbar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: relative;
}

.navbar li {
  float: left;
}

.navbar li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.navbar li a:hover {
  background-color: #111;
}

/* Dropdown */
.navbar li ul {
  display: none;
  position: absolute;
  background-color: #333;
}

.navbar li:hover ul {
  display: block;
}

.navbar li ul li {
  float: none;
}
```

---

### HTML

```html
<div class="navbar">
  <ul>
    <li><a href="#">Home</a></li>

    <li>
      <a href="#">Services</a>
      <ul>
        <li><a href="#">Web Design</a></li>
        <li><a href="#">SEO</a></li>
        <li><a href="#">Marketing</a></li>
      </ul>
    </li>

    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</div>
```

---

## Explanation

### Nested Structure

* Outer `<ul>` → main menu
* Inner `<ul>` → dropdown menu

---

### Dropdown Visibility

```css
display: none;
```

Hidden by default.

```css
li:hover ul { display: block; }
```

Shown on hover.

---

### Positioning

```css
position: absolute;
```

Dropdown positioned relative to parent.

---

# Exercises

---

# Exercise 1: Two-Column Layout

## Requirements

* Fixed navigation bar at top
* Two-column layout using Flexbox
* Main content → 3/4 width
* Sidebar → 1/4 width

---

## Solution

### CSS

```css
body {
  margin: 0;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: #333;
  color: white;
  padding: 15px;
}

.container {
  display: flex;
  margin-top: 60px;
}

.main {
  flex: 3;
  padding: 20px;
}

.sidebar {
  flex: 1;
  padding: 20px;
  background: #f4f4f4;
}
```

---

### HTML

```html
<div class="navbar">Navigation</div>

<div class="container">
  <div class="main">
    <h1>Main Content</h1>
  </div>
  <div class="sidebar">
    <h2>Sidebar</h2>
  </div>
</div>
```

---

# Exercise 2: Single Page Website

## Requirements

* Header fixed or sticky at top
* Footer fixed or sticky at bottom
* Main content scrollable
* Full height layout

---

## Solution

### CSS

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
}

.header {
  position: sticky;
  top: 0;
  background: #333;
  color: white;
  padding: 20px;
}

.main {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.footer {
  position: sticky;
  bottom: 0;
  background: #333;
  color: white;
  padding: 20px;
}
```

---

### HTML

```html
<div class="header">Header</div>

<div class="main">
  <h1>Content</h1>
  <p>Scrollable content...</p>
</div>

<div class="footer">Footer</div>
```

---

# Key Concepts Summary

## Positioning

* `fixed` → Removed from flow, fixed to viewport
* `sticky` → Sticks within scroll container
* `relative` → Base reference for absolute elements
* `absolute` → Positioned relative to nearest positioned ancestor

---

## Flexbox Benefits

* Easy proportional layouts
* Equal height columns
* Simple vertical centering
* Great for responsive designs

---

## Best Practice Recommendations

* Use **Flexbox** for one-dimensional layouts
* Use **Grid** for two-dimensional layouts
* Use `sticky` instead of `fixed` when possible
* Always handle spacing when using `position: fixed`

---

# Final Thoughts

Creating complex layouts requires combining:

* Flexbox
* Positioning
* Nested structures
* Proper spacing techniques

Once you master these concepts, you can build:

* Blogs
* Dashboards
* Single-page apps
* Navigation systems
* Responsive websites

Complex layouts become simple when you understand how layout systems work together.

---
