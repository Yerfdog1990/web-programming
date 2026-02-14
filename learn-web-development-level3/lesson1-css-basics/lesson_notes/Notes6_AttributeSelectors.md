# 📘 Attribute Selectors in CSS

## 6.1 Types of Attribute Selectors

Attribute selectors allow you to target HTML elements **based on their attributes and attribute values**.

They are powerful and flexible, especially when working with:

* Forms
* Links
* Dynamic content
* Reusable components

---

## 🔹 Types of Attribute Selectors

1. Attribute Selector
2. Attribute Selector with Value
3. Attribute Selector with Prefix
4. Attribute Selector with Suffix
5. Attribute Selector with Substring
6. Attribute Selector with Whitespace
7. Attribute Selector with Hyphen

---

# 6.2 Attribute Selector

## 🔎 What It Does

Selects elements that **have a specific attribute**, regardless of its value.

---

## ✅ Syntax

```css
[attribute] {
  property: value;
}
```

---

## ✅ Example

### CSS

```css
/* Selects all elements that have a title attribute */
[title] {
  color: blue;
}
```

### HTML

```html
<p title="This is a title">This text will be blue.</p>
<p>This text will not be blue.</p>
```

✔ Any element containing `title` attribute is selected.

---

# 6.3 Attribute Selector with Value

## 🔎 What It Does

Selects elements whose attribute **exactly matches a specific value**.

---

## ✅ Syntax

```css
[attribute="value"] {
  property: value;
}
```

---

## ✅ Example

### CSS

```css
/* Selects elements where title equals "Example" */
[title="Example"] {
  color: green;
}
```

### HTML

```html
<p title="Example">This text will be green.</p>
<p title="Another example">This text will not be green.</p>
```

✔ Must match exactly.

---

# 6.4 Attribute Selector with Prefix

## 🔎 What It Does

Selects elements whose attribute **starts with** a specific value.

---

## ✅ Syntax

```css
[attribute^="value"] {
  property: value;
}
```

---

## ✅ Example

### CSS

```css
/* Selects title starting with "Start" */
[title^="Start"] {
  color: red;
}
```

### HTML

```html
<p title="Start of text">This text will be red.</p>
<p title="Not starting">This text will not be red.</p>
```

✔ Begins with "Start"

---

# 6.5 Attribute Selector with Suffix

## 🔎 What It Does

Selects elements whose attribute **ends with** a specific value.

---

## ✅ Syntax

```css
[attribute$="value"] {
  property: value;
}
```

---

## ✅ Example

### CSS

```css
/* Selects title ending with "end" */
[title$="end"] {
  color: orange;
}
```

### HTML

```html
<p title="This is the end">This text will be orange.</p>
<p title="This is the start">This text will not be orange.</p>
```

✔ Ends with "end"

---

# 6.6 Attribute Selector with Substring

## 🔎 What It Does

Selects elements whose attribute **contains** a specific value anywhere inside it.

---

## ✅ Syntax

```css
[attribute*="value"] {
  property: value;
}
```

---

## ✅ Example

### CSS

```css
/* Selects title containing "middle" */
[title*="middle"] {
  color: purple;
}
```

### HTML

```html
<p title="This is the middle of the text">Purple text.</p>
<p title="No match here">Not purple.</p>
```

✔ Contains "middle"

---

# 6.7 Attribute Selector with Whitespace

## 🔎 What It Does

Selects elements whose attribute contains **a specific word in a space-separated list**.

Very common for selecting class values.

---

## ✅ Syntax

```css
[attribute~="value"] {
  property: value;
}
```

---

## ✅ Example

### CSS

```css
/* Selects elements where class contains "highlight" */
[class~="highlight"] {
  background-color: yellow;
}
```

### HTML

```html
<p class="highlight special">Yellow background</p>
<p class="special highlight">Also yellow</p>
<p class="special">Not yellow</p>
```

✔ Matches full word inside space-separated list

---

# 6.8 Attribute Selector with Hyphen

## 🔎 What It Does

Selects elements whose attribute:

* Exactly equals the value
  OR
* Starts with the value followed by a hyphen

Often used with language attributes.

---

## ✅ Syntax

```css
[attribute|="value"] {
  property: value;
}
```

---

## ✅ Example

### CSS

```css
p[lang|="ru"] {
  font-style: italic;
}
```

### HTML

```html
<p lang="ru">Italic text</p>
<p lang="ru-RU">Also italic</p>
<p lang="en">Not italic</p>
```

✔ Matches `ru` and `ru-*`

---

# 📊 Summary Table

| Selector          | Meaning                         |                           |
| ----------------- | ------------------------------- | ------------------------- |
| `[attr]`          | Has attribute                   |                           |
| `[attr="value"]`  | Exact match                     |                           |
| `[attr^="value"]` | Starts with                     |                           |
| `[attr$="value"]` | Ends with                       |                           |
| `[attr*="value"]` | Contains                        |                           |
| `[attr~="value"]` | Contains word (space-separated) |                           |
| `[attr            | ="value"]`                      | Exact or hyphen-separated |

---

# 🚀 Advanced Attribute Selector Combinations (CSS)

Attribute selectors become very powerful when you **combine them with other selectors** like:

* Element selectors
* Class selectors
* ID selectors
* Pseudo-classes
* Combined selectors (descendant, child, sibling)

Below are advanced patterns you’ll use in real-world projects.

---

# 1️⃣ Combining Element + Attribute

## 🎯 Target specific element types with attributes

### CSS

```css
input[type="text"] {
  border: 2px solid blue;
}
```

### HTML

```html
<input type="text">
<input type="password">
<textarea></textarea>
```

✔ Only `<input type="text">` is styled
✘ `<textarea>` not affected

---

# 2️⃣ Combining Class + Attribute

## 🎯 Target elements with BOTH a class AND attribute

### CSS

```css
.button[type="submit"] {
  background-color: green;
  color: white;
}
```

### HTML

```html
<button class="button" type="submit">Submit</button>
<button class="button" type="button">Click</button>
```

✔ Only submit button styled
✘ Regular button not styled

---

# 3️⃣ Multiple Attribute Conditions

## 🎯 Target elements that meet multiple attribute rules

### CSS

```css
input[type="text"][required] {
  border: 2px solid red;
}
```

### HTML

```html
<input type="text" required>
<input type="text">
<input type="password" required>
```

✔ Only text input that is required
✘ Others ignored

Think of it like:

```
input AND type="text" AND required
```

---

# 4️⃣ Combining with Descendant Selectors

## 🎯 Target attributes inside a specific container

### CSS

```css
.form-container input[disabled] {
  background-color: lightgray;
}
```

### HTML

```html
<div class="form-container">
  <input disabled>
</div>

<input disabled>
```

✔ Only disabled input inside `.form-container`
✘ Outside input not affected

---

# 5️⃣ Combining with Child Selector

### CSS

```css
article > p[class~="highlight"] {
  color: orange;
}
```

✔ Selects direct child `<p>` of `<article>`
✔ Must contain class `highlight`

---

# 6️⃣ Combining with Pseudo-Classes

## 🎯 Attribute + Hover

### CSS

```css
a[href^="https"]:hover {
  color: red;
}
```

✔ Secure links turn red on hover

---

## 🎯 Attribute + Focus

```css
input[required]:focus {
  border-color: red;
}
```

✔ Required field highlighted when focused

---

# 7️⃣ Targeting File Types (Real-World Use)

## 🎯 Style downloadable file links

### CSS

```css
a[href$=".pdf"] {
  color: crimson;
}

a[href$=".doc"] {
  color: blue;
}
```

### HTML

```html
<a href="report.pdf">PDF File</a>
<a href="resume.doc">Word File</a>
```

---

# 8️⃣ Data Attributes (Modern Usage)

Custom attributes using `data-*`

### HTML

```html
<div data-role="admin">Admin Panel</div>
<div data-role="user">User Panel</div>
```

### CSS

```css
[data-role="admin"] {
  background-color: gold;
}
```

✔ Great for dynamic apps

---

# 9️⃣ Combining Prefix + Suffix

## 🎯 Very specific match

```css
a[href^="https"][href$=".org"] {
  font-weight: bold;
}
```

✔ Must start with `https`
✔ Must end with `.org`

---

# 🔟 Attribute Selector Specificity

Attribute selectors behave like **class selectors** in specificity.

Example:

```css
input[type="text"]
```

Specificity score:

```
0-1-1
```

* 0 IDs
* 1 attribute
* 1 element

---

# 🌳 Visual Example — Complex Combination

### HTML

```html
<section class="content">
  <article>
    <a href="https://example.org" class="external">Link 1</a>
    <a href="http://site.com" class="external">Link 2</a>
  </article>
</section>
```

### CSS

```css
.content article a.external[href^="https"] {
  color: green;
}
```

### ✔ What It Selects

* Inside `.content`
* Inside `article`
* `<a>` element
* With class `external`
* AND href starts with https

Only **Link 1** is styled.

---

# 🧪 Advanced Practice Exercise

## 🎯 Task

Style only:

* `<input>`
* With `type="email"`
* AND that are `required`
* When focused

Apply:

* Border color: blue
* Background color: lightyellow

---

## 📝 Sample HTML

```html
<input type="email" required>
<input type="email">
<input type="text" required>
```

---

# ✅ Sample Solution

```css
input[type="email"][required]:focus {
  border: 2px solid blue;
  background-color: lightyellow;
}
```

✔ Only required email input when focused
✘ Others not affected

---

# 🧠 Pro Tips

* Attribute selectors = class-level specificity
* Combine them carefully to avoid over-specific CSS
* Useful for:

    * Forms
    * APIs
    * Component-based UI
    * Filtering UI elements

---

# 🎯 Challenge Question

What does this selector match?

```css
div[data-type~="card"][data-state="active"]
```

Answer:

✔ A `<div>`

✔ With `data-type` containing word "card"

✔ AND `data-state` exactly equal to "active"

---# ⚔️ CSS Specificity Battle Worksheet

This worksheet will help you practice **calculating specificity** and determining **which selector wins**.

---

# 📌 Quick Specificity Reminder

Specificity format:

```
(ID, Class/Attribute/Pseudo-class, Element/Pseudo-element)
```

### Specificity Weights

| Selector Type | Value   |
| ------------- | ------- |
| Inline style  | 1-0-0-0 |
| ID            | 0-1-0-0 |
| Class         | 0-0-1-0 |
| Attribute     | 0-0-1-0 |
| Pseudo-class  | 0-0-1-0 |
| Element       | 0-0-0-1 |
| Universal `*` | 0-0-0-0 |

Higher value wins.

If equal → **Last rule wins**

---

---

# 🧪 Battle 1 — Basic Conflict

## HTML

```html
<p class="text">Hello</p>
```

## CSS

```css
p {
  color: blue;
}

.text {
  color: green;
}
```

### ✍ Your Task

1. Calculate specificity for both selectors
2. Which rule wins?
3. What is the final color?

---

## ✅ Answer

* `p` → (0,0,0,1)
* `.text` → (0,0,1,0)

🏆 Winner: `.text`
🎨 Final color: **Green**

---

---

# 🧪 Battle 2 — ID vs Class

## HTML

```html
<p id="intro" class="text">Welcome</p>
```

## CSS

```css
.text {
  color: blue;
}

#intro {
  color: red;
}
```

### ✍ Your Task

Who wins?

---

## ✅ Answer

* `.text` → (0,0,1,0)
* `#intro` → (0,1,0,0)

🏆 Winner: `#intro`
🎨 Final color: **Red**

IDs always beat classes.

---

---

# 🧪 Battle 3 — Combined Selectors

## HTML

```html
<div class="container">
  <p class="text">Example</p>
</div>
```

## CSS

```css
.text {
  color: green;
}

.container p {
  color: blue;
}
```

---

### ✍ Calculate Specificity

* `.text` = ?
* `.container p` = ?

---

## ✅ Answer

* `.text` → (0,0,1,0)
* `.container p` → (0,0,1,1)

🏆 Winner: `.container p`
🎨 Final color: **Blue**

Because (0,0,1,1) > (0,0,1,0)

---

---

# 🧪 Battle 4 — Attribute vs Class

## HTML

```html
<input type="text" class="field">
```

## CSS

```css
.field {
  border: 1px solid black;
}

input[type="text"] {
  border: 2px solid red;
}
```

---

### ✍ Calculate

* `.field` = ?
* `input[type="text"]` = ?

---

## ✅ Answer

* `.field` → (0,0,1,0)
* `input[type="text"]` → (0,0,1,1)

🏆 Winner: `input[type="text"]`
Border becomes **2px solid red**

(Attribute = class-level, plus element adds more weight)

---

---

# 🧪 Battle 5 — Equal Specificity (Order Wins)

## HTML

```html
<h1 class="title">Heading</h1>
```

## CSS

```css
.title {
  color: blue;
}

.title {
  color: orange;
}
```

---

### ✍ What happens?

---

## ✅ Answer

Both selectors:

(0,0,1,0)

Specificity equal.

🏆 Winner: **Second rule (last in CSS)**
🎨 Final color: **Orange**

---

---

# 🧪 Battle 6 — Descendant vs ID

## HTML

```html
<div id="main">
  <p class="text">Test</p>
</div>
```

## CSS

```css
#main p {
  color: purple;
}

.text {
  color: green;
}
```

---

### ✍ Calculate

* `#main p`
* `.text`

---

## ✅ Answer

* `#main p` → (0,1,0,1)
* `.text` → (0,0,1,0)

🏆 Winner: `#main p`
🎨 Final color: **Purple**

ID dominates.

---

---

# 🧪 Battle 7 — The Big Battle

## HTML

```html
<div id="layout" class="container">
  <p class="text highlight">Battle</p>
</div>
```

## CSS

```css
p {
  color: black;
}

.text {
  color: green;
}

.container p {
  color: blue;
}

#layout .highlight {
  color: red;
}
```

---

### ✍ Calculate Each

1. `p`
2. `.text`
3. `.container p`
4. `#layout .highlight`

---

## ✅ Answer

| Selector             | Specificity |
| -------------------- | ----------- |
| `p`                  | (0,0,0,1)   |
| `.text`              | (0,0,1,0)   |
| `.container p`       | (0,0,1,1)   |
| `#layout .highlight` | (0,1,1,0)   |

🏆 Winner: `#layout .highlight`
🎨 Final color: **Red**

Because ID level makes it strongest.

---

---

# 🧠 Bonus Challenge

What is the specificity of:

```css
ul#menu li.item.active a[href^="https"]
```

---

## ✅ Breakdown

* `#menu` → 1 ID
* `.item` → 1 class
* `.active` → 1 class
* `[href^="https"]` → 1 attribute
* `ul` → 1 element
* `li` → 1 element
* `a` → 1 element

### Final Specificity:

(0,1,3,3)

---

---

# 🏁 Final Challenge Question

Given:

```css
.button {
  background: blue;
}

div .button {
  background: green;
}

#app .button {
  background: red;
}
```

Which background wins?

Answer:

🏆 `#app .button`
Because ID selector gives highest specificity.

---

---

# 🎯 Key Rules to Remember

1. IDs beat classes
2. Classes beat elements
3. Attribute selectors count like classes
4. More combined selectors = higher specificity
5. Equal specificity → last rule wins

---

# 🧪 Exercise 1 — Attribute Selector with Value

## 🎯 Task

Select all elements where:

* `type="button"`
* Background color → green
* Text color → white

---

## 📝 Sample HTML

```html
<input type="button" value="Click Me">
<input type="text">
<button type="button">Submit</button>
```

---

## ✅ Sample Solution

```css
[type="button"] {
  background-color: green;
  color: white;
}
```

✔ Styles `<input type="button">`
✔ Styles `<button type="button">`
✘ Does not style `<input type="text">`

---

# 🧪 Exercise 2 — Initial Attribute (Prefix)

## 🎯 Task

Select all elements where:

* `href` starts with `"https"`
* Underline text
* Change text color to red

---

## 📝 Sample HTML

```html
<a href="https://example.com">Secure Link</a>
<a href="http://example.com">Non-secure Link</a>
<a href="https://site.org">Another Secure Link</a>
```

---

## ✅ Sample Solution

```css
[href^="https"] {
  text-decoration: underline;
  color: red;
}
```

✔ Selects only secure links
✘ Does not select `http` links

---

# 🧠 Final Quiz Question

**In what year was the first CSS1 specification released?**

✅ Answer: **1996**

---

# 🎯 Key Takeaways

* Attribute selectors target elements based on attribute presence or values
* `^` → Starts with
* `$` → Ends with
* `*` → Contains
* `~` → Word match
* `|` → Exact or hyphen

Attribute selectors are especially powerful for:

* Forms
* Links
* Multilingual sites
* Dynamic UI components

---

