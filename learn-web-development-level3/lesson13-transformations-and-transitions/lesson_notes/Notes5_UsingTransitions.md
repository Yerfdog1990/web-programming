# 5. Using Transitions

CSS transitions allow you to animate changes in an element’s properties smoothly instead of instantly. They are commonly used to:

* Change **color**
* Change **size**
* Change **position**

Transitions improve user interaction by making effects more dynamic and visually appealing.

---

# 5.1 Changing Color

One of the most common uses of CSS transitions is changing colors. You can animate:

* Background color
* Text color
* Border color

---

## Example 1: Changing Background Color

This example changes the background color when the user hovers over the element.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Changing Background Color</title>
<style>
.box {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  transition: background-color 1s ease;
}

.box:hover {
  background-color: #2ecc71;
}
</style>
</head>
<body>

<div class="box"></div>

</body>
</html>
```

### Code Explanation

* `.box` → fixed width and height (100px × 100px)
* Initial background color → `#3498db`
* `transition: background-color 1s ease;`

    * Animates only the background color
    * Duration → 1 second
    * Timing → `ease`
* `.box:hover` → changes background to `#2ecc71`

Result: The color smoothly changes from blue to green.

---

## Example 2: Changing Text Color

This example changes text color on hover.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Changing Text Color</title>
<style>
.text {
  font-size: 24px;
  color: #e74c3c;
  transition: color 0.5s linear;
}

.text:hover {
  color: #8e44ad;
}
</style>
</head>
<body>

<div class="text">Hover over me!</div>

</body>
</html>
```

### Code Explanation

* Initial text color → `#e74c3c`
* On hover → changes to `#8e44ad`
* Duration → 0.5 seconds
* Timing → `linear` (constant speed)

Result: Text smoothly changes from red to purple.

---

# 5.2 Changing Size

Transitions can animate:

* Width
* Height
* Both dimensions together

---

## Example 1: Changing Width

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Changing Width</title>
<style>
.box {
  width: 100px;
  height: 100px;
  background-color: #f39c12;
  transition: width 2s ease-in-out;
}

.box:hover {
  width: 200px;
}
</style>
</head>
<body>

<div class="box"></div>

</body>
</html>
```

### Code Explanation

* Initial width → 100px
* Hover width → 200px
* Duration → 2 seconds
* Timing → `ease-in-out`

Result: The box smoothly expands horizontally.

---

## Example 2: Changing Height

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Changing Height</title>
<style>
.container {
  height: 200px;
}

.box {
  width: 100px;
  height: 100px;
  background-color: #1abc9c;
  transition: height 1.5s ease;
}

.box:hover {
  height: 200px;
}
</style>
</head>
<body>

<div class="container">
  <div class="box"></div>
</div>

</body>
</html>
```

### Code Explanation

* Initial height → 100px
* Hover height → 200px
* Duration → 1.5 seconds
* Timing → `ease`

Result: The box smoothly grows vertically.

---

# 5.3 Changing Position

You can move elements using:

* `top`, `left`, `right`, `bottom`
* `transform: translate()`

---

## Example 1: Moving with `left`

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Moving Element</title>
<style>
.box {
  position: relative;
  width: 100px;
  height: 100px;
  background-color: #e74c3c;
  transition: left 2s;
  left: 0;
}

.box:hover {
  left: 100px;
}
</style>
</head>
<body>

<div class="box"></div>

</body>
</html>
```

### Code Explanation

* `position: relative;` allows movement using `left`
* Initial `left: 0`
* Hover → `left: 100px`
* Duration → 2 seconds

Result: The box moves 100px to the right smoothly.

---

## Example 2: Moving with `transform: translate`

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Moving with transform</title>
<style>
.container {
  height: 150px;
}

.box {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  transition: transform 1s;
  transform: translate(0, 0);
}

.box:hover {
  transform: translate(100px, 50px);
}
</style>
</head>
<body>

<div class="container">
  <div class="box"></div>
</div>

</body>
</html>
```

### Code Explanation

* Initial position → `translate(0, 0)`
* Hover → `translate(100px, 50px)`
* Duration → 1 second

Result: The box moves right and downward smoothly.

---

# Exercise 1: Background Transition

## Task

Create an element:

* Size: 150x150 pixels
* Background: `#3498db`
* On hover → change to `#e74c3c`
* Duration → 2 seconds
* Timing → `ease-in-out`

---

## ✅ Solution

```html
<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 150px;
  height: 150px;
  background-color: #3498db;
  transition: background-color 2s ease-in-out;
}

.box:hover {
  background-color: #e74c3c;
}
</style>
</head>
<body>

<div class="box"></div>

</body>
</html>
```

### Explanation

* `background-color` is animated
* Duration → 2 seconds
* Timing → smooth start and end (`ease-in-out`)

---

# Exercise 2: Position Transition

## Task

Create an element:

* Size: 100x100 pixels
* Background: `#e74c3c`
* Move 100px to the right on hover using `left`
* Duration → 2 seconds

---

## ✅ Solution

```html
<!DOCTYPE html>
<html>
<head>
<style>
.box {
  position: relative;
  width: 100px;
  height: 100px;
  background-color: #e74c3c;
  left: 0;
  transition: left 2s;
}

.box:hover {
  left: 100px;
}
</style>
</head>
<body>

<div class="box"></div>

</body>
</html>
```

### Explanation

* `position: relative` enables movement
* Initial `left: 0`
* Hover → `left: 100px`
* Transition lasts 2 seconds

---

# Summary

Using CSS transitions, you can smoothly animate:

* ✅ Colors (background, text)
* ✅ Size (width, height)
* ✅ Position (`left`, `transform: translate`)

Transitions make web pages more interactive and visually engaging while improving user experience.

---