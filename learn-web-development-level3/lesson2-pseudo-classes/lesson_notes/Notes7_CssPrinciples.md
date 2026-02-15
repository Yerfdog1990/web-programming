
---

# 11. CSS Core Principles

CSS is built on three fundamental principles:

1. **Cascading**
2. **Inheritance**
3. **Specificity**
4. **Importance (`!important`)**

Understanding these allows developers to control exactly how styles are applied to web pages.

---

# 11.1 Cascading

## Definition

**Cascading** determines how the browser resolves conflicts when multiple CSS rules apply to the same element.

When rules conflict, the browser decides using:

1. **Source Order**
2. **Specificity**
3. **Importance**

---

## 1️⃣ Source Order

Styles can come from:

* **External CSS** (linked `.css` file)
* **Internal CSS** (`<style>` inside `<head>`)
* **Inline CSS** (`style=""` attribute)

When rules have equal specificity, the one that appears **later** wins.

### Priority Order (Lowest → Highest)

1. External stylesheet
2. Internal stylesheet
3. Inline styles

---

## Cascading Example Explained

```html
<body style="background-color: yellow;">
```

```css
body {
  background-color: lightblue; /* Internal style */
}
```

### Result:

* Background → **Yellow**

    * Inline overrides internal
* Paragraph text → **Red**

    * Inline overrides internal green

---

## Why Cascading Matters

* Prevents duplication
* Enables layered styling
* Allows overrides
* Supports component-based design

---

# 11.2 Inheritance

## Definition

**Inheritance** is when child elements automatically receive certain styles from their parent elements.

---

## Properties That Inherit

Common inherited properties:

* `color`
* `font-family`
* `font-size`
* `line-height`
* `text-align`
* `visibility`

Properties that do NOT inherit:

* `margin`
* `padding`
* `border`
* `background`
* `width`
* `height`

---

## Inheritance Example Explained

```css
body {
  font-family: Arial, sans-serif;
  color: blue;
}

.container {
  font-size: 18px;
}
```

```html
<div class="container">
  <p>Text</p>
</div>
```

### What happens?

The `<p>` element:

* Inherits **font-family** from `body`
* Inherits **color** from `body`
* Inherits **font-size** from `.container`

Inheritance moves down the DOM tree unless overridden.

---

## Why Inheritance Is Important

* Reduces repetition
* Improves maintainability
* Allows global styling control
* Supports consistent typography

---

# 11.3 Specificity

## Definition

**Specificity** determines which rule is applied when multiple rules match the same element.

It is calculated based on selector type.

---

## Specificity Hierarchy (Highest → Lowest)

1. Inline styles
2. ID selectors (`#id`)
3. Class selectors (`.class`), attributes, pseudo-classes
4. Element selectors (`p`, `div`) and pseudo-elements

---

## Specificity Scoring System

Represented as:

```
Inline - ID - Class - Element
```

Example:

| Selector     | Specificity |
| ------------ | ----------- |
| `p`          | 0-0-0-1     |
| `.highlight` | 0-0-1-0     |
| `#unique`    | 0-1-0-0     |

---

## Specificity Example Explained

```css
p { color: blue; }
.highlight { color: green; }
#unique { color: red; }
```

```html
<p class="highlight" id="unique">Text</p>
```

### Result:

Text is **red** because:

`#unique` (0-1-0-0) > `.highlight` (0-0-1-0) > `p` (0-0-0-1)

---

## Why Specificity Matters

* Prevents unintended overrides
* Helps debug styling issues
* Encourages better selector design
* Avoids overusing IDs

---

# 11.4 Importance (`!important`)

## Definition

The `!important` directive forces a rule to override all other conflicting rules.

---

## Example

```css
p {
  color: blue !important;
}

.highlight {
  color: green;
}
```

Result:

Text is **blue** because `!important` overrides normal specificity.

---

## Priority Order Including !important

1. Inline `!important`
2. ID `!important`
3. Class `!important`
4. Normal inline
5. Normal ID
6. Normal class
7. Normal element

---

## Why Avoid Overusing `!important`

* Breaks natural cascading
* Makes debugging harder
* Creates maintainability issues
* Leads to CSS conflicts

Best practice: use only when absolutely necessary.

---

# 11.5 CSS Principles in Practice

## Cascading + Specificity Example

```css
p { color: blue; }
.important { color: red; }
```

```html
<p class="important">Text</p>
```

Result:

Red text because class selector has higher specificity than element selector.

---

## Inheritance + Specificity Example

```css
body { color: blue; }
.container { color: green; }
.highlight { color: red; }
```

```html
<div class="container">
  <p class="highlight">Text</p>
</div>
```

Result:

Red text because `.highlight` overrides inherited green from `.container`.

---

# Practical Tasks Explained

---

## ✅ Task 1: Demonstrating Cascading

To demonstrate cascading:

1. **External CSS file**

   ```css
   body {
     background-color: lightblue;
   }

   p {
     color: green;
   }
   ```

2. **Internal CSS**

   ```html
   <style>
     body { background-color: lightgray; }
     p { color: blue; }
   </style>
   ```

3. **Inline CSS**

   ```html
   <body style="background-color: yellow;">
     <p style="color: red;">Text</p>
   </body>
   ```

### Final Result:

* Background → Yellow (inline wins)
* Paragraph → Red (inline wins)

Demonstrates complete cascading hierarchy.

---

## ✅ Task 2: Specificity Demonstration

```css
p {
  color: blue;
}

.text-style {
  font-size: 20px;
}

#special {
  background-color: yellow;
}
```

```html
<p class="text-style" id="special">
  Styled paragraph
</p>
```

### What happens?

* Text color → Blue (element selector)
* Font size → 20px (class selector)
* Background → Yellow (ID selector, highest priority)

---

# Final Summary

## CSS Rule Resolution Order

When multiple rules conflict, the browser checks:

1. `!important`
2. Specificity
3. Source order

---

## Key Takeaways

* **Cascading** controls rule resolution.
* **Inheritance** allows children to receive styles from parents.
* **Specificity** determines which selector wins.
* **!important** overrides all normal rules.

---

