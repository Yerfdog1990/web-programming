
---

# **Interactive Elements**

## 6.1 The `<details>` Tag

HTML5 introduced the `<details>` element to create **interactive, collapsible content blocks**. This allows users to show or hide information without using JavaScript, improving usability and saving screen space.

The `<details>` element acts as a container that can be **expanded or collapsed**. Any HTML content can be placed inside it.

---

### Syntax

```html
<details>
  <summary>Title</summary>
  <!-- Hidden content -->
</details>
```

---

### The `open` Attribute

When the `open` attribute is present, the `<details>` block is **expanded by default** when the page loads.

---

### Example: `<details>` with `open`

```html
<details open>
  <summary>Main Information</summary>
  <p>This info is visible by default because the open attribute is set.</p>
</details>
```

**Explanation**

* `<details>`: container for collapsible content
* `<summary>`: clickable title used to toggle visibility
* `open`: makes content visible by default

---

### Key Features of `<details>`

* Can be expanded or collapsed by the user
* Can contain text, images, lists, or other HTML elements
* Works without JavaScript
* Improves accessibility and document structure

---

## 6.2 The `<summary>` Tag

The `<summary>` tag is used **inside `<details>`** and defines the **visible heading** of the collapsible block.

* Always visible
* Clickable
* Controls opening and closing of the `<details>` content

---

### Syntax

```html
<details>
  <summary>Title</summary>
  <!-- Hidden content -->
</details>
```

---

### Example: Collapsible Content

```html
<details>
  <summary>More Details</summary>
  <p>This is hidden content that becomes visible when the block is expanded.</p>
</details>
```

---

### Advantages of `<details>` and `<summary>`

* **Improved User Experience**: users choose what to view
* **Space Saving**: hides large blocks of information
* **Semantic Markup**: improves accessibility and SEO

---

## 6.3 Interaction with JavaScript

Although `<details>` works on its own, JavaScript can be used to **control multiple blocks programmatically**, such as expanding or collapsing all sections at once.

---

### Example: Controlling `<details>` with JavaScript

#### HTML

```html
<details>
  <summary>More Details</summary>
  <p>This is hidden content that becomes visible when the block is expanded.</p>
</details>

<details open>
  <summary>Main Information</summary>
  <p>This info is visible by default because the open attribute is set.</p>
</details>

<button id="toggleDetails">Collapse/Expand</button>
```

#### JavaScript

```javascript
document.getElementById('toggleDetails').addEventListener('click', () => {
  document.querySelectorAll('details').forEach(detail => {
    detail.open = !detail.open;
  });
});
```

---

### Explanation

* Button triggers a click event
* JavaScript selects all `<details>` elements
* The `open` attribute is toggled
* All blocks expand or collapse together

---

## Exercise 1: Expandable Block

### Task

Create a webpage with **one expandable block** that is collapsed when the page loads.

---

### Requirements

* Use a `<details>` element
* Include a `<summary>` for the header
* Hidden content must be inside `<details>`
* The block must be collapsed by default
* Clicking the summary toggles visibility

---

### Sample Answer

```html
<details>
  <summary>Course Information</summary>
  <p>This course covers HTML5 semantic and interactive elements.</p>
</details>
```

---

## Exercise 2: Interactive Blocks

### Task

Create a webpage with **multiple collapsible blocks**, where **one block is open by default**.

---

### Requirements

* Use several `<details>` elements
* Each must contain a `<summary>`
* At least one block must use the `open` attribute
* Each block must work independently

---

### Sample Answer

```html
<details open>
  <summary>HTML</summary>
  <p>HTML defines the structure of web pages.</p>
</details>

<details>
  <summary>CSS</summary>
  <p>CSS styles the appearance of web pages.</p>
</details>

<details>
  <summary>JavaScript</summary>
  <p>JavaScript adds interactivity to web pages.</p>
</details>
```

---

## Key Exam Takeaways

* `<details>` creates collapsible content
* `<summary>` is mandatory for interaction
* `open` controls default visibility
* JavaScript can programmatically control `<details>`
* Each `<details>` block can function independently

---

## Exam Comparison Table: `<details>` vs `<dialog>`

| Feature                 | `<details>`                                 | `<dialog>`                                                |
| ----------------------- | ------------------------------------------- |-----------------------------------------------------------|
| Purpose                 | Show/hide **collapsible content**           | Display **popup dialogs or modal windows**                |
| User interaction        | Clicks `<summary>` to expand/collapse       | Opened and closed programmatically or via attributes      |
| Visibility on load      | Collapsed by default (unless `open` is set) | Hidden by default (unless `open` is set)                  |
| Blocks page interaction | ❌ No                                       | ✅ Yes (when modal)                                       |
| JavaScript required     | ❌ No (basic usage)                         | ✅ Yes (for `show()`, `showModal()`, `close()`)           |
| Semantic meaning        | Toggle additional information               | Temporary user interaction (forms, alerts, confirmations) |
| Typical use cases       | FAQs, expandable sections, help text        | Forms, confirmations, alerts, settings                    |
| Accessibility           | Built-in keyboard and screen reader support | Built-in modal focus handling                             |
| Exam keyword            | **Collapsible content**                     | **Dialog / modal interaction**                            |

---

### One-Line Exam Distinction

* **`<details>`** → reveals *extra information inline*
* **`<dialog>`** → interrupts the flow to *get user attention*

---

# Integrated Project

## FAQ + Feedback System Using `<details>`, `<template>`, and `<dialog>`

### Project Scenario

You are building a **Help & Feedback section** for a website:

* FAQs are collapsible using `<details>`
* Feedback form appears in a dialog
* Submitted feedback messages are generated using `<template>`

---

## Features Used

✔ `<details>` for expandable FAQs

✔ `<dialog>` for feedback form

✔ `<template>` for dynamically displaying submitted messages

---

## Step 1: HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Help & Feedback</title>
</head>
<body>

<h1>Help Center</h1>

<!-- FAQ Section -->
<details>
  <summary>What is this website about?</summary>
  <p>This website provides learning resources and tutorials.</p>
</details>

<details>
  <summary>How can I contact support?</summary>
  <p>You can contact support using the feedback form.</p>
</details>

<!-- Open Dialog Button -->
<button id="openDialog">Give Feedback</button>

<!-- Feedback Dialog -->
<dialog id="feedbackDialog">
  <h2>Feedback Form</h2>
  <form method="dialog">
    <label>
      Your Message:
      <input type="text" id="feedbackInput">
    </label>
    <br><br>
    <button id="submitFeedback">Submit</button>
    <button>Close</button>
  </form>
</dialog>

<!-- Display Submitted Feedback -->
<h2>User Feedback</h2>
<div id="feedbackList"></div>

<!-- Feedback Template -->
<template id="feedbackTemplate">
  <p class="feedback-item"></p>
</template>

<script src="script.js"></script>
</body>
</html>
```

---

## Step 2: JavaScript Logic

```javascript
const dialog = document.getElementById('feedbackDialog');
const openDialogBtn = document.getElementById('openDialog');
const submitBtn = document.getElementById('submitFeedback');
const input = document.getElementById('feedbackInput');
const list = document.getElementById('feedbackList');
const template = document.getElementById('feedbackTemplate').content;

openDialogBtn.addEventListener('click', () => {
  dialog.showModal();
});

submitBtn.addEventListener('click', () => {
  if (input.value.trim() !== '') {
    const clone = document.importNode(template, true);
    clone.querySelector('.feedback-item').textContent = input.value;
    list.appendChild(clone);
    input.value = '';
  }
});
```

---

## How the Elements Work Together

### `<details>`

* Displays FAQs
* Allows users to expand content without JavaScript
* Saves page space

### `<dialog>`

* Opens a modal feedback form
* Focuses user attention
* Uses `showModal()` and `close()`

### `<template>`

* Stores feedback message structure
* Prevents HTML duplication
* Allows dynamic insertion after form submission

---

## Exam-Style Question

**Question:**
Explain how `<details>`, `<dialog>`, and `<template>` are used together in an interactive web page.

### Marking Scheme (8 marks)

* `<details>` used for collapsible information (2)
* `<summary>` controls visibility (1)
* `<dialog>` used for modal user interaction (2)
* `showModal()` opens dialog (1)
* `<template>` stores reusable hidden HTML (1)
* JavaScript clones and inserts template content (1)

---

## Exam Tip Box

> Use `<details>` for **optional information**,
> `<dialog>` for **user actions**,
> and `<template>` for **repeated dynamic content**.

---

