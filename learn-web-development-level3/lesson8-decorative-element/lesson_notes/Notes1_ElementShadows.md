# 6. Element Shadows

Element shadows in CSS allow you to add depth, dimension, and visual hierarchy to web elements. Shadows can make components stand out, simulate elevation, or create inset (pressed) effects. The main property used to create shadows around elements is the **`box-shadow`** property.

---

# 6.1 The `box-shadow` Property

The `box-shadow` property is used to add one or more shadow effects to an element’s box.

It is highly flexible and allows control over:

* Horizontal and vertical position
* Blur intensity
* Shadow size (spread)
* Color
* Whether the shadow appears outside or inside the element

---

## Syntax

```css
element {
  box-shadow: offset-x offset-y blur-radius spread-radius color;
}
```

---

## Values Explained

### 1️⃣ `offset-x`

* Controls horizontal position of the shadow.
* Positive value → moves shadow **right**
* Negative value → moves shadow **left**

### 2️⃣ `offset-y`

* Controls vertical position of the shadow.
* Positive value → moves shadow **down**
* Negative value → moves shadow **up**

### 3️⃣ `blur-radius`

* Controls how blurry the shadow is.
* Default: `0` (sharp shadow)
* Larger value → softer, more diffused shadow

### 4️⃣ `spread-radius`

* Controls size of the shadow.
* Positive value → shadow becomes larger
* Negative value → shadow shrinks
* Default: `0`

### 5️⃣ `color`

* Sets shadow color.
* Supports all CSS color formats:

    * Named colors
    * Hex (`#000000`)
    * `rgb()`
    * `rgba()`
    * `hsl()`
    * `hsla()`

---

# 6.2 Usage Examples

---

## ✅ Basic Shadow

Creates a simple sharp shadow.

### CSS

```css
.shadow-basic {
  width: 200px;
  height: 200px;
  background-color: #3498db;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.5);
  margin: 20px;
}
```

### HTML

```html
<body>
  <div class="shadow-basic">Basic shadow</div>
</body>
```

### Explanation

* Shadow moves 10px right and 10px down
* Blur is 5px
* No spread defined (defaults to 0)
* Semi-transparent black shadow

---

## ✅ Blurred Shadow

Increases the blur radius for a softer shadow.

### CSS

```css
.shadow-blur {
  width: 200px;
  height: 200px;
  background-color: #2ecc71;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
  margin: 20px;
}
```

### Key Difference:

* Blur radius is 20px
* Shadow appears softer and more diffused

---

## ✅ Spread Shadow

Adds a spread radius to increase shadow size.

### CSS

```css
.shadow-spread {
  width: 200px;
  height: 200px;
  background-color: #e74c3c;
  box-shadow: 10px 10px 20px 10px rgba(0, 0, 0, 0.5);
  margin: 20px;
}
```

### Explanation:

* Spread-radius: 10px
* Shadow grows larger before blur is applied

---

## ✅ Inset Shadow (Inner Shadow)

Creates a shadow inside the element.

### CSS

```css
.shadow-inset {
  width: 200px;
  height: 200px;
  background-color: #f1c40f;
  box-shadow: inset 10px 10px 20px rgba(0, 0, 0, 0.5);
  margin: 20px;
}
```

### Explanation:

* The keyword `inset` makes the shadow appear inside.
* Creates a recessed or pressed effect.

---

# 6.3 `box-shadow` Settings in Detail

---

## Shadow Offset

| Value Type | Result             |
| ---------- | ------------------ |
| Positive X | Moves shadow right |
| Negative X | Moves shadow left  |
| Positive Y | Moves shadow down  |
| Negative Y | Moves shadow up    |

---

## Shadow Blur

* `0` → Sharp shadow
* Larger values → Softer, smoother shadow

---

## Shadow Spread

* Positive → Enlarges shadow
* Negative → Shrinks shadow
* `0` → Default size

---

## Shadow Color

Examples:

```css
box-shadow: 5px 5px 10px black;
box-shadow: 5px 5px 10px #000000;
box-shadow: 5px 5px 10px rgb(0, 0, 0);
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
box-shadow: 5px 5px 10px hsl(0, 0%, 0%);
```

---

## Inset Shadow

```css
box-shadow: inset 5px 5px 10px black;
```

Used to:

* Create pressed buttons
* Simulate depth inside containers
* Build neumorphism-style UI

---

# Multiple Shadows

You can apply multiple shadows by separating them with commas.

### CSS

```css
.multiple-shadows {
  width: 200px;
  height: 200px;
  background-color: #bdc3c7;
  box-shadow: 
    5px 5px 10px rgba(0, 0, 0, 0.5),
    -5px -5px 15px rgba(0, 0, 0, 0.3);
  margin: 20px;
}
```

### Explanation

* First shadow: bottom-right
* Second shadow: top-left
* Creates layered depth effect

---

# Practical Exercises

---

# 🧪 Exercise 1: Primary Shadow

### Task

Create an element that:

* Is 200x200 pixels
* Has background color `#3498db`
* Has shadow:

    * `offset-x`: 10px
    * `offset-y`: 10px
    * `blur-radius`: 5px
    * Color: `rgba(0, 0, 0, 0.5)`
* Has margin of 20px

---

## ✅ Solution

### CSS

```css
.primary-shadow {
  width: 200px;
  height: 200px;
  background-color: #3498db;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.5);
  margin: 20px;
}
```

### HTML

```html
<div class="primary-shadow"></div>
```

---

# 🧪 Exercise 2: Inner Shadow

### Task

Create an element that:

* Is 200x200 pixels
* Has background color `#f1c40f`
* Has an inner shadow with:

    * `offset-x`: 10px
    * `offset-y`: 10px
    * `blur-radius`: 20px
    * Color: `rgba(0, 0, 0, 0.5)`
* Has margin of 20px

---

## ✅ Solution

### CSS

```css
.inner-shadow {
  width: 200px;
  height: 200px;
  background-color: #f1c40f;
  box-shadow: inset 10px 10px 20px rgba(0, 0, 0, 0.5);
  margin: 20px;
}
```

### HTML

```html
<div class="inner-shadow"></div>
```

---

# Key Takeaways

* ✔ `box-shadow` adds depth and dimension
* ✔ Control position using `offset-x` and `offset-y`
* ✔ Soften shadows with `blur-radius`
* ✔ Adjust size using `spread-radius`
* ✔ Use `inset` for inner shadows
* ✔ Combine multiple shadows for advanced effects

---

Element shadows are essential in modern UI design. When used properly, they improve:

* Visual hierarchy
* User focus
* Interface realism
* Component separation

Mastering `box-shadow` gives you strong control over modern web aesthetics.

---