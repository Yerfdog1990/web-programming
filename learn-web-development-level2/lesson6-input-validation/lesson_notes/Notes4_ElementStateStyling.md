
---

# Element State Styling

CSS pseudo-classes are awesome tools for styling elements in different states. They help enhance user interactions with forms and other interactive elements on a webpage. Let's dive into how you can use pseudo-classes like :focus, :hover, :disabled, and :checked for styling input elements (<input>).

---

## 10.1 Pseudo-class :focus

The :focus pseudo-class is applied to a form element when it gains focus. This usually happens when the element is clicked or navigated to using the Tab key. Styling focusable elements helps users better navigate through a form.

### Example Usage

**CSS**

```css
input:focus {
  border-color: #4A90E2;
  box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
  outline: none;
}
```

**HTML**

```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
</form>
```

### Explanation

* **border-color**: changes the border color of the element when it gains focus
* **box-shadow**: adds a shadow effect around the element to highlight it
* **outline**: removes the default browser outline, replacing it with a custom style

---

## 10.2 Pseudo-class :hover

The :hover pseudo-class is applied to an element when the user hovers over it with a cursor. This can be useful for providing visual feedback during interactions with the element.

### Example Usage

**CSS**

```css
input:hover {
  border-color: #50E3C2;
  background-color: #F0F8FF;
}
```

**HTML**

```html
<form>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
</form>
```

### Explanation

* **border-color**: changes the border color of the element when the cursor is over it
* **background-color**: changes the background color of the element on hover

---

## 10.3 Pseudo-class :disabled

The :disabled pseudo-class is applied to form elements that are disabled, meaning they are inactive and cannot be used or changed by the user. This helps users understand that the element is unavailable for interaction.

### Example Usage

**CSS**

```css
input:disabled {
  background-color: #E0E0E0;
  color: #A0A0A0;
  cursor: not-allowed;
}
```

**HTML**

```html
<form>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" disabled>
</form>
```

### Explanation

* **background-color**: changes the background color of the disabled element to show it's inactive
* **color**: changes the text color inside the disabled element
* **cursor**: sets the cursor to `not-allowed` to visually indicate the element is unavailable

---

## 10.4 Pseudo-class :checked

The :checked pseudo-class is applied to checkbox and radio elements that are in a checked state. This allows you to style checked elements, making them more noticeable.

### Example Usage

**CSS**

```css
input[type="checkbox"]:checked,
input[type="radio"]:checked {
  background-color: #4A90E2;
  border-color: #4A90E2;
}
```

**HTML**

```html
<form>
  <label>
    <input type="checkbox" name="option" checked>
    Option 1
  </label>
  <label>
    <input type="checkbox" name="option">
    Option 2
  </label>
  <label>
    <input type="radio" name="choice" checked>
    Choice 1
  </label>
  <label>
    <input type="radio" name="choice">
    Choice 2
  </label>
</form>
```

### Explanation

* **background-color**: changes the background color of the checked element
* **border-color**: changes the border color of the checked element

---

# Exercise 1: Field Focus

Create an HTML form with a text input field for entering a name. Implement styling for the `<input>` element using a pseudo-class.

When the element receives focus, change the border color to `#4A90E2`, add a shadow, and remove the default outline.

### Requirements

* The document must include a `<form>` element, containing a text input field `<input>` for entering a name.
* The document must include an `<input type="text">` element, which will be used for the user to enter their name.
* Using CSS, apply the `:focus` pseudo-class to the `<input>` element to style it when it receives focus.
* When the `<input>` element receives focus, its border color should change to `#4A90E2`.
* When the `<input>` element receives focus, it should have a box-shadow, and the default outline should be removed.

### Solution

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    input:focus {
      border-color: #4A90E2;
      box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
      outline: none;
    }
  </style>
</head>
<body>

<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
</form>

</body>
</html>
```

---

# Exercise 2: Hover Effect

Create an HTML form with an email input field. Implement styling for the `<input>` element using a pseudo-class.

When the user hovers over the input field, change the border color to `#50E3C2` and the background color to `#F0F8FF`.

### Requirements

* The document must include a `<form>` element that will serve as a container for the email input field.
* The document must include an `<input>` element with the attribute `type="email"` to be used for entering an email.
* A CSS rule with the `:hover` pseudo-class must be applied to the `<input>` element with the attribute `type="email"` for styling on hover.
* When the cursor hovers over the input field, the border color should change to `#50E3C2`.
* When the cursor hovers over the input field, the background color should change to `#F0F8FF`.

### Solution

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    input[type="email"]:hover {
      border-color: #50E3C2;
      background-color: #F0F8FF;
    }
  </style>
</head>
<body>

<form>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
</form>

</body>
</html>
```

---
