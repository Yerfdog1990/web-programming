# Main Selectors in CSS

CSS selectors determine **which HTML elements** will receive specific styles.
Understanding selectors is essential because they control how styles are applied across a webpage.

The main selectors include:

1. Type Selectors
2. Class Selectors
3. ID Selectors
4. Group Selectors
5. Universal Selectors

---

# 4.1 Type Selectors

## What Are Type Selectors?

Type selectors apply styles to **all elements of a specific HTML tag**.

### Syntax

```css
tagname {
  property: value;
}
```

---

## Example

```css
p {
  color: blue;
  font-size: 14px;
}
```

### What This Does:

* Selects all `<p>` elements
* Makes their text blue
* Sets font size to 14px

---

## Features

* Applies to all elements of that type
* Useful for global styling
* Simple and easy to use

---

# 4.2 Class Selectors

## What Are Class Selectors?

Class selectors apply styles to elements that share the same class name.

In HTML, classes are added using the `class` attribute.
In CSS, classes are written with a dot `.` before the class name.

---

## Syntax

```css
.classname {
  property: value;
}
```

---

## Example

```css
.button {
  background-color: green;
  color: white;
  padding: 10px;
}
```

### HTML

```html
<button class="button">Click Me</button>
<p class="button">Styled Paragraph</p>
```

### What Happens?

All elements with `class="button"`:

* Get a green background
* White text
* 10px padding

---

## Features

* Can be used on multiple elements
* Reusable
* Most commonly used selector in CSS

---

# 4.3 ID Selectors

## What Are ID Selectors?

ID selectors apply styles to a **single unique element**.

In HTML → use `id="name"`

In CSS → use `#name`

---

## Syntax

```css
#unique-id {
  property: value;
}
```

---

## Example

### CSS

```css
#main {
  width: 800px;
  background: yellow;
}
```

### HTML

```html
<div id="main">This element will have a width of 800px.</div>
<div>This element will not be styled.</div>
```

---

## Features

* Must be unique on the page
* Stronger specificity than class selectors
* Used for major sections like header, main content

---

# 4.4 Group Selectors

## What Are Group Selectors?

Group selectors allow you to apply the same styles to multiple selectors.

They are separated with commas.

---

## Syntax

```css
selector1,
selector2,
selector3 {
  property: value;
}
```

---

## Example

```css
h1,
h2,
h3 {
  font-family: Arial, sans-serif;
}
```

### What Happens?

All `<h1>`, `<h2>`, and `<h3>`:

* Use Arial font

---

## Features

* Reduces code repetition
* Makes CSS cleaner
* Easier maintenance

---

# 4.5 Universal Selector

## What Is the Universal Selector?

The universal selector selects **all elements** on the page.

It is written using an asterisk `*`.

---

## Syntax

```css
* {
  property: value;
}
```

---

## Example

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

### What This Does:

* Removes default margins
* Removes default padding
* Sets consistent box model

---

## Features

* Applies to every element
* Often used for CSS resets
* Should be used carefully

---

# Selector Comparison Table

| Selector Type | Symbol   | Applies To               | Can Be Reused | Specificity |
| ------------- | -------- | ------------------------ | ------------- | ----------- |
| Type          | `p`      | All elements of that tag | Yes           | Low         |
| Class         | `.box`   | Elements with class      | Yes           | Medium      |
| ID            | `#main`  | One unique element       | No            | High        |
| Group         | `h1, h2` | Multiple elements        | Yes           | Depends     |
| Universal     | `*`      | All elements             | Yes           | Lowest      |

---

# 🎯 Visual Diagram of CSS Selectors

Below is a **clear visual breakdown** of how the main CSS selectors target elements.

---

# 🧱 Sample HTML Structure (Reference Diagram)

```
<body>
│
├── <div id="header" class="container">
│     └── <h1 class="title">Welcome</h1>
│
├── <div class="container">
│     ├── <p class="text highlight">Paragraph 1</p>
│     ├── <p class="text">Paragraph 2</p>
│     └── <button class="button">Click</button>
│
└── <footer id="footer">
      └── <p>Footer Text</p>
```

We will use this structure to visually explain selector behavior.

---

# 1️⃣ Type Selector

### CSS

```css
p {
  color: blue;
}
```

### Visual Effect

```
<p class="text highlight">Paragraph 1</p>   ← ✔ Selected
<p class="text">Paragraph 2</p>            ← ✔ Selected
<footer>
   <p>Footer Text</p>                      ← ✔ Selected
```

🔵 Selects **ALL `<p>` elements**

---

# 2️⃣ Class Selector

### CSS

```css
.text {
  color: green;
}
```

### Visual Effect

```
<p class="text highlight">Paragraph 1</p>   ← ✔ Selected
<p class="text">Paragraph 2</p>            ← ✔ Selected
<button class="button">Click</button>      ← ✘ Not selected
```

🟢 Selects elements with `class="text"`

---

# 3️⃣ ID Selector

### CSS

```css
#header {
  background: gray;
}
```

### Visual Effect

```
<div id="header" class="container">  ← ✔ Selected
```

🟡 Selects only the element with `id="header"`

✔ Only ONE element allowed per page

---

# 4️⃣ Group Selector

### CSS

```css
h1, p {
  font-family: Arial;
}
```

### Visual Effect

```
<h1 class="title">Welcome</h1>        ← ✔ Selected
<p>Paragraph 1</p>                    ← ✔ Selected
<p>Paragraph 2</p>                    ← ✔ Selected
```

🟣 Applies the same style to multiple selectors

---

# 5️⃣ Universal Selector

### CSS

```css
* {
  margin: 0;
}
```

### Visual Effect

```
EVERY element inside <body>  ← ✔ Selected
```

⚫ Selects all elements

---

# 🌳 Hierarchy Visual — Selector Strength

```
Low Specificity
   ↓
*        (Universal)
p        (Type)
.text    (Class)
#header  (ID)
   ↑
High Specificity
```

---

# 🎨 Visual Comparison Table

| Selector  | Symbol    | Targets             | Example      | Specificity |
| --------- | --------- | ------------------- | ------------ | ----------- |
| Universal | `*`       | All elements        | `* {}`       | ⭐           |
| Type      | `p`       | All `<p>`           | `p {}`       | ⭐⭐          |
| Class     | `.text`   | Elements with class | `.text {}`   | ⭐⭐⭐         |
| ID        | `#header` | Unique element      | `#header {}` | ⭐⭐⭐⭐        |

---

# 🧠 Bonus: Combined Selectors (Visual)

### CSS

```css
div p {
  color: red;
}
```

### Meaning:

Select `<p>` inside a `<div>`

```
<div>
   <p>✔ Selected</p>
</div>

<footer>
   <p>✘ Not selected</p>
</footer>
```

---

# 🔍 Another Example: Multiple Classes

### CSS

```css
.text.highlight {
  color: orange;
}
```

### Visual

```
<p class="text highlight"> ✔ Selected
<p class="text">           ✘ Not selected
```

Must contain BOTH classes.

---

# 🎯 Quick Mental Model

Think of selectors like **filters**:

* Type → “All paragraphs”
* Class → “Anything labeled .text”
* ID → “That one special element”
* Group → “Apply to these multiple types”
* Universal → “Everything”

---

# 🧪 Exercises

---

# Exercise 1: Class Selectors

## Task

There are elements with classes:

* `button`
* `warning`

### Requirements:

* `.button`

    * Green background
    * White text
    * 10px padding

* `.warning`

    * Red text
    * Bold font

---

## Sample Solution

### CSS

```css
.button {
  background-color: green;
  color: white;
  padding: 10px;
}

.warning {
  color: red;
  font-weight: bold;
}
```

### HTML Example

```html
<button class="button">Submit</button>
<p class="button">Styled paragraph</p>
<p class="warning">Warning message</p>
```

---

# Exercise 2: ID Selector

## Task

Style the element with ID `header`:

* Grey background
* White text
* 20px padding

---

## Sample Solution

### CSS

```css
#header {
  background-color: grey;
  color: white;
  padding: 20px;
}
```

### HTML Example

```html
<div id="header">
  Website Header
</div>
```

---

# Full Practice Example

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    #header {
      background-color: grey;
      color: white;
      padding: 20px;
    }

    .button {
      background-color: green;
      color: white;
      padding: 10px;
    }

    .warning {
      color: red;
      font-weight: bold;
    }

    h1, h2 {
      font-family: Arial, sans-serif;
    }
  </style>
</head>
<body>

  <div id="header">Header Section</div>

  <h1>Welcome</h1>
  <h2>Subheading</h2>

  <button class="button">Click Me</button>
  <p class="warning">Important Warning!</p>

</body>
</html>
```

---

# Key Takeaways

* Type selectors style all elements of a given tag
* Class selectors are reusable
* ID selectors are unique
* Group selectors reduce repetition
* Universal selector affects everything

---

If you'd like, I can next create:

* A CSS selector specificity worksheet
* A selector matching quiz
* A debugging exercise
* A visual selector diagram
* Advanced selectors lesson (descendant, child, attribute, pseudo-classes)
