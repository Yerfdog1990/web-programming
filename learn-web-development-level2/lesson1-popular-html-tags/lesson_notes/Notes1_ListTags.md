
---

# HTML Lists

### Structuring Content with Ordered and Unordered Lists

---

## 1. Introduction to HTML Lists

Lists are one of the **most frequently used HTML structures**. They allow developers to group related items together and present them in a clear, readable, and logical way.

Lists improve:

* Content organization
* Readability
* Accessibility
* User experience

Common real-world uses of lists:

* Navigation menus
* Instructions and step-by-step guides
* Product features
* To-do lists
* Nested menus and outlines

HTML provides **three core list elements**:

* `<ul>` – Unordered List (bulleted)
* `<ol>` – Ordered List (numbered)
* `<li>` – List Item

---

## 1.1 Types of Lists

---

### 1.1.1 Unordered Lists `<ul>`

An **unordered list** displays items **without a specific order**.
Each list item is preceded by a **marker symbol** such as a dot, circle, or square.

#### When to Use `<ul>`

* The order of items does **not matter**
* You are listing options, features, or categories

#### HTML Structure

* `<ul>` is the container
* `<li>` elements go **inside** the `<ul>`

#### HTML Example

```html
<ul>
  <li>First list item</li>
  <li>Second list item</li>
  <li>Third list item</li>
</ul>
```

#### Result on the Web Page

• First list item
• Second list item
• Third list item

---

### 1.1.2 Ordered Lists `<ol>`

An **ordered list** displays items in a **specific sequence**.
The browser automatically applies numbers or letters.

#### When to Use `<ol>`

* The order of items is important
* You are presenting steps, rankings, or instructions

#### HTML Example

```html
<ol>
  <li>First list item</li>
  <li>Second list item</li>
  <li>Third list item</li>
</ol>
```

#### Result on the Web Page

1. First list item
2. Second list item
3. Third list item

---

## 1.2 List Elements `<li>`

The `<li>` tag defines **each individual list item**.

### Key Rules

* `<li>` must always be inside `<ul>` or `<ol>`
* You cannot place text directly inside `<ul>` or `<ol>`
* Each `<li>` represents **one logical item**

### Correct Structure

```html
<ul>
  <li>Item one</li>
  <li>Item two</li>
</ul>
```

### Incorrect Structure ❌

```html
<ul>
  Item one
  Item two
</ul>
```

---

## 1.2.1 The `type` Attribute

The `type` attribute controls **how list markers appear**.

⚠️ **Note:**
The `type` attribute is considered **obsolete** in modern HTML.
CSS should be used instead, but understanding `type` helps when reading legacy code.

---

### Marker Types for `<ul>`

| Value    | Description        |
| -------- | ------------------ |
| `disc`   | Default filled dot |
| `circle` | Hollow circle      |
| `square` | Filled square      |

#### HTML Example

```html
<ul type="square">
  <li>First list item</li>
  <li>Second list item</li>
</ul>
```

#### Result on the Web Page

■ First list item

■ Second list item

---

### Numbering Types for `<ol>`

| Value | Result     |
| ----- | ---------- |
| `1`   | 1, 2, 3    |
| `A`   | A, B, C    |
| `a`   | a, b, c    |
| `I`   | I, II, III |
| `i`   | i, ii, iii |

#### HTML Example

```html
<ol type="A">
  <li>First list item</li>
  <li>Second list item</li>
</ol>
```

#### Result on the Web Page

A. First list item

B. Second list item

---

## 1.2.2 The `start` Attribute

The `start` attribute sets **where numbering begins** in an ordered list.

### Common Use Cases

* Continuing numbering across sections
* Breaking long instructions into parts

#### HTML Example

```html
<ol start="5">
  <li>Fifth list item</li>
  <li>Sixth list item</li>
</ol>
```

#### Result on the Web Page

5. Fifth list item
6. Sixth list item

---

## 1.2.3 Nested Lists

Nested lists allow you to create **hierarchical structures**.

### Rules for Nested Lists

* A nested list must be placed **inside an `<li>`**
* You can mix `<ul>` and `<ol>`
* Indentation is handled automatically by the browser

#### HTML Example

```html
<ul>
  <li>First list item
    <ul type="circle">
      <li>Nested first item</li>
      <li>Nested second item</li>
    </ul>
  </li>
  <li>Second list item</li>
  <li>Third list item</li>
</ul>
```

#### Result on the Web Page

• First list item

    ◦ Nested first item

    ◦ Nested second item

• Second list item

• Third list item

---

## 1.3 Styling Lists with CSS

CSS provides **far greater control** over list appearance.

### Why Use CSS Instead of `type`?

* More marker options
* Better accessibility
* Separation of structure and presentation
* Modern best practice

#### CSS Example

```css
ul.custom-list {
  list-style-type: katakana;
  color: blue;
}

ol.custom-list {
  list-style-type: hiragana-iroha;
  color: green;
}
```

```html
<ul class="custom-list">
  <li>First list item</li>
  <li>Second list item</li>
</ul>

<ol class="custom-list">
  <li>First list item</li>
  <li>Second list item</li>
</ol>
```

#### Result on the Web Page

カ First list item

カ Second list item

い First list item

ろ Second list item

*(Exact markers depend on browser support.)*

---

## 1.4 Accessibility and Best Practices

* Always use lists for grouped content (not `<br>` tags)
* Screen readers understand lists naturally
* Avoid removing list markers unless necessary
* Keep list items concise and meaningful

---

## 2. Summary

* `<ul>` → unordered (bulleted) lists
* `<ol>` → ordered (numbered) lists
* `<li>` → list items
* Lists can be nested
* CSS is preferred for styling
* Lists improve structure, readability, and accessibility

---

# Exercises

## Exercise 1: Unordered List

**Task:**
Create an unordered list with:

* Apple
* Banana
* Cherry

### Expected Result on the Web Page

• Apple

• Banana

• Cherry

---

## Exercise 2: Nested Lists

**Task:**
Create a nested list where:

* Outer list is unordered
* Inner list is ordered
* Inner list contains two items

### Expected Result on the Web Page

• Main Item
    1. Sub Item One
    2. Sub Item Two

---
