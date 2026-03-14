# 9. Color Manipulations in CSS

Modern web design often requires more than simple colors. Designers frequently use **color functions** to create gradients, shadows, transparency effects, and animations. CSS provides several powerful functions such as **rgb()**, **rgba()**, **hsl()**, and **hsla()** that allow precise control over color and transparency.

These functions can also be combined with gradients, animations, shadows, and CSS variables to build complex and visually appealing user interfaces.

---

# 9.1 Combining Color Functions

CSS allows multiple **color functions** to be combined in a single design element. This makes it possible to create complex gradients and smooth transitions between different colors and transparency levels.

Common color functions used in CSS include:

### 1. `rgb()`

Defines colors using **Red, Green, and Blue** values.

```
rgb(red, green, blue)
```

Example:

```css
color: rgb(255, 0, 0);
```

This creates **red color**.

---

### 2. `rgba()`

Adds an **alpha channel** (transparency) to RGB.

```
rgba(red, green, blue, alpha)
```

Example:

```css
color: rgba(255, 0, 0, 0.5);
```

The last value (0–1) controls transparency.

* `1` = fully visible
* `0` = fully transparent

---

### 3. `hsl()`

Defines colors using **Hue, Saturation, and Lightness**.

```
hsl(hue, saturation, lightness)
```

Example:

```css
color: hsl(120, 100%, 50%);
```

This produces **green**.

---

### 4. `hsla()`

Adds transparency to HSL.

```
hsla(hue, saturation, lightness, alpha)
```

Example:

```css
color: hsla(240, 100%, 50%, 0.7);
```

This produces a **semi-transparent blue**.

---

## Example 1: Creating a Semi-transparent Gradient

Color functions can be combined inside a **gradient** to create layered color transitions.

### HTML

```html
<div class="gradient"></div>
```

### CSS

```css
.gradient {
  min-height: 200px;
  background: linear-gradient(
    to right,
    rgba(255, 0, 0, 0.8),
    hsla(240, 100%, 50%, 0.7),
    rgba(0, 255, 0, 0.6)
  );
}
```

Explanation:

* Starts with **semi-transparent red**
* Transitions into **semi-transparent blue**
* Ends with **semi-transparent green**

This creates a smooth multi-color gradient.

---

## Example 2: Gradient Transition Through Multiple Colors

Different color functions can be combined in a **single gradient**.

### HTML

```html
<div class="gradient"></div>
```

### CSS

```css
.gradient {
  min-height: 200px;
  background: linear-gradient(
    45deg,
    hsl(0, 100%, 50%) 0%,
    rgb(255, 255, 0) 25%,
    hsla(240, 100%, 50%, 0.7) 50%,
    rgba(0, 255, 0, 0.6) 75%,
    rgb(0, 255, 255) 100%
  );
}
```

This gradient transitions through **five colors** using different color formats.

---

# 9.2 Creating Complex Shadows and Semi-transparent Effects

Color functions are commonly used for **shadows**, **transparency**, and **layered effects**.

---

## Example 3: Shadows Using `rgba()`

Transparent shadows create depth and lighting effects.

### HTML

```html
<div class="shadow"></div>
```

### CSS

```css
.shadow {
  min-height: 155px;
  box-shadow: 
      10px 10px 20px rgba(0, 0, 0, 0.5),
     -10px -10px 20px rgba(255, 255, 255, 0.2);
}
```

Explanation:

First shadow:

```
10px 10px 20px rgba(0,0,0,0.5)
```

* horizontal offset = 10px
* vertical offset = 10px
* blur = 20px
* semi-transparent black shadow

Second shadow adds a **light highlight effect**.

---

## Example 4: Semi-transparent Borders and Backgrounds

Transparency can also be used in borders and backgrounds.

### HTML

```html
<div class="border-background"></div>
```

### CSS

```css
.border-background {
  min-height: 200px;
  border: 2px solid rgba(0, 0, 0, 0.5);
  background-color: hsla(120, 100%, 50%, 0.3);
}
```

Explanation:

* Border uses **semi-transparent black**
* Background uses **semi-transparent green**

This creates a **layered visual effect**.

---

# 9.3 Animation and Transitions Using Color Functions

Color functions can also be used with **CSS animations and transitions**.

---

## Example 5: Background Animation Using `hsl()`

### HTML

```html
<div class="animated-background"></div>
```

### CSS

```css
@keyframes color-change {
  0% {
    background-color: hsl(0, 100%, 50%);
  }
  50% {
    background-color: hsl(120, 100%, 50%);
  }
  100% {
    background-color: hsl(240, 100%, 50%);
  }
}

.animated-background {
  min-height: 200px;
  animation: color-change 5s infinite;
}
```

Explanation:

The animation cycles through:

* **Red**
* **Green**
* **Blue**

Duration:

```
5 seconds
```

Repeats:

```
infinite
```

---

## Example 6: Text Color Transition

Transitions allow smooth changes when a user interacts with an element.

### HTML

```html
<div class="text-transition">Some text</div>
```

### CSS

```css
.text-transition {
  min-height: 100px;
  color: rgba(255, 0, 0, 1);
  transition: color 2s;
}

.text-transition:hover {
  color: rgba(0, 0, 255, 0.5);
}
```

Explanation:

Normal state:

```
Red text
```

On hover:

```
Semi-transparent blue
```

Transition time:

```
2 seconds
```

---

# 9.4 Using CSS Variables

CSS variables allow **centralized color management**, making styles easier to maintain.

Variables are defined inside `:root`.

---

## Example 7: Variables and Color Functions

### HTML

```html
<div class="advanced"></div>
```

### CSS

```css
:root {
  --primary-color: rgba(255, 0, 0, 0.8);
  --secondary-color: hsl(240, 100%, 50%);
  --border-color: rgba(0, 0, 0, 0.5);
}

.advanced {
  min-height: 200px;
  background: linear-gradient(
    to right,
    var(--primary-color),
    var(--secondary-color)
  );
  border: 2px solid var(--border-color);
}
```

Advantages:

* Easy color updates
* Reusable variables
* Cleaner CSS

---

## Example 8: Combining Multiple Gradients

Multiple gradients can be layered to create advanced effects.

### HTML

```html
<div class="multi-gradient"></div>
```

### CSS

```css
.multi-gradient {
  min-height: 200px;
  background:
    linear-gradient(to right, rgba(255, 0, 0, 0.5), rgba(0, 255, 0, 0.5)),
    linear-gradient(to bottom, hsla(240, 100%, 50%, 0.5), hsla(60, 100%, 50%, 0.5));
}
```

This creates **two layered gradients**:

1. horizontal gradient
2. vertical gradient

---

# Exercise 1 — Linear Color Gradient

## Task

Create a **45° gradient** transitioning through five colors.

### Requirements

* Class name: `multi-color-gradient`
* Gradient direction: **45°**
* Colors:

    * red (hsl)
    * yellow (rgb)
    * blue (hsla)
    * green (rgba)
    * cyan (rgb)
* Color stops:

    * 0%
    * 25%
    * 50%
    * 75%
    * 100%

---

## Solution

### HTML

```html
<div class="multi-color-gradient"></div>
```

### CSS

```css
.multi-color-gradient {
  min-height: 200px;
  background: linear-gradient(
    45deg,
    hsl(0, 100%, 50%) 0%,
    rgb(255, 255, 0) 25%,
    hsla(240, 100%, 50%, 0.7) 50%,
    rgba(0, 255, 0, 0.6) 75%,
    rgb(0, 255, 255) 100%
  );
}
```

This produces a **five-color diagonal gradient**.

---

# Exercise 2 — HSL Background Animation

## Task

Create an animation that changes background colors.

### Requirements

* Class: `animated-background`
* Colors:

    * red
    * green
    * blue
* Use **hsl()**
* Duration: **5 seconds**
* Repeat: **infinite**

---

## Solution

### HTML

```html
<div class="animated-background"></div>
```

### CSS

```css
@keyframes background-change {
  0% {
    background-color: hsl(0, 100%, 50%);
  }
  50% {
    background-color: hsl(120, 100%, 50%);
  }
  100% {
    background-color: hsl(240, 100%, 50%);
  }
}

.animated-background {
  min-height: 200px;
  animation: background-change 5s infinite;
}
```

This creates a smooth **red → green → blue animation**.

---

# Key Benefits of Color Manipulation in CSS

### 1. Better Visual Design

Advanced color functions create **modern, vibrant interfaces**.

### 2. Transparency Effects

RGBA and HSLA allow layered designs with **depth and lighting**.

### 3. Flexible Gradients

Multiple gradients can create **complex visual effects**.

### 4. Easy Color Management

CSS variables allow **centralized color control**.

### 5. Smooth Animations

Color transitions and animations improve **user experience**.

---

