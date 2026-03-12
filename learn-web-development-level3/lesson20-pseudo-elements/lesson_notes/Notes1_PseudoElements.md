# 5. Pseudo-elements in CSS

Pseudo-elements in CSS allow developers to style **specific parts of elements** or create **virtual elements** that do not exist in the HTML markup. They help enhance the visual appearance of web pages without adding extra HTML elements.

Pseudo-elements are commonly used in **typography, decorative design, and user interaction styling**.

---

# 5.1 Main Pseudo-elements

## What are Pseudo-elements?

Pseudo-elements are **keywords added to selectors** that allow styling of specific parts of elements.

They create **virtual elements** that appear as if they are part of the document but **do not modify the original HTML structure**.

### Key Characteristics

* Target **specific parts of elements**
* Do **not require additional HTML**
* Used for **styling text, adding decorations, and improving UI**
* Written using **double colons (::)** in modern CSS

### Syntax

```css
selector::pseudo-element {
  property: value;
  property: value;
}
```

Example:

```css
p::first-letter {
  font-size: 2em;
}
```

---

# Main Pseudo-elements

The most commonly used pseudo-elements include:

| Pseudo-element   | Description                       |
| ---------------- | --------------------------------- |
| `::before`       | Inserts content before an element |
| `::after`        | Inserts content after an element  |
| `::first-letter` | Styles the first letter of text   |
| `::first-line`   | Styles the first line of text     |
| `::selection`    | Styles text selected by the user  |

---

# 5.2 Examples of Using Pseudo-elements

## 1. Adding Decorative Elements

Pseudo-elements are often used to add **icons or decorative content** before or after elements.

### Example

```css
/* Adding an icon before link text */

a::before {
  content: "🔗";
  margin-right: 5px;
}

/* Adding decorative symbol after paragraph */

p::after {
  content: "❦";
  display: block;
  text-align: right;
  color: red;
}
```

### Explanation

`::before`

* Inserts content **before the element's content**

`::after`

* Inserts content **after the element's content**

Example HTML:

```html
<a href="#">Visit Website</a>

<p>This is a paragraph with decorative styling.</p>
```

Output effect:

* A **link icon appears before the link text**
* A **decorative symbol appears after the paragraph**

---

## 2. Styling First Letters and Lines

Pseudo-elements are commonly used in **typography**, such as creating **magazine-style paragraphs**.

### Styling the First Letter

```css
p::first-letter {
  font-size: 2em;
  font-weight: bold;
  color: #3498db;
}
```

### Explanation

* Targets **only the first letter** of a paragraph
* Often used for **drop caps** in articles

Example:

```html
<p>
CSS pseudo-elements allow developers to style specific parts of text
without modifying the HTML.
</p>
```

---

### Styling the First Line

```css
p::first-line {
  font-weight: bold;
  color: #e74c3c;
}
```

### Explanation

* Styles **only the first line of text**
* Useful for **highlighting introductory text**

Example output:

* First line becomes **bold and red**

---

## 3. Styling Text Selection

The `::selection` pseudo-element styles **text highlighted by the user**.

### Example

```css
::selection {
  background-color: #3498db;
  color: white;
}
```

### Explanation

When users select text with their cursor:

* Background becomes **blue**
* Text becomes **white**

This improves **user experience and accessibility**.

---

# 5.3 Features and Limitations of Pseudo-elements

## Features

### 1. No Extra HTML Required

Pseudo-elements allow adding visual elements without inserting extra tags.

Example:

```css
button::before {
  content: "⭐";
}
```

---

### 2. Improves Typography

Pseudo-elements help create **professional text layouts** such as:

* Drop caps
* Styled first lines
* Highlighted text selections

---

### 3. Decorative Design

They are commonly used to add:

* Icons
* Dividers
* Decorative shapes

---

# Limitations of Pseudo-elements

## 1. Single Usage

`::before` and `::after` can only be used **once per element**.

Example:

```css
div::before { }
div::after { }
```

You cannot have multiple `::before` elements on the same element.

---

## 2. Content Property Requirement

For `::before` and `::after` to work, the `content` property **must be defined**, even if empty.

Example:

```css
div::before {
  content: "";
}
```

Without `content`, the pseudo-element **will not appear**.

---

## 3. Browser Compatibility

Modern CSS uses **double colon syntax**:

```
::before
::after
```

However older browsers still support **single colon notation**:

```
:before
:after
```

Modern practice is to use **double colons**.

---

# Example: Using Empty Content for Decoration

Pseudo-elements can also create **decorative shapes**.

```css
div::before {
  content: "";
  display: block;
  width: 100%;
  height: 10px;
  background-color: #3498db;
}
```

### Explanation

This creates a **blue decorative stripe** before the `div`.

Example HTML:

```html
<div>
  Welcome to my website
</div>
```

Result:

* A **blue bar appears above the content**

---

# Exercises

## Exercise 1: Highlighted Text

### Task

Style the text selected by the user so that:

* Background color is **blue**
* Text color is **white**

### Requirements

* Use `::selection`
* Apply the styles globally

---

### Solution

```css
::selection {
  background-color: blue;
  color: white;
}
```

### Explanation

When a user highlights text with their cursor:

* Background becomes **blue**
* Text becomes **white**

---

# Exercise 2: First Letter Styling

### Task

Style all paragraphs so that the **first letter**:

* Has font size **2em**
* Is **bold**
* Has color **#3498db**

### Requirements

* Use `::first-letter`
* Apply styling to **all paragraphs**

---

### Solution

```css
p::first-letter {
  font-size: 2em;
  font-weight: bold;
  color: #3498db;
}
```

### Explanation

This rule:

* Targets **only the first letter** of each paragraph
* Enlarges it
* Makes it bold
* Applies a blue color

---

# Complete Example

### HTML

```html
<!DOCTYPE html>
<html>
<head>
<style>

::selection {
  background-color: blue;
  color: white;
}

p::first-letter {
  font-size: 2em;
  font-weight: bold;
  color: #3498db;
}

a::before {
  content: "🔗 ";
}

</style>
</head>

<body>

<p>CSS pseudo-elements allow developers to style specific parts of elements.</p>

<p>They help create visually attractive web pages.</p>

<a href="#">Learn CSS</a>

</body>
</html>
```

---

# Summary

Pseudo-elements are powerful CSS tools used to **style specific parts of elements and add decorative content without modifying HTML**.

Common pseudo-elements include:

* `::before`
* `::after`
* `::first-letter`
* `::first-line`
* `::selection`

Benefits include:

* Cleaner HTML
* Enhanced typography
* Improved UI styling

They are widely used in **modern web design** for creating **professional, interactive, and visually appealing interfaces**.

---

