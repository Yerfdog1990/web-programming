# Positioning Types

Positioning in CSS defines how elements are placed on a webpage. Understanding the different types of positioning helps in creating complex and dynamic layouts. Now, let's dive into each positioning type: **static, relative, absolute, fixed, and sticky.**

---

# 1.1 Static Positioning

`static` is the default positioning value for all elements. Elements with this type of positioning are placed in the normal document flow, meaning they follow one another in the order defined by the HTML markup.

## Example Usage

### CSS

```css
.static-box {
  background-color: #3498db;
  color: white;
  padding: 20px;
  margin: 10px;
}
```

### HTML

```html
<div class="static-box">Item 1</div>
<div class="static-box">Item 2</div>
<div class="static-box">Item 3</div>
```

## Code Explanation

`.static-box`: elements with `position: static;` that are placed in the normal document flow one after the other.

---

# 1.2 Relative Positioning

`relative` allows you to position an element relative to its normal position in the flow of the document. The element stays in the normal flow but can be offset using the `top`, `right`, `bottom`, and `left` properties.

## Example Usage

### CSS

```css
.box {
  margin: 5px;
  padding: 20px;
  color: white;
  background-color: #2ecc71;
}

.relative-box {
  position: relative;
  top: 15px;
  left: 15px;
  color: white;
  background-color: #e74c3c;
}
```

### HTML

```html
<div>
  <div class="box">Normal element</div>
  <div class="box relative-box">Offset element</div>
  <div class="box">Normal element</div>
</div>
```

## Code Explanation

`.relative-box`: an element with `position: relative;` that is offset by 15 pixels down and 15 pixels to the right from its normal position.

---

# 1.3 Absolute Positioning

`absolute` allows you to position an element relative to the nearest positioned ancestor that is not `static`. If there isn't one, the element is positioned relative to the initial containing block (usually the `<html>`).

## Example Usage

### CSS

```css
.container {
  position: relative;
}

.box {
  margin: 5px;
  padding: 20px;
  color: white;
  background-color: #2ecc71;
}

.absolute-box {
  position: absolute;
  top: 15px;
  left: 15px;
  color: white;
  background-color: #e74c3c;
}
```

### HTML

```html
<div class="container">
  <div class="box">Normal element</div>
  <div class="box absolute-box">Absolutely positioned element</div>
  <div class="box">Normal element</div>
</div>
```

## Code Explanation

`.container`: a container with `position: relative;` inside which an absolute element is positioned.

`.absolute-box`: an element with `position: absolute;` that is positioned relative to the container. Offset by 15 pixels down and 15 pixels to the right from the top-left corner of the container.

---

# 1.4 Fixed Positioning

`fixed` allows you to position an element relative to the browser window. Such an element stays in place when the page is scrolled.

## Example Usage

### CSS

```css
.container {
  height: 200px;
  overflow: auto;
}

.fixed-box {
  position: fixed;
  background-color: #f39c12;
  color: white;
  padding: 20px;
  top: 15px;
  right: 15px;
}
```

### HTML

```html
<div class="container">
  <div class="fixed-box">Fixed element</div>
  Suspendisse tellus sem, sollicitudin ac sapien vitae, consectetur molestie nunc. Suspendisse gravida efficitur est, quis sagittis lectus tincidunt ut. Vestibulum ut tortor vel ligula laoreet fermentum ut quis orci. Nulla facilisi. Cras a vehicula ante. Nullam auctor magna sed justo fringilla condimentum. Aenean lacinia mauris ac neque rhoncus iaculis. Sed iaculis mattis ipsum sed facilisis. Ut non elit mi. Vestibulum tempus lectus eget turpis bibendum, id venenatis urna eleifend.
  Fusce at augue at tellus vehicula condimentum quis vitae massa. Vivamus faucibus lectus ut diam pharetra sollicitudin. Sed eu pretium lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vitae venenatis purus. Nullam sed porttitor elit. Praesent condimentum sem sit amet odio tempus, at finibus ante feugiat.
</div>
```

## Code Explanation

`.fixed-box`: an element with `position: fixed;` that stays in place when the page is scrolled. It's located in the top-right corner of the browser window.

---

# 1.5 Sticky Positioning

`sticky` allows an element to act like `relative` until it reaches a certain position on scroll, at which point it becomes `fixed` (acts like fixed).

## Example Usage

### CSS

```css
.sticky-box {
  position: sticky;
  background-color: #8e44ad;
  color: white;
  padding: 20px;
  top: 0;
}

.text {
  margin-top: 15px;
}

.content {
  height: 200px;
  background-color: #ecf0f1;
  overflow: auto;
}
```

### HTML

```html
<div class="content">
  <div class="sticky-box">Sticky element</div>
  <div class="text">
    Suspendisse tellus sem, sollicitudin ac sapien vitae, consectetur molestie nunc. Suspendisse gravida efficitur est, quis sagittis lectus tincidunt ut. Vestibulum ut tortor vel ligula laoreet fermentum ut quis orci. Nulla facilisi.
  </div>
</div>
```

## Code Explanation

`.sticky-box`: an element with `position: sticky;` that behaves like `relative` until its top border reaches the top of the browser window. After this, the element locks to that position and remains there during further scrolling.

---

# 1.6 Comparing Positioning Types

## Comparison of positioning types:

| Positioning Type | Description                                                                                 | Usage                                                           |
| ---------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| static           | Default positioning. Elements follow the normal document flow.                              | Basic placement of elements.                                    |
| relative         | Positioning relative to an element's normal position.                                       | Offsetting an element without removing it from the normal flow. |
| absolute         | Positioning relative to the nearest positioned ancestor that is not static.                 | Precise placement of an element within a container.             |
| fixed            | Positioning relative to the browser window.                                                 | Elements that should stay in place when the page is scrolled.   |
| sticky           | An element acts like relative until it reaches a specified position, then it becomes fixed. | Pinning an element during scrolling.                            |

---

# Exercise

## Task

Create a simple webpage that includes:

1. Three static boxes.
2. One relative box offset 20px down and 20px right.
3. One absolute box inside a relative container.
4. One fixed element in the bottom-left corner of the browser window.
5. One sticky header inside a scrollable container.

---

# Solution

### CSS

```css
.static-box {
  background: #3498db;
  color: white;
  padding: 10px;
  margin: 5px;
}

.relative-box {
  position: relative;
  top: 20px;
  left: 20px;
  background: #e74c3c;
  color: white;
  padding: 10px;
}

.container {
  position: relative;
  border: 2px solid black;
  height: 150px;
  margin: 20px 0;
}

.absolute-box {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #2ecc71;
  color: white;
  padding: 10px;
}

.fixed-box {
  position: fixed;
  bottom: 10px;
  left: 10px;
  background: #f39c12;
  color: white;
  padding: 10px;
}

.scroll-container {
  height: 150px;
  overflow: auto;
  border: 1px solid gray;
}

.sticky-box {
  position: sticky;
  top: 0;
  background: #8e44ad;
  color: white;
  padding: 10px;
}
```

### HTML

```html
<div class="static-box">Static 1</div>
<div class="static-box">Static 2</div>
<div class="static-box">Static 3</div>

<div class="relative-box">Relative Box</div>

<div class="container">
  <div class="absolute-box">Absolute Box</div>
</div>

<div class="fixed-box">Fixed Box</div>

<div class="scroll-container">
  <div class="sticky-box">Sticky Header</div>
  <p>Scroll content here...</p>
  <p>More content...</p>
  <p>Even more content...</p>
</div>
```

This exercise demonstrates how all five positioning types behave and how they differ in layout behavior.

---