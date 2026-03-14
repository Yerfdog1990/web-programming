# 11. CSS Processors

CSS Preprocessors (also called **CSS processors**) are tools that extend the functionality of regular CSS. They allow developers to write **more powerful, modular, and maintainable stylesheets** by introducing programming-like features such as:

* Variables
* Nested rules
* Mixins
* Inheritance
* Functions

After writing styles in a preprocessor language, the code must be **compiled into standard CSS**, which browsers can understand.

The most popular CSS preprocessors are:

1. **Sass (Syntactically Awesome Stylesheets)**
2. **LESS**
3. **Stylus**

---

# 11.1 Sass (Syntactically Awesome Stylesheets)

**Sass** is one of the most widely used CSS preprocessors. It provides powerful features that make CSS development easier and more structured.

---

# Installing Sass

Sass can be installed using **Node Package Manager (npm)**.

### Terminal

```bash
npm install -g sass
```

This installs Sass globally so it can be used from the command line.

---

# Main Features of Sass

---

# 1. Variables

Variables allow developers to **store reusable values** such as colors, font sizes, or spacing.

### Sass Example

```scss
$primary-color: #333

body
  color: $primary-color
```

### Explanation

* `$primary-color` stores the color value.
* The variable can be reused across multiple styles.

Benefits:

* avoids repeating values
* simplifies design updates
* improves maintainability

---

# 2. Nested Rules

Nested rules allow styles to follow the **HTML structure**, making CSS easier to read.

### Sass Example

```scss
nav
  background: #eee

  ul
    margin: 0
    padding: 0
    list-style: none

    li
      color: tomato
```

### Explanation

Instead of writing separate selectors like:

```css
nav ul li { }
```

Sass allows hierarchical nesting similar to HTML.

---

# 3. Mixins

Mixins allow reusable blocks of CSS rules.

They are useful for repeating styles such as **border-radius, flexbox layouts, or shadows**.

### Sass Example

```scss
@mixin border-radius($radius)
  -webkit-border-radius: $radius
  -moz-border-radius: $radius
  border-radius: $radius

.box
  @include border-radius(10px)
  border: 2px solid green
  width: 256px
  min-height: 200px
```

### Explanation

Mixin definition:

```scss
@mixin border-radius($radius)
```

Use mixin:

```scss
@include border-radius(10px)
```

Benefits:

* reusable styles
* cleaner code
* avoids duplication

---

# 4. Inheritance

Sass allows selectors to inherit styles using `@extend`.

This helps share common styles across multiple elements.

### Sass Example

```scss
%message
  border: 1px solid #ccc
  padding: 10px
  color: #333

.box
  min-height: 120px
  &:not(:last-child)
    margin-bottom: 5px

.info
  @extend %message

.success
  @extend %message
  background-color: #cfc

.warning
  @extend %message
  background-color: #fc9
```

### Explanation

`%message` is a **placeholder selector**.

Other classes extend it:

```scss
@extend %message
```

This allows multiple elements to reuse the same styles.

---

# 5. Functions

Sass supports custom functions for calculations and reusable logic.

### Sass Example

```scss
@function px-to-rem($px, $base-font-size: 16px)
  @return ($px / $base-font-size) * 1rem;

body
  font-size: px-to-rem(18px);
```

### Explanation

Function:

```scss
px-to-rem(18px)
```

Converts pixel values to **rem units**.

---

# Compiling Sass

Sass files must be compiled into CSS.

### Terminal

```bash
sass style.scss style.css
```

This converts:

```scss
style.scss
```

into:

```css
style.css
```

---

# 11.2 LESS

**LESS** is another popular CSS preprocessor with features similar to Sass.

---

# Installing LESS

### Terminal

```bash
npm install -g less
```

---

# Main Features of LESS

---

# 1. Variables

LESS uses `@` instead of `$`.

### Example

```less
@primary-color: #333;

body {
  color: @primary-color;
}
```

---

# 2. Nested Rules

LESS also supports nested CSS structures.

### Example

```less
nav {
  background: #eee;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      color: tomato;
    }
  }
}
```

---

# 3. Mixins

Mixins allow reusable blocks of styles.

### Example

```less
.border-radius(@radius) {
  -webkit-border-radius: @radius;
  -moz-border-radius: @radius;
  border-radius: @radius;
}

.box {
  .border-radius(10px);
  border: 2px solid green;
  width: 256px;
  min-height: 200px;
}
```

---

# 4. Inheritance

LESS uses the `&` symbol to reference the parent selector.

### Example

```less
.button {
  &:hover {
    background-color: #555;
  }
}
```

This generates:

```css
.button:hover { }
```

---

# 5. Functions

LESS includes functions for color and mathematical operations.

### Example

```less
@base: 16px;

.font-size(@size) {
  font-size: (@size / @base) * 1rem;
}

body {
  .font-size(18px);
}
```

---

# Compiling LESS

### Terminal

```bash
lessc style.less style.css
```

---

# 11.3 Stylus

**Stylus** is a flexible CSS preprocessor with a **very minimal syntax**.

It removes many punctuation characters like braces and semicolons.

---

# Installing Stylus

### Terminal

```bash
npm install -g stylus
```

---

# Main Features of Stylus

---

# 1. Variables

Stylus variables do not require `$` or `@`.

### Example

```stylus
primary-color = #333

body
  color primary-color
```

---

# 2. Nested Rules

Stylus also supports nested styling.

### Example

```stylus
nav
  background #eee

  ul
    margin 0
    padding 0
    list-style none

    li
      color tomato
```

---

# 3. Mixins

Stylus mixins look similar to functions.

### Example

```stylus
border-radius(radius)
  -webkit-border-radius radius
  -moz-border-radius radius
  border-radius radius

.box
  border-radius(10px)
  border 2px solid green
  width 256px
  min-height 200px
```

---

# 4. Inheritance

Stylus uses `@extend`.

### Example

```stylus
.message
  border 1px solid #ccc
  padding 10px
  color #333

.info
  @extend .message

.success
  @extend .message
  background-color #cfc

.warning
  @extend .message
  background-color #fc9
```

---

# 5. Functions

Stylus allows custom functions.

### Example

```stylus
px-to-rem(px, base-font-size = 16px)
  px / base-font-size * 1rem

body
  font-size px-to-rem(18px)
```

---

# Compiling Stylus

### Terminal

```bash
stylus style.styl
```

---

# Exercise 1 — Variables in Sass

## Task

Create variables for main website colors.

### Requirements

* `$primary-color`
* `$secondary-color`
* `$background-color`

Apply:

* `$primary-color` → text color
* `$secondary-color` → heading background
* `$background-color` → page background

---

## Solution

### Sass

```scss
$primary-color: #333;
$secondary-color: #4caf50;
$background-color: #f4f4f4;

body
  background: $background-color
  color: $primary-color

h1, h2, h3
  background: $secondary-color
  color: white
  padding: 10px
```

---

# Exercise 2 — Nested LESS Rules

## Task

Create a navigation menu using nested rules.

### Requirements

* style `nav`
* remove list markers from `ul`
* align `li` horizontally
* style `a` links

---

## Solution

### LESS

```less
nav {
  background: #333;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      margin-right: 15px;

      a {
        color: white;
        text-decoration: none;
        padding: 10px;

        &:hover {
          color: yellow;
        }
      }
    }
  }
}
```

---

# Advantages of CSS Preprocessors

### 1. Reusable Code

Mixins and functions reduce repetition.

### 2. Better Organization

Nested rules follow HTML structure.

### 3. Faster Development

Variables allow quick design changes.

### 4. Modular Styles

Large projects become easier to maintain.

### 5. Advanced Features

Mathematical calculations and logic improve CSS flexibility.

---

