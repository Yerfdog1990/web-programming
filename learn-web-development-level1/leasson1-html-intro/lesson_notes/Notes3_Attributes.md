# HTML Attributes

## 1. What Are Attributes?

HTML **attributes** provide extra information about an element. They are written **inside the opening tag** and help define how the element behaves or appears.

**Important rules:**

* Attributes are written only in the **opening tag**
* Closing tags **cannot** contain attributes
* Attributes are written as **name="value"** pairs

### General Syntax

```html
<tag name1="value1" name2="value2">
```

There is no fixed limit to the number of attributes a tag can have.

---

## 2. Example: Attributes in a Link

The `<a>` tag (anchor tag) is commonly used with attributes.

```html
<a href="http://codegym.cc/about" target="_blank">
    A link to something interesting
</a>
```

### Explanation

* `href` specifies the link destination
* `target="_blank"` tells the browser to open the link in a new tab

---

## 3. Attribute Values and Special Characters

Sometimes attribute values need to include special characters such as:

* `<` or `>`
* Quotes (`"` or `'`)
* Ampersands (`&`)

These characters **cannot be used directly** in HTML attribute values. Instead, HTML uses **escape sequences**.

### Common HTML Escape Characters

| Character name | Character | HTML escape |
| -------------- | --------- | ----------- |
| Double quote   | "         | `&quot;`    |
| Ampersand      | &         | `&amp;`     |
| Less than      | <         | `&lt;`      |
| Greater than   | >         | `&gt;`      |
| Space          | (space)   | `&nbsp;`    |
| Single quote   | '         | `&#39;`     |

This process is called **character escaping**. It ensures browsers interpret the content correctly.

---

## 4. Images and Attributes

The `<img>` tag is used to display images on a web page. It is a **self-closing tag**, meaning it does not have a closing tag.

### Important `<img>` Attributes

* `src` – specifies the path to the image file
* `alt` – provides alternative text describing the image

### Example

```html
<img src="image.jpg" alt="Image description">
```

### Why `alt` Is Important

* Helps search engines understand the image
* Displays text if the image cannot be loaded
* Improves accessibility for screen readers

---

## 5. Links and Attributes

The `<a>` tag is used to create hyperlinks.

### Common `<a>` Attributes

* `href` – the URL or resource the link points to
* `target` – where the link opens

### Example

```html
<a href="https://www.example.com">Go to Example.com</a>
```

---

## 6. Common Attribute Rules

* Attribute names are **not case-sensitive**, but lowercase is recommended
* Attribute values **must be enclosed in double quotes**
* Attributes are separated by spaces

### Correct

```html
<img src="photo.jpg" alt="My photo">
```

### Incorrect

```html
<img src=photo.jpg alt=My photo>
```

---

## 7. Exercise: Fix Invalid HTML Tags

### Task

Correct all invalid HTML tags in the document below. **Do not delete any tags.** Your goal is to make the document fully valid.

### HTML Document to Fix

```html
<!DOCTYPE html>
<html lang="ru">
<header>
    <meta charset="UTF-8">
    <title>Fixed HTML Document</title>
</header>
<body>
    <div>
        <h1>Title<h1>
        <p>This is a paragraph of text.
        <img src=`image.jpg` alt=Image description>
        <a href="https://example.com">Link to example website</a>
    </div
</body>
</html>
```

### Requirements

* Every opening tag must have a matching closing tag
* All paired tags must contain **exactly one opening and one closing tag**
* All attribute values must be enclosed in **double quotes**
* The document must include and correctly nest:

    * `<html>`
    * `<head>`
    * `<body>`

---

## 8. Summary

* Attributes provide extra information about HTML elements
* They appear only in opening tags
* Attributes use the `name="value"` format
* Special characters require HTML escaping
* Images and links rely heavily on attributes

Understanding attributes allows you to control how HTML elements behave and interact on a web page.
