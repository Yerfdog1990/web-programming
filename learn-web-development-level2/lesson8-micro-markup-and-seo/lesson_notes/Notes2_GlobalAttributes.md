# Lesson Notes: Global Attributes in HTML

## 8.0 Introduction to Global Attributes

**Global attributes** are attributes that can be used on **any HTML element**.

They help developers:

* Identify elements uniquely
* Group elements together
* Store extra information
* Apply CSS styling
* Manipulate elements using JavaScript

In this lesson, we will cover:

1. `id`
2. `class`
3. `data-*`

---

# 8.1 The `id` Attribute

## Definition

The `id` attribute uniquely identifies an element in an HTML document.

Important rule:

> The value of `id` must be **unique** within the entire page.

---

## Syntax

```html
<element id="unique-id">...</element>
```

---

## Why Use `id`?

### 1. Unique Identification

Only one element can have a specific `id`.

### 2. Styling with CSS

Use `#idname` in CSS.

### 3. JavaScript Access

Use `document.getElementById()`.

---

## Example: HTML + CSS + JavaScript

### HTML

```html
<div id="header">
  <h1>Header</h1>
</div>
```

### CSS

```css
#header {
  background-color: #f4f4f4;
  padding: 10px;
}
```

### JavaScript

```javascript
document.getElementById('header').style.color = 'blue';
```

---

## Complete Working Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>ID Example</title>
  <style>
    #header {
      background-color: #f4f4f4;
      padding: 20px;
    }
  </style>
</head>
<body>

<div id="header">
  <h1>Welcome to My Website</h1>
</div>

<script>
  document.getElementById('header').style.color = 'blue';
</script>

</body>
</html>
```

---

## Advantages of `id`

* Unique identification
* Easy CSS targeting
* Direct JavaScript access
* Helpful for navigation and anchors

---

# 8.2 The `class` Attribute

## Definition

The `class` attribute assigns one or more class names to an element.

Unlike `id`, class values:

* Do NOT have to be unique
* Can be shared by multiple elements
* Can be combined (multiple classes)

---

## Syntax

```html
<element class="class1 class2">...</element>
```

Multiple classes are separated by spaces.

---

## Example

### CSS

```css
.highlight {
  background-color: yellow;
}

.bold {
  font-weight: bold;
}
```

### HTML

```html
<p class="highlight">This text is highlighted.</p>
<p class="bold">This text is bold.</p>
<p class="highlight bold">This text is bold and highlighted.</p>
```

---

## JavaScript Access with Class

```javascript
const elements = document.querySelectorAll('.highlight');
elements.forEach(el => {
  el.style.color = 'red';
});
```

---

## Advantages of `class`

* Apply styles to groups of elements
* Assign multiple classes to one element
* Easier bulk manipulation in JavaScript
* Better for reusable styles

---

# 8.3 The `data-*` Attributes

## Definition

The `data-*` attributes allow you to store custom data in HTML elements.

They:

* Start with `data-`
* Can store any value
* Are accessed in JavaScript using `.dataset`

---

## Syntax

```html
<element data-key="value">...</element>
```

---

## Example

### HTML

```html
<div data-user-id="12345" data-role="admin">
  User with ID 12345, role - admin.
</div>
```

---

### JavaScript

```javascript
const userElement = document.querySelector('[data-user-id]');

console.log(userElement.dataset.userId); // 12345
console.log(userElement.dataset.role);   // admin
```

---

## How `dataset` Works

HTML:

```html
data-user-id="12345"
```

JavaScript:

```javascript
element.dataset.userId
```

Notice:

* Hyphenated names become camelCase.

---

## Advantages of `data-*`

* Store extra information
* Clean and valid HTML
* Easy JavaScript access
* Flexible and customizable

---

# Comparison: id vs class vs data-*

| Attribute | Unique? | Used for Styling? | Used in JS? | Purpose              |
| --------- | ------- | ----------------- | ----------- | -------------------- |
| id        | Yes     | Yes               | Yes         | Identify one element |
| class     | No      | Yes               | Yes         | Group elements       |
| data-*    | No      | Rarely            | Yes         | Store custom data    |

---

# Practical Exercises

---

# Exercise 1: Styling with ID

## Task

Create a webpage with:

* A `<div>` with `id="header"`
* CSS that changes the background using `#header`
* JavaScript that changes text color

---

## Solution

```html
<!DOCTYPE html>
<html>
<head>
  <title>Styling with ID</title>
  <style>
    #header {
      background-color: lightgray;
      padding: 20px;
    }
  </style>
</head>
<body>

<div id="header">
  <h2>This is the Header Section</h2>
</div>

<script>
  document.getElementById('header').style.color = 'green';
</script>

</body>
</html>
```

---

# Exercise 2: Styling with Class

## Task

Create a webpage with:

* Several `<button>` elements
* Each button has class `btn`
* One button also has class `primary`
* CSS styles all `.btn`
* CSS highlights `.btn.primary`

---

## Solution

```html
<!DOCTYPE html>
<html>
<head>
  <title>Styling with Class</title>
  <style>
    .btn {
      padding: 10px 20px;
      border: none;
      background-color: lightgray;
      cursor: pointer;
      margin: 5px;
    }

    .btn.primary {
      background-color: blue;
      color: white;
    }
  </style>
</head>
<body>

<button class="btn">Home</button>
<button class="btn">About</button>
<button class="btn primary">Login</button>
<button class="btn">Contact</button>

</body>
</html>
```

---

# Bonus Exercise: Using data-* Attributes

## Task

Create a button with:

* `data-product-id="1001"`
* Use JavaScript to display the product ID in the console when clicked.

---

## Solution

```html
<!DOCTYPE html>
<html>
<head>
  <title>Data Attribute Example</title>
</head>
<body>

<button data-product-id="1001" id="productBtn">
  View Product
</button>

<script>
  const button = document.getElementById('productBtn');

  button.addEventListener('click', function() {
    console.log(this.dataset.productId);
  });
</script>

</body>
</html>
```

---

# Summary

Global attributes are powerful tools in HTML.

### `id`

* Unique identifier
* Best for single elements

### `class`

* Reusable styling
* Group elements
* Multiple classes allowed

### `data-*`

* Store custom information
* Access via `dataset`
* Clean and flexible

Understanding global attributes is essential for:

* Writing clean HTML
* Styling efficiently with CSS
* Manipulating elements with JavaScript
* Building interactive web applications

---

# Mini Project Assignment

## Title: Interactive Product Showcase Page

### Project Overview

In this mini project, you will build a simple **interactive product showcase webpage** using the following global attributes:

* `id`
* `class`
* `data-*`

You will apply:

* HTML structure
* CSS styling
* JavaScript DOM manipulation

---

# 🎯 Learning Objectives

By the end of this project, students should be able to:

* Use the `id` attribute to uniquely identify elements
* Use the `class` attribute to style groups of elements
* Use `data-*` attributes to store custom information
* Access and manipulate elements using JavaScript
* Connect HTML, CSS, and JavaScript in one webpage

---

# 📋 Project Requirements

You must create a webpage that displays **at least three products**.

Each product must include:

* A product name
* A short description
* A price
* A button labeled **"View Details"**

---

## 🔹 HTML Requirements

1. Each product must:

    * Have a container element (`div`)
    * Use a common class: `product`
    * Include `data-product-id`
    * Include `data-price`

2. The page must include:

    * A main header with `id="main-header"`
    * A section container with `id="product-list"`

3. Each button must:

    * Have the class `btn`
    * Use a `data-product-id` attribute

---

## 🔹 CSS Requirements

You must:

* Style all products using `.product`
* Style all buttons using `.btn`
* Add a special style for `.btn.primary`
* Style the header using `#main-header`

---

## 🔹 JavaScript Requirements

When a user clicks "View Details":

* The product ID should be logged to the console
* The product price should be displayed in an alert
* The clicked product should be highlighted (add a new class using JavaScript)

---

# ⭐ Bonus Challenge

* Add a button that shows the total price of all products
* Use JavaScript to calculate the total using `data-price`

---

# 📦 Sample Structure Guide (Students Build Their Own)

```html
<div class="product" data-product-id="101" data-price="50">
  <h3>Product Name</h3>
  <p>Description</p>
  <button class="btn primary" data-product-id="101">View Details</button>
</div>
```

---

# 🧪 Sample Solution (Teacher Reference)

---

## Complete Working Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>Product Showcase</title>
  <style>
    #main-header {
      background-color: #333;
      color: white;
      padding: 20px;
      text-align: center;
    }

    #product-list {
      display: flex;
      gap: 20px;
      margin: 20px;
    }

    .product {
      border: 1px solid #ccc;
      padding: 15px;
      width: 200px;
    }

    .product.highlight {
      border: 2px solid green;
      background-color: #f0fff0;
    }

    .btn {
      padding: 8px 12px;
      border: none;
      cursor: pointer;
      background-color: lightgray;
    }

    .btn.primary {
      background-color: blue;
      color: white;
    }
  </style>
</head>
<body>

<h1 id="main-header">Product Showcase</h1>

<div id="product-list">

  <div class="product" data-product-id="101" data-price="50">
    <h3>Phone</h3>
    <p>Smartphone with 128GB storage</p>
    <button class="btn primary" data-product-id="101">View Details</button>
  </div>

  <div class="product" data-product-id="102" data-price="80">
    <h3>Headphones</h3>
    <p>Noise-cancelling headphones</p>
    <button class="btn primary" data-product-id="102">View Details</button>
  </div>

  <div class="product" data-product-id="103" data-price="120">
    <h3>Tablet</h3>
    <p>10-inch display tablet</p>
    <button class="btn primary" data-product-id="103">View Details</button>
  </div>

</div>

<button id="totalBtn" class="btn">Show Total Price</button>

<script>
  const buttons = document.querySelectorAll('.btn.primary');

  buttons.forEach(button => {
    button.addEventListener('click', function() {

      const productId = this.dataset.productId;
      const productDiv = this.closest('.product');
      const price = productDiv.dataset.price;

      console.log("Product ID:", productId);
      alert("Price: $" + price);

      productDiv.classList.add('highlight');
    });
  });

  document.getElementById('totalBtn').addEventListener('click', function() {

    const products = document.querySelectorAll('.product');
    let total = 0;

    products.forEach(product => {
      total += Number(product.dataset.price);
    });

    alert("Total Price: $" + total);
  });
</script>

</body>
</html>
```

---

# 📝 Assessment Rubric (Optional)

| Criteria                       | Marks        |
| ------------------------------ | ------------ |
| Proper use of `id`             | 5            |
| Proper use of `class`          | 5            |
| Proper use of `data-*`         | 5            |
| CSS styling applied correctly  | 5            |
| JavaScript functionality works | 10           |
| Bonus challenge                | 5            |
| **Total**                      | **35 Marks** |

---

# 🏁 Submission Requirements

Students must submit:

* One `.html` file
* Proper indentation and formatting
* Working interactive functionality

---

