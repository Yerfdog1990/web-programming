# Transformation Center (transform-origin)

The **`transform-origin`** property in CSS defines the point around which a transformation occurs.

When you apply transformations such as:

* `rotate()`
* `scale()`
* `skew()`
* `translate()`

the transformation happens relative to a specific point on the element.

By default, this point is the **center of the element**.

---

# 2.1 The `transform-origin` Property

## Definition

The `transform-origin` property sets the reference point for transformations.

## Syntax

```css
element {
  transform-origin: x-axis y-axis z-axis;
}
```

### Where:

* **x-axis** → horizontal position of the origin
* **y-axis** → vertical position of the origin
* **z-axis** → used for 3D transformations (optional)

---

## Possible Values

### 1. Keywords

* `top`
* `right`
* `bottom`
* `left`
* `center`

### 2. Percentage Values

* Based on the element’s width and height.
* `0% 0%` → top left
* `50% 50%` → center (default)
* `100% 100%` → bottom right

### 3. Absolute Values

* Defined in pixels or other units.
* Example: `50px 100px`

---

## Common Examples

| Value        | Meaning                              |
| ------------ | ------------------------------------ |
| `50% 50%`    | Center (default)                     |
| `0 0`        | Top left corner                      |
| `100% 100%`  | Bottom right corner                  |
| `50px 100px` | 50px right, 100px down from top-left |

---

# Centering the Origin Point (Default Behavior)

By default, transformations occur around the center of the element.

## Example: Rotate Around Center

```html
<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  transform: rotate(45deg);
}
</style>
</head>
<body>

<div class="box"></div>

</body>
</html>
```

### Explanation

* No `transform-origin` is specified.
* The box rotates **around its center** (default behavior).

---

# 2.2 Offset Point

You can move the transformation origin to different positions.

---

## Origin at Top Left Corner

```html
<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 100px;
  height: 100px;
  background-color: #e74c3c;
  transform: rotate(45deg);
  transform-origin: top left;
}
</style>
</head>
<body>

<div class="box"></div>

</body>
</html>
```

### Explanation

* The origin point is now at the **top left corner**.
* The box rotates around that corner instead of the center.

---

## Origin at Bottom Right Corner

```html
<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 100px;
  height: 100px;
  background-color: #2ecc71;
  transform: rotate(45deg);
  transform-origin: bottom right;
}
</style>
</head>
<body>

<div class="box"></div>

</body>
</html>
```

### Explanation

* The origin is set to **bottom right**.
* Rotation now happens around that corner.

---

# 2.3 Setting Values

## Using Percentage Values

```html
<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 100px;
  height: 100px;
  background-color: #9b59b6;
  transform: rotate(45deg);
  transform-origin: 25% 75%;
}
</style>
</head>
<body>

<div class="box"></div>

</body>
</html>
```

### Explanation

* Origin is:

    * 25% from the left
    * 75% from the top
* Rotation occurs around that custom position.

---

## Using Absolute Values

```html
<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 100px;
  height: 100px;
  background-color: #f1c40f;
  transform: rotate(45deg);
  transform-origin: 50px 20px;
}
</style>
</head>
<body>

<div class="box"></div>

</body>
</html>
```

### Explanation

* Origin is moved:

    * 50px right
    * 20px down
* The transformation rotates around that exact pixel location.

---

# 2.4 Practical Use

## 1. Rotating Around a Specific Point (Clock Hand Example)

A common use of `transform-origin` is when creating a clock hand that rotates from its base.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.clock {
  position: relative;
  width: 200px;
  height: 200px;
  border: 5px solid #333;
  border-radius: 50%;
  margin: 50px auto;
}

.hand {
  position: absolute;
  bottom: 50%;
  left: 50%;
  width: 5px;
  height: 50%;
  background-color: #333;
  transform-origin: bottom center;
}

.hour-hand {
  transform: rotate(30deg);
}
</style>
</head>
<body>

<div class="clock">
  <div class="hand hour-hand"></div>
</div>

</body>
</html>
```

### Explanation

* `transform-origin: bottom center;`
* The hand rotates from its **bottom**, just like a real clock.
* Without setting the origin, it would rotate from the center.

---

## 2. Creating a Scalable Element

Changing the origin is useful for scaling from a specific direction.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 100px;
  height: 100px;
  background-color: #1abc9c;
  transition: transform 0.5s;
  transform-origin: top left;
}

.box:hover {
  transform: scale(1.5);
}
</style>
</head>
<body>

<div class="box"></div>

</body>
</html>
```

### Explanation

* The box scales from the **top left corner**.
* If not specified, scaling would occur from the center.

---

# Exercises with Solutions

---

# Exercise 1: Centered Rotation

## Requirements

* 100x100 pixels
* Background color: `#3498db`
* Rotate 45 degrees on hover
* Rotation around center (`50% 50%`)

---

## Solution

```html
<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  transition: transform 0.5s;
  transform-origin: 50% 50%;
}

.box:hover {
  transform: rotate(45deg);
}
</style>
</head>
<body>

<div class="box"></div>

</body>
</html>
```

### Explanation

* `transform-origin: 50% 50%;` ensures center rotation.
* The box rotates smoothly on hover.

---

# Exercise 2: Rotate at an Angle (Bottom Right)

## Requirements

* 100x100 pixels
* Background color: `#2ecc71`
* Rotate 45 degrees on hover
* Origin at bottom right

---

## Solution

```html
<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 100px;
  height: 100px;
  background-color: #2ecc71;
  transition: transform 0.5s;
  transform-origin: bottom right;
}

.box:hover {
  transform: rotate(45deg);
}
</style>
</head>
<body>

<div class="box"></div>

</body>
</html>
```

### Explanation

* `transform-origin: bottom right;` changes the rotation pivot.
* The element rotates around its bottom-right corner.

---

# Key Takeaways

* `transform-origin` defines **where transformations start**.
* Default origin is **center (50% 50%)**.
* You can use:

    * Keywords
    * Percentages
    * Pixel values
* Essential for:

    * Rotating clock hands
    * Custom pivot animations
    * Direction-based scaling
    * Advanced UI effects

---

Mastering `transform-origin` gives you full control over how elements rotate and scale, allowing you to create realistic animations and professional interface designs.

---