# Introduction to HTML

## 1. What is HTML?

HTML stands for **HyperText Markup Language**. It is the standard language used to create web pages. Every website you visit on the internet is made up of one or more HTML documents, often called **HTML pages**.

An **HTML document** is a plain text file that contains:

* **Text content** (what users read)
* **Tags** (instructions that tell the browser how to display the text)

Browsers such as Chrome, Firefox, or Edge read HTML documents and convert them into the visual pages we see on the screen.

---

## 2. HTML Tags

HTML uses **tags** to mark up text. Tags were created to add useful information that programs (like browsers) can understand.

A **tag** is:

* A keyword written in English
* Enclosed in angle brackets `< >`

### Example of a Tag

```
<img>
```

Tags can also include **additional information**, called **attributes**, which provide more details to the browser.

---

## 3. Example of an HTML Document

Suppose a browser displays the following content:

**Pallas's Cat**
Pallas's Cat is a carnivorous mammal from the cat family. Its appearance and size resemble a house cat, but it differs with a shorter, more robust body, shorter legs, round pupils, low ears, and a long, thick fur coat.

Here is the HTML document that produces that page:

```html
<h1>Pallas's Cat</h1>
<p>Pallas's Cat is a carnivorous mammal from the cat family. Its appearance
and size resemble a <a href="#">house cat</a>, but it differs with a shorter, more
robust body, shorter legs, round pupils, low ears, and a long, thick fur coat.</p>
<img src="manul.jpg">
```

### Explanation of Tags Used

* `<h1>` – creates a main heading
* `<p>` – defines a paragraph
* `<a>` – creates a hyperlink
* `<img>` – displays an image

The browser recognizes these tags and displays the content accordingly.

---

## 4. Types of HTML Tags

### 4.1 Paired Tags

Most HTML tags come in **pairs**:

* An **opening tag**
* A **closing tag**

#### Opening Tag

```
<tag>
```

Example:

```html
<h1>
```

#### Closing Tag

The closing tag looks similar but includes a slash `/` before the tag name.

```
</tag>
```

Example:

```html
</h1>
```

**Important rule:**

* The opening tag must always come before the closing tag.
* Reversing the order makes the HTML document invalid.

---

## 5. Tag Tree (Nesting of Tags)

HTML tags can be **nested**, meaning one tag can be placed inside another.

### Example of Nested Tags

```html
<html>
    Regular text
    <a href="http://codegym.cc/about">
        Link to something interesting
    </a>
    Some more text
</html>
```

Tags must be properly nested.

### Correct Nesting

```html
<h1>
    <h2></h2>
</h1>
```

### Incorrect Nesting

```html
<h1>
    <h2></h1>
</h2>
```

If a tag is opened inside another tag, it **must be closed inside that same tag**.

All tags together form a **tag tree**, where:

* `<html>` is usually the root (top-level tag)
* Tags inside it are called **child tags**

Browsers process HTML documents as a structured tree of tags.

---

## 6. Single and Empty Tags

### 6.1 Empty Tags (Self-Closing)

Some tags have no content. They can be written in two ways:

```html
<tag></tag>
```

Or in a shorter form:

```html
<tag />
```

This shorter version is called an **empty tag**.

---

### 6.2 Single Tags in HTML

HTML also defines **single tags** that do not require a closing tag.

Common examples:

* `<br>` – line break
* `<hr>` – horizontal line
* `<img>` – image

Example:

```html
<img src="manul.jpg">
```

There are about 14 such tags defined in the HTML standard. Many of them come from early versions of HTML and are now avoided when better alternatives exist.

---

## 7. Summary

* HTML documents are text files made of content and tags
* Tags tell the browser how to display content
* Most tags come in pairs (opening and closing)
* Tags must be properly nested to form a tag tree
* Some tags are single or self-closing

HTML is the foundation of web development and the first step toward building websites.
