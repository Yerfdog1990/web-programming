
---

# 7. Form Elements of Different Types

HTML provides a wide variety of **form input types** that help users enter data in the correct format. Choosing the right input type improves:

* User experience (UX)
* Built-in browser validation
* Accessibility
* Mobile keyboard behavior

In this lesson, we explore the most commonly used input types and how to apply them correctly.

---

## 7.1 Text Fields

The `<input type="text">` element is used for **single-line text input** such as names, usernames, and titles.

### Usage Example

```html
<label for="name">Name:</label>
<input type="text" id="name" name="name">
```

### Common Attributes

* `maxlength` – limits the number of characters
* `placeholder` – hint text shown inside the field
* `required` – makes the field mandatory

### Example with Attributes

```html
<label for="username">Username:</label>
<input
  type="text"
  id="username"
  name="username"
  maxlength="20"
  placeholder="Enter your username"
  required
>
```

---

## 7.2 Number Fields

The `<input type="number">` element is used for **numeric values only**.

### Usage Example

```html
<label for="quantity">Quantity:</label>
<input
  type="number"
  id="quantity"
  name="quantity"
  min="1"
  max="10"
  step="1"
  value="1"
>
```

### Attributes

* `min` – minimum allowed value
* `max` – maximum allowed value
* `step` – increment/decrement step
* `value` – default value

---

## 7.3 Email Fields

The `<input type="email">` element validates **email address format** automatically.

### Usage Example

```html
<label for="email">Email:</label>
<input
  type="email"
  id="email"
  name="email"
  placeholder="example@example.com"
>
```

### Attributes

* `multiple` – allows multiple email addresses
* `pattern` – custom regex validation

### Example with Multiple Emails

```html
<label for="emails">Email addresses:</label>
<input
  type="email"
  id="emails"
  name="emails"
  multiple
  placeholder="example1@example.com, example2@example.com"
>
```

---

## 7.4 Phone Number Fields

The `<input type="tel">` element is used for **telephone numbers**.
It does **not validate format by default**, so patterns are often used.

### Usage Example

```html
<label for="phone">Phone:</label>
<input
  type="tel"
  id="phone"
  name="phone"
  placeholder="+1 (XXX) XXX-XXXX"
>
```

### Example with Validation Pattern

```html
<label for="phone">Phone:</label>
<input
  type="tel"
  id="phone"
  name="phone"
  pattern="[+][0-9]{1,3} [0-9]{3} [0-9]{3} [0-9]{4}"
  placeholder="+1 123 456 7890"
>
```

---

## 7.5 Date Fields

The `<input type="date">` element allows users to select a date using a **calendar picker**.

### Usage Example

```html
<label for="birthday">Birthday:</label>
<input type="date" id="birthday" name="birthday">
```

### Attributes

* `min` – earliest selectable date
* `max` – latest selectable date

### Example with Restrictions

```html
<label for="appointment">Appointment Date:</label>
<input
  type="date"
  id="appointment"
  name="appointment"
  min="2023-01-01"
  max="2024-12-31"
>
```

---

## 7.6 Time Fields

The `<input type="time">` element is used to enter **time values**.

### Usage Example

```html
<label for="meeting_time">Meeting Time:</label>
<input type="time" id="meeting_time" name="meeting_time">
```

### Example with Constraints

```html
<label for="alarm">Alarm:</label>
<input
  type="time"
  id="alarm"
  name="alarm"
  min="06:00"
  max="22:00"
  step="300"
>
```

---

## 7.7 URL Fields

The `<input type="url">` element validates **web addresses**.

### Usage Example

```html
<label for="website">Website:</label>
<input
  type="url"
  id="website"
  name="website"
  placeholder="https://example.com"
>
```

### Example with Pattern

```html
<label for="personal_website">Personal Website:</label>
<input
  type="url"
  id="personal_website"
  name="personal_website"
  pattern="https://.*"
  placeholder="https://example.com"
>
```

---

## 7.8 Password Fields

The `<input type="password">` element hides entered characters.

### Usage Example

```html
<label for="password">Password:</label>
<input type="password" id="password" name="password">
```

### Example with Attributes

```html
<label for="new_password">New Password:</label>
<input
  type="password"
  id="new_password"
  name="new_password"
  maxlength="20"
  placeholder="Enter password"
  required
>
```

---

## 7.9 Range Input Fields

The `<input type="range">` element creates a **slider control**.

### Usage Example

```html
<label for="volume">Volume:</label>
<input type="range" id="volume" name="volume">
```

### Example with Attributes

```html
<label for="brightness">Brightness:</label>
<input
  type="range"
  id="brightness"
  name="brightness"
  min="0"
  max="100"
  step="1"
  value="75"
>
```

---

## 7.10 Color Picker Fields

The `<input type="color">` element opens a **color picker**.

### Usage Example

```html
<label for="favcolor">Choose your favorite color:</label>
<input
  type="color"
  id="favcolor"
  name="favcolor"
  value="#ff0000"
>
```

---

## 7.11 Search Fields

The `<input type="search">` element is optimized for **search queries**.

### Usage Example

```html
<label for="search">Search:</label>
<input
  type="search"
  id="search"
  name="search"
  placeholder="Enter your search query"
>
```

---

# Exercises

## Exercise 1: Phone Number with a Mask

Create an HTML form with a phone number input field that:

* Uses `type="tel"`
* Validates format `+1 123 456 7890`
* Uses a placeholder
* Is required

### Sample Solution

```html
<form>
  <label for="phone">Phone Number:</label>
  <input
    type="tel"
    id="phone"
    name="phone"
    pattern="\+1 \d{3} \d{3} \d{4}"
    placeholder="+1 123 456 7890"
    required
  >
  <button type="submit">Submit</button>
</form>
```

---

## Exercise 2: Date Picker (Birth Date)

Create a form with a required birth date field:

* Minimum date: `1950-01-01`
* Maximum date: `2024-12-31`

### Sample Solution

```html
<form>
  <label for="birthdate">Birth Date:</label>
  <input
    type="date"
    id="birthdate"
    name="birthdate"
    min="1950-01-01"
    max="2024-12-31"
    required
  >
  <button type="submit">Submit</button>
</form>
```
---

Great idea — this is exactly the section students usually forget, and it saves a lot of “why doesn’t this work on my phone?” pain later 🙂

Below is a **drop-in section** you can append to the lesson.

---

# Browser Support Notes for Form Input Types

Modern browsers provide excellent support for most HTML form input types. However, **behavior, UI widgets, and validation can vary** depending on the browser, operating system, and device.

⚠️ **Important rule:**
Even when browsers provide validation, **always validate again on the server**.

---

## General Support Overview

| Input Type | Desktop Browsers | Mobile Browsers | Notes                               |
| ---------- | ---------------- |-----------------|-------------------------------------|
| `text`     | ✅ Full          | ✅ Full         | Universal support                   |
| `number`   | ✅ Full          | ⚠️ Partial      | Mobile may allow non-numeric typing |
| `email`    | ✅ Full          | ✅ Full         | Mobile shows email keyboard         |
| `tel`      | ✅ Full          | ✅ Full         | No built-in validation              |
| `date`     | ⚠️ Partial       | ✅ Full         | Desktop UI varies                   |
| `time`     | ⚠️ Partial       | ✅ Full         | Desktop UI inconsistent             |
| `url`      | ✅ Full          | ✅ Full         | Mobile shows URL keyboard           |
| `password` | ✅ Full          | ✅ Full         | Masking style varies                |
| `range`    | ✅ Full          | ✅ Full         | Slider styling differs              |
| `color`    | ⚠️ Partial       | ⚠️ Partial      | UI differs greatly                  |
| `search`   | ✅ Full          | ✅ Full         | Mostly stylistic differences        |

---

## Input-Type-Specific Notes

### `type="text"`

* Supported by **all browsers**
* No differences in behavior
* Safe default fallback

✔️ Best choice when unsure about compatibility

---

### `type="number"`

* Desktop browsers show **spinner arrows**
* Mobile browsers may:

    * Allow typing letters
    * Show numeric keyboard but not enforce input

⚠️ **Do not rely on it alone for numeric validation**

✔️ Always combine with:

```html
min, max, step
```

---

### `type="email"`

* All modern browsers support format validation
* Mobile devices show:

    * `@` and `.com` shortcuts on keyboard

⚠️ Validation checks format only, not existence

---

### `type="tel"`

* No built-in validation in any browser
* Mobile shows phone keypad

✔️ Use `pattern` for validation

✔️ Use `placeholder` to guide formatting

---

### `type="date"`

* **Desktop browsers**

    * Chrome / Edge: calendar picker
    * Firefox: text field (older versions)
    * Safari (macOS): limited UI
* **Mobile browsers**

    * Consistent native date picker

⚠️ Users may manually type invalid formats on desktop

✔️ Always set `min` and `max`

---

### `type="time"`

* Similar support issues as `date`
* Mobile experience is much better than desktop
* Step support may be ignored on some browsers

✔️ Safe to use, but test on desktop browsers

---

### `type="url"`

* Fully supported
* Mobile shows URL-optimized keyboard
* Browsers validate basic URL structure

⚠️ Doesn’t verify if the website exists

---

### `type="password"`

* Fully supported everywhere
* Mask characters vary:

    * Dots
    * Asterisks
* Browsers may offer password managers

⚠️ Never rely on client-side validation for security

---

### `type="range"`

* Supported everywhere
* Visual style differs by browser and OS
* Value display must be handled manually if needed

Example:

```html
<input type="range" oninput="output.value = this.value">
<output name="output">50</output>
```

---

### `type="color"`

* Desktop browsers show different color pickers
* Mobile support varies:

    * Some show full picker
    * Others fallback to text input

⚠️ Always provide a default `value`

---

### `type="search"`

* Behavior identical to `text`
* Browser may add:

    * Clear (×) button
    * Rounded styling

✔️ Mostly semantic, not functional

---

## Fallback Behavior

If a browser **does not support an input type**, it automatically falls back to:

```html
<input type="text">
```

✔️ This ensures the form remains usable

❌ But without specialized validation or widgets

---

## Best Practices for Cross-Browser Forms

✔️ Always use `<label>` with inputs

✔️ Combine HTML validation with server-side validation

✔️ Test on:

* Chrome
* Firefox
* Safari
* Mobile browsers (Android & iOS)

✔️ Do not depend solely on:

* UI widgets
* Browser validation
* Input type restrictions

---

