
---

# Lesson Notes: Template Tags in HTML

## 5.1 The `<template>` Tag

The `<template>` tag is an HTML element used to **store reusable HTML fragments** that are **not rendered when the page loads**. These fragments can later be **cloned and inserted into the DOM using JavaScript**.

The `<template>` element is especially useful when creating **dynamic and repeatable content**, such as:

* List items
* Product cards
* Notifications
* UI components generated from data

---

### Key Characteristics of `<template>`

* Content inside `<template>` **does not appear on the page**
* Template content is still available in the **DOM**
* Content must be inserted using **JavaScript**
* Helps separate **structure (HTML)** from **logic (JavaScript)**

---

### Basic Syntax

```html
<template>
  <!-- Template content -->
</template>
```

---

## Main Features of the `<template>` Tag

### 1. Hidden Content

Content inside `<template>` is not displayed or rendered when the page loads.

### 2. JavaScript Integration

Template content can be cloned using:

* `template.content.cloneNode(true)`
* `document.importNode(template, true)`

### 3. Deferred Rendering

Content is only added to the page when needed, improving **performance** and **user experience**.

---

## 5.2 Example 1: Adding Items to a List Using `<template>`

### Description

Each time a button is clicked, a new list item is added using a predefined template.

---

### HTML

```html
<button id="addButton">Add Item</button>
<ul id="itemList"></ul>

<template id="itemTemplate">
  <li class="item">This is a new item</li>
</template>
```

---

### JavaScript

```html
<script>
  const addButton = document.getElementById('addButton');
  const itemList = document.getElementById('itemList');
  const itemTemplate = document.getElementById('itemTemplate');

  addButton.addEventListener('click', () => {
    const newItem = itemTemplate.content.cloneNode(true);
    itemList.appendChild(newItem);
  });
</script>
```

---

### Explanation

* `<template>` stores the list item structure
* `content` accesses the template’s document fragment
* `cloneNode(true)` creates a deep copy
* The cloned content is appended to the list

---

## 5.3 Example 2: Generating Product Cards with `<template>`

### HTML

```html
<h1>Product List</h1>
<div id="productList"></div>

<template id="productTemplate">
  <div class="item">
    <h2 class="title"></h2>
    <p class="description"></p>
    <span class="price"></span>
  </div>
</template>
```

---

### JavaScript

```html
<script>
document.addEventListener('DOMContentLoaded', () => {
  const products = [
    { title: 'Product 1', description: 'Description of Product 1', price: '$100' },
    { title: 'Product 2', description: 'Description of Product 2', price: '$200' },
    { title: 'Product 3', description: 'Description of Product 3', price: '$300' }
  ];

  const productList = document.getElementById('productList');
  const template = document.getElementById('productTemplate').content;

  products.forEach(product => {
    const clone = document.importNode(template, true);
    clone.querySelector('.title').textContent = product.title;
    clone.querySelector('.description').textContent = product.description;
    clone.querySelector('.price').textContent = product.price;
    productList.appendChild(clone);
  });
});
</script>
```

---

### Explanation

* Product data is stored in an array
* Template is cloned for each product
* `querySelector()` updates text dynamically
* Cards are injected into the page

---

## 5.4 Advantages of the `<template>` Tag

### Performance Improvement

* Template content does not affect initial rendering
* Reduces DOM manipulation overhead

### Simplified Dynamic Content

* Avoids building HTML with strings
* Cleaner and safer than `innerHTML`

### Readability and Maintenance

* HTML structure is separated from JavaScript logic
* Easier debugging and code reuse

---

## 5.5 Conditional Content Example Using `<template>`

### HTML

```html
<h1>Operation Results</h1>
<div id="messageContainer"></div>

<template id="messageTemplate">
  <div class="message">
    <p class="content"></p>
  </div>
</template>
```

---

### JavaScript

```html
<script>
document.addEventListener('DOMContentLoaded', () => {
  const messageContainer = document.getElementById('messageContainer');
  const template = document.getElementById('messageTemplate').content;

  function showMessage(type, text) {
    const clone = document.importNode(template, true);
    const messageDiv = clone.querySelector('.message');
    messageDiv.classList.add(type);
    messageDiv.querySelector('.content').textContent = text;
    messageContainer.appendChild(clone);
  }

  showMessage('success', 'Operation completed successfully!');
  showMessage('error', 'An error occurred during the operation.');
});
</script>
```

---

## Practical Exercise 1: List with `<template>`

### Task

Create a page where clicking a button adds a new item to a list using a template.

---

### Sample Solution

```html
<button id="addItem">Add Item</button>
<ul id="list"></ul>

<template id="listTemplate">
  <li>New List Item</li>
</template>

<script>
  document.getElementById('addItem').addEventListener('click', () => {
    const template = document.getElementById('listTemplate');
    const clone = template.content.cloneNode(true);
    document.getElementById('list').appendChild(clone);
  });
</script>
```

---

## Practical Exercise 2: Product Cards with `<template>`

### Task

Generate product cards dynamically from an array using `<template>`.

---

### Sample Solution

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Product Cards</title>
</head>
<body>
<div id="product-list"></div>

<template id="product-template">
    <div class="product-card">
        <img class="product-image" src="" alt="Product Image">
        <h2 class="product-title"></h2>
        <p class="product-price"></p>
    </div>
</template>

<script>
    const products = [
        {
            title: "Product 1",
            price: "$10",
            image: "https://via.placeholder.com/150"
        },
        {
            title: "Product 2",
            price: "$20",
            image: "https://via.placeholder.com/150"
        },
        {
            title: "Product 3",
            price: "$30",
            image: "https://via.placeholder.com/150"
        }
    ];

    const template = document.getElementById('product-template').content;
    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const clone = document.importNode(template, true);
        clone.querySelector('.product-image').src = product.image;
        clone.querySelector('.product-title').textContent = product.title;
        clone.querySelector('.product-price').textContent = product.price;
        productList.appendChild(clone);
    });
</script>
</body>
</html>
```

---

## Exam Tip

> Use `<template>` when content must be **reused**, **hidden initially**, and **generated dynamically** using JavaScript.

---

## Comparison Table: `<template>` vs `<slot>`

| Feature                 | `<template>`                                        | `<slot>`                                         |
| ----------------------- | --------------------------------------------------- |--------------------------------------------------|
| Purpose                 | Stores **hidden, reusable HTML fragments**          | Defines **insertion points for external content** |
| Rendering on load       | ❌ Not rendered                                     | ✅ Rendered as part of a component               |
| JavaScript required     | ✅ Yes (to clone and insert)                        | ❌ No (content is projected automatically)       |
| Typical usage           | Dynamic content generation (lists, cards, messages) | Web Components content distribution              |
| Content source          | Defined inside the HTML document                    | Provided by the component’s consumer             |
| Reusability             | Reused by cloning via JavaScript                    | Reused by projecting different content           |
| DOM interaction         | Uses `template.content.cloneNode()`                 | Uses `<slot>` name matching                      |
| Performance impact      | Improves performance by deferred rendering          | Lightweight, no cloning needed                   |
| Browser support context | Standard HTML                                       | Mostly used inside **Custom Elements**           |
| Exam keyword            | **Dynamic content generation**                      | **Content projection**                           |

---

### One-Line Exam Distinction

* **`<template>`** is for *creating content later with JavaScript*
* **`<slot>`** is for *placing external content inside a component*

---

## Simple `<slot>` Example (for contrast)

```html
<custom-card>
  <h2 slot="title">Product Name</h2>
  <p slot="description">Product description here</p>
</custom-card>
```

Here, `<slot>` receives content — it does **not generate it**.

---

# Real-World Project: Product Catalog Using `<template>`

## Project Scenario

You are building an **online store product catalog** where product cards are generated dynamically from data.

---

## Requirements

* Use `<template>` to define a reusable product card
* Generate multiple cards using JavaScript
* Display product name, price, and description

---

## Step 1: HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Product Catalog</title>
</head>
<body>

<h1>Online Store</h1>
<div id="catalog"></div>

<template id="productTemplate">
  <div class="product-card">
    <h2 class="name"></h2>
    <p class="description"></p>
    <strong class="price"></strong>
  </div>
</template>

<script src="script.js"></script>
</body>
</html>
```

---

## Step 2: JavaScript Logic

```javascript
const products = [
  { name: 'Smartphone', description: 'Latest model smartphone', price: '$699' },
  { name: 'Laptop', description: 'High performance laptop', price: '$1299' },
  { name: 'Headphones', description: 'Noise cancelling headphones', price: '$199' }
];

const catalog = document.getElementById('catalog');
const template = document.getElementById('productTemplate').content;

products.forEach(product => {
  const clone = document.importNode(template, true);
  clone.querySelector('.name').textContent = product.name;
  clone.querySelector('.description').textContent = product.description;
  clone.querySelector('.price').textContent = product.price;
  catalog.appendChild(clone);
});
```

---

## How This Uses `<template>` Correctly

* Product card HTML is **not visible on page load**
* Cards are generated **only when JavaScript runs**
* HTML structure is reusable and clean
* No `innerHTML` string building (safer and cleaner)

---

## Exam-Style Question

**Question:**
Explain why the `<template>` tag is suitable for generating multiple product cards dynamically.

**Marking Scheme (6 marks):**

* Content inside `<template>` is not rendered initially (1)
* Template content is reusable (1)
* JavaScript clones the template (1)
* Avoids duplication of HTML (1)
* Improves performance (1)
* Separates structure from logic (1)

---

## When to Use What (Exam Summary)

* Use **`<template>`** when:

    * Content is generated dynamically
    * JavaScript controls rendering
    * Repeated structures are needed

* Use **`<slot>`** when:

    * Building reusable Web Components
    * Content comes from outside the component
    * No dynamic generation is required

---

# Mini Project: **Template + Dialog + Form**

## Project Scenario

You are building a **Product Registration System**.

* Clicking a button opens a **dialog**
* The dialog contains a **form**
* When the form is submitted, a **product card is generated using `<template>`**
* The dialog then closes

---

## What You’ll Learn

* Using `<template>` for reusable content
* Using `<dialog>` for modal pop-ups
* Handling forms with JavaScript
* Dynamically inserting content into the page

---

## Final Output

* Button: **Add Product**
* Dialog pops up with a form
* User enters product name and price
* A product card appears on the page

---

## 1️⃣ HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Template + Dialog + Form</title>
</head>
<body>

<h1>Product Manager</h1>

<button id="openDialog">Add Product</button>

<div id="productList"></div>

<!-- Product Card Template -->
<template id="productTemplate">
  <div class="product-card">
    <h3 class="product-name"></h3>
    <p class="product-price"></p>
  </div>
</template>

<!-- Dialog with Form -->
<dialog id="productDialog">
  <h2>Add New Product</h2>

  <form id="productForm">
    <label>
      Product Name:
      <input type="text" id="name" required>
    </label>
    <br><br>

    <label>
      Price:
      <input type="number" id="price" required>
    </label>
    <br><br>

    <button type="submit">Save</button>
    <button type="button" id="closeDialog">Cancel</button>
  </form>
</dialog>

<script src="script.js"></script>
</body>
</html>
```

---

## 2️⃣ JavaScript Logic

```javascript
const openDialogBtn = document.getElementById('openDialog');
const closeDialogBtn = document.getElementById('closeDialog');
const dialog = document.getElementById('productDialog');
const form = document.getElementById('productForm');
const productList = document.getElementById('productList');
const template = document.getElementById('productTemplate').content;

// Open dialog
openDialogBtn.addEventListener('click', () => {
  dialog.showModal();
});

// Close dialog
closeDialogBtn.addEventListener('click', () => {
  dialog.close();
});

// Handle form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;

  const clone = document.importNode(template, true);
  clone.querySelector('.product-name').textContent = name;
  clone.querySelector('.product-price').textContent = `Price: $${price}`;

  productList.appendChild(clone);

  form.reset();
  dialog.close();
});
```

---

## 3️⃣ How Everything Works Together

### `<template>`

* Stores the **product card structure**
* Not displayed on page load
* Cloned when form is submitted

### `<dialog>`

* Creates a **modal popup**
* Opened using `showModal()`
* Closed using `close()`

### `<form>`

* Collects user input
* Prevents page reload with `event.preventDefault()`
* Sends data to JavaScript

---

## 4️⃣ Flow Diagram (Textual Description)

1. User clicks **Add Product**
2. Dialog opens
3. User fills in form
4. JavaScript reads form data
5. Template is cloned
6. Product card is added to page
7. Dialog closes

---

## 5️⃣ Exam-Style Question

**Question:**
Explain how `<template>`, `<dialog>`, and `<form>` work together in this project.

**Marking Scheme (8 marks):**

* `<template>` stores reusable hidden HTML (2)
* `<dialog>` creates a modal interface (2)
* `<form>` collects user input (1)
* JavaScript handles submission without reload (1)
* Template is cloned dynamically (1)
* Dialog is closed after submission (1)

---

## 6️⃣ Why This Is a Real-World Pattern

This pattern is used in:

* Admin dashboards
* Shopping carts
* User profile editors
* Content management systems

---


