# Flexbox and Responsiveness

Flexbox (Flexible Box Layout) is a powerful CSS layout module used for building **flexible and responsive layouts**. It is designed for **one-dimensional layouts**, meaning it arranges elements **either in a row or in a column**.

Flexbox automatically adjusts the size and position of elements depending on the **available space**, making it extremely useful for **responsive web design**.

In responsive design, Flexbox allows elements to:

* Expand or shrink depending on screen size
* Wrap to new rows when space becomes limited
* Maintain consistent spacing and alignment across devices

---

# 10.1 Responsive Columns

Flexbox makes it easy to create **responsive columns** that automatically adjust to the available screen width.

Instead of defining fixed widths, Flexbox uses properties like:

* **flex-grow**
* **flex-shrink**
* **flex-basis**

These properties control how elements grow, shrink, and determine their initial size.

---

## Flex Container and Flex Items

### Flex Container

A **flex container** is the element that has:

```css
display: flex;
```

It controls the layout of its child elements.

Example:

```css
.flex-container {
  display: flex;
}
```

---

### Flex Items

**Flex items** are the direct child elements inside the flex container.

Example:

```html
<div class="flex-container">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
</div>
```

---

## Example: Creating Responsive Columns

This example creates **three responsive columns** that automatically adjust to screen size.

### CSS

```css
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.flex-item {
  flex: 1 1 200px;
  background-color: #3498db;
  color: white;
  padding: 20px;
  text-align: center;
}
```

---

### HTML

```html
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Responsive Columns with Flexbox</title>
<link rel="stylesheet" href="styles.css">
</head>

<body>

<div class="flex-container">
  <div class="flex-item">Column 1</div>
  <div class="flex-item">Column 2</div>
  <div class="flex-item">Column 3</div>
</div>

</body>
</html>
```

---

## Code Explanation

### `.flex-container`

```css
display: flex;
```

Turns the container into a **flex container**.

```css
flex-wrap: wrap;
```

Allows items to **move to the next row** if there isn't enough horizontal space.

```css
gap: 10px;
```

Adds spacing between items.

---

### `.flex-item`

```css
flex: 1 1 200px;
```

This shorthand represents:

```
flex-grow: 1
flex-shrink: 1
flex-basis: 200px
```

Meaning:

| Property    | Meaning                            |
| ----------- | ---------------------------------- |
| flex-grow   | Items can grow to fill extra space |
| flex-shrink | Items can shrink if necessary      |
| flex-basis  | Initial size of each item          |

So each column:

* Starts at **200px**
* **Expands** if more space is available
* **Shrinks** if space becomes limited

This automatically creates **responsive columns**.

---

# 10.2 Responsive Image Gallery

Flexbox can also be used to build **responsive image galleries** that change the number of columns depending on screen size.

Media queries are used to adjust the layout for different devices.

---

## Example: Responsive Flexbox Image Gallery

### HTML

```html
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Responsive Flexbox Gallery</title>

<style>

.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.gallery img {
  flex: 1 1 calc(33.333% - 10px);
  max-width: calc(33.333% - 10px);
  height: auto;
}

@media (max-width: 768px) {

.gallery img {
  flex: 1 1 calc(50% - 10px);
  max-width: calc(50% - 10px);
}

}

@media (max-width: 480px) {

.gallery img {
  flex: 1 1 100%;
  max-width: 100%;
}

}

</style>

</head>

<body>

<div class="gallery">

<img src="image1.jpg" alt="Image 1">
<img src="image2.jpg" alt="Image 2">
<img src="image3.jpg" alt="Image 3">
<img src="image4.jpg" alt="Image 4">
<img src="image5.jpg" alt="Image 5">

</div>

</body>
</html>
```

---

## Explanation

### Large Screens (greater than 768px)

```css
flex: 1 1 calc(33.333% - 10px);
```

Images occupy **one-third of the container width**.

So the layout becomes:

```
3 columns
```

---

### Medium Screens (≤768px)

```css
flex: 1 1 calc(50% - 10px);
```

Images take **half of the container width**.

Layout becomes:

```
2 columns
```

---

### Small Screens (≤480px)

```css
flex: 1 1 100%;
```

Images take **full width**.

Layout becomes:

```
1 column
```

---

# 10.3 Complex Responsive Layout with Flexbox

Flexbox can also be used to create **complete page layouts** that adapt to different screen sizes.

This example creates a layout with:

* Header
* Sidebar
* Main content
* Footer

---

## Example: Complex Flexbox Layout

### HTML

```html
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Complex Flexbox Layout</title>

<style>

body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
}

header, footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  padding: 20px;
  background-color: #f4f4f4;
}

aside {
  background-color: #ccc;
  padding: 20px;
}

@media (min-width: 768px) {

main {
  flex-direction: row;
}

.content {
  flex: 3;
}

aside {
  flex: 1;
}

}

</style>

</head>

<body>

<header>Header</header>

<main>

<aside>Sidebar</aside>

<div class="content">
Main Content
</div>

</main>

<footer>Footer</footer>

</body>

</html>
```

---

## Explanation

### Small Screens

Layout becomes **vertical**:

```
Header
Sidebar
Main Content
Footer
```

---

### Larger Screens (≥768px)

Layout becomes **horizontal**:

```
Header
Sidebar | Main Content
Footer
```

Flex values determine proportions:

```
Sidebar: flex 1
Content: flex 3
```

Meaning:

* Sidebar = **25%**
* Content = **75%**

---

# Summary

| Concept        | Description                                   |
| -------------- | --------------------------------------------- |
| Flexbox        | CSS layout system for one-dimensional layouts |
| Flex Container | Parent element with `display: flex`           |
| Flex Items     | Child elements inside the flex container      |
| flex-wrap      | Allows items to move to new rows              |
| flex-grow      | Allows items to expand                        |
| flex-shrink    | Allows items to shrink                        |
| flex-basis     | Initial size of flex items                    |

Flexbox is widely used because it allows layouts to **automatically adapt to different screen sizes**.

---

# Exercises

---

# Exercise 1: Responsive Columns

## Requirements

Create a Flexbox layout with **three columns** that adjust to available screen space.

Requirements:

* Create a flex container
* Allow items to wrap
* Use **flex-grow**, **flex-shrink**, and **flex-basis**
* Columns should distribute evenly

---

## Solution

### CSS

```css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.item {
  flex: 1 1 200px;
  background-color: steelblue;
  color: white;
  padding: 20px;
  text-align: center;
}
```

---

### HTML

```html
<div class="container">

<div class="item">Column 1</div>
<div class="item">Column 2</div>
<div class="item">Column 3</div>

</div>
```

---

# Exercise 2: Responsive Image Gallery

## Requirements

Create an image gallery that changes columns depending on screen size:

| Screen Size   | Layout    |
| ------------- | --------- |
| Large screens | 3 columns |
| ≤768px        | 2 columns |
| ≤480px        | 1 column  |

---

## Solution

### CSS

```css
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.gallery img {
  flex: 1 1 calc(33.33% - 10px);
  max-width: calc(33.33% - 10px);
}

@media (max-width: 768px) {

.gallery img {
  flex: 1 1 calc(50% - 10px);
  max-width: calc(50% - 10px);
}

}

@media (max-width: 480px) {

.gallery img {
  flex: 1 1 100%;
  max-width: 100%;
}

}
```

---

### HTML

```html
<div class="gallery">

<img src="img1.jpg" alt="">
<img src="img2.jpg" alt="">
<img src="img3.jpg" alt="">
<img src="img4.jpg" alt="">
<img src="img5.jpg" alt="">

</div>
```

---

✅ After completing this section, you should understand:

* How **Flexbox supports responsive design**
* How to create **responsive columns**
* How to build **responsive image galleries**
* How to design **adaptive page layouts with Flexbox**

---
