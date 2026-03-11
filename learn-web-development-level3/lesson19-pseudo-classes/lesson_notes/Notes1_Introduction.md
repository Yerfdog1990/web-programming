# Introduction to Pseudo-classes

## 1.1 Pseudo-classes

Pseudo-classes in CSS are **special keywords added to selectors** that allow developers to style elements based on their **state**, **position**, or **special conditions** in the document structure.

They make it possible to apply styles **without adding additional classes or IDs to HTML elements**. Instead, the browser automatically determines when the pseudo-class condition is met.

Pseudo-classes are very useful for creating **interactive and dynamic user interfaces**.

---

# Main Concepts of Pseudo-classes

## 1. Defining the State of an Element

Pseudo-classes can describe the **current state of an element**, especially during **user interaction**.

Examples include:

* When a user **hovers** over an element
* When an element is **focused**
* When a link has been **visited**
* When an element is **active** (clicked)

Example:

```css
button:hover {
  background-color: blue;
}
```

Here the button changes color when the mouse pointer is placed over it.

---

## 2. Defining the Position of an Element

Pseudo-classes can also target elements based on their **position in the HTML structure (DOM)**.

Examples include:

* The **first child** of a parent
* The **last child**
* The **nth child**
* Elements in **odd or even positions**

Example:

```css
li:first-child {
  font-weight: bold;
}
```

This makes the **first list item** bold.

---

## 3. Special Cases and Logical Groups

Some pseudo-classes apply to elements based on **special logical conditions**, such as:

* Checked inputs
* Disabled inputs
* Enabled inputs
* First element of a specific type

Example:

```css
input:disabled {
  background-color: grey;
}
```

This styles any **disabled input field**.

---

# How to Use Pseudo-classes

Pseudo-classes are added to a selector using a **colon (`:`)**.

## Syntax

```css
selector:pseudo-class {
  property: value;
}
```

Example:

```css
a:hover {
  color: red;
}
```

When a user hovers over a link, its color becomes red.

Pseudo-classes can be used with different selectors such as:

* Element selectors
* Class selectors
* ID selectors
* Combined selectors

---

# Usage Examples

## 1. Element Selector with Pseudo-class

Pseudo-classes can be attached directly to **HTML element selectors**.

### Example

```css
p:first-of-type {
  font-weight: bold;
}
```

### Explanation

* `p` selects paragraph elements.
* `:first-of-type` targets **the first paragraph within its parent element**.

### Result

The **first paragraph** inside each parent becomes bold.

---

## 2. Class Selector with Pseudo-class

Pseudo-classes can also be applied to **class selectors**.

### Example

```css
.button:hover {
  background-color: blue;
}
```

### Explanation

* `.button` selects elements with class `button`.
* `:hover` activates when the **mouse pointer moves over the element**.

### Result

Buttons turn **blue when hovered**.

---

## 3. Combined Selectors with Pseudo-classes

Pseudo-classes can be used with **combined selectors** to create more specific styling rules.

### Example

```css
.container > p:nth-child(2n) {
  color: red;
}
```

### Explanation

* `.container` selects the container element.
* `>` selects **direct child elements**.
* `p:nth-child(2n)` selects **every even paragraph**.

### Result

Even-numbered paragraphs inside `.container` become **red**.

---

# 1.2 Examples of Pseudo-classes and Their Application

## 1. State-defining Pseudo-classes

These pseudo-classes style elements based on **user interaction or link state**.

Example:

```css
a:link {
  color: blue;
}

a:visited {
  color: purple;
}

a:hover {
  color: red;
}

a:active {
  color: green;
}
```

### Explanation

| Pseudo-class | Description                                        |
| ------------ | -------------------------------------------------- |
| `:link`      | Targets links that have not been visited           |
| `:visited`   | Targets links already visited                      |
| `:hover`     | Applies when the mouse pointer is over the element |
| `:active`    | Applies when the element is clicked                |

---

## 2. Position-defining Pseudo-classes

These pseudo-classes select elements based on their **position among siblings**.

Example:

```css
li:first-child {
  font-style: italic;
}

li:last-child {
  font-style: italic;
}

li:nth-child(odd) {
  background-color: #f0f0f0;
}

li:nth-child(even) {
  background-color: #ffffff;
}
```

### Explanation

| Pseudo-class       | Description               |
| ------------------ | ------------------------- |
| `:first-child`     | Selects the first element |
| `:last-child`      | Selects the last element  |
| `:nth-child(odd)`  | Selects odd elements      |
| `:nth-child(even)` | Selects even elements     |

---

## 3. Pseudo-classes for Logical Groups

These pseudo-classes apply to elements based on their **logical state**.

Example:

```css
input:checked {
  background-color: yellow;
}

input:disabled {
  background-color: grey;
}

input:enabled {
  background-color: white;
}
```

### Explanation

| Pseudo-class | Description                                 |
| ------------ | ------------------------------------------- |
| `:checked`   | Targets checked checkboxes or radio buttons |
| `:disabled`  | Targets disabled inputs                     |
| `:enabled`   | Targets enabled inputs                      |

---

# Exercise 1: Background on Hover

## Task

Inside the container with class `.buttons`, change the **background color of elements with class `.btn` to green when hovered**.

### Requirements

* Only elements with `.btn`
* Only inside `.buttons`
* Use the `:hover` pseudo-class

---

## Example HTML

```html
<div class="buttons">
  <button class="btn">Save</button>
  <button class="btn">Cancel</button>
</div>
```

---

## Solution

```css
.buttons .btn:hover {
  background-color: green;
}
```

### Explanation

* `.buttons` selects the container
* `.btn` selects the buttons inside it
* `:hover` activates when the mouse pointer is placed on the button

Result: Buttons turn **green when hovered**.

---

# Exercise 2: Active Links

## Task

Inside the container `.nav`, change the color of all links to **red when they are clicked**.

### Requirements

* Only `<a>` elements
* Only inside `.nav`
* Use the `:active` pseudo-class

---

## Example HTML

```html
<div class="nav">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</div>
```

---

## Solution

```css
.nav a:active {
  color: red;
}
```

### Explanation

* `.nav` selects the navigation container
* `a` selects links
* `:active` applies **while the link is being clicked**

Result: The link becomes **red during the click action**.

---

# Key Takeaways

* **Pseudo-classes** allow styling elements based on **state, position, or logical conditions**.
* They use the **colon (`:`) syntax**.
* They eliminate the need for extra HTML classes in many cases.
* Common types include:

| Category       | Examples                                      |
| -------------- | --------------------------------------------- |
| State-based    | `:hover`, `:active`, `:visited`, `:focus`     |
| Position-based | `:first-child`, `:last-child`, `:nth-child()` |
| Logical        | `:checked`, `:disabled`, `:enabled`           |

Pseudo-classes are essential for creating **interactive, responsive, and clean CSS designs**.

---

