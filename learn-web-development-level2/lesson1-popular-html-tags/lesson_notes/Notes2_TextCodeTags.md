
---

# Tags for Text and Code

## `<pre>` and `<code>` in HTML

As frontend developers, we often need to display **code snippets, logs, configuration files, or formatted text** on a web page. HTML provides two very important tags for this purpose:

* `<pre>` — for **preformatted text**
* `<code>` — for **marking text as code**

These tags help improve **readability**, **clarity**, and **professional presentation** of technical content on web pages.

---

## 1. The `<pre>` Tag

### What is the `<pre>` Tag?

The `<pre>` tag (short for **preformatted text**) is used to display text **exactly as it appears in the HTML source code**.

This means:

* Spaces are preserved
* Tabs are preserved
* Line breaks are preserved

👉 The browser does **not collapse whitespace** inside a `<pre>` tag.

This makes it perfect for:

* Code blocks
* ASCII diagrams
* Logs
* Structured text
* Command-line output

---

### Syntax

```html
<pre>
  text
</pre>
```

---

### Example: Using `<pre>`

#### HTML Code

```html
<pre>
  function sayHello() {
    console.log("Hello, world!");
  }
</pre>
```

---

### Result on the Web Page (How It Looks)

```
  function sayHello() {
    console.log("Hello, world!");
  }
```

✔ The indentation

✔ The line breaks

✔ The spacing

All appear **exactly as written in the HTML file**.

---

### Features of the `<pre>` Tag

* Preserves **all spaces, tabs, and line breaks**
* Displays text in a **monospace font** by default
* Ideal for displaying **code and structured text**
* Often used together with the `<code>` tag

---

## 2. The `<code>` Tag

### What is the `<code>` Tag?

The `<code>` tag is used to represent **short pieces of code** or **machine-readable text** inside normal content.

Unlike `<pre>`, the `<code>` tag:

* Does **not** preserve line breaks
* Does **not** preserve indentation

It is mainly used for **inline code**, such as:

* Function names
* Variables
* Keywords
* Commands

---

### Syntax

```html
<code>code</code>
```

---

### Example: Inline `<code>` Usage

#### HTML Code

```html
<p>
  To log a message to the console, use the
  <code>console.log()</code> function.
</p>
```

---

### Result on the Web Page

To log a message to the console, use the `console.log()` function.

✔ The code text appears in a **monospace font**
✔ It visually stands out from normal text

---

### Features of the `<code>` Tag

* Displays text in a **monospace font** (e.g., Courier, Consolas)
* Used for **inline code snippets**
* Does **not preserve formatting**
* Commonly used inside:

    * `<p>`
    * `<li>`
    * `<pre>`

---

## 3. Using `<pre>` and `<code>` Together

### Why Use Them Together?

When displaying **large blocks of code**, we usually want:

* Preserved formatting (`<pre>`)
* Clear identification of code (`<code>`)

The best practice is to **nest `<code>` inside `<pre>`**.

---

### Example: `<pre>` + `<code>`

#### HTML Code

```html
<pre>
  <code>
    function helloWorld() {
      console.log('Hello, world!');
    }
  </code>
</pre>
```

---

### Result on the Web Page

```
    function helloWorld() {
      console.log('Hello, world!');
    }
```

✔ Indentation is preserved

✔ Line breaks are preserved

✔ Code is clearly identifiable

---

## 4. Syntax Highlighting (Advanced Use)

HTML alone does **not** provide syntax highlighting.
To add colors and highlighting, we use **third-party libraries**.

Popular options:

* Highlight.js
* Prism.js

---

### Example Using Highlight.js

#### HTML Code

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Code Highlighting</title>

    <link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/default.min.css">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/highlight.min.js"></script>
    <script>hljs.initHighlightingOnLoad();</script>
  </head>

  <body>
    <pre>
      <code class="javascript">
        function helloWorld() {
          console.log('Hello, world!');
        }
      </code>
    </pre>
  </body>
</html>
```

---

### Result on the Web Page

* Keywords like `function` appear in **color**
* Strings like `'Hello, world!'` are highlighted
* Code looks professional and readable

✔ Automatically highlighted

✔ Based on JavaScript syntax

---

## 5. Summary: `<pre>` vs `<code>`

| Feature               | `<pre>`  | `<code>`              |
| --------------------- | -------- |-----------------------|
| Preserves spaces      | ✅ Yes   | ❌ No                 |
| Preserves line breaks | ✅ Yes   | ❌ No                 |
| Monospace font        | ✅ Yes   | ✅ Yes                |
| Inline usage          | ❌ No    | ✅ Yes                |
| Block code display    | ✅ Yes   | ⚠️ Only with `<pre>`  |

---

# Exercises 🧠💻

---

## Exercise 1: Using the `<pre>` Tag

### Task

Create a block of text that preserves **spaces, tabs, and line breaks** using the `<pre>` tag.

### Requirements

* Use a `<pre>` tag
* Include **three lines** of text
* Each line must have **different indentation**
* Formatting must appear **exactly as written**

---

### Sample Solution

```html
<pre>
First line
    Second line (indented)
        Third line (more indented)
</pre>
```

---

### Result on the Web Page

```
First line
    Second line (indented)
        Third line (more indented)
```

✔ Indentation is preserved
✔ Line breaks are preserved

---

## Exercise 2: Using `<pre>` and `<code>` Together

### Task

Create a formatted JavaScript code block using `<pre>` and `<code>`.

### Requirements

* Use `<pre>` to preserve spacing
* Nest `<code>` inside `<pre>`
* Include a JavaScript function

---

### Sample Solution

```html
<pre>
  <code>
    function addNumbers(a, b) {
      return a + b;
    }
  </code>
</pre>
```

---

### Result on the Web Page

```
    function addNumbers(a, b) {
      return a + b;
    }
```

✔ Code formatting preserved

✔ Clear and readable

---

## Final Takeaway

The `<pre>` and `<code>` tags are **essential tools** for any frontend developer:

* Use `<code>` for **inline code**
* Use `<pre>` for **formatted blocks**
* Combine both for **clean, professional code display**
* Add syntax highlighting libraries for **production-level presentation**

These tags are small, but they make a **huge difference** in how technical content is communicated on the web 🚀

---