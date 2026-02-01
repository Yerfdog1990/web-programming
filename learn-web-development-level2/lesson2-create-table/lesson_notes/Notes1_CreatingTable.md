
---

# Creating Tables in HTML

Tables in HTML are used to **organize data in a tabular (row-and-column) format**. They are especially useful for displaying **structured data** such as lists, schedules, reports, and comparisons.

HTML tables are built using a set of **semantic table elements** that describe the structure of the data, not just how it looks.

---

## 6.1 Core Table Elements: `<table>` and `<tr>`

### The `<table>` Element

The `<table>` tag is the **main container** for all table-related content.
Every table **must start and end** with a `<table>` tag.

Inside the `<table>` element, you define:

* Rows (`<tr>`)
* Header cells (`<th>`)
* Data cells (`<td>`)

#### Basic Structure

```html
<table>
  <!-- table rows go here -->
</table>
```

🧠 **Important:**
The `<table>` tag **does not contain text directly** — it only contains rows.

---

### The `<tr>` Element (Table Row)

The `<tr>` tag defines a **single row** in the table.

* Each `<tr>` represents **one horizontal row**
* Rows contain **cells**, not raw text

#### Example

```html
<table>
  <tr>
    <!-- cells go here -->
  </tr>
</table>
```

A table can have **any number of rows**, and each row can have **multiple cells**.

---

## 6.2 Table Cells: `<td>` and `<th>`

### The `<td>` Element (Table Data Cell)

The `<td>` tag is used to define a **regular data cell** inside a table row.

* It contains actual data values
* It must be placed **inside a `<tr>`**
* Multiple `<td>` elements form columns

#### Example

```html
<table>
  <tr>
    <td>Cell 1</td>
    <td>Cell 2</td>
    <td>Cell 3</td>
  </tr>
</table>
```

### Result on the Web Page

| Cell 1 | Cell 2 | Cell 3 |

---

### The `<th>` Element (Table Header Cell)

The `<th>` tag defines a **header cell**.

By default, browsers render `<th>` content as:

* **Bold**
* **Centered**

Header cells describe what the data in a column (or row) represents.

#### Example

```html
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
    <th>Header 3</th>
  </tr>
</table>
```

### Result on the Web Page

| **Header 1** | **Header 2** | **Header 3** |

---

## 6.3 A Complete Example Table

Let’s combine everything so far.

### HTML Code

```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>
  <tr>
    <td>Ivan</td>
    <td>30</td>
    <td>Toronto</td>
  </tr>
  <tr>
    <td>Maria</td>
    <td>25</td>
    <td>Frankfurt</td>
  </tr>
  <tr>
    <td>Nina</td>
    <td>35</td>
    <td>Paris</td>
  </tr>
</table>
```

### Result on the Web Page (Unstyled)

| Name  | Age | City      |
| ----- | --- | --------- |
| Ivan  | 30  | Toronto   |
| Maria | 25  | Frankfurt |
| Nina  | 35  | Paris     |

⚠️ Notice:
Without CSS, tables **look plain and hard to read**.

---

## 6.4 Styling Tables with CSS

Tables almost always require **CSS styling** to improve readability.

### The Double Border Problem 😬

If you add borders directly to `<td>` and `<th>`:

```css
td, th {
  border: 1px solid black;
}
```

You’ll get **double borders** between cells — one border per cell.

### The Solution: `border-collapse`

The CSS property `border-collapse: collapse;` merges neighboring borders into a **single border**.

---

### Recommended Table Styling

```css
table {
  width: 50%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
```

### What This Styling Achieves

✔️ Single, clean borders
✔️ Space inside cells (padding)
✔️ Clear distinction for headers
✔️ Improved readability

---

### Result on the Web Page (Styled Table)

| Name  | Age | City             |
| ----- | --- | ---------------- |
| Ivan  | 30  | Moscow           |
| Maria | 25  | Saint Petersburg |

(Neat, readable, professional 👌)

---

## 6.5 Best Practices for HTML Tables

* Use `<th>` for **headers**, not `<td>`
* Keep tables for **data**, not layout
* Always style tables with CSS
* Ensure each row has the **same number of cells**
* Use semantic structure for accessibility

---

## 6.6 Exercise 1: Table with Headers

### Task

Create a table with:

* One header row
* Two data rows

#### Table Data

Headers:

* Name
* Age
* City

Row 1:

* Ivan
* 30
* Moscow

Row 2:

* Maria
* 25
* Saint Petersburg

### Requirements

* Use a `<table>` tag as the container
* Create the header row using `<tr>` and `<th>`
* Create data rows using `<tr>` and `<td>`
* All table content must be inside the `<table>` tag

---

## 6.7 Exercise 2: Table Styling

Style the table created above.

### Styling Requirements

* Table width: `50%`
* Remove double borders using `border-collapse: collapse`
* Cell borders: `1px solid black`
* Cell padding: at least `5px`
* Header background color: `#f2f2f2`

---

## 6.8 Optional Challenge 🚀

* Center the table on the page
* Align the **Age** column text to the center
* Add a hover effect for rows using CSS

---

## Key Takeaways 🧠

* `<table>` defines the table container
* `<tr>` defines rows
* `<td>` holds data
* `<th>` defines headers
* CSS is essential for readable tables
* Structure first, style second

---