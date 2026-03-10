# Advanced CSS Grid Techniques

CSS Grid Layout provides powerful tools for creating **complex, flexible, and responsive layouts**. One of the most effective advanced techniques is combining **CSS Grid with media queries** to create layouts that automatically adapt to different screen sizes and devices.

Responsive layouts are essential for modern websites because users access websites from **phones, tablets, laptops, and large monitors**.

This section explains how to use:

* Media queries with CSS Grid
* Changing the number of columns
* Changing layout placement based on screen width
* Changing element sizes dynamically

---

# 10.1 Combining CSS Grid with Media Queries

## What are Media Queries?

Media queries allow developers to **apply CSS rules only when certain conditions are met**, such as screen width, height, or device orientation.

When combined with CSS Grid, media queries allow you to **change the grid layout depending on screen size**.

### Basic Syntax

```css
@media (condition) {
  /* Styles applied when condition is met */
}
```

The most commonly used conditions are:

* `min-width`
* `max-width`

Example:

```css
@media (min-width: 600px) {
  /* Styles applied when screen width is at least 600px */
}
```

This allows a layout to **adapt automatically for larger screens**.

---

# 10.2 Changing the Number of Columns

One of the simplest responsive techniques is changing the **number of grid columns** depending on screen width.

For small screens, we often use **one column**, while larger screens can use **two or more columns**.

---

## Example: Adaptive Columns

### CSS

```css
/* Base style for all screens */

.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.grid-item {
  background-color: #3498db;
  color: white;
  padding: 20px;
  text-align: center;
  border: 1px solid #fff;
}

/* For screens wider than 600px */

@media (min-width: 600px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* For screens wider than 900px */

@media (min-width: 900px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### HTML

```html
<div class="grid-container">
  <div class="grid-item">Element 1</div>
  <div class="grid-item">Element 2</div>
  <div class="grid-item">Element 3</div>
  <div class="grid-item">Element 4</div>
  <div class="grid-item">Element 5</div>
  <div class="grid-item">Element 6</div>
</div>
```

---

## Layout Behavior

| Screen Width  | Columns   |
| ------------- | --------- |
| Small screens | 1 column  |
| ≥ 600px       | 2 columns |
| ≥ 900px       | 3 columns |

This technique ensures the layout remains **readable and well structured on all devices**.

---

# 10.3 Changing Element Placement Based on Screen Width

Another advanced technique is changing **where elements appear in the layout** using `grid-template-areas`.

This makes it possible to completely **reorganize the layout depending on screen size**.

---

## Example: Responsive Layout with Grid Areas

### CSS

```css
/* Base style for all screens */

.grid-container {
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "sidebar"
    "footer";
  gap: 10px;
}

.header {
  grid-area: header;
  background-color: #2ecc71;
  padding: 20px;
  text-align: center;
}

.sidebar {
  grid-area: sidebar;
  background-color: #3498db;
  padding: 20px;
  text-align: center;
}

.main {
  grid-area: main;
  background-color: #9b59b6;
  padding: 20px;
  text-align: center;
}

.footer {
  grid-area: footer;
  background-color: #e74c3c;
  padding: 20px;
  text-align: center;
}

/* Screens wider than 600px */

@media (min-width: 600px) {
  .grid-container {
    grid-template-areas:
      "header header"
      "sidebar main"
      "footer footer";
    grid-template-columns: 1fr 3fr;
  }
}

/* Screens wider than 900px */

@media (min-width: 900px) {
  .grid-container {
    grid-template-areas:
      "header header header"
      "sidebar main main"
      "footer footer footer";
    grid-template-columns: 1fr 2fr;
  }
}
```

---

### HTML

```html
<div class="grid-container">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="main">Main Content</div>
  <div class="footer">Footer</div>
</div>
```

---

## Layout Changes

### Small Screens

```
Header
Main
Sidebar
Footer
```

### Screens ≥ 600px

```
Header   Header
Sidebar  Main
Footer   Footer
```

### Screens ≥ 900px

```
Header   Header   Header
Sidebar  Main     Main
Footer   Footer   Footer
```

This technique makes layouts **much more adaptable and user-friendly**.

---

# 10.4 Changing Element Sizes

Media queries can also adjust **element sizes**, such as row heights or column sizes.

This ensures layouts scale well across different devices.

---

## Example: Responsive Element Sizes

### CSS

```css
/* Base style for all screens */

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 100px;
  gap: 10px;
}

.grid-item {
  background-color: #3498db;
  color: white;
  padding: 20px;
  text-align: center;
  border: 1px solid #fff;
}

/* Screens wider than 600px */

@media (min-width: 600px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 150px;
  }
}

/* Screens wider than 900px */

@media (min-width: 900px) {
  .grid-container {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 200px;
  }
}
```

---

### HTML

```html
<div class="grid-container">
  <div class="grid-item">Element 1</div>
  <div class="grid-item">Element 2</div>
  <div class="grid-item">Element 3</div>
  <div class="grid-item">Element 4</div>
  <div class="grid-item">Element 5</div>
  <div class="grid-item">Element 6</div>
</div>
```

---

## Layout Behavior

| Screen Width | Columns | Row Height |
| ------------ | ------- | ---------- |
| Default      | 2       | 100px      |
| ≥ 600px      | 3       | 150px      |
| ≥ 900px      | 4       | 200px      |

This technique allows grid layouts to **scale smoothly across devices**.

---

# More examples of advanced CSS Grid techniques

---

# 1. Dashboard Layout

A **dashboard layout** is common in applications such as:

* admin panels
* analytics dashboards
* project management tools
* SaaS platforms

Typical sections include:

* header (top navigation)
* sidebar (navigation menu)
* main content
* optional widgets or panels

---

## Layout Structure

Large screens:

```
Header  Header  Header
Sidebar Main    Main
Sidebar Main    Main
Footer  Footer  Footer
```

Mobile screens:

```
Header
Sidebar
Main
Footer
```

---

## HTML

```html
<div class="dashboard">

  <header class="header">Header</header>
  <aside class="sidebar">Sidebar</aside>
  <main class="main">Main Content</main>
  <footer class="footer">Footer</footer>

</div>
```

---

## CSS

```css
.dashboard {
  display: grid;
  gap: 10px;

  grid-template-areas:
    "header"
    "sidebar"
    "main"
    "footer";
}

.header { grid-area: header; background: #2ecc71; }
.sidebar { grid-area: sidebar; background: #3498db; }
.main { grid-area: main; background: #9b59b6; }
.footer { grid-area: footer; background: #e74c3c; }

.header, .sidebar, .main, .footer {
  padding: 20px;
  color: white;
}

/* Tablet */

@media (min-width: 768px) {

  .dashboard {
    grid-template-columns: 1fr 3fr;

    grid-template-areas:
      "header header"
      "sidebar main"
      "footer footer";
  }

}

/* Desktop */

@media (min-width: 1024px) {

  .dashboard {
    grid-template-columns: 250px 1fr;

    grid-template-areas:
      "header header"
      "sidebar main"
      "sidebar main"
      "footer footer";
  }

}
```

---

## Why Developers Use This

Benefits:

* clear navigation
* scalable layout
* ideal for **web apps**

Used in:

* admin dashboards
* CMS systems
* analytics platforms

---

# 2. Magazine Layout

The **magazine layout** is used for content-heavy websites such as:

* news websites
* blogs
* editorial sites
* online magazines

It typically contains:

* headline article
* secondary articles
* sidebar widgets

---

## Layout Structure

Desktop view:

```
Header  Header  Header
Main    Main    Sidebar
Article Article Sidebar
Footer  Footer  Footer
```

Mobile view:

```
Header
Main
Article
Sidebar
Footer
```

---

## HTML

```html
<div class="magazine">

  <header class="header">Header</header>
  <article class="main">Main Story</article>
  <article class="article">Article</article>
  <aside class="sidebar">Sidebar</aside>
  <footer class="footer">Footer</footer>

</div>
```

---

## CSS

```css
.magazine {
  display: grid;
  gap: 10px;

  grid-template-areas:
    "header"
    "main"
    "article"
    "sidebar"
    "footer";
}

.header { grid-area: header; background: #2ecc71; }
.main { grid-area: main; background: #9b59b6; }
.article { grid-area: article; background: #f39c12; }
.sidebar { grid-area: sidebar; background: #3498db; }
.footer { grid-area: footer; background: #e74c3c; }

.magazine > * {
  padding: 20px;
  color: white;
}

/* Desktop layout */

@media (min-width: 900px) {

  .magazine {

    grid-template-columns: 2fr 2fr 1fr;

    grid-template-areas:
      "header header header"
      "main main sidebar"
      "article article sidebar"
      "footer footer footer";
  }

}
```

---

## Why Developers Use This

Advantages:

* highlights main article
* keeps related content grouped
* improves readability

Used by:

* online newspapers
* blog platforms
* editorial websites

---

# 3. Card Grid Layout

The **card layout** is one of the most common modern web design patterns.

Used in:

* product listings
* blog post previews
* portfolios
* dashboards
* image galleries

Cards are arranged in **responsive grids**.

---

## Layout Structure

Mobile:

```
Card
Card
Card
```

Tablet:

```
Card Card
Card Card
```

Desktop:

```
Card Card Card Card
```

---

## HTML

```html
<div class="card-grid">

  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
  <div class="card">Card 5</div>
  <div class="card">Card 6</div>

</div>
```

---

## CSS

```css
.card-grid {
  display: grid;
  gap: 20px;

  grid-template-columns: 1fr;
}

.card {
  background: #3498db;
  color: white;
  padding: 40px;
  text-align: center;
  border-radius: 6px;
}

/* Tablet */

@media (min-width: 600px) {

  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }

}

/* Desktop */

@media (min-width: 900px) {

  .card-grid {
    grid-template-columns: repeat(4, 1fr);
  }

}
```

---

## Why Developers Use This

Advantages:

* very flexible
* scalable for large datasets
* great for **component-based UI**

Used in:

* e-commerce product grids
* portfolio galleries
* blog previews
* dashboards

---

# Quick Comparison

| Layout Pattern | Best Use            | Example Websites |
| -------------- | ------------------- | ---------------- |
| Dashboard      | Web applications    | Admin panels     |
| Magazine       | Content-heavy sites | News websites    |
| Card Grid      | Repeating content   | E-commerce       |

---

# Key Professional Insight

Experienced developers often combine **three powerful techniques**:

```
CSS Grid
+ grid-template-areas
+ Media Queries
```

This allows them to build layouts that are:

* responsive
* maintainable
* scalable
* visually organized

---

✅ **Pro Tip**

Many modern frameworks (like Tailwind UI, Chakra UI, and Material UI) internally implement **card grids and dashboard layouts using CSS Grid**.

---

# Exercise 1: Responsive Layout

Create a responsive grid layout with the following areas:

* header
* sidebar
* main
* footer

### Requirements

1. Default layout: single column
2. Screen width > 600px:

    * header spans two columns
    * sidebar and main occupy one column each
    * footer spans two columns
3. Screen width > 900px:

    * header spans three columns
    * sidebar spans one column
    * main spans two columns
    * footer spans three columns

---

## Solution

### CSS

```css
.container {
  display: grid;
  gap: 10px;

  grid-template-areas:
    "header"
    "sidebar"
    "main"
    "footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

@media (min-width: 600px) {

  .container {
    grid-template-columns: 1fr 1fr;

    grid-template-areas:
      "header header"
      "sidebar main"
      "footer footer";
  }

}

@media (min-width: 900px) {

  .container {
    grid-template-columns: 1fr 2fr;

    grid-template-areas:
      "header header header"
      "sidebar main main"
      "footer footer footer";
  }

}
```

---

### HTML

```html
<div class="container">

  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="main">Main</div>
  <div class="footer">Footer</div>

</div>
```

---

# Exercise 2: Grid and Media Queries

Create a grid container using `grid-template-areas` with the following rules:

### Requirements

Default layout:

```
Header
Sidebar
Main
Footer
```

For screens wider than **600px**:

```
Header Header
Sidebar Main
Footer Footer
```

For screens wider than **900px**:

```
Header Header Header
Sidebar Main Main
Footer Footer Footer
```

---

## Solution

### CSS

```css
.container {
  display: grid;
  gap: 10px;

  grid-template-areas:
    "header"
    "sidebar"
    "main"
    "footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

@media (min-width: 600px) {

  .container {
    grid-template-columns: repeat(2, 1fr);

    grid-template-areas:
      "header header"
      "sidebar main"
      "footer footer";
  }

}

@media (min-width: 900px) {

  .container {
    grid-template-columns: 1fr 2fr;

    grid-template-areas:
      "header header header"
      "sidebar main main"
      "footer footer footer";
  }

}
```

---

# Key Takeaways

CSS Grid combined with media queries allows developers to build **fully responsive layouts**.

Important techniques include:

1. Changing the **number of grid columns**
2. Changing **element placement using grid-template-areas**
3. Adjusting **element sizes for different screens**

These techniques help create **flexible, adaptive web layouts that work on any device**.

---

