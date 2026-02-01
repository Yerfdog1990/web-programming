
---

# Structuring Tables in HTML

When working with tables in HTML, structure matters just as much as appearance. Beyond `<table>`, `<tr>`, `<th>`, and `<td>`, HTML provides **semantic table tags** that help organize table content logically and meaningfully.

These tags are:

* `<caption>`
* `<thead>`
* `<tbody>`
* `<tfoot>`

They improve:

* Readability of the HTML code
* Accessibility (especially for screen readers)
* Search engine understanding
* Styling control with CSS

---

## 7.1 The `<caption>` Tag

### Purpose of `<caption>`

The `<caption>` tag is used to provide a **title or description** for a table.

* It explains **what the table is about**
* It improves accessibility and semantics
* It must be placed **immediately after the opening `<table>` tag**

### Syntax

```html
<table>
  <caption>Table Title</caption>
  <!-- Table content -->
</table>
```

---

### Example: Table with a Caption

```html
<table>
  <caption>Table Title</caption>
  <tr>
    <th>Name</th>
    <th>Score</th>
  </tr>
  <tr>
    <td>Ivan</td>
    <td>90</td>
  </tr>
  <tr>
    <td>Maria</td>
    <td>85</td>
  </tr>
</table>
```

### Result on the Web Page

**Table Title**

| Name  | Score |
| ----- | ----- |
| Ivan  | 90    |
| Maria | 85    |

📌 By default, the caption appears **above the table**, but this can be controlled with CSS.

---

## 7.2 The `<thead>` Tag

### Purpose of `<thead>`

The `<thead>` tag groups **header rows** of a table.

* Contains column headers (`<th>`)
* Helps separate headers from table data
* Improves accessibility and styling

### Syntax

```html
<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
</table>
```

---

### Example: Using `<thead>`

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ivan</td>
      <td>90</td>
    </tr>
    <tr>
      <td>Maria</td>
      <td>85</td>
    </tr>
  </tbody>
</table>
```

### Result on the Web Page

| Name  | Score |
| ----- | ----- |
| Ivan  | 90    |
| Maria | 85    |

🧠 Even though `<thead>` does not change appearance by itself, it adds **semantic meaning**.

---

## 7.3 The `<tbody>` Tag

### Purpose of `<tbody>`

The `<tbody>` tag groups the **main body content** of the table.

* Contains the actual data rows
* Separates data from headers and footers
* Useful for styling alternating rows and scripting

### Syntax

```html
<table>
  <thead>
    <!-- headers -->
  </thead>
  <tbody>
    <!-- main data -->
  </tbody>
</table>
```

---

### Example: `<tbody>` in Action

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ivan</td>
      <td>90</td>
    </tr>
    <tr>
      <td>Maria</td>
      <td>85</td>
    </tr>
  </tbody>
</table>
```

### Result on the Web Page

| Name  | Score |
| ----- | ----- |
| Ivan  | 90    |
| Maria | 85    |

---

## 7.4 The `<tfoot>` Tag

### Purpose of `<tfoot>`

The `<tfoot>` tag groups **footer rows**, usually containing:

* Totals
* Averages
* Summary information

### Syntax

```html
<table>
  <thead>...</thead>
  <tbody>...</tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>100</td>
    </tr>
  </tfoot>
</table>
```

---

### Complete Example with `<tfoot>`

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ivan</td>
      <td>90</td>
    </tr>
    <tr>
      <td>Maria</td>
      <td>85</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Average Score</td>
      <td>87.5</td>
    </tr>
  </tfoot>
</table>
```

### Result on the Web Page

| Name              | Score    |
| ----------------- | -------- |
| Ivan              | 90       |
| Maria             | 85       |
| **Average Score** | **87.5** |

---

## 7.5 Understanding Table Structure (Quick Recap)

| Tag         | Purpose                       |
| ----------- | ----------------------------- |
| `<table>`   | Outer container for the table |
| `<caption>` | Table title/description       |
| `<thead>`   | Groups header rows            |
| `<tbody>`   | Groups main data rows         |
| `<tfoot>`   | Groups summary/footer rows    |

---

## 7.6 Recap Example: Fully Structured and Styled Table

### HTML

```html
<table>
  <caption>Exam Results</caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
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
  </tbody>
  <tfoot>
    <tr>
      <td>Average Score</td>
      <td>91.33</td>
    </tr>
  </tfoot>
</table>
```

### CSS

```css
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 18px;
  text-align: left;
}

caption {
  caption-side: top;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
}

th, td {
  padding: 12px 15px;
  border: 1px solid #ddd;
}

thead th {
  background-color: #f2f2f2;
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

tfoot td {
  font-weight: bold;
  background-color: #f2f2f2;
}
```

---

## 7.7 Exercise 1: Caption with `<caption>`

### Task

Create a table with the caption **"Class Schedule"**.

### Requirements

* Use a `<table>` tag as the container
* Add a `<caption>` with the text **"Class Schedule"**
* Use `<thead>` with two headers:

    * "Day of the Week"
    * "Subject"
* Add one data row:

    * "Monday"
    * "Mathematics"
* `<th>` elements must be inside `<thead>`
* `<td>` elements must be inside `<tbody>` (or directly inside `<table>`)

---

## 7.8 Exercise 2: Table Structure with Summary

### Task

Create a table titled **"Sales Statistics"** using `<thead>`, `<tbody>`, and `<tfoot>`.

### Data

Headers:

* Month
* Sales

Body rows:

* January – 1000
* February – 1200

Footer:

* Total Sales – 2200

### Requirements

* Use `<thead>` for headers
* Use `<tbody>` for data rows
* Use `<tfoot>` for summary
* Ensure correct nesting of `<tr>`, `<th>`, and `<td>`

---

## Key Takeaways 🧠

* Table structure is **semantic**, not just visual
* `<caption>` describes the table
* `<thead>`, `<tbody>`, and `<tfoot>` organize content logically
* Proper structure improves accessibility and maintainability
* Styling becomes easier and cleaner with structured tables

---

## 7.9 Common Mistakes to Avoid When Structuring Tables

Even though HTML tables are straightforward, beginners often make structural mistakes that reduce readability, accessibility, or maintainability.

### ❌ 1. Skipping Semantic Table Tags

**Mistake:**

```html
<table>
  <tr><th>Name</th><th>Score</th></tr>
  <tr><td>Ivan</td><td>90</td></tr>
</table>
```

**Why it’s a problem:**

* Lacks semantic grouping
* Harder for screen readers to interpret
* Harder to style specific table sections

✅ **Better approach:**

```html
<table>
  <thead>
    <tr><th>Name</th><th>Score</th></tr>
  </thead>
  <tbody>
    <tr><td>Ivan</td><td>90</td></tr>
  </tbody>
</table>
```

---

### ❌ 2. Placing `<caption>` in the Wrong Position

**Mistake:**

```html
<table>
  <tr>
    <caption>Exam Results</caption>
  </tr>
</table>
```

**Why it’s wrong:**

* `<caption>` must appear **immediately after `<table>`**
* Browsers may ignore or misplace it

✅ **Correct placement:**

```html
<table>
  <caption>Exam Results</caption>
  ...
</table>
```

---

### ❌ 3. Using `<th>` for Regular Data Cells

**Mistake:**

```html
<tr>
  <th>Ivan</th>
  <th>90</th>
</tr>
```

**Why it’s incorrect:**

* `<th>` is for headers only
* Screen readers treat headers differently

✅ **Correct usage:**

```html
<tr>
  <td>Ivan</td>
  <td>90</td>
</tr>
```

---

### ❌ 4. Using Tables for Page Layout

**Mistake:**

```html
<table>
  <tr>
    <td>Sidebar</td>
    <td>Main content</td>
  </tr>
</table>
```

**Why it’s bad practice:**

* Tables are for **data**, not layout
* Breaks responsiveness and accessibility

✅ **Use instead:**

```html
<div class="layout">
  <aside>Sidebar</aside>
  <main>Main content</main>
</div>
```

---

### ❌ 5. Forgetting to Close Table Tags

**Mistake:**

```html
<table>
  <tr>
    <td>Ivan
    <td>90
```

**Why it’s risky:**

* Browsers may auto-fix it incorrectly
* Leads to unpredictable layouts

✅ **Always close tags properly**

---

## 7.10 Column-Level Structuring with `<colgroup>` and `<col>`

Sometimes you want to style or control **entire columns**, not rows. That’s where `<colgroup>` and `<col>` come in.

---

## The `<colgroup>` Tag

### Purpose

* Groups one or more columns
* Applies styles or attributes to columns
* Improves readability and consistency

### Syntax

```html
<table>
  <colgroup>
    <col>
    <col>
  </colgroup>
</table>
```

📌 `<colgroup>` must appear **inside `<table>`**, before `<thead>` or `<tbody>`.

---

## The `<col>` Tag

### Purpose

* Represents a single column
* Can be styled with CSS
* Can span multiple columns using `span`

---

## Example: Styling Columns with `<colgroup>` and `<col>`

```html
<table>
  <caption>Student Scores</caption>

  <colgroup>
    <col style="background-color: #f9f9f9;">
    <col style="background-color: #e6f2ff;">
  </colgroup>

  <thead>
    <tr>
      <th>Name</th>
      <th>Score</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Ivan</td>
      <td>90</td>
    </tr>
    <tr>
      <td>Maria</td>
      <td>85</td>
    </tr>
  </tbody>
</table>
```

### Result on the Web Page

* First column has a light gray background
* Second column has a light blue background
* Styles apply to **entire columns**, not individual cells

---

## Using `span` with `<col>`

You can apply styles to multiple columns at once.

```html
<colgroup>
  <col span="2" style="background-color: #f2f2f2;">
</colgroup>
```

This styles **both columns together**.

---

## When to Use `<colgroup>` and `<col>`

✅ Use when:

* Styling entire columns
* Setting consistent widths
* Highlighting important columns

❌ Avoid when:

* You only need to style a single cell
* Row-based styling is enough

---

## Common Mistakes with `<colgroup>`

### ❌ Styling `<col>` content directly

```css
col {
  color: red; /* Won’t work */
}
```

❗ `<col>` affects **cell layout**, not text content.

✅ Style backgrounds, widths, and borders instead.

---

## Exercise: Column Styling with `<colgroup>`

### Task

Create a table titled **"Product Prices"** with two columns:

* "Product"
* "Price"

### Requirements

* Use `<caption>` for the table title
* Use `<colgroup>` with two `<col>` elements
* Style:

    * First column with a light gray background
    * Second column with a light yellow background
* Use `<thead>` and `<tbody>`
* Add two data rows:

    * "Laptop" – "1200"
    * "Phone" – "800"

---

## Final Takeaways 📌

* Semantic table structure improves accessibility and maintainability
* Avoid layout misuse and incorrect tag placement
* `<colgroup>` and `<col>` allow **column-level styling**
* Combine `<thead>`, `<tbody>`, `<tfoot>`, and `<colgroup>` for clean, professional tables

---