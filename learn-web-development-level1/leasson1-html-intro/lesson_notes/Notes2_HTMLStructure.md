# HTML Document Structure

## 1. Getting to Know the HTML Document

Every HTML document follows a **basic structure** that helps browsers understand how to read and display a web page. This structure is made up of **three nested tags**:

* `<html>` – the root element
* `<head>` – service (auxiliary) information
* `<body>` – visible page content

### Basic HTML Document Structure

```html
<!DOCTYPE html>
<html>
    <head>
        Service tags
    </head>
    <body>
        Main document
    </body>
</html>
```

### Important Notes

* Everything a user sees on a web page is inside the **`<body>`** tag.
* The **`<head>`** tag contains information for the browser, not for display.
* This structure is a **standard**, though browsers may still display pages with mistakes.

---

## 2. DOCTYPE Declaration

The first line of an HTML document is usually the **DOCTYPE declaration**:

```html
<!DOCTYPE html>
```

### What is DOCTYPE?

* It tells the browser which version of HTML is being used.
* `<!DOCTYPE html>` specifies **HTML5**, the latest standard.
* It helps the browser render the page correctly and handle errors better.

Although browsers can sometimes display pages without it, using DOCTYPE is **best practice**.

---

## 3. Example of a Complete HTML Document

Here is a simple but complete HTML document:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        <h1>Hello, world!</h1>
        <p>This is my first web page.</p>
    </body>
</html>
```

---

## 4. Main Parts of an HTML Document

### 4.1 `<html>` Tag

* Marks the beginning and end of the HTML document.
* All other tags must be inside this tag.

---

### 4.2 `<head>` Tag

* Contains **metadata** about the document.
* Not displayed directly on the page.
* Used by browsers and search engines.

#### `<title>` Tag

* Sets the title of the web page.
* Appears on the browser tab.
* Important for usability and SEO.

---

### 4.3 `<body>` Tag

* Contains all **visible content** of the web page.
* Includes text, images, links, headings, tables, and more.

---

### 4.4 Common Content Tags

#### Heading Tag

```html
<h1>Hello, world!</h1>
```

* `<h1>` is a first-level heading.
* Used for the most important title on the page.

#### Paragraph Tag

```html
<p>This is my first web page.</p>
```

* `<p>` represents a paragraph of text.
* Helps organize content into readable blocks.

---

## 5. Self-Closing (Single) Tags

Some HTML tags do not wrap content and **do not need a closing tag**.

### Common Self-Closing Tags

* `<br>` – line break
* `<hr>` – horizontal line
* `<img>` – image

### Examples

```html
<br>
<hr>
<img src="image.jpg">
```

### Rules for Self-Closing Tags

* They must **not** have a closing tag.
* Correct: `<br>`
* Incorrect: `<br></br>`

---

## 6. Exercise 1: Create a Basic HTML Document

### Task

Create an HTML document using the main structural tags.

### Requirements

* Start with `<!DOCTYPE html>`
* Include the `<html>` tag as the root element
* Inside `<html>`, include:

    * `<head>` (metadata)
    * `<body>` (page content)
* The `<head>` tag must come **before** the `<body>` tag

---

## 7. Exercise 2: Using Self-Closing Tags

### Task

Create an HTML document that includes self-closing tags.

### Requirements

* Use `<br>` to create a line break
* Use `<hr>` to create a horizontal line
* Use `<img>` to display an image
* Do not use closing tags for `<br>`, `<hr>`, or `<img>`
* The document must include:

    * `<!DOCTYPE html>`
    * `<html>`
    * `<head>`
    * `<title>`
    * `<body>`

---

## 8. Summary

* Every HTML document has a standard structure
* `<!DOCTYPE html>` declares HTML5
* `<html>` is the root element
* `<head>` stores service information
* `<body>` contains all visible content
* Self-closing tags do not have closing tags

Understanding HTML document structure is the foundation of all web development.
