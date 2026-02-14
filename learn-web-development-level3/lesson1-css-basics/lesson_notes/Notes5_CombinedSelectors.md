# 📘 Combined Selectors in CSS

## 5.1 Types of Combined Selectors

Combined selectors allow you to target elements **based on their position and relationship** in the DOM (Document Object Model) tree.

They give you **more precise control** by styling elements according to their context.

### 🔹 Main Types of Combined Selectors

1. Descendant Selector
2. Child Selector
3. Adjacent Sibling Selector
4. General Sibling Selector

---

# 5.2 Descendant Selector

## 🔎 What It Does

The **descendant selector** targets all elements that are inside a specified element — at **any level of nesting**.

This includes:

* Children
* Grandchildren
* Great-grandchildren

---

## ✅ Syntax

```css
ancestor descendant {
  property: value;
}
```

---

## ✅ Example

### CSS

```css
/* Selects all <p> elements inside a <div> */
div p {
  color: blue;
}
```

### HTML

```html
<div>
  <p>This paragraph will be blue.</p>
  <div>
    <p>This paragraph will also be blue because it's inside a div.</p>
  </div>
</div>

<p>This paragraph will NOT be blue.</p>
```

✔ All `<p>` elements inside `<div>`

✘ Paragraph outside `<div>` not selected

---

# 5.3 Child Selector

## 🔎 What It Does

The **child selector** selects only elements that are **direct children** of a specified parent.

It does NOT select grandchildren.

---

## ✅ Syntax

```css
parent > child {
  property: value;
}
```

---

## ✅ Example

### CSS

```css
/* Selects only <p> elements that are direct children of .container */
.container > p {
  color: green;
}
```

### HTML

```html
<div class="container">
  <p>This paragraph will be green.</p>

  <div class="wrapper">
    <p>This paragraph will NOT be green.</p>
  </div>

  <p>This paragraph will also be green.</p>
</div>
```

✔ Direct `<p>` children

✘ Nested `<p>` inside `.wrapper`

---

# 5.4 Adjacent Sibling Selector

## 🔎 What It Does

The **adjacent sibling selector** selects an element that:

* Comes immediately after another element
* Is on the same nesting level

---

## ✅ Syntax

```css
previous + next {
  property: value;
}
```

---

## ✅ Example

### CSS

```css
/* Selects <p> directly after <h1> */
h1 + p {
  color: red;
}
```

### HTML

```html
<h1>Heading</h1>
<p>This paragraph will be red.</p>
<p>This paragraph will NOT be red.</p>
```

✔ Only the first `<p>` immediately after `<h1>`

---

# 5.5 General Sibling Selector

## 🔎 What It Does

The **general sibling selector** selects **all elements** that:

* Come after a specified element
* Are on the same nesting level

---

## ✅ Syntax

```css
previous ~ next {
  property: value;
}
```

---

## ✅ Example

### CSS

```css
/* Selects all <p> elements after <h1> */
h1 ~ p {
  color: purple;
}
```

### HTML

```html
<h1>Heading</h1>
<p>This paragraph will be purple.</p>
<p>This paragraph will also be purple.</p>

<div>
  <p>This paragraph will NOT be purple.</p>
</div>
```

✔ All `<p>` siblings after `<h1>`

✘ Paragraph inside `<div>` not selected

---

# 🌳 Visual Relationship Diagram

```
Parent
│
├── Child 1
│     └── Grandchild
│
├── Child 2
│
└── Child 3
```

| Selector | What It Selects             |
| -------- | --------------------------- |
| `A B`    | All B inside A (any level)  |
| `A > B`  | Only direct B children      |
| `A + B`  | First B immediately after A |
| `A ~ B`  | All B after A (same level)  |

---

# 🎯 Visual Conflict Example — Which Selector Wins?

When multiple CSS rules target the same element, the browser decides using:

1. **Specificity**
2. **Source order (last rule wins if specificity is equal)**

---

## 🧱 Example HTML

```html
<div id="main" class="container">
  <p class="text">Hello World</p>
</div>
```

---

## 🎨 CSS Rules

```css
p {
  color: blue;
}

.text {
  color: green;
}

#main p {
  color: red;
}
```

---

## 🔎 Which Color Wins?

Let’s compare specificity:

| Selector  | Type      | Specificity Score |
| --------- | --------- | ----------------- |
| `p`       | Type      | 0-0-1             |
| `.text`   | Class     | 0-1-0             |
| `#main p` | ID + Type | 1-0-1             |

### 🏆 Winner: `#main p`

✔ Final color: **Red**

---

## 🌳 Visual Specificity Ladder

```
Lowest
--------------------------------
*               (0-0-0)
p               (0-0-1)
.container      (0-1-0)
#main           (1-0-0)
#main p         (1-0-1)
--------------------------------
Highest
```

---

# ⚔️ Conflict Example 2 — Equal Specificity

### HTML

```html
<p class="text">Example</p>
```

### CSS

```css
.text {
  color: blue;
}

.text {
  color: orange;
}
```

Both have the same specificity: `0-1-0`

### 🏆 Winner: The LAST rule

✔ Final color: **Orange**

---

# ⚔️ Conflict Example 3 — Combined Selectors

### HTML

```html
<div class="box">
  <p class="text">Conflict Example</p>
</div>
```

### CSS

```css
p {
  color: black;
}

.box p {
  color: blue;
}

.text {
  color: green;
}
```

### Specificity Comparison

| Selector | Score |
| -------- | ----- |
| `p`      | 0-0-1 |
| `.text`  | 0-1-0 |
| `.box p` | 0-1-1 |

### 🏆 Winner: `.box p`

✔ Final color: **Blue**

Why?

Because 0-1-1 beats 0-1-0.

---

# 🧠 Quick Rule

Specificity compares in this order:

```
IDs > Classes > Types
```

And if tied → **Last rule wins**

---

---

# 🌳 DOM Tree Practice Worksheet

Below is a DOM tree diagram. Use it to answer the questions.

---

## 🧱 DOM Structure

```
<body>
│
├── <section class="content">
│     ├── <h1>Main Heading</h1>
│     ├── <p class="intro">Intro paragraph</p>
│     │
│     ├── <article>
│     │     ├── <p>Article paragraph 1</p>
│     │     ├── <p class="highlight">Article paragraph 2</p>
│     │
│     └── <p>Section paragraph</p>
│
└── <footer>
      └── <p>Footer paragraph</p>
```

---

# 📝 Worksheet Questions

### 1️⃣ What elements does this selector target?

```css
section p
```

Write all matching elements.

---

### 2️⃣ What elements does this selector target?

```css
section > p
```

---

### 3️⃣ What elements does this selector target?

```css
article p
```

---

### 4️⃣ What elements does this selector target?

```css
h1 + p
```

---

### 5️⃣ What elements does this selector target?

```css
h1 ~ p
```

---

---

# ✅ Answer Key

---

## 1️⃣ `section p`

✔ Intro paragraph

✔ Article paragraph 1

✔ Article paragraph 2

✔ Section paragraph

(Any `<p>` inside `<section>` at any level)

---

## 2️⃣ `section > p`

✔ Intro paragraph

✔ Section paragraph

(Direct children only — not inside `<article>`)

---

## 3️⃣ `article p`

✔ Article paragraph 1

✔ Article paragraph 2

---

## 4️⃣ `h1 + p`

✔ Intro paragraph

(The first `<p>` immediately after `<h1>`)

---

## 5️⃣ `h1 ~ p`

✔ Intro paragraph

✔ Section paragraph

(Not the article paragraphs because they are nested inside `<article>`)

---

# 🧠 Practice Challenge

Given this CSS:

```css
.content p {
  color: blue;
}

.highlight {
  color: red;
}
```

What color will **Article paragraph 2** be?

✔ Answer: **Red**
(Class selector overrides type-based descendant selector)

---

# 🧪 Exercise: Child Selector Practice

## 🎯 Task

Use the **child selector** to:

* Select only the `<p>` paragraphs that are direct children of `<article>`
* Change their text color to green
* Set a margin of 20px

---

## 📝 Starter HTML

```html
<article>
  <p>Paragraph 1 (Should be styled)</p>

  <div>
    <p>Paragraph 2 (Should NOT be styled)</p>
  </div>

  <p>Paragraph 3 (Should be styled)</p>
</article>

<p>Paragraph 4 (Should NOT be styled)</p>
```

---

# ✅ Sample Solution

### CSS

```css
article > p {
  color: green;
  margin: 20px;
}
```

---

## ✔ Result Explanation

✔ Paragraph 1 → Styled

✔ Paragraph 3 → Styled

✘ Paragraph 2 → Not styled (not direct child)

✘ Paragraph 4 → Not inside `<article>`

---

# 🎯 Key Takeaways

* `A B` → Any descendant
* `A > B` → Direct children only
* `A + B` → Immediate next sibling
* `A ~ B` → All following siblings

Combined selectors help you write **clean, precise, and professional CSS**.

---

