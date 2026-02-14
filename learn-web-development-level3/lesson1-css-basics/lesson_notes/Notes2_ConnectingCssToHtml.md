# Connecting CSS to HTML

Connecting **CSS (Cascading Style Sheets)** to an HTML document allows us to control how a webpage looks. While HTML provides structure (headings, paragraphs, images), CSS controls presentation (colors, fonts, spacing, layout).

There are **three main ways** to connect CSS to HTML:

1. External Stylesheets
2. Internal Stylesheets
3. Inline Styles

Each method has its own purpose, advantages, and use cases.

---

# 2.1 External Stylesheets

## What is an External Stylesheet?

An **external stylesheet** is a separate `.css` file that is linked to an HTML document using the `<link>` tag.

This is the **recommended and most professional method** of connecting CSS.

---

## Why Use External Stylesheets?

### Benefits

* Clean separation of structure and style
* Easy to manage styles
* Reuse one CSS file across multiple pages
* Better performance due to browser caching
* Cleaner and more readable HTML

---

## Syntax

### Step 1: HTML File

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example of External Stylesheet</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Header</h1>
  <p>Text</p>
</body>
</html>
```

### Important Parts of `<link>`

* `rel="stylesheet"` → Tells the browser this is a CSS file
* `href="styles.css"` → Path to the CSS file

---

### Step 2: CSS File (styles.css)

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}

h1 {
  color: #333;
}

p {
  color: #666;
}
```

---

## How It Works

1. Browser loads HTML.
2. It sees the `<link>` tag.
3. It loads the external CSS file.
4. CSS rules are applied to the matching HTML elements.

---

# 2.2 Internal Stylesheets

## What is an Internal Stylesheet?

An internal stylesheet is written inside the same HTML file using the `<style>` tag inside the `<head>` section.

This method is useful when styling a single page.

---

## Syntax

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example of Internal Stylesheet</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
    }

    h1 {
      color: #333;
    }

    p {
      color: #666;
    }
  </style>
</head>
<body>
  <h1>Header</h1>
  <p>Text</p>
</body>
</html>
```

---

## Benefits

* Easy for single-page projects
* No separate CSS file needed
* Quick testing and prototyping

---

## Limitation

* Cannot reuse styles across multiple pages
* Makes HTML file longer

---

# 2.3 Inline Styles

## What are Inline Styles?

Inline styles are written directly inside an HTML element using the `style` attribute.

---

## Syntax

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example of Inline Styles</title>
</head>
<body>
  <h1 style="color: #333; font-family: Arial, sans-serif;">
    Header
  </h1>

  <p style="color: #666; background-color: #f4f4f4;">
    Text
  </p>
</body>
</html>
```

---

## Benefits

* Quick styling
* Useful for testing
* Helpful for dynamic changes with JavaScript

---

## Drawbacks

* Hard to manage large projects
* Cannot reuse styles
* Makes HTML messy

---

# 2.4 Using All Methods Together

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Example of All CSS Connection Methods</title>

    <!-- External -->
    <link rel="stylesheet" href="../styles/all-styling.css">

    <!-- Internal -->
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }

        h1 {
            color: blue;
        }

        p {
            color: blue;
        }
    </style>
</head>
<body>
<h1>Header</h1>

<!-- Inline -->
<p style="color: red">
    This text is styled using inline styles.
</p>
</body>
</html>
```

---

# 2.5 Order of Style Priority

When multiple styles affect the same element, CSS follows this priority:

1. Inline styles (Highest priority)
2. Internal styles
3. External styles (Lowest priority)

---

## Example of Style Priority

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
  <style>
    p {
      color: blue; /* Internal style */
    }
  </style>
</head>
<body>
  <p style="color: red;">
    This text will be red due to inline style priority.
  </p>
</body>
</html>
```

Even if the internal stylesheet says blue, the paragraph will be **red** because inline styles override others.

---

# Comparison Summary

| Method   | Location                 | Reusable | Best For              |
| -------- | ------------------------ | -------- | --------------------- |
| External | Separate .css file       | Yes      | Multi-page websites   |
| Internal | Inside `<style>`         | No       | Single-page projects  |
| Inline   | Inside `style` attribute | No       | Quick changes/testing |

---

## 3. 🎯 Visual Diagram: CSS Priority Hierarchy

When multiple CSS rules target the same element, the browser must decide **which rule wins**.
This is determined by **CSS Priority (Cascade + Specificity + Order)**.

---

# 🏆 CSS Priority Pyramid (Highest → Lowest)

```
                ┌───────────────────────┐
                │   Inline Styles       │
                │  style="color:red;"   │
                └───────────────────────┘
                           ▲
                ┌───────────────────────┐
                │     ID Selectors      │
                │        #header        │
                └───────────────────────┘
                           ▲
                ┌───────────────────────┐
                │   Class / Attribute   │
                │   .box  [type="text"] │
                └───────────────────────┘
                           ▲
                ┌───────────────────────┐
                │   Element Selectors   │
                │     p   h1   div      │
                └───────────────────────┘
                           ▲
                ┌───────────────────────┐
                │  External Stylesheets │
                │  (Lowest connection)  │
                └───────────────────────┘
```

🔺 The higher it is in the pyramid, the stronger the priority.

---

## 3.1. 📊 Priority Order Explained

## 1️⃣ Inline Styles (Highest Priority)

Written directly inside the HTML element.

```html
<p style="color: red;">Hello</p>
```

✔ Overrides internal and external styles

✔ Used for quick changes

✘ Not recommended for large projects

---

## 2️⃣ ID Selectors

```css
#title {
  color: blue;
}
```

✔ Stronger than classes

✔ Should be unique per page

---

## 3️⃣ Class, Attribute & Pseudo-class Selectors

```css
.box {
  color: green;
}

input[type="text"] {
  border: 1px solid black;
}
```

✔ Commonly used

✔ Good for reusable styles

---

## 4️⃣ Element Selectors (Lowest Specificity)

```css
p {
  color: black;
}
```

✔ Applies to all matching elements

✔ Easiest to override

---

## 3.2. ⚖️ How the Browser Decides (Step-by-Step)

When styles conflict, the browser checks:

### Step 1: Importance (`!important`)

If used, it overrides normal rules.

### Step 2: Inline vs Internal vs External

Inline > Internal > External

### Step 3: Specificity

ID > Class > Element

### Step 4: Order of Declaration

If specificity is equal, the **last rule wins**.

---

## 🧪 Example: Who Wins?

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    p { color: green; }          /* Element */
    .text { color: blue; }       /* Class */
    #main { color: purple; }     /* ID */
  </style>
</head>
<body>
  <p id="main" class="text" style="color: red;">
    Which color am I?
  </p>
</body>
</html>
```

### Result:

The text will be **red**.

Why?

1. Inline style → red (highest priority)
2. ID → purple
3. Class → blue
4. Element → green

Inline wins.

---

## 🧠 Specificity Score Visualization

Think of specificity like a scoring system:

| Selector Type | Score Value |
| ------------- | ----------- |
| Inline        | 1000        |
| ID            | 100         |
| Class         | 10          |
| Element       | 1           |

Example:

```css
#main .box p
```

Score:

* 1 ID → 100
* 1 Class → 10
* 1 Element → 1

Total = **111**

Higher score wins.

---

## 📌 Complete Priority Summary

```
!important
   ↓
Inline Styles
   ↓
ID Selectors
   ↓
Class / Attribute / Pseudo-class
   ↓
Element Selectors
   ↓
Source Order (last rule wins if equal)
```

---

## 🎯 Quick Memory Trick

💡 **I-I-C-E-O**

1. [ ] Inline
2. [ ] ID
3. [ ] Class
4. [ ] Element
5. [ ] Order

---

# Exercises

---

## Exercise 1: Internal Stylesheet Practice

### Requirements:

1. Add internal styles using `<style>` in the `<head>`.
2. Set:

    * Background color of `<body>`
    * Text color and font size of `<h1>`
    * Text color of `<p>`

---

### Sample Solution:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      background-color: #f4f4f4;
    }

    h1 {
      color: #333;
      font-size: 30px;
    }

    p {
      color: #666;
    }
  </style>
</head>
<body>
  <h1>Welcome</h1>
  <p>This is a paragraph.</p>
</body>
</html>
```

---

## Exercise 2: Inline Style Practice

### Requirements:

Apply inline styles directly to:

* `<h1>`

    * color: #333
    * font-family: Arial
    * font-size: 24px

* `<p>`

    * color: #666
    * background-color: #f4f4f4

---

### Sample Solution:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Inline Practice</title>
</head>
<body>
  <h1 style="color:#333; font-family:Arial; font-size:24px;">
    Hello World
  </h1>

  <p style="color:#666; background-color:#f4f4f4;">
    This paragraph uses inline styles.
  </p>
</body>
</html>
```

---

# Final Notes

* External CSS is best for real-world projects.
* Internal CSS is useful for small projects.
* Inline CSS should be used sparingly.
* Understanding style priority is essential for debugging CSS.

---


