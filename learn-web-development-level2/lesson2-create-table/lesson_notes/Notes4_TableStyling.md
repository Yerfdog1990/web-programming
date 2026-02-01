
---

# 9. Table Styling in HTML

Tables are primarily used to display **structured data**.
To make tables **readable, organized, and visually clear**, we apply styling.

There are **two main ways** to style tables:

1. Using **HTML attributes** (older but important to understand)
2. Using **CSS** (modern approach – covered later)

In this lesson, we focus on **styling tables using HTML attributes**.

> ⚠️ Note: Many table attributes are **deprecated** in modern HTML, but they are still widely used in legacy systems and exams, and help beginners understand how tables are rendered.

---

## 9.1 Styling Tables Using Attributes

HTML allows you to style tables directly through attributes in:

* `<table>`
* `<tr>`
* `<th>`
* `<td>`

---

## 9.1.1 The `border` Attribute

### Purpose

Defines the **thickness of the table borders** (in pixels).

### Example

```html
<table border="1">
  <tr>
    <th>Name</th>
    <th>Score</th>
  </tr>
  <tr>
    <td>Ivan</td>
    <td>91</td>
  </tr>
  <tr>
    <td>Maria</td>
    <td>94</td>
  </tr>
  <tr>
    <td>Nina</td>
    <td>89</td>
  </tr>
</table>
```

### How It Looks on the Web Page

* Every cell has a **visible border**
* Borders clearly separate rows and columns
* Default border color is black

📌 Increasing the value (e.g., `border="3"`) makes borders thicker.

---

## 9.1.2 The `cellpadding` Attribute

### Purpose

Controls the **space between cell content and its border**.

Think of it as **inner spacing inside each cell**.

### Example

```html
<table cellpadding="10">
  <tr>
    <th>Name</th>
    <th>Score</th>
  </tr>
  <tr>
    <td>Ivan</td>
    <td>91</td>
  </tr>
  <tr>
    <td>Maria</td>
    <td>94</td>
  </tr>
  <tr>
    <td>Nina</td>
    <td>89</td>
  </tr>
</table>
```

### Visual Effect

* Text is **not cramped**
* Cells look more spacious
* Improves readability

📌 `cellpadding="0"` removes inner spacing entirely.

---

## 9.1.3 The `cellspacing` Attribute

### Purpose

Controls the **space between adjacent cells**.

This is **external spacing** between cells.

### Example

```html
<table cellspacing="5">
  <tr>
    <th>Name</th>
    <th>Score</th>
  </tr>
  <tr>
    <td>Ivan</td>
    <td>91</td>
  </tr>
  <tr>
    <td>Maria</td>
    <td>94</td>
  </tr>
  <tr>
    <td>Nina</td>
    <td>89</td>
  </tr>
</table>
```

### Visual Effect

* Gaps appear between cells
* Table looks less compact
* Useful for separating grouped data

📌 `cellspacing="0"` removes gaps completely.

---

## 9.1.4 The `width` and `height` Attributes

### Purpose

Control the **size of the table or individual cells**.

They can be applied to:

* `<table>`
* `<th>`
* `<td>`

### Example

```html
<table width="100%" height="200" style="text-align: left;">
  <tr>
    <th width="50%">Name</th>
    <th width="25%">Project</th>
    <th width="25%">City</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>25</td>
    <td>Paris</td>
  </tr>
</table>
```

### How It Appears

* Table spans the **full width** of the page
* Header columns have different widths
* Table height is fixed to 200 pixels

📌 Width can be:

* Absolute (`500`)
* Relative (`80%`)

---

## 9.1.5 The `align` Attribute (Table Alignment)

### Purpose

Aligns the **entire table** on the page.

Possible values:

* `left`
* `center`
* `right`

### Example

```html
<table align="center">
  <tr>
    <th>Name</th>
    <th>Score</th>
  </tr>
  <tr>
    <td>Ivan</td>
    <td>91</td>
  </tr>
  <tr>
    <td>Maria</td>
    <td>94</td>
  </tr>
  <tr>
    <td>Nina</td>
    <td>89</td>
  </tr>
</table>
```

### Visual Effect

* Table appears centered horizontally on the page
* Commonly used for reports and summaries

---

## 9.1.6 The `bgcolor` Attribute

### Purpose

Sets the **background color** of:

* The entire table
* Individual rows
* Individual cells

### Example

```html
<table bgcolor="#f0f0f0">
  <tr>
    <th>Name</th>
    <th>Score</th>
  </tr>
  <tr>
    <td>Ivan</td>
    <td>91</td>
  </tr>
  <tr>
    <td>Maria</td>
    <td>94</td>
  </tr>
  <tr>
    <td>Nina</td>
    <td>89</td>
  </tr>
</table>
```

### Visual Effect

* Entire table has a light gray background
* Improves contrast and readability

📌 Colors can be:

* Named (`red`)
* Hex (`#ffcc00`)

---

## 9.2 Attributes for Table Cells

Styling can be applied **at cell level** using `<td>` and `<th>`.

---

### 9.2.1 `colspan`

Merges cells **horizontally**.

```html
<td colspan="2">Merged Cell</td>
```

---

### 9.2.2 `rowspan`

Merges cells **vertically**.

```html
<td rowspan="2">Merged Cell</td>
```

---

### 9.2.3 `align` (Cell Content Alignment)

Aligns content **horizontally inside a cell**.

```html
<td align="center">Centered Text</td>
```

Values:

* `left`
* `center`
* `right`

---

### 9.2.4 `valign` (Vertical Alignment)

Aligns content **vertically inside a cell**.

```html
<td valign="top">Text at the Top</td>
```

Values:

* `top`
* `middle`
* `bottom`

---

### 9.2.5 `bgcolor` (Cell Background Color)

```html
<td bgcolor="#ffcc00">Colorful Background</td>
```

Useful for:

* Highlighting totals
* Marking special values

---

## 9.3 Complete Table Styling Example

### HTML Code

```html
<table border="1" cellpadding="10" cellspacing="5"
       width="80%" align="center" bgcolor="#e0e0e0">

  <caption>List of Students and Their Scores</caption>

  <thead bgcolor="#c0c0c0">
    <tr>
      <th align="left">Name</th>
      <th align="center">Age</th>
      <th align="right">City</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Ivan</td>
      <td align="center">30</td>
      <td align="right">London</td>
    </tr>

    <tr>
      <td colspan="2" align="center">Maria and Peter</td>
      <td align="right">Liverpool</td>
    </tr>

    <tr>
      <td rowspan="2" valign="middle">Anna</td>
      <td>25</td>
      <td>Manchester</td>
    </tr>

    <tr>
      <td>27</td>
      <td>Leeds</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td colspan="3" align="center">End of Table</td>
    </tr>
  </tfoot>
</table>
```

---

### Explanation Summary

* `border="1"` → visible borders
* `cellpadding="10"` → inner spacing
* `cellspacing="5"` → gaps between cells
* `width="80%"` → responsive width
* `align="center"` → table centered
* `bgcolor` → background coloring
* `<caption>` → table title
* `<thead>`, `<tbody>`, `<tfoot>` → logical grouping
* `colspan` & `rowspan` → merged cells
* `align` & `valign` → content alignment

---

## 9.4 Exercises 📝

---

### Exercise 1: Cell Padding and Spacing

**Task:**
Create a table with columns **Name**, **Age**, and **City**.

**Requirements:**

* Use `<table>`
* Header row with three `<th>` elements
* Set `cellpadding="10"`
* Set `cellspacing="5"`
* Add at least three data rows

---

### Exercise 2: Table Alignment and Background Color

**Task:**
Create a centered table displaying **Name**, **Age**, and **City**.

**Requirements:**

* Table width must be `80%`
* Table must be centered using `align="center"`
* Apply a background color using `bgcolor`
* Include header and data rows

---

## 9.5 Key Takeaways ✅

* HTML attributes provide **basic table styling**
* `cellpadding` affects **inside space**
* `cellspacing` affects **space between cells**
* `align` and `valign` control positioning
* `bgcolor` improves visual clarity
* CSS is preferred today—but understanding attributes builds strong foundations

---

# 10. CSS Table Styling

While HTML attributes help us understand how tables work, **modern web development relies on CSS** for styling. CSS provides **better control, cleaner code, accessibility benefits, and responsiveness**.

In this section, we focus on:

* `border-collapse`
* `nth-child()`
* Clean, readable table layouts

---

## 10.1 Why Use CSS for Table Styling?

Using CSS instead of HTML attributes allows you to:

* Separate **content (HTML)** from **presentation (CSS)**
* Avoid deprecated attributes
* Create consistent styles across many tables
* Improve accessibility and maintainability

---

## 10.2 The `border-collapse` Property

### Purpose

Controls **how table borders are rendered**.

### Possible Values

| Value      | Description                        |
| ---------- | ---------------------------------- |
| `separate` | Default – borders are separated    |
| `collapse` | Borders merge into a single border |

---

### Example Without `border-collapse`

```html
<table>
  <tr>
    <th>Name</th>
    <th>Score</th>
  </tr>
  <tr>
    <td>Ivan</td>
    <td>91</td>
  </tr>
</table>
```

```css
table, th, td {
  border: 1px solid black;
}
```

**Result on Web Page:**

* Double borders between cells
* Gaps appear where borders overlap

---

### Example With `border-collapse: collapse`

```css
table {
  border-collapse: collapse;
}

table, th, td {
  border: 1px solid black;
}
```

**Result on Web Page:**

* Single, clean borders
* Professional-looking table
* Most commonly used setting

📌 **Best practice:** Always use `border-collapse: collapse` unless you need separated borders.

---

## 10.3 The `nth-child()` Selector

### Purpose

Styles rows or columns based on their position.

Very useful for:

* Zebra-striping tables
* Highlighting alternating rows
* Improving readability

---

## 10.3.1 Zebra Striping Rows

### CSS Example

```css
tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}
```

### HTML

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Ivan</td><td>91</td></tr>
    <tr><td>Maria</td><td>94</td></tr>
    <tr><td>Nina</td><td>89</td></tr>
    <tr><td>Peter</td><td>85</td></tr>
  </tbody>
</table>
```

### Result on Web Page

* Even rows have a light background
* Odd rows remain white
* Easier to scan horizontally across rows

---

## 10.3.2 Styling Odd Rows

```css
tbody tr:nth-child(odd) {
  background-color: #e9f5ff;
}
```

📌 You can also use:

* `nth-child(3)` → styles only the 3rd row
* `nth-child(3n)` → styles every 3rd row

---

## 10.4 Complete CSS-Styled Table Example

### HTML

```html
<table class="students">
  <caption>Exam Results</caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Ivan</td><td>91</td></tr>
    <tr><td>Maria</td><td>94</td></tr>
    <tr><td>Nina</td><td>89</td></tr>
  </tbody>
</table>
```

### CSS

```css
.students {
  width: 100%;
  border-collapse: collapse;
}

.students th,
.students td {
  border: 1px solid #ccc;
  padding: 12px;
  text-align: left;
}

.students thead {
  background-color: #f2f2f2;
}

.students tbody tr:nth-child(even) {
  background-color: #fafafa;
}

.students caption {
  font-weight: bold;
  margin-bottom: 10px;
}
```

### Result on Web Page

* Clean borders
* Alternating row colors
* Clear header distinction
* Caption positioned above table

---

# 11. Accessibility Best Practices for Tables

Tables must be **understandable for screen readers**, keyboard users, and assistive technologies.

---

## 11.1 Always Use `<th>` for Headers

### Why?

Screen readers use `<th>` to understand relationships between headers and data.

❌ Bad:

```html
<td>Name</td>
```

✅ Good:

```html
<th>Name</th>
```

---

## 11.2 Use `<caption>` to Describe the Table

### Purpose

* Provides a **summary of table purpose**
* Read aloud by screen readers

```html
<caption>Monthly Sales Report</caption>
```

📌 Captions are **not decoration** — they are semantic descriptions.

---

## 11.3 Use `<thead>`, `<tbody>`, and `<tfoot>`

These elements:

* Help screen readers navigate table structure
* Improve semantic meaning

```html
<thead> → column headers  
<tbody> → main data  
<tfoot> → summary or totals
```

---

## 11.4 Scope Attribute for Headers

### Purpose

Defines whether a header applies to a **row** or **column**.

```html
<th scope="col">Name</th>
<th scope="row">Ivan</th>
```

| Value | Meaning       |
| ----- | ------------- |
| `col` | Column header |
| `row` | Row header    |

📌 Especially important for complex tables.

---

## 11.5 Avoid Using Tables for Layout

❌ Do NOT use tables to position elements on a page.

✔️ Tables are for **data only**

✔️ Layout should be done using **CSS Grid or Flexbox**

---

## 11.6 Keep Tables Simple

* Avoid excessive merging (`rowspan`, `colspan`)
* Keep consistent column structure
* Complex tables are harder for assistive tools

---

# 12. HTML Attributes vs CSS Styling (Comparison Table)

| Feature                | HTML Attributes       | CSS Styling         |
| ---------------------- | --------------------- |---------------------|
| Purpose                | Basic, inline styling | Full visual control |
| Modern usage           | Deprecated / legacy   | Recommended         |
| Separation of concerns | ❌ No                 | ✅ Yes              |
| Reusability            | ❌ Low                | ✅ High             |
| Accessibility          | Limited               | Strong              |
| Maintainability        | Hard to update        | Easy to update      |
| Responsiveness         | Poor                  | Excellent           |
| Industry standard      | ❌ No                 |  ✅ Yes             |

---

## Example Comparison

### HTML Attribute Styling

```html
<table border="1" cellpadding="10" bgcolor="#f0f0f0">
```

* ❌ Mixes structure and design
* ❌ Hard to maintain

---

### CSS Styling (Preferred)

```css
table {
  border-collapse: collapse;
  background-color: #f0f0f0;
}
```

* ✅ Clean HTML
* ✅ Scalable
* ✅ Accessible

---

# 13. Summary & Teaching Notes

* `border-collapse` removes double borders
* `nth-child()` improves readability
* CSS replaces deprecated HTML attributes
* Accessibility relies on semantic structure
* Tables should describe data, not layout

---

