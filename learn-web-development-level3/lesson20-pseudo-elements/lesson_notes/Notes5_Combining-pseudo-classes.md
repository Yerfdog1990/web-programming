# Combining Pseudo-classes and Pseudo-elements in CSS

## 8.1 Basic Concepts

Combining **pseudo-classes** and **pseudo-elements** in CSS allows developers to create **powerful selectors** that apply styles based on:

* Element **state** (hover, focus, active)
* Element **structure** (first child, last child, nth-child)
* Specific **parts of elements** (first letter, first line, before/after content)

This combination enables developers to build **interactive and dynamic user interfaces** without modifying HTML.

---

# Pseudo-classes

Pseudo-classes are used to style elements based on their **state or position**.

They use a **single colon (`:`)**.

### Examples

```css
:hover
:first-child
:last-child
:nth-child()
:focus
:visited
:active
```

Example:

```css
button:hover {
  background-color: blue;
}
```

The style applies **when the user hovers over the button**.

---

# Pseudo-elements

Pseudo-elements allow styling **specific parts of elements** or adding **virtual content**.

They use **two colons (`::`)**.

### Examples

```css
::before
::after
::first-letter
::first-line
::selection
```

Example:

```css
p::first-letter {
  font-size: 2em;
}
```

This styles **only the first letter** of a paragraph.

---

# Combining Pseudo-classes and Pseudo-elements

You can combine both to create **highly specific selectors**.

### Syntax

```css
selector:pseudo-class::pseudo-element {
  property: value;
}
```

Example:

```css
p:hover::first-letter {
  font-size: 2em;
}
```

This means:

* When the paragraph is **hovered**
* Style its **first letter**

---

# 8.2 Combining for Interactivity

Pseudo-class combinations are often used to create **interactive UI effects**.

---

## Example 1: Styling the First Letter on Hover

### CSS

```css
/* Styling the first letter of a paragraph on hover */

p:hover::first-letter {
  font-size: 2em;
  color: #e74c3c;
}
```

### HTML

```html
<p>Hover over this paragraph to see the first letter change.</p>
```

### Result

When the user **hovers over the paragraph**, the **first letter becomes larger and red**.

---

## Example 2: Adding Content Before a Link on Focus

### CSS

```css
/* Adding an icon before a link on focus */

a:focus::before {
  content: "🔗 ";
  color: #3498db;
}
```

### HTML

```html
<a href="#">Click or focus this link</a>
```

### Result

When the link is **focused** (keyboard navigation or click):

* An icon appears **before the link text**
* The icon becomes **blue**

This improves **accessibility and visual feedback**.

---

# 8.3 Combining for Structuring Styles

Pseudo-classes and pseudo-elements can also be used for **structural styling**.

---

## Example 3: Styling the First Paragraph Inside a Div

### CSS

```css
/* Styling the first line of the first paragraph inside a div */

div p:first-child::first-line {
  font-weight: bold;
  color: #2ecc71;
}
```

### HTML

```html
<div>
  <p>This is the first paragraph inside the div.</p>
  <p>This is the second paragraph.</p>
</div>
```

### Result

* Only the **first paragraph inside the div** is selected
* Only the **first line** of that paragraph becomes:

    * **Bold**
    * **Green**

---

## Example 4: Decorative Element After the Last List Item

### CSS

```css
/* Adding a decorative element after the last list item */

ul li:last-child::after {
  content: "❦";
  display: inline-block;
  margin-left: 10px;
  color: #e74c3c;
}
```

### HTML

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

### Result

The **last list item** gets a **decorative symbol after it**.

Example output:

```
Item 3 ❦
```

---

# 8.4 Combining for Complex Conditions

Combining multiple pseudo-classes creates **more advanced conditions**.

---

## Example 5: Styling Even List Items on Hover

### CSS

```css
/* Styling even list items on hover */

ul li:nth-child(even):hover {
  background-color: #f0f0f0;
  color: #3498db;
}
```

### HTML

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
</ul>
```

### Result

* Only **even items**
* Only when **hovered**

Example:

```
Item 2 → changes color when hovered
Item 4 → changes color when hovered
```

---

## Example 6: Styling Active Links That Have Been Visited

### CSS

```css
/* Styling active links that have been visited */

a:visited:active {
  color: #e67e22;
  text-decoration: underline;
}
```

### Explanation

This applies when a link:

1. Has been **visited**
2. Is currently **active (being clicked)**

The link becomes:

* **Orange**
* **Underlined**

---

# 8.5 Full Implementation Example

## CSS

```css
/* Styling the first line of the first paragraph inside a div */

div p:first-child::first-line {
  font-weight: bold;
  color: #2ecc71;
}

/* Adding a decorative element after the last list item */

ul li:last-child::after {
  content: "❦";
  display: inline-block;
  margin-left: 10px;
  color: #e74c3c;
}

/* Styling even list items on hover */

ul li:nth-child(even):hover {
  background-color: #f0f0f0;
  color: #3498db;
}

/* Adding an icon before a link on focus */

a:focus::before {
  content: "🔗 ";
  color: #3498db;
}

/* Styling the first letter of a paragraph on hover */

p:hover::first-letter {
  font-size: 2em;
  color: #e74c3c;
}
```

---

## HTML

```html
<!DOCTYPE html>
<html>
<head>
<title>Combining Pseudo-classes and Pseudo-elements</title>
<link rel="stylesheet" href="styles.css">
</head>

<body>

<div>
  <p>This is the first paragraph inside a div.</p>
  <p>This is the second paragraph inside a div.</p>
</div>

<ul>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
  <li>List item 4</li>
</ul>

<a href="#">Link with icon on focus</a>

<p>Hover over this paragraph to see the first letter effect.</p>

</body>
</html>
```

---

# Exercises with Solutions

---

# Exercise 1: First Line in Div

### Task

Style the **first line of the first paragraph inside each div**.

### Requirements

* Use `:first-child`
* Use `::first-line`
* Text should be:

    * **Bold**
    * **Green (#2ecc71)**

---

## Solution

### CSS

```css
div p:first-child::first-line {
  font-weight: bold;
  color: #2ecc71;
}
```

### HTML

```html
<div>
  <p>This is the first paragraph inside the div.</p>
  <p>This is another paragraph.</p>
</div>
```

### Explanation

* `div p:first-child` selects the **first paragraph inside the div**
* `::first-line` styles **only the first line**

---

# Exercise 2: Decorative Element at the End

### Task

Add a decorative element **❦** after the **last item of each list**.

### Requirements

* Use `:last-child`
* Use `::after`
* Color: **#e74c3c**
* Margin-left: **10px**

---

## Solution

### CSS

```css
ul li:last-child::after {
  content: "❦";
  color: #e74c3c;
  margin-left: 10px;
}
```

### HTML

```html
<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Orange</li>
</ul>
```

### Result

```
Apple
Banana
Orange ❦
```

---

# Key Takeaways

✔ **Pseudo-classes** target element **states and structure**
✔ **Pseudo-elements** target **parts of elements**
✔ They can be **combined** for advanced styling
✔ Syntax format:

```css
selector:pseudo-class::pseudo-element
```

✔ Common real-world uses:

* Interactive UI effects
* Decorative content
* Typography styling
* Conditional styling

---

Here are **20 practice questions similar to real front-end developer tests** focusing on **CSS pseudo-classes, pseudo-elements, and combining selectors**. These include **conceptual, debugging, and coding questions**, which are commonly used in interviews and coding assessments.

---

# CSS Pseudo-classes and Pseudo-elements Practice Questions

## Section 1: Multiple Choice Questions

### Question 1

Which selector styles the **first letter of every paragraph**?

A. `p:first-letter`
B. `p::first-letter`
C. `p::letter`
D. `p:first`

**Answer:**
B. `p::first-letter`

---

### Question 2

Which pseudo-element is used to **add content after an element**?

A. `::after`
B. `::before`
C. `:after`
D. `:content`

**Answer:**
A. `::after`

---

### Question 3

Which selector applies a style **when the user hovers over an element**?

A. `:active`
B. `:hover`
C. `:focus`
D. `:visited`

**Answer:**
B. `:hover`

---

### Question 4

Which pseudo-element styles **text selected by the user**?

A. `::selected`
B. `::highlight`
C. `::selection`
D. `::text-select`

**Answer:**
C. `::selection`

---

### Question 5

Which syntax correctly combines a **pseudo-class and pseudo-element**?

A. `p::hover:first-letter`
B. `p:hover::first-letter`
C. `p:first-letter:hover`
D. `p:hover:first-letter`

**Answer:**
B. `p:hover::first-letter`

---

# Section 2: True or False

### Question 6

Pseudo-elements create **virtual elements that do not exist in the HTML markup**.

**Answer:**
True

---

### Question 7

`::before` and `::after` can be used without the `content` property.

**Answer:**
False
They require the `content` property (even if empty).

---

### Question 8

Pseudo-classes use **two colons (::)**.

**Answer:**
False
Pseudo-classes use **one colon (:)**.

---

### Question 9

You can use multiple pseudo-classes on the same selector.

Example:

```css
a:visited:active
```

**Answer:**
True

---

### Question 10

`::first-line` styles the entire paragraph.

**Answer:**
False
It styles **only the first line of text**.

---

# Section 3: Code Reading Questions

### Question 11

What does this code do?

```css
p:hover::first-letter {
  font-size: 2em;
  color: red;
}
```

**Answer**

When the user **hovers over a paragraph**, the **first letter becomes larger and red**.

---

### Question 12

What will this code add?

```css
a::before {
  content: "🔗 ";
}
```

**Answer**

An **icon appears before the link text**.

Example:

```
🔗 Home
```

---

### Question 13

What does this selector target?

```css
ul li:last-child::after
```

**Answer**

* Selects the **last list item**
* Adds content **after the element**

---

### Question 14

What happens when this code is applied?

```css
::selection {
  background-color: blue;
  color: white;
}
```

**Answer**

When the user **selects text**, it will appear:

* Blue background
* White text

---

### Question 15

What does this selector target?

```css
div p:first-child::first-line
```

**Answer**

It selects:

* The **first paragraph inside a div**
* Styles **only the first line of that paragraph**

---

# Section 4: Coding Questions

### Question 16

Write CSS to **style the first letter of every paragraph** so that it is:

* Font size: **3em**
* Bold
* Blue

**Solution**

```css
p::first-letter {
  font-size: 3em;
  font-weight: bold;
  color: blue;
}
```

---

### Question 17

Write CSS to **change the background of a button when hovered**.

**Solution**

```css
button:hover {
  background-color: green;
}
```

---

### Question 18

Add a **star icon before every list item**.

**Solution**

```css
li::before {
  content: "★ ";
}
```

---

### Question 19

Style the **first line of every paragraph** so that it is:

* Bold
* Green
* Uppercase

**Solution**

```css
p::first-line {
  font-weight: bold;
  color: green;
  text-transform: uppercase;
}
```

---

### Question 20

Add a decorative symbol **❦ after the last item in a list**.

**Solution**

```css
ul li:last-child::after {
  content: "❦";
  margin-left: 10px;
  color: red;
}
```

---

# Bonus Challenge (Real Interview Style)

### Question 21 (Advanced)

Write CSS that:

* Enlarges the **first letter of a paragraph**
* Only when the **paragraph is hovered**

**Solution**

```css
p:hover::first-letter {
  font-size: 2em;
  color: red;
}
```

---

# Mini Front-End Test Task

Create a page where:

1. The **first letter of paragraphs is large (drop cap)**
2. **Even list items change color on hover**
3. **Links show an icon when focused**

Example solution:

```css
p::first-letter {
  font-size: 2em;
  float: left;
  margin-right: 5px;
}

li:nth-child(even):hover {
  background-color: #eee;
}

a:focus::before {
  content: "🔗 ";
}
```

---

