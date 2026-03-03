# Media Queries

Media queries are one of the most important tools in responsive web design. They allow you to apply CSS styles only when specific conditions are met — such as screen width, height, orientation, or resolution.

Using media queries, you can make websites adapt smoothly to mobile phones, tablets, laptops, and large desktop screens.

---

# 2.1 Media Queries Basics

Media queries use the `@media` rule to apply styles conditionally.

## Syntax

```css
@media media-type and (media-feature) {
  /* styles */
}
```

### Where:

* **media-type** → The type of device (most commonly `screen`)
* **media-feature** → A condition like width, height, orientation, or resolution

---

## Example: Background Change on Small Screens

```css
@media screen and (max-width: 768px) {
  body {
    background-color: lightblue;
  }
}
```

### Explanation

* Applies only to screens.
* When the screen width is **768px or less**, the background becomes light blue.
* If the condition is not met, the styles inside are ignored.

---

# 2.2 Types of Media Queries

## 1️⃣ Width and Height Queries

These are the most commonly used media queries.

### Width Example

```css
/* Apply styles if width ≤ 768px */

@media (max-width: 768px) {
  .container {
    padding: 10px;
  }
}
```

### Height Example

```css
/* Apply styles if height ≥ 800px */

@media (min-height: 800px) {
  .header {
    height: 150px;
  }
}
```

### Key Concepts

* `max-width` → applies up to a certain width
* `min-width` → applies from a certain width upward
* `min-height` / `max-height` → same idea for height

---

## 2️⃣ Orientation Queries

These queries detect whether the device is in:

* Portrait mode (vertical)
* Landscape mode (horizontal)

### Portrait Example

```css
@media (orientation: portrait) {
  .sidebar {
    display: none;
  }
}
```

### Landscape Example

```css
@media (orientation: landscape) {
  .sidebar {
    display: block;
  }
}
```

This is useful for tablets and smartphones that rotate.

---

## 3️⃣ Pixel Density (Resolution)

Used for high-resolution screens (like Retina displays).

### High Pixel Density Example

```css
@media (min-resolution: 2dppx) {
  .high-res-image {
    background-image: url('high-res-image.png');
  }
}
```

### Standard Resolution Example

```css
@media (max-resolution: 1.99dppx) {
  .high-res-image {
    background-image: url('standard-res-image.png');
  }
}
```

### Why This Matters

High-density screens require sharper images. Without this, images may appear blurry.

---

# 2.3 Combining Media Queries

You can combine conditions using logical operators:

* `and`
* `not`
* `only`

---

## Using `and`

```css
@media (min-width: 600px) and (max-width: 1200px) {
  .main-content {
    margin: 0 auto;
    width: 80%;
  }
}
```

### Explanation

Styles apply only if:

* Width is ≥ 600px
* AND width is ≤ 1200px

---

## Using `not`

```css
@media not all and (max-width: 600px) {
  .footer {
    display: block;
  }
}
```

### Explanation

Applies to all devices except those with width ≤ 600px.

---

## Using `only`

```css
@media only screen and (max-width: 768px) {
  .menu {
    display: none;
  }
}
```

### Explanation

Ensures styles apply only to screen devices (not printers or older browsers).

---

# Exercise 1: Width Media Queries

## Task

Create styles so that:

* Width < 600px → container width = 100%
* Width between 600px and 1200px → width = 80%
* Width > 1200px → width = 1000px (fixed)

---

## ✅ Solution

```html
<div class="container">
  Main Content
</div>
```

```css
/* Default (Mobile First) */
.container {
  width: 100%;
  margin: 0 auto;
}

/* Between 600px and 1200px */
@media (min-width: 600px) and (max-width: 1200px) {
  .container {
    width: 80%;
  }
}

/* More than 1200px */
@media (min-width: 1201px) {
  .container {
    width: 1000px;
  }
}
```

---

### Why This Works

* Default styles handle small screens.
* First media query adjusts medium screens.
* Second query sets fixed width for large screens.
* `margin: 0 auto;` keeps container centered.

---

# Exercise 2: Screen Orientation

## Task

* Portrait:

    * `.sidebar` hidden
    * `.content` width = 100%
* Landscape:

    * `.sidebar` visible
    * `.content` width = 70%

---

## ✅ Solution

```html
<div class="sidebar">Sidebar</div>
<div class="content">Main Content</div>
```

```css
/* Portrait */
@media (orientation: portrait) {
  .sidebar {
    display: none;
  }

  .content {
    width: 100%;
  }
}

/* Landscape */
@media (orientation: landscape) {
  .sidebar {
    display: block;
  }

  .content {
    width: 70%;
  }
}
```

---

### Explanation

* Media queries detect device orientation.
* Sidebar visibility changes dynamically.
* Content width adapts based on orientation.
* Improves usability on rotating devices.

---

# Best Practices for Media Queries

✔ Use a **mobile-first approach**
✔ Use `min-width` instead of `max-width` when possible
✔ Avoid too many breakpoints
✔ Keep breakpoints based on design, not devices
✔ Test on real devices

---

# Summary

Media queries allow responsive styling based on:

* Screen width and height
* Orientation (portrait/landscape)
* Resolution (pixel density)

They can be combined using:

* `and`
* `not`
* `only`

By mastering media queries, you gain full control over how your website behaves across all screen sizes and devices.

---

