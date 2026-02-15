
---

# CSS Variables vs Sass Variables

| Feature             | CSS Variables (`--var`)  | Sass Variables (`$var`)          |
| ------------------- | ------------------------ | -------------------------------- |
| Evaluated           | In the browser (runtime) | At build time (precompiled)      |
| Scope               | Follows CSS cascade      | Lexical scope (file/block based) |
| Dynamic updates     | ✅ Yes                    | ❌ No                             |
| DevTools visibility | ✅ Yes                    | ❌ No                             |
| JavaScript access   | ✅ Yes                    | ❌ No                             |
| Requires build step | ❌ No                     | ✅ Yes                            |
| Supports theming    | Excellent                | Limited                          |

---

## 1️⃣ What Are CSS Variables?

CSS custom properties are defined with `--` and accessed using `var()`.

```css
:root {
  --primary-color: #4f46e5;
}

button {
  background: var(--primary-color);
}
```

### Key Characteristics

* Work **natively in the browser**
* Participate in the **CSS cascade**
* Can be changed dynamically
* Can be updated with JavaScript

```js
document.documentElement.style.setProperty(
  '--primary-color',
  '#22c55e'
);
```

---

## 2️⃣ What Are Sass Variables?

Sass variables are defined with `$` and compiled into static CSS values.

```scss
$primary-color: #4f46e5;

button {
  background: $primary-color;
}
```

After compilation:

```css
button {
  background: #4f46e5;
}
```

### Key Characteristics

* Resolved **before CSS reaches the browser**
* Cannot change at runtime
* Require a **build step**

---

# 🔎 Core Differences Explained

## Runtime vs Build Time

### CSS Variables

* Exist in the browser
* Can change dynamically
* Ideal for themes, dark mode, user customization

### Sass Variables

* Only exist during compilation
* Best for static design tokens
* Good for internal consistency

---

## Scope & Cascade

### CSS Variables

Follow the CSS cascade:

```css
:root {
  --color: blue;
}

.card {
  --color: red;
}

.card p {
  color: var(--color); /* red */
}
```

### Sass Variables

Scoped lexically:

```scss
$color: blue;

.card {
  $color: red;
  p {
    color: $color; // red
  }
}
```

But once compiled, the variable disappears.

---

## Theming & Dark Mode

### CSS Variables (Best Choice)

```css
:root {
  --bg: white;
  --text: black;
}

[data-theme="dark"] {
  --bg: black;
  --text: white;
}
```

Switch instantly without recompiling.

---

### Sass Variables (Limited)

To change themes, you'd need:

* Multiple builds
* Or duplicated selectors

Not practical for dynamic switching.

---

## DevTools & Debugging

CSS variables:

* Visible in browser DevTools
* Easy to override and inspect

Sass variables:

* Invisible after compilation
* Debugging requires source maps

---

# 🧠 When to Use Each

## Use CSS Variables When:

* Building design systems
* Supporting light/dark themes
* Creating user-customizable UI
* Working with runtime JS styling
* Using component libraries

---

## Use Sass Variables When:

* Managing static design tokens
* Doing color math (`darken()`, `mix()`)
* Creating spacing scales
* Working in large preprocessed codebases

---

# 💡 Advanced Strategy (Best Practice)

Many modern projects combine both:

### Example Hybrid Approach

```scss
// Sass handles structure
$primary-base: #4f46e5;

:root {
  --primary: #{$primary-base};
}
```

Now:

* Sass manages logic
* CSS variables handle runtime flexibility

---

# 🚀 Performance Considerations

* CSS variables have negligible performance impact.
* Sass variables produce static output (slightly simpler CSS).
* Modern browsers handle CSS variables efficiently.

---

# 🏁 Final Recommendation

If you're building modern front-end applications:

* **Default to CSS variables**
* Use Sass for:

    * Logic
    * Loops
    * Functions
    * Static design tokens

For 2026 front-end architecture, CSS variables are generally more future-proof.

---

