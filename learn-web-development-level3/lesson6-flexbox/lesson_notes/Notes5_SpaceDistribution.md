# 9. Space Distribution in Flexbox

Flexbox gives you powerful control over how space is distributed between elements inside a Flex container.

The three main properties responsible for space distribution are:

* `flex-grow` → Controls how items grow
* `flex-shrink` → Controls how items shrink
* `flex-basis` → Controls the initial size of items

These properties allow you to create flexible, responsive layouts that adapt to different screen sizes.

---

# 9.1 The `flex-grow` Property

The `flex-grow` property specifies how much a Flex item can grow relative to other items when there is **available free space** inside the container.

It works as a **ratio**.

## Values

* Any integer or decimal number
* Default value: `0` (item does not grow)

---

## How It Works

If three items have:

```css
flex-grow: 1;
flex-grow: 2;
flex-grow: 1;
```

The total ratio = 1 + 2 + 1 = 4

* First item gets 1/4 of free space
* Second item gets 2/4 (half)
* Third item gets 1/4

---

## Example: Using `flex-grow`

### CSS

```css
.container {
  display: flex;
  border: 2px solid #000;
  padding: 10px;
  width: 500px;
}

.item {
  background-color: #3498db;
  color: white;
  padding: 10px;
  margin: 5px;
}

.grow-1 {
  flex-grow: 1;
}

.grow-2 {
  flex-grow: 2;
}
```

### HTML

```html
<div class="container">
  <div class="item grow-1">Element 1</div>
  <div class="item grow-2">Element 2</div>
  <div class="item grow-1">Element 3</div>
</div>
```

### Explanation

* `.grow-1` → grows normally
* `.grow-2` → grows twice as much
* Element 2 takes up more free space

---

# 9.2 The `flex-shrink` Property

The `flex-shrink` property defines how much a Flex item can shrink when there is **not enough space** inside the container.

It also works as a ratio.

## Values

* Any integer or decimal
* Default value: `1` (item can shrink)

---

## Example: Using `flex-shrink`

### CSS

```css
.container {
  display: flex;
  border: 2px solid #000;
  padding: 10px;
  width: 300px;
}

.item {
  background-color: #3498db;
  color: white;
  padding: 10px;
  margin: 5px;
  width: 150px;
}

.shrink-0 {
  flex-shrink: 0;
}

.shrink-1 {
  flex-shrink: 1;
}
```

### HTML

```html
<div class="container">
  <div class="item shrink-0">Element 1</div>
  <div class="item shrink-1">Element 2</div>
  <div class="item shrink-1">Element 3</div>
</div>
```

### Explanation

* `.shrink-0` → does NOT shrink
* `.shrink-1` → shrinks when space is limited
* Element 1 keeps its width
* Elements 2 and 3 shrink to fit

---

# 9.3 The `flex-basis` Property

The `flex-basis` property defines the **initial size** of a Flex item before free space is distributed.

Think of it as the starting size.

## Values

* px
* %
* em
* auto (default – size based on content)

---

## Example: Using `flex-basis`

### CSS

```css
.container {
  display: flex;
  border: 2px solid #000;
  padding: 10px;
}

.item {
  background-color: #3498db;
  color: white;
  padding: 10px;
  margin: 5px;
}

.basis-auto {
  flex-basis: auto;
}

.basis-100px {
  flex-basis: 100px;
}

.basis-50percent {
  flex-basis: 50%;
}
```

### HTML

```html
<div class="container">
  <div class="item basis-auto">Element 1</div>
  <div class="item basis-100px">Element 2</div>
  <div class="item basis-50percent">Element 3</div>
</div>
```

### Explanation

* `.basis-auto` → size based on content
* `.basis-100px` → fixed starting width
* `.basis-50percent` → half of container width

---

# 9.4 The `flex` Shorthand Property

The `flex` property is a shorthand for:

```
flex: [flex-grow] [flex-shrink] [flex-basis];
```

---

## Example: Using `flex`

### CSS

```css
.container {
  display: flex;
  border: 2px solid #000;
  padding: 10px;
}

.item {
  background-color: #3498db;
  color: white;
  padding: 10px;
  margin: 5px;
}

.flex-1 {
  flex: 1 1 auto;
}

.flex-2 {
  flex: 2 1 100px;
}

.flex-3 {
  flex: 1 0 50%;
}
```

### HTML

```html
<div class="container">
  <div class="item flex-1">Element 1</div>
  <div class="item flex-2">Element 2</div>
  <div class="item flex-3">Element 3</div>
</div>
```

### Explanation

* `flex: 1 1 auto;`

    * Grows normally
    * Shrinks if needed
    * Size based on content

* `flex: 2 1 100px;`

    * Grows twice as much
    * Shrinks if needed
    * Starts at 100px

* `flex: 1 0 50%;`

    * Can grow
    * Does NOT shrink
    * Starts at 50% width

---

# 9.5 Practical Exercises

---

# 🔹 Exercise 1 – Using `flex-grow`

### Requirements

* Create a Flex container.
* Three elements.
* Element 2 takes twice the free space.
* Elements 1 and 3 grow equally.

---

## ✅ Solution

### CSS

```css
.grow-container {
  display: flex;
  width: 600px;
  border: 3px solid #333;
  padding: 15px;
  background-color: #f4f4f4;
}

.box {
  background-color: #3498db;
  color: white;
  padding: 20px;
  margin: 5px;
}

.box1 {
  flex-grow: 1;
}

.box2 {
  flex-grow: 2;
}

.box3 {
  flex-grow: 1;
}
```

### HTML

```html
<div class="grow-container">
  <div class="box box1">Element 1</div>
  <div class="box box2">Element 2</div>
  <div class="box box3">Element 3</div>
</div>
```

### Result Explanation

Total ratio = 1 + 2 + 1 = 4
Element 2 gets twice as much free space as Elements 1 and 3.

---

# 🔹 Exercise 2 – Using `flex-shrink`

### Requirements

* Three elements inside a Flex container.
* Element 1 must NOT shrink.
* Elements 2 and 3 must shrink if necessary.

---

## ✅ Solution

### CSS

```css
.shrink-container {
  display: flex;
  width: 350px;
  border: 3px solid #555;
  padding: 15px;
}

.shrink-box {
  width: 150px;
  background-color: #9b59b6;
  color: white;
  padding: 20px;
  margin: 5px;
}

.no-shrink {
  flex-shrink: 0;
}

.allow-shrink {
  flex-shrink: 1;
}
```

### HTML

```html
<div class="shrink-container">
  <div class="shrink-box no-shrink">Element 1</div>
  <div class="shrink-box allow-shrink">Element 2</div>
  <div class="shrink-box allow-shrink">Element 3</div>
</div>
```

### Result Explanation

* Element 1 keeps its width.
* Elements 2 and 3 shrink to fit inside the container.

---

# 9.6 Summary Table

| Property    | Controls                | Default |
| ----------- | ----------------------- | ------- |
| flex-grow   | How items grow          | 0       |
| flex-shrink | How items shrink        | 1       |
| flex-basis  | Initial size            | auto    |
| flex        | Shorthand for all three | —       |

---

# Key Takeaways

* `flex-grow` distributes extra space.
* `flex-shrink` manages overflow situations.
* `flex-basis` sets the starting size.
* `flex` combines all three into one powerful property.
* These properties are essential for building responsive, dynamic layouts.

Mastering space distribution allows you to fully control how elements expand and contract inside a Flex container.

---