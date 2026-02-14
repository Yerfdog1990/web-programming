# Intro to CSS

## 1.1 The History of CSS

### What is CSS?

**Cascading Style Sheets (CSS)** is a styling language used to control the visual appearance of web pages. While HTML defines the **structure** and content of a webpage, CSS controls how that content looks — including layout, colors, fonts, spacing, and responsiveness.

CSS is one of the three core technologies of the web:

* HTML → Structure
* CSS → Style
* JavaScript → Interactivity

---

## Early Internet Days (1990s)

When the web first became popular in the early 1990s, websites were built using only HTML.

At that time:

* HTML handled both **structure and styling**
* Designers used tags like:

    * `<font>` to change text size and color
    * `<center>` to center content

Example of early HTML styling:

```html
<font color="red" size="5">Hello World</font>
<center>This text is centered</center>
```

### Problems with This Approach

* Code became messy and repetitive
* Styling was mixed with content
* Websites were difficult to update and maintain
* Changing design required editing every single page

This created the need to separate **content (HTML)** from **presentation (style)**.

---

## The Birth of CSS (1994)

In 1994, **Håkon Wium Lie**, working at **CERN**, proposed the concept of CSS.

He believed:

* HTML should focus only on structure
* Styling should be handled separately
* There should be a standardized styling language

His idea was supported by **Tim Berners-Lee**, the inventor of the World Wide Web.

This marked the beginning of CSS.

---

## Standardization: CSS1 (1996)

In December 1996, the **World Wide Web Consortium** (W3C) published the first official CSS specification: **CSS1**.

### What CSS1 Introduced

* Text color
* Fonts
* Background colors
* Basic alignment
* Basic spacing

Although limited, CSS1 was revolutionary because it:

* Separated structure from style
* Made web pages easier to maintain
* Allowed centralized styling

Example:

```css
p {
  color: blue;
  font-size: 18px;
}
```

Instead of styling each paragraph individually, one rule could style all paragraphs.

---

## 1.2 The Evolution of CSS

### CSS2 (1998): Expanding Capabilities

In 1998, W3C released CSS2.

CSS2 added powerful new features:

* Absolute positioning
* Relative positioning
* `z-index`
* Media types (screen, print, etc.)
* Table styling

This allowed developers to:

* Create more complex layouts
* Control element placement
* Design for different devices

---

### CSS2.1 (2004): Stability and Fixes

Although CSS2 introduced powerful tools, browser compatibility problems appeared.

To fix these issues, CSS2.1 was released in 2004.

CSS2.1:

* Fixed bugs
* Removed poorly supported features
* Improved browser compatibility
* Became the stable standard developers relied on

For many years, CSS2.1 was the foundation of web design.

---

### CSS3: The Modular Revolution

CSS3 was a major breakthrough.

Unlike CSS1 and CSS2, CSS3 was built as a **modular system**.

### What Does “Modular” Mean?

Instead of releasing one large update:

* CSS was divided into independent modules
* Each module could develop separately
* New features could be added faster

### Major CSS3 Features

CSS3 introduced many powerful tools:

* Animations
* Transitions
* Gradients
* Media queries
* Flexbox
* Grid Layout

These features made it possible to build:

* Responsive websites
* Complex layouts
* Interactive designs
* Modern user interfaces

Example of a transition:

```css
button {
  transition: background 0.3s ease;
}
```

---

## Modern CSS: A Living Standard

Today, CSS continues to evolve.

It is no longer released as CSS4. Instead, it is treated as a **Living Standard** — meaning:

* Modules are updated continuously
* New features are added regularly
* Browsers implement features independently

### Modern CSS Features

* CSS Grid Layout
* Flexbox
* CSS Custom Properties (Variables)
* CSS Houdini
* Container queries

Modern CSS allows developers to create:

* Highly responsive designs
* Dynamic layouts
* Clean and maintainable styling systems

---

## 1.3 Core Principles of CSS

CSS is built on three essential principles:

---

### 1. Cascading

The word "Cascading" in CSS means rules are applied in a specific order.

If multiple rules target the same element:

* The last rule defined usually takes priority
* More specific rules override general ones

Example:

```css
p {
  color: blue;
}

p {
  color: red;
}
```

The paragraph will be **red**, because the second rule overrides the first.

---

### 2. Inheritance

Some CSS properties are inherited from parent elements.

Common inherited properties:

* `color`
* `font-family`
* `font-size`

Example:

```css
body {
  color: green;
}
```

All text inside the `<body>` will inherit the green color unless overridden.

---

### 3. Specificity

Specificity determines which rule wins when multiple rules apply.

Specificity is calculated based on:

* Inline styles (highest priority)
* IDs
* Classes
* Elements (lowest priority)

Example:

```css
#title {
  color: red;
}

.heading {
  color: blue;
}

h1 {
  color: green;
}
```

If an `<h1>` has id="title", it will be **red**, because ID selectors have higher specificity.

---

## 4. Why Understanding CSS History Matters

Knowing the history of CSS helps you understand:

* Why we separate structure from style
* Why browser compatibility matters
* Why modern layout systems exist
* Why CSS is modular today

CSS has evolved from a simple styling tool into a powerful language capable of creating:

* Complex layouts
* Responsive designs
* Animations and transitions
* Professional web interfaces

---

### 4.1. Timeline Diagram of CSS Evolution

```
1994
│
│  Håkon Wium Lie proposes CSS at CERN
│  (Separation of structure and style)
│
▼
1996 ─────────────────────────────────────────
CSS1 Released
Published by the World Wide Web Consortium (W3C)

• Basic text styling
• Fonts and colors
• Backgrounds
• Alignment
• Beginning of structure vs style separation
```

```
1998 ─────────────────────────────────────────
CSS2 Released
Published by the World Wide Web Consortium (W3C)

• Absolute & relative positioning
• z-index layering
• Media types (screen, print)
• Table styling
• More layout control
```

```
2004 ─────────────────────────────────────────
CSS2.1 Released

• Bug fixes
• Improved browser compatibility
• Became stable standard for many years
```

```
1999–2010+ ──────────────────────────────────
CSS3 (Modular Development Begins)

• Introduced modular system
• Animations
• Transitions
• Gradients
• Media queries (Responsive design)
• Flexbox
• Grid Layout
```

```
2010–Present ────────────────────────────────
Modern CSS (Living Standard)

• Continuous updates (no CSS4 release)
• CSS Grid Layout improvements
• CSS Custom Properties (Variables)
• CSS Houdini
• Container Queries
• Ongoing browser innovation
```

---

### 4.2. Visual Summary Timeline (Compact Version)

```
1994    1996      1998       2004        2010+        Present
│        │          │          │            │             │
Idea → CSS1 → CSS2 → CSS2.1 → CSS3 → Living Standard
        Basic    Layout     Stability   Modular      Continuous
        Styling  Control    & Fixes     Features     Evolution
```

---

### 4.3. Key Milestones

* **1994** – Håkon Wium Lie proposes CSS at CERN
* **1996** – CSS1 released by World Wide Web Consortium
* **1998** – CSS2 expands layout capabilities
* **2004** – CSS2.1 stabilizes implementation
* **CSS3 Era** – Modular design introduces responsive and interactive features
* **Today** – CSS evolves as a living standard

---

## 5. CSS Version Comparison Table

| Feature / Aspect          | **CSS1**                                     | **CSS2**                                 | **CSS3**                                             |
| ------------------------- | -------------------------------------------- | ---------------------------------------- | ---------------------------------------------------- |
| **Year Released**         | 1996                                         | 1998                                     | Began 1999 (modular development)                     |
| **Published By**          | World Wide Web Consortium                    | World Wide Web Consortium                | World Wide Web Consortium                            |
| **Main Purpose**          | Basic styling for web pages                  | Expanded layout and positioning control  | Advanced layouts, animations, responsiveness         |
| **Layout Control**        | Very limited                                 | Absolute & relative positioning, z-index | Flexbox, Grid Layout, multi-column layouts           |
| **Text & Fonts**          | Basic font properties, colors                | Improved font handling                   | Web fonts (`@font-face`), text shadows               |
| **Color & Backgrounds**   | Basic background color                       | Background images improved               | Gradients, multiple backgrounds, RGBA/HSLA           |
| **Media Support**         | None                                         | Media types (screen, print, etc.)        | Media queries (responsive design)                    |
| **Animations**            | Not supported                                | Not supported                            | Animations & transitions                             |
| **Selectors**             | Basic selectors                              | More advanced selectors                  | Attribute selectors, pseudo-classes, pseudo-elements |
| **Box Model**             | Basic box model                              | Improved box model definition            | Box sizing control                                   |
| **Modular Structure**     | No                                           | No                                       | Yes (modular system)                                 |
| **Browser Compatibility** | Limited                                      | Improved but inconsistent                | Widely supported (modern browsers)                   |
| **Impact on Web Design**  | Introduced separation of style and structure | Enabled more complex page layouts        | Enabled responsive, modern, interactive design       |

---

### 5.1. Key Differences Explained

### CSS1 (1996)

* First official CSS specification
* Focused mainly on:

    * Text styling
    * Font control
    * Colors
    * Backgrounds
* Limited layout control
* Marked the beginning of separating HTML structure from styling

---

### CSS2 (1998)

* Major improvement over CSS1
* Introduced:

    * Positioning (`absolute`, `relative`)
    * `z-index`
    * Media types
    * Table styling
* Enabled more complex page designs
* Had browser compatibility issues

---

### CSS3 (Modular Era)

* Introduced as modular specifications instead of one large update
* Added modern design tools:

    * Flexbox
    * Grid
    * Media queries
    * Animations
    * Transitions
    * Gradients
* Made responsive design possible
* Continues evolving as part of a living standard

---

## Visual Evolution Summary

CSS1 → Basic Styling

CSS2 → Layout Control

CSS3 → Responsive & Interactive Web Design

---

## Summary

* CSS was proposed in 1994 by Håkon Wium Lie.
* CSS1 was released in 1996 by W3C.
* CSS2 expanded layout capabilities.
* CSS2.1 stabilized the standard.
* CSS3 introduced modular development.
* Modern CSS continues evolving as a living standard.
* CSS is built on cascading, inheritance, and specificity.

CSS remains an essential tool in modern web development, making the web more beautiful, flexible, and user-friendly.

---

