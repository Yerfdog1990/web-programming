
---

# Getting to Know CSS Selectors

## 1. The `<style>` Tag

When an HTML element has many styles, writing them directly inside the `style` attribute becomes long and hard to read. To solve this, CSS can be moved into a special HTML tag called `<style>`.

The `<style>` tag is usually placed inside the `<head>` section of the HTML document.

### Example: Using the `<style>` Tag

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>CSS Example</title>
    <style>
        body {
            background-color: lightgray;
        }

        p {
            color: blue;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <p>This is an example of using styles inside the style tag.</p>
</body>
</html>
```

### Why Use the `<style>` Tag?

* Keeps HTML clean and readable
* Avoids long inline style attributes
* Applies styles to **many elements at once**
* Makes updates easier

In this example:

* The `body` style applies to the entire page
* The `p` style applies to **all paragraphs** in the document

This works because the styles inside `<style>` are defined using **selectors**.

---

## 2. What Are Selectors?

**Selectors** tell the browser **which HTML elements** should receive certain CSS styles.

Think of selectors as rules that say:
👉 *“Apply these styles to these elements.”*

There are different types of selectors, but we will focus on the most important ones for beginners.

---

## 3. Tag Selector

A **tag selector** applies styles to **all elements of a specific HTML tag**.

### Syntax

```css
tagname {
    /* styles */
}
```

The `tagname` can be any HTML element:

* `body`
* `p`
* `h1`
* `a`
* `img`

### Example

```css
p {
    color: blue;
    font-size: 16px;
}
```

This style applies to **every `<p>` element** on the page.

---

## 4. Class Selector

Sometimes you don’t want to style **all** elements of the same type. Instead, you want to style **only some of them**. This is where **classes** are used.

A **class** is a named group of styles that can be applied to any HTML element.

### Assigning a Class in HTML

```html
<p class="important">This is important text.</p>
<p>This is normal text.</p>
```

### Styling a Class in CSS

```css
p.important {
    font-weight: bold;
}
```

In this example:

* Only the paragraph with `class="important"` becomes bold
* Other paragraphs remain unchanged

---

## 5. Ways to Define Styles with Selectors

When writing CSS inside the `<style>` tag, you can define styles in three common ways:

### 1. Tag Only

```css
p {
    color: blue;
}
```

Applies to **all `<p>` elements**.

---

### 2. Tag + Class

```css
p.important {
    font-weight: bold;
}
```

Applies **only** to `<p>` elements with the class `important`.

---

### 3. Class Only

```css
.important {
    font-weight: bold;
}
```

Applies to **any element** that has the class `important`, regardless of its tag.

---

## 6. Why Selectors Matter

Selectors allow you to:

* Control large documents easily
* Apply styles consistently
* Avoid repeating the same CSS
* Separate structure (HTML) from design (CSS)

As you continue learning CSS, you will encounter more advanced selectors. For now, understanding **tag selectors** and **class selectors** is enough to read and write basic styled HTML pages.

---

## Summary

* The `<style>` tag stores CSS inside the HTML document
* Selectors define **which elements** get styled
* Tag selectors style all elements of a type
* Class selectors style specific elements
* Classes make styling flexible and reusable

---
