# Form Pseudo-classes in CSS

Form pseudo-classes allow CSS to **style form elements depending on their current state**. These states change dynamically when users interact with a form or when validation rules apply.

Using form pseudo-classes helps developers:

* Improve **user experience**
* Provide **visual feedback**
* Make forms more **interactive and accessible**
* Highlight **errors and disabled elements**

Common form pseudo-classes include:

* `:checked`
* `:disabled`
* `:enabled`
* `:invalid`

---

# 4.1 Pseudo-class `:checked`

The `:checked` pseudo-class applies to form elements that are in a **selected state**.

This pseudo-class works with:

* **Checkboxes** (`<input type="checkbox">`)
* **Radio buttons** (`<input type="radio">`)
* **Options** (`<option>` in `<select>`)

When a user selects one of these elements, the browser applies the styles defined in `:checked`.

---

## Syntax

```css
selector:checked {
  property: value;
}
```

---

## Example

> **Note:** By default, browsers use their own native appearance for checkboxes and radio buttons. To make custom styles like `background-color` work, you should first set `appearance: none;` and define basic dimensions and borders.

### CSS

```css
/* Custom Checkbox */
input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #333;
  border-radius: 4px;
  cursor: pointer;
}

/* Styling selected checkbox */
input[type="checkbox"]:checked {
  background-color: #3498db;
  border-color: #3498db;
}

/* Custom Radio Button */
input[type="radio"] {
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #333;
  border-radius: 50%;
  cursor: pointer;
}

/* Styling selected radio button */
input[type="radio"]:checked {
  background-color: #2ecc71;
  border-color: #2ecc71;
}

/* Styling selected option */
/* Note: styling <option> has very limited browser support. */
option:checked {
  background-color: #e74c3c;
  color: white;
}
```

---

### HTML

```html
<label>
  <input type="checkbox"> Option 1
</label>

<label>
  <input type="radio" name="choice"> Choice 1
</label>

<label>
  <input type="radio" name="choice"> Choice 2
</label>

<select>
  <option>Red</option>
  <option>Blue</option>
  <option>Green</option>
</select>
```

---

## How It Works

When a user selects a checkbox or radio button:

* The element enters the **checked state**
* The styles defined in `:checked` are applied automatically

Example behavior:

| Element      | State    | Result                 |
| ------------ | -------- | ---------------------- |
| Checkbox     | checked  | Background turns blue  |
| Radio button | selected | Background turns green |
| Option       | selected | Background turns red   |

---

# 4.2 Pseudo-class `:disabled`

The `:disabled` pseudo-class selects form elements that are **disabled and cannot be interacted with**.

Disabled elements are commonly used when:

* A feature is temporarily unavailable
* A form field depends on another input
* A button should only activate after validation

---

## Syntax

```css
selector:disabled {
  property: value;
}
```

---

## Example

### CSS

```css
/* Styling disabled input field */
input:disabled {
  background-color: #f0f0f0;
  border-color: #ccc;
  color: #888;
}

/* Styling disabled button */
button:disabled {
  background-color: #d0d0d0;
  color: #777;
  cursor: not-allowed;
}
```

---

### HTML

```html
<input type="text" placeholder="Disabled field" disabled>

<button disabled>Disabled Button</button>
```

---

## Result

Disabled elements:

* Have a **gray background**
* Have **faded text**
* Show the cursor:

```css
cursor: not-allowed;
```

This visually informs users that the element **cannot be used**.

---

# 4.3 Pseudo-class `:enabled`

The `:enabled` pseudo-class targets elements that are **available for interaction**.

It is the **opposite of `:disabled`**.

---

## Syntax

```css
selector:enabled {
  property: value;
}
```

---

## Example

### CSS

```css
/* Styling enabled input field */
input:enabled {
  background-color: #fff;
  border-color: #3498db;
}

/* Styling enabled button */
button:enabled {
  background-color: #2ecc71;
  color: white;
  cursor: pointer;
}
```

---

### HTML

```html
<input type="text" placeholder="Enter your name">

<button>Submit</button>
```

---

## Result

Enabled elements:

* Have normal styling
* Indicate interactivity
* Show the **pointer cursor**

```css
cursor: pointer;
```

This helps users recognize **clickable elements**.

---

# 4.4 Pseudo-class `:invalid`

The `:invalid` pseudo-class targets form elements that **fail validation**.

HTML provides built-in validation rules such as:

* `required`
* `type="email"`
* `pattern`
* `minlength`
* `maxlength`

When input does not meet these conditions, the element becomes **invalid**.

---

## Syntax

```css
selector:invalid {
  property: value;
}
```

---

## Example

### CSS

```css
/* Styling invalid input field */
input:invalid {
  border-color: #e74c3c;
  background-color: #f9e0e0;
}

/* Styling invalid text area */
textarea:invalid {
  border-color: #e74c3c;
  background-color: #f9e0e0;
}
```

---

### HTML

```html
<input type="email" placeholder="Enter your email" required>

<textarea required></textarea>
```

---

## Result

When the input is incorrect:

* The **border turns red**
* The **background becomes light pink**

This gives users **clear visual feedback that something is wrong**.

---

# 4.5 Full Implementation Example

## CSS

```css
/* Styling selected checkbox */
input[type="checkbox"]:checked {
  background-color: #3498db;
}

/* Styling selected radio button */
input[type="radio"]:checked {
  background-color: #2ecc71;
}

/* Styling disabled input field */
input:disabled {
  background-color: #f0f0f0;
  border-color: #ccc;
  color: #888;
}

/* Styling disabled button */
button:disabled {
  background-color: #d0d0d0;
  color: #777;
  cursor: not-allowed;
}

/* Styling enabled input field */
input:enabled {
  background-color: #fff;
  border-color: #3498db;
}

/* Styling enabled button */
button:enabled {
  background-color: #2ecc71;
  color: white;
  cursor: pointer;
}

/* Styling invalid input field */
input:invalid {
  border-color: #e74c3c;
  background-color: #f9e0e0;
}

/* Styling invalid text area */
textarea:invalid {
  border-color: #e74c3c;
  background-color: #f9e0e0;
}
```

---

## HTML

```html
<form>

  <label>
    <input type="checkbox" name="option1"> Option 1
  </label>

  <br>

  <label>
    <input type="radio" name="choice" value="1"> Choice 1
  </label>

  <label>
    <input type="radio" name="choice" value="2"> Choice 2
  </label>

  <br>

  <input type="text" placeholder="Enter your name" required>

  <br>

  <input type="email" placeholder="Enter your email" required>

  <br>

  <button type="submit">Submit</button>

  <button type="button" disabled>Disabled Button</button>

</form>
```

---

Great question — the `:checked` pseudo-class is actually **very powerful**. Developers often use it to create **interactive UI components without JavaScript**.

Below are **three real-world UI patterns** built using `:checked`.

---

# 1. Toggle Switch (Pure CSS)

A toggle switch can be created using a **hidden checkbox** and styling a label.

## HTML

```html
<div class="toggle-container">
  <input type="checkbox" id="toggle">
  <label for="toggle" class="toggle-label"></label>
</div>
```

---

## CSS

```css
/* Hide checkbox */
#toggle {
  display: none;
}

/* Toggle track */
.toggle-label {
  width: 60px;
  height: 30px;
  background: #ccc;
  display: inline-block;
  border-radius: 30px;
  position: relative;
  cursor: pointer;
}

/* Toggle circle */
.toggle-label::after {
  content: "";
  width: 26px;
  height: 26px;
  background: white;
  position: absolute;
  top: 2px;
  left: 2px;
  border-radius: 50%;
  transition: 0.3s;
}

/* When checked */
#toggle:checked + .toggle-label {
  background: #4caf50;
}

#toggle:checked + .toggle-label::after {
  transform: translateX(30px);
}
```

---

## Result

* Checkbox unchecked → toggle is **off**
* Checkbox checked → toggle moves **to the right**

This creates a **fully functional switch without JavaScript**.

---

# 2. Show / Hide Content (Accordion)

You can use `:checked` to **show or hide content**.

---

## HTML

```html
<input type="checkbox" id="accordion">

<label for="accordion">Show Details</label>

<div class="content">
  <p>This content appears when the checkbox is checked.</p>
</div>
```

---

## CSS

```css
.content {
  display: none;
}

/* Show content when checkbox is checked */
#accordion:checked + label + .content {
  display: block;
}
```

---

## Result

| Checkbox State | Behavior        |
| -------------- | --------------- |
| unchecked      | content hidden  |
| checked        | content visible |

This pattern is used for:

* FAQ sections
* Collapsible menus
* Accordions

---

# 3. CSS Tabs (No JavaScript)

Tabs can be created using **radio buttons** and `:checked`.

---

## HTML

```html
<div class="tabs">

  <input type="radio" name="tab" id="tab1" checked>
  <label for="tab1">Tab 1</label>

  <input type="radio" name="tab" id="tab2">
  <label for="tab2">Tab 2</label>

  <div class="content1">Content for Tab 1</div>
  <div class="content2">Content for Tab 2</div>

</div>
```

---

## CSS

```css
.tabs input {
  display: none;
}

.content1,
.content2 {
  display: none;
}

/* Show content when radio is selected */

#tab1:checked ~ .content1 {
  display: block;
}

#tab2:checked ~ .content2 {
  display: block;
}
```

---

## Result

Clicking each tab **shows different content**.

This works because:

* Radio buttons allow **only one selection**
* `:checked` triggers CSS rules
* `~` (general sibling selector) reveals content

---

# Why Developers Love `:checked`

Using `:checked` allows developers to create:

| UI Component       | Without JavaScript |
| ------------------ | ------------------ |
| Toggle switches    | ✓                  |
| Accordions         | ✓                  |
| Tabs               | ✓                  |
| Mobile menus       | ✓                  |
| Dark mode switches | ✓                  |

This reduces:

* JavaScript complexity
* page load time
* maintenance

---

# Key Idea Behind These Tricks

The core pattern is:

```css
input:checked + element
```

or

```css
input:checked ~ element
```

Meaning:

> When the input becomes checked, **change another element's style**.

---

✅ **Important selectors used**

| Selector   | Meaning          |
| ---------- | ---------------- |
| `+`        | adjacent sibling |
| `~`        | general sibling  |
| `:checked` | element selected |

---

Below is one of the **most popular real-world uses of `:checked`**: building a **responsive mobile navigation menu without JavaScript**. This technique is widely called the **“checkbox hack”** in CSS.

The idea is simple:

1. A hidden **checkbox** controls the state.
2. A **label** acts as the menu button (hamburger icon).
3. When the checkbox is **checked**, CSS shows the menu.

---

# Responsive Mobile Navigation Menu Using `:checked`

## Step 1: HTML Structure

```html
<nav class="navbar">

  <!-- Hidden checkbox -->
  <input type="checkbox" id="menu-toggle">

  <!-- Hamburger button -->
  <label for="menu-toggle" class="menu-icon">
      ☰
  </label>

  <!-- Navigation menu -->
  <ul class="menu">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
  </ul>

</nav>
```

### Explanation

| Element                  | Purpose                    |
| ------------------------ | -------------------------- |
| `input[type="checkbox"]` | Controls menu state        |
| `label`                  | Clickable hamburger button |
| `ul.menu`                | Navigation menu            |

Clicking the label **checks/unchecks the checkbox**.

---

# Step 2: CSS Styling

## Base Styles

```css
body {
  font-family: Arial, sans-serif;
}

.navbar {
  background: #333;
  padding: 10px;
}
```

---

## Hide the Checkbox

```css
#menu-toggle {
  display: none;
}
```

The checkbox still works but **is invisible**.

---

## Hamburger Icon

```css
.menu-icon {
  font-size: 28px;
  color: white;
  cursor: pointer;
  display: block;
}
```

This label acts as the **menu button**.

---

## Hide the Menu by Default

```css
.menu {
  list-style: none;
  padding: 0;
  margin: 0;
  display: none;
}
```

The menu starts **hidden**.

---

## Menu Items

```css
.menu li {
  padding: 10px;
}

.menu a {
  color: white;
  text-decoration: none;
}
```

---

# Step 3: Show Menu When Checked

```css
#menu-toggle:checked ~ .menu {
  display: block;
}
```

### How It Works

Selector breakdown:

| Part           | Meaning                   |
| -------------- | ------------------------- |
| `#menu-toggle` | The checkbox              |
| `:checked`     | When checkbox is selected |
| `~`            | Select following sibling  |
| `.menu`        | Show the menu             |

When the checkbox is checked:

```
menu becomes visible
```

---

# Full Working CSS

```css
#menu-toggle {
  display: none;
}

.menu-icon {
  font-size: 28px;
  color: white;
  cursor: pointer;
}

.menu {
  display: none;
  list-style: none;
  padding: 0;
}

.menu li {
  padding: 10px;
}

.menu a {
  color: white;
  text-decoration: none;
}

#menu-toggle:checked ~ .menu {
  display: block;
}
```

---

# Result

| State              | Menu Behavior |
| ------------------ | ------------- |
| Checkbox unchecked | Menu hidden   |
| Checkbox checked   | Menu visible  |

Clicking the hamburger icon **toggles the menu open and closed**.

---

# Why This Works

Because of this selector:

```css
input:checked ~ element
```

It means:

> When the input becomes checked, change the style of another element.

This allows CSS to **control UI state**.

---

# Real Projects Use This Pattern For

| Component         | Use Case          |
| ----------------- | ----------------- |
| Mobile navigation | Hamburger menu    |
| Accordions        | Expand / collapse |
| Tabs              | Content switching |
| Toggles           | Dark mode switch  |
| Dropdown menus    | Click reveal      |

---

# Exercise: Mobile Menu

## Task

Create a mobile menu where clicking a hamburger icon **shows the navigation links**.

### Requirements

* Hide the menu by default.
* Show the menu when the checkbox is checked.
* Use the `:checked` pseudo-class.

---

# Solution

```css
#menu-toggle:checked ~ .menu {
  display: block;
}
```

---

# Key Concept to Remember

Most CSS interactive tricks follow this structure:

```css
input:checked + element
```

or

```css
input:checked ~ element
```

This allows CSS to **control other elements based on state**.

---

✅ **Summary of Form Pseudo-classes**

| Pseudo-class | Purpose                                 |
| ------------ | --------------------------------------- |
| `:checked`   | Selected checkboxes, radios, options    |
| `:disabled`  | Elements that cannot be interacted with |
| `:enabled`   | Elements that can be interacted with    |
| `:invalid`   | Inputs that fail validation             |

These pseudo-classes help create **dynamic forms and UI behavior without JavaScript**.

---

A **dark mode toggle using only CSS** is a great example of how powerful the `:checked` pseudo-class can be. It allows us to **switch themes without JavaScript** by combining `:checked` with **CSS variables**.

This technique is commonly used for:

* Dark mode switches
* Theme toggles
* Accessibility improvements

---

# Dark Mode Toggle Using `:checked` and CSS Variables

The idea is simple:

1. Create a **checkbox** that controls the theme.
2. Use a **label** as the toggle switch.
3. Change **CSS variables** when the checkbox is checked.

---

# Step 1: HTML Structure

```html
<input type="checkbox" id="theme-toggle">

<label for="theme-toggle" class="toggle">
  Toggle Dark Mode
</label>

<div class="page">
  <h1>My Website</h1>
  <p>This page changes theme using pure CSS.</p>
</div>
```

### Explanation

| Element  | Purpose                    |
| -------- | -------------------------- |
| checkbox | controls theme state       |
| label    | clickable toggle           |
| `.page`  | content that changes theme |

---

# Step 2: Define CSS Variables

CSS variables store theme colors.

```css
:root {
  --background: white;
  --text-color: black;
  --card-color: #f4f4f4;
}
```

These variables represent the **light theme**.

---

# Step 3: Apply Variables to the Page

```css
.page {
  background: var(--background);
  color: var(--text-color);
  padding: 20px;
  transition: 0.3s;
}
```

Now the page colors depend on the variables.

---

# Step 4: Hide the Checkbox

```css
#theme-toggle {
  display: none;
}
```

The checkbox still works but is invisible.

---

# Step 5: Create Toggle Button

```css
.toggle {
  display: inline-block;
  background: #ccc;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 20px;
  margin-bottom: 20px;
}
```

---

# Step 6: Change Variables When Checked

This is the **key trick**.

```css
#theme-toggle:checked ~ .page {
  --background: #1e1e1e;
  --text-color: #ffffff;
  --card-color: #2c2c2c;
}
```

### How it works

Selector breakdown:

| Part            | Meaning                  |
| --------------- | ------------------------ |
| `#theme-toggle` | checkbox                 |
| `:checked`      | when selected            |
| `~`             | select following sibling |
| `.page`         | apply new variables      |

When the checkbox is checked, the variables change → **dark theme appears**.

---

# Full Working CSS

```css
:root {
  --background: white;
  --text-color: black;
}

#theme-toggle {
  display: none;
}

.toggle {
  display: inline-block;
  background: #ccc;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 20px;
}

.page {
  background: var(--background);
  color: var(--text-color);
  padding: 20px;
  transition: 0.3s;
}

#theme-toggle:checked ~ .page {
  --background: #1e1e1e;
  --text-color: white;
}
```

---

# Result

| Toggle State | Theme      |
| ------------ | ---------- |
| unchecked    | Light mode |
| checked      | Dark mode  |

Clicking the toggle **instantly switches themes**.

---

# Why This Works

Because of this pattern:

```css
input:checked ~ element
```

It allows CSS to **change styles based on input state**.

Combined with **CSS variables**, it becomes a powerful **theme system**.

---

# Advantages of This Approach

| Benefit          | Explanation           |
| ---------------- | --------------------- |
| No JavaScript    | Pure CSS solution     |
| Lightweight      | Faster performance    |
| Accessible       | Works with keyboard   |
| Easy to maintain | Centralized variables |

---

# Real-World Usage

Modern websites use similar ideas for:

* Dark/light theme switches
* Color theme customization
* Accessibility settings
* UI personalization

---

# Exercise: Dark Mode Toggle

## Task

Create a dark mode toggle using `:checked`.

### Requirements

* Hide the checkbox
* Use CSS variables
* Change page colors when checked

---

## Solution

```css
#toggle:checked ~ .container {
  --background: black;
  --text: white;
}
```

---

# Key Concept

The combination of:

```
:checked + sibling selectors + CSS variables
```

allows CSS to **control entire UI states without JavaScript**.

---

A **CSS-only image slider** using `:checked` and **radio buttons** is a classic technique that demonstrates how powerful CSS pseudo-classes can be. It allows users to switch between slides **without any JavaScript**.

The idea is similar to tabs:

1. **Radio buttons control the active slide**
2. Only one radio button can be selected at a time
3. The `:checked` pseudo-class shows the corresponding slide

---

# CSS-Only Image Slider Using `:checked`

## Step 1: HTML Structure

```html
<div class="slider">

  <input type="radio" name="slide" id="slide1" checked>
  <input type="radio" name="slide" id="slide2">
  <input type="radio" name="slide" id="slide3">

  <div class="slides">
    <div class="slide s1">Slide 1</div>
    <div class="slide s2">Slide 2</div>
    <div class="slide s3">Slide 3</div>
  </div>

  <div class="navigation">
    <label for="slide1"></label>
    <label for="slide2"></label>
    <label for="slide3"></label>
  </div>

</div>
```

### Explanation

| Element      | Purpose                       |
| ------------ | ----------------------------- |
| radio inputs | control which slide is active |
| `.slides`    | container holding slides      |
| `.slide`     | individual slide              |
| labels       | navigation buttons            |

Clicking a label **selects the corresponding radio button**.

---

# Step 2: Basic Styling

```css
.slider {
  width: 400px;
  overflow: hidden;
  margin: auto;
}

.slides {
  display: flex;
  width: 300%;
  transition: 0.5s;
}

.slide {
  width: 400px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
}

.s1 { background: #3498db; }
.s2 { background: #e74c3c; }
.s3 { background: #2ecc71; }
```

This creates **three horizontal slides**.

---

# Step 3: Hide Radio Buttons

```css
input[type="radio"] {
  display: none;
}
```

The radio buttons still control state but remain invisible.

---

# Step 4: Move Slides Using `:checked`

```css
#slide1:checked ~ .slides {
  transform: translateX(0);
}

#slide2:checked ~ .slides {
  transform: translateX(-400px);
}

#slide3:checked ~ .slides {
  transform: translateX(-800px);
}
```

### Explanation

| Radio selected | Slide position  |
| -------------- | --------------- |
| slide1         | first slide     |
| slide2         | move left 400px |
| slide3         | move left 800px |

---

# Step 5: Navigation Buttons

```css
.navigation {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.navigation label {
  width: 15px;
  height: 15px;
  background: gray;
  margin: 5px;
  border-radius: 50%;
  cursor: pointer;
}
```

These labels act like **slider dots**.

---

# Result

| Action      | Behavior        |
| ----------- | --------------- |
| Click dot 1 | Slide 1 appears |
| Click dot 2 | Slide 2 appears |
| Click dot 3 | Slide 3 appears |

The slider works **entirely using CSS**.

---

# Why This Works

Because of this key selector pattern:

```css
input:checked ~ element
```

Meaning:

> When an input becomes checked, change the style of another element.

This allows CSS to control **layout changes based on input state**.

---

# Key CSS Techniques Used

| Technique            | Purpose                    |
| -------------------- | -------------------------- |
| `:checked`           | detect active radio button |
| `~` sibling selector | target slides container    |
| `transform`          | move slides                |
| `flexbox`            | layout slides horizontally |

---

# Exercise: Simple Slider

## Task

Create a slider with three slides that moves horizontally when different radio buttons are selected.

### Requirements

* Hide radio buttons
* Use `:checked`
* Move slides with `transform`

---

# Solution

```css
#slide2:checked ~ .slides {
  transform: translateX(-100%);
}

#slide3:checked ~ .slides {
  transform: translateX(-200%);
}
```

---

# Key Takeaway

The combination of:

```
radio buttons + :checked + sibling selectors
```

allows CSS to create **interactive components without JavaScript**.

This pattern is widely used for:

* sliders
* tabs
* accordions
* toggles
* navigation menus

---

# Exercise 1: Disabled Elements

## Task

Style disabled input fields and buttons.

### Requirements

* Gray background
* Cursor should be `not-allowed`
* Use the `:disabled` pseudo-class

---

## Solution

```css
input:disabled,
button:disabled {
  background-color: #d3d3d3;
  cursor: not-allowed;
}
```

---

# Exercise 2: Invalid Fields

## Task

Style invalid form elements.

### Requirements

* Red border
* Light pink background
* Use `:invalid`

---

## Solution

```css
input:invalid,
textarea:invalid {
  border: 2px solid red;
  background-color: #ffe6e6;
}
```

---

# Key Takeaways

Form pseudo-classes allow CSS to **react to form states without JavaScript**.

| Pseudo-class | Description                                      |
| ------------ | ------------------------------------------------ |
| `:checked`   | Targets selected checkboxes, radios, and options |
| `:disabled`  | Targets elements that cannot be interacted with  |
| `:enabled`   | Targets elements available for interaction       |
| `:invalid`   | Targets elements that fail validation            |

These pseudo-classes help developers create:

* **Interactive forms**
* **Better validation feedback**
* **More accessible interfaces**

---

