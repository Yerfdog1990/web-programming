# 5.1 Key Concepts of Flexbox

## Introduction to Flexbox

**Flexbox (Flexible Box Layout)** is a modern CSS layout system designed to create flexible, efficient, and responsive layouts. It provides powerful tools for aligning items, distributing space, and controlling the size and order of elements inside a container.

Flexbox is especially useful for:

* Building responsive web layouts
* Aligning elements vertically and horizontally
* Distributing space evenly between items
* Creating flexible navigation bars, cards, and UI components

---

## Core Components of Flexbox

Flexbox is built around **two main components**:

### 1. Flex Container

A **Flex container** is the parent element that enables Flexbox behavior for its children.

It is created using:

```css
display: flex;
```

or

```css
display: inline-flex;
```

Once an element becomes a Flex container, all its direct child elements automatically become **Flex items**.

---

### 2. Flex Items

**Flex items** are the direct children inside a Flex container.

They:

* Follow Flexbox layout rules
* Can grow or shrink
* Can change order
* Can be aligned and distributed automatically

---

# Creating a Flex Container

## Using `display: flex;`

```css
.container {
  display: flex;
}
```

This creates a **block-level Flex container**.

### Characteristics:

* Takes up the full width of its parent
* Child elements become Flex items
* Items are arranged horizontally by default

---

## Example: Basic Flex Container

### CSS

```css
.container {
  display: flex;
  border: 2px solid #000;
  padding: 10px;
}

.item {
  background-color: #3498db;
  color: white;
  padding: 10px;
  margin: 5px;
}
```

### HTML

```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

### Code Explanation

* `.container`

    * Uses `display: flex;`
    * Becomes a Flex container
    * Controls layout of its child elements

* `.item`

    * These are Flex items
    * Automatically aligned in a row
    * Spacing handled using margin and padding

---

# 5.2 Flex Container Properties

The most important Flex container property is:

## 1. `display: flex;`

Creates a **block-level Flex container**.

* Takes up the entire available width
* Behaves like a block element
* Child elements follow Flexbox rules

```css
.container {
  display: flex;
}
```

---

## 2. `display: inline-flex;`

Creates an **inline-level Flex container**.

* Takes only the necessary width
* Can sit next to other inline elements
* Still applies Flexbox rules to children

```css
.inline-container {
  display: inline-flex;
}
```

---

## Example: Inline-Flex Containers

### CSS

```css
.inline-container {
  display: inline-flex;
  border: 2px solid #000;
  padding: 10px;
}

.item {
  background-color: #3498db;
  color: white;
  padding: 10px;
  margin: 5px;
}
```

### HTML

```html
<div class="inline-container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>

<div class="inline-container">
  <div class="item">Item 4</div>
  <div class="item">Item 5</div>
</div>
```

### Code Explanation

* `.inline-container`

    * Uses `display: inline-flex;`
    * Behaves like inline elements
    * Containers sit next to each other on the same line

* `.item`

    * Flex items inside each container
    * Styled with background color and padding

---

# 5.3 Flex Item Properties

Flex items can be controlled using special properties.

---

## 1. The `flex` Property

The `flex` property is shorthand for:

```css
flex: flex-grow flex-shrink flex-basis;
```

### Meaning of Each Value:

| Property    | Description                             |
| ----------- | --------------------------------------- |
| flex-grow   | Defines how much the item should grow   |
| flex-shrink | Defines how much the item should shrink |
| flex-basis  | Defines the initial size                |

---

### Example:

```css
.item {
  flex: 1;
}
```

This means:

* All items grow equally
* Available space is divided evenly

---

## 2. The `order` Property

The `order` property controls the **visual order** of Flex items.

By default:

```css
order: 0;
```

### Rules:

* Lower numbers appear first
* Higher numbers appear later
* Can use negative numbers

---

### Example: Changing Item Order

### CSS

```css
.container {
  display: flex;
  border: 2px solid #000;
  padding: 10px;
}

.item-1 {
  order: 2;
  background-color: #3498db;
  padding: 10px;
  margin: 5px;
}

.item-2 {
  order: 1;
  background-color: #2ecc71;
  padding: 10px;
  margin: 5px;
}

.item-3 {
  order: 3;
  background-color: #e74c3c;
  padding: 10px;
  margin: 5px;
}
```

### HTML

```html
<div class="container">
  <div class="item-1">Item 1</div>
  <div class="item-2">Item 2</div>
  <div class="item-3">Item 3</div>
</div>
```

### Explanation

* `.item-2` (order: 1) → appears first
* `.item-1` (order: 2) → appears second
* `.item-3` (order: 3) → appears last

Even though the HTML order is different, Flexbox changes the visual layout.

---

# Practical Exercises

---

# Exercise 1: Flex Container with Four Elements

## Requirements:

* Use `display: flex`
* Four elements inside container
* Each element has padding and unique background
* Items evenly distributed

---

### Solution

### CSS

```css
.container {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 2px solid #000;
}

.box1 {
  background-color: #3498db;
  padding: 20px;
}

.box2 {
  background-color: #2ecc71;
  padding: 20px;
}

.box3 {
  background-color: #e74c3c;
  padding: 20px;
}

.box4 {
  background-color: #f39c12;
  padding: 20px;
}
```

### HTML

```html
<div class="container">
  <div class="box1">Box 1</div>
  <div class="box2">Box 2</div>
  <div class="box3">Box 3</div>
  <div class="box4">Box 4</div>
</div>
```

### Key Concept Used:

`justify-content: space-between;` distributes items evenly across the container.

---

# Exercise 2: Inline-Flex Containers

## Requirements:

* Two containers
* Each uses `display: inline-flex`
* Each contains three elements
* Containers aligned side by side
* Different background colors

---

### Solution

### CSS

```css
.inline-container {
  display: inline-flex;
  border: 2px solid #000;
  padding: 10px;
  margin: 10px;
}

.item1 { background-color: #3498db; padding: 15px; }
.item2 { background-color: #2ecc71; padding: 15px; }
.item3 { background-color: #e74c3c; padding: 15px; }

.item4 { background-color: #9b59b6; padding: 15px; }
.item5 { background-color: #f1c40f; padding: 15px; }
.item6 { background-color: #1abc9c; padding: 15px; }
```

### HTML

```html
<div class="inline-container">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
</div>

<div class="inline-container">
  <div class="item4">Item 4</div>
  <div class="item5">Item 5</div>
  <div class="item6">Item 6</div>
</div>
```

### Explanation

* `display: inline-flex` makes containers inline-level
* Containers appear side by side
* Each container independently controls its own Flex items

---

# Summary of Key Concepts

| Concept              | Description                           |
| -------------------- | ------------------------------------- |
| Flexbox              | CSS layout system for flexible design |
| Flex Container       | Parent element using `display: flex`  |
| Flex Items           | Children inside the Flex container    |
| display: flex        | Creates block-level Flex container    |
| display: inline-flex | Creates inline-level Flex container   |
| flex                 | Controls growth and shrinking         |
| order                | Changes visual order of items         |

---

# Why Flexbox is Important

Flexbox:

* Simplifies layout creation
* Makes responsive design easier
* Eliminates complex float-based layouts
* Provides powerful alignment tools
* Works perfectly for modern UI development

---

