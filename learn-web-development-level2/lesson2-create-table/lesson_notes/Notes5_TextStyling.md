
---

# 10. Text Formatting in HTML

Text formatting in HTML allows developers to change the appearance and meaning of text to improve readability, accessibility, and user understanding. HTML provides both **visual formatting tags** and **semantic formatting tags**.

Semantic tags not only change how text looks, but also describe the **meaning** of the text, which is important for screen readers, search engines, and accessibility.

---

## 10.1 Getting Started with Formatting

Formatting text using tags like `<b>`, `<strong>`, `<i>`, `<em>`, `<u>`, and `<small>` allows web developers to improve readability and emphasize certain parts of text.

Each of these tags has specific usage:

| Tag        | Purpose                             |
| ---------- | ----------------------------------- |
| `<b>`      | Bold text (no semantic meaning)     |
| `<strong>` | Important text (semantic emphasis)  |
| `<i>`      | Italic text (stylistic)             |
| `<em>`     | Emphasized text (semantic emphasis) |
| `<u>`      | Underlined text (visual)            |
| `<small>`  | Smaller, less important text        |

Understanding and using these tags correctly helps to create clearer and more accessible web pages.

---

## Main Tags for Text Formatting

### Tag `<b>` and `<strong>`

* `<b>` makes text bold for visual styling only.
* `<strong>` makes text bold and indicates that the text is important.

#### Example

```html
<p>
  This text is <b>bold</b>, and this text is 
  <strong>very important and bold</strong>.
</p>
```

✅ Best Practice:
Use `<strong>` when the text is important, not just for styling.

---

### Tag `<i>` and `<em>`

* `<i>` makes text italic for stylistic purposes.
* `<em>` makes text italic and gives semantic emphasis (stress or importance).

#### Example

```html
<p>
  This text is <i>italic</i>, and this text is 
  <em>very important and italic</em>.
</p>
```

✅ Best Practice:
Use `<em>` when you want to emphasize meaning.

---

### Tag `<u>` and `<ins>`

* `<u>` underlines text for visual emphasis.
* `<ins>` underlines text and indicates inserted content (used in document changes).

#### Example

```html
<p>
  This text is <u>underlined</u>, and this text is 
  <ins>inserted and underlined</ins>.
</p>
```

---

### Tag `<s>` and `<del>`

* `<s>` shows text that is no longer relevant.
* `<del>` shows deleted text (used for tracking changes).

#### Example

```html
<p>
  This text is <s>struck through</s>, and this text is 
  <del>deleted and struck through</del>.
</p>
```

---

### Tag `<mark>`

The `<mark>` tag highlights text to show relevance or importance in the current context.

#### Example

```html
<p>
  This text is <mark>highlighted</mark> to draw attention.
</p>
```

---

### Tag `<small>`

The `<small>` tag displays text in a smaller size, often used for disclaimers or side notes.

#### Example

```html
<p>
  This is main text, and this is <small>small text</small>.
</p>
```

---

### Tag `<sub>` and `<sup>`

These tags are used for subscripts and superscripts.

* `<sub>` = subscript (lower)
* `<sup>` = superscript (upper)

#### Example

```html
<p>
  This is text with subscript H<sub>2</sub>O 
  and superscript x<sup>2</sup>.
</p>
```

---

## 10.2 Line Breaks and Horizontal Rules

### Tag `<br>` — Line Break

The `<br>` tag inserts a line break inside text without starting a new paragraph.

#### Example

```html
<p>
  This is text with a line break<br>
  inside a single paragraph.
</p>
```

---

### Tag `<hr>` — Horizontal Rule

The `<hr>` tag creates a horizontal line to separate content sections.

#### Example

```html
<p>Text above the line.</p>
<hr>
<p>Text below the line.</p>
```

---

# Summary: Visual vs Semantic Formatting

| Visual Tag | Semantic Alternative | Meaning          |
| ---------- | -------------------- | ---------------- |
| `<b>`      | `<strong>`           | Importance       |
| `<i>`      | `<em>`               | Emphasis         |
| `<u>`      | `<ins>`              | Inserted content |
| `<s>`      | `<del>`              | Deleted content  |

✅ Always prefer semantic tags for meaningful content.

---

# Exercises

## Exercise 1: Tags `<u>` and `<mark>`

### Task

Create a paragraph of text with:

* The word **"underlined"** using the `<u>` tag
* The word **"highlighted"** using the `<mark>` tag

### Requirements

* Use a `<p>` tag as the container
* The word **underlined** must be inside `<u>`
* The word **highlighted** must be inside `<mark>`
* Tags must be correctly nested

### Sample Solution

```html
<p>
  This word is <u>underlined</u> and this word is 
  <mark>highlighted</mark>.
</p>
```

---

## Exercise 2: Tags `<i>` and `<em>`

### Task

Create a paragraph where:

* The word **"italic"** uses the `<i>` tag
* The phrase **"very important italic"** uses the `<em>` tag

### Requirements

* Use a `<p>` tag
* The word *italic* must be in `<i>`
* The phrase *very important italic* must be in `<em>`

### Sample Solution

```html
<p>
  This word is <i>italic</i> and this phrase is 
  <em>very important italic</em>.
</p>
```

---

## Challenge Exercise (Optional)

Create a paragraph that includes:

* `<strong>` for an important word
* `<mark>` for highlighted text
* `<small>` for a disclaimer message

---

