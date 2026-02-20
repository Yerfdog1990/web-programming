# Background Repeat

## 3.1 The `background-repeat` Property

The **`background-repeat`** property in CSS controls how a background image is repeated inside an element.

By default, background images repeat both **horizontally and vertically**.

Together with `background-size`, it gives developers flexible control over how background images are displayed and scaled.

---

## Default Behavior

If you do not specify `background-repeat`, the image repeats both horizontally and vertically.

---

## Values of `background-repeat`

| Value       | Description                                        |
| ----------- | -------------------------------------------------- |
| `repeat`    | Repeats both horizontally and vertically (default) |
| `repeat-x`  | Repeats only horizontally                          |
| `repeat-y`  | Repeats only vertically                            |
| `no-repeat` | Does not repeat                                    |

---

## 1️⃣ The `repeat` Value

Repeats the image both horizontally and vertically.

### CSS

```css
.repeat {
  width: 200px;
  height: 200px;
  background-image: url('./img/emoji-alien.jpg');
  background-repeat: repeat;
  border: 1px solid #000;
}
```

### HTML

```html
<div class="repeat"></div>
```

### Code Explanation

* The image fills the entire element by repeating across rows and columns.
* This is the default behavior.

---

## 2️⃣ The `repeat-x` Value

Repeats the image horizontally only.

### CSS

```css
.repeat-x {
  width: 200px;
  height: 200px;
  background-image: url('./img/emoji-alien.jpg');
  background-repeat: repeat-x;
  border: 1px solid #000;
}
```

### HTML

```html
<div class="repeat-x"></div>
```

### Code Explanation

* The image repeats left to right.
* It does not repeat vertically.

---

## 3️⃣ The `repeat-y` Value

Repeats the image vertically only.

### CSS

```css
.repeat-y {
  width: 200px;
  height: 200px;
  background-image: url('./img/emoji-alien.jpg');
  background-repeat: repeat-y;
  border: 1px solid #000;
}
```

### HTML

```html
<div class="repeat-y"></div>
```

### Code Explanation

* The image repeats from top to bottom.
* It does not repeat horizontally.

---

## 4️⃣ The `no-repeat` Value

Displays the image only once.

### CSS

```css
.no-repeat {
  width: 200px;
  height: 200px;
  background-image: url('./img/emoji-alien.jpg');
  background-repeat: no-repeat;
  border: 1px solid #000;
}
```

### HTML

```html
<div class="no-repeat"></div>
```

### Code Explanation

* The image appears only once.
* Any remaining space in the element is left empty (unless other properties are used).

---

# 3.2 The `background-size` Property

The `background-size` property controls how large the background image appears inside the element.

---

## Values of `background-size`

| Value        | Description                                            |
| ------------ | ------------------------------------------------------ |
| `auto`       | Default size (original image size)                     |
| `cover`      | Scales image to fully cover element (may crop)         |
| `contain`    | Scales image to fit fully inside element (no cropping) |
| `100px 50px` | Sets width and height in pixels                        |
| `50% 50%`    | Sets width and height as percentages                   |

---

## 1️⃣ Default Size (`auto`)

```css
.size-auto {
  width: 200px;
  height: 200px;
  background-image: url('./img/emoji-alien.jpg'); /* original image size - 35px x 35px */
  background-size: auto;
  border: 1px solid #000;
}
```

### Explanation:

* The image keeps its original dimensions.

---

## 2️⃣ `cover`

```css
.size-cover {
  width: 300px;
  height: 200px;
  background-image: url('./img/emoji-alien.jpg'); /* original image size - 35px x 35px */
  background-size: cover;
  border: 1px solid #000;
}
```

### Explanation:

* The image scales to completely cover the element.
* Proportions are maintained.
* Parts of the image may be cropped.

---

## 3️⃣ `contain`

```css
.size-contain {
  width: 300px;
  height: 200px;
  background-image: url('./img/emoji-alien.jpg'); /* original image size - 35px x 35px */
  background-size: contain;
  border: 1px solid #000;
}
```

### Explanation:

* The image scales to fit entirely inside the element.
* Entire image is visible.
* Empty areas may appear.

---

## 4️⃣ Absolute Values (Pixels)

```css
.size-pixels {
  width: 200px;
  height: 200px;
  background-image: url('./img/emoji-alien.jpg');
  background-size: 100px 50px;
  border: 1px solid #000;
}
```

### Explanation:

* Image width = 100px
* Image height = 50px
* May distort image if proportions change.

---

## 5️⃣ Percentage Values

```css
.size-percent {
  width: 200px;
  height: 200px;
  background-image: url('./img/emoji-alien.jpg');
  background-size: 50% 50%;
  border: 1px solid #000;
}
```

### Explanation:

* Image width = 50% of element width
* Image height = 50% of element height

---

# 3.3 Using `background-repeat` and `background-size` Together

These properties are commonly combined.

### Example:

```css
.combined {
  width: 200px;
  height: 200px;
  background-image: url('./img/emoji-alien.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid #000;
}
```

### HTML

```html
<body>
  <div class="combined"></div>
</body>
```

### Explanation

* `background-repeat: no-repeat;` → Image appears once
* `background-size: cover;` → Image scales to fully cover element
* Parts may be cropped

---

# ✅ Exercise 1: Background (repeat)

### Task:

Create a block sized **200x200 pixels** with a background image of **50x50 pixels** that repeats both horizontally and vertically.

### Requirements:

* Block size: 200x200 pixels
* Background image: 50x50 pixels
* Must explicitly use `background-repeat: repeat;`

---

### ✅ Solution:

```css
.repeat-exercise {
  width: 200px;
  height: 200px;
  background-image: url('./img/small-image.jpg'); /* 50px x 50px image */
  background-size: 50px 50px;
  background-repeat: repeat;
  border: 1px solid #000;
}
```

```html
<div class="repeat-exercise"></div>
```

### Result:

* The 50x50 image tiles across the 200x200 block.
* The image repeats both horizontally and vertically.

---

# ✅ Exercise 2: Background (cover)

### Task:

Create a block sized **200x200 pixels** with a background image of **150x150 pixels** scaled to fully cover the element.

### Requirements:

* Block size: 200x200 pixels
* Image size: 150x150 pixels
* Use `background-size: cover;`
* Image must fully cover the block

---

### ✅ Solution:

```css
.cover-exercise {
  width: 200px;
  height: 200px;
  background-image: url('./img/medium-image.jpg'); /* 150px x 150px image */
  background-size: cover;
  background-repeat: no-repeat;
  border: 1px solid #000;
}
```

```html
<div class="cover-exercise"></div>
```

### Result:

* The image scales to fully cover the 200x200 block.
* Image proportions are maintained.
* Parts of the image may be cropped.

---

# Summary

The `background-repeat` property controls how background images repeat:

* `repeat` → horizontal + vertical
* `repeat-x` → horizontal only
* `repeat-y` → vertical only
* `no-repeat` → no repetition

The `background-size` property controls how background images scale:

* `auto` → original size
* `cover` → fill entire element (may crop)
* `contain` → fit inside element (no cropping)
* Absolute values → fixed dimensions
* Percentages → relative to element size

Using both properties together gives full control over how background images appear and behave in web layouts.

---