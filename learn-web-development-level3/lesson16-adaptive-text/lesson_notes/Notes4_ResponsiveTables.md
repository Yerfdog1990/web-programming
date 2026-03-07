# Responsive Tables

Tables are widely used in web applications to display **structured data** such as statistics, schedules, financial records, or product lists. However, tables often contain many columns, which can make them **difficult to display on small screens like mobile phones**.

Responsive tables solve this problem by adapting the table layout so that the data remains **readable, accessible, and usable across different screen sizes**.

Several techniques can be used to create responsive tables:

1. Horizontal scrolling
2. Column hiding
3. Stacking layout
4. Card transformation
5. Using CSS frameworks

---

# 9.1 Scrolling (Horizontal Scroll)

One of the **simplest and safest approaches** to making tables responsive is **horizontal scrolling**.

Instead of modifying the table structure, the table is placed inside a container that allows **horizontal scrolling when the table is wider than the screen**.

This approach:

* Preserves the **original table layout**
* Works well for **large datasets**
* Requires **minimal CSS**

---

## Example: Responsive Table with Scrolling

### CSS

```css
.table-container {
  overflow-x: auto;
  width: 100%;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}
```

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Responsive Table with Scrolling</title>
<link rel="stylesheet" href="styles.css">
</head>

<body>

<div class="table-container">
<table>
<thead>
<tr>
<th>Column 1</th>
<th>Column 2</th>
<th>Column 3</th>
<th>Column 4</th>
</tr>
</thead>

<tbody>
<tr>
<td>Data 1</td>
<td>Data 2</td>
<td>Data 3</td>
<td>Data 4</td>
</tr>

<tr>
<td>Data A</td>
<td>Data B</td>
<td>Data C</td>
<td>Data D</td>
</tr>

</tbody>
</table>
</div>

</body>
</html>
```

---

### Code Explanation

**.table-container**

* `overflow-x: auto;` enables **horizontal scrolling** when the table becomes wider than the screen.
* `width: 100%` ensures the container uses the full available width.

**table**

* `width: 100%` allows the table to fill its container.
* `border-collapse: collapse` merges adjacent borders for a cleaner design.

---

# 9.2 Column Hiding

Another technique for responsive tables is **hiding less important columns on small screens**.

This approach:

* Keeps the **most important information visible**
* Removes **secondary data** on smaller screens
* Improves readability on mobile devices

Media queries are used to hide specific columns.

---

## Example: Column Hiding

### CSS

```css
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

@media (max-width: 600px) {
  .hide {
    display: none;
  }
}
```

### HTML

```html
<table>

<thead>
<tr>
<th>Column 1</th>
<th>Column 2</th>
<th class="hide">Column 3</th>
<th class="hide">Column 4</th>
</tr>
</thead>

<tbody>

<tr>
<td>Data 1</td>
<td>Data 2</td>
<td class="hide">Data 3</td>
<td class="hide">Data 4</td>
</tr>

<tr>
<td>Item A</td>
<td>Item B</td>
<td class="hide">Item C</td>
<td class="hide">Item D</td>
</tr>

</tbody>

</table>
```

---

### Code Explanation

**.hide class**

* Columns marked with `.hide` are hidden when the screen width is **600px or less**.

**Media query**

```css
@media (max-width: 600px)
```

Applies styles only on **small screens**.

---

# 9.3 Stacking

Stacking transforms the **table structure into blocks** on smaller screens.

Instead of showing rows and columns, each row becomes a **vertical block**, making the table easier to read on mobile devices.

Key idea:

Each cell shows its **column label using a pseudo-element**.

---

## Example: Stacking Table

### CSS

```css
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

@media (max-width: 600px) {

table, thead, tbody, th, td, tr {
  display: block;
}

th {
  display: none;
}

td {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

td::before {
  content: attr(data-label);
  font-weight: bold;
}

}
```

---

### HTML

```html
<table>

<thead>
<tr>
<th>Name</th>
<th>Email</th>
<th>Role</th>
<th>Status</th>
</tr>
</thead>

<tbody>

<tr>
<td data-label="Name">John</td>
<td data-label="Email">john@email.com</td>
<td data-label="Role">Admin</td>
<td data-label="Status">Active</td>
</tr>

</tbody>

</table>
```

---

### Code Explanation

**display: block**

Transforms table elements into **block elements** on small screens.

**th { display: none }**

Hides the header row.

**td::before**

```css
content: attr(data-label);
```

Displays the **column name before each value**.

Example display on mobile:

```
Name: John
Email: john@email.com
Role: Admin
Status: Active
```

---

# 9.4 Transforming Tables into Cards

Another technique is transforming each table row into a **card-style layout** on small screens.

This approach:

* Improves **visual readability**
* Looks similar to **mobile UI cards**
* Works well for **user profiles, product lists, and data summaries**

---

## Example: Table Cards

### CSS

```css
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

@media (max-width: 600px) {

table, thead, tbody, th, td, tr {
  display: block;
}

th {
  display: none;
}

tr {
  margin-bottom: 10px;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

td {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border: none;
}

td::before {
  content: attr(data-label);
  font-weight: bold;
  margin-right: 10px;
}

}
```

---

### HTML

```html
<table>

<thead>
<tr>
<th>Product</th>
<th>Price</th>
<th>Stock</th>
<th>Status</th>
</tr>
</thead>

<tbody>

<tr>
<td data-label="Product">Laptop</td>
<td data-label="Price">$1200</td>
<td data-label="Stock">15</td>
<td data-label="Status">Available</td>
</tr>

</tbody>

</table>
```

---

# 9.5 Using CSS Frameworks

Many CSS frameworks include **built-in responsive table solutions**, which reduce development time.

A popular example is **Bootstrap**.

---

## Example Using Bootstrap

### HTML

```html
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Responsive Table with Bootstrap</title>

<link rel="stylesheet"
href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

</head>

<body>

<div class="container">

<table class="table table-responsive">

<thead>
<tr>
<th>Column 1</th>
<th>Column 2</th>
<th>Column 3</th>
<th>Column 4</th>
</tr>
</thead>

<tbody>
<tr>
<td>Data 1</td>
<td>Data 2</td>
<td>Data 3</td>
<td>Data 4</td>
</tr>
</tbody>

</table>

</div>

</body>
</html>
```

---

### Code Explanation

**table-responsive**

Adds **horizontal scrolling automatically on small screens**.

**container**

Centers the table and sets a **maximum page width**.

---

# Summary of Responsive Table Techniques

| Technique     | Description                        | Best Use           |
| ------------- | ---------------------------------- | ------------------ |
| Scrolling     | Adds horizontal scroll             | Large datasets     |
| Column hiding | Removes less important columns     | Simple tables      |
| Stacking      | Converts rows into vertical blocks | Mobile readability |
| Cards         | Converts rows into card layout     | UI-heavy apps      |
| Frameworks    | Prebuilt responsive solutions      | Faster development |

---

# Exercises

---

# Exercise 1: Responsive Table with Horizontal Scrolling

### Requirements

1. Create a table inside a container.
2. The table must take the **full width of the screen**.
3. Enable **horizontal scrolling** for small screens.
4. Add styles for:

    * table headers
    * table cells

---

### Solution

#### CSS

```css
.table-container {
  width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background-color: #f2f2f2;
  padding: 10px;
  border: 1px solid #ccc;
}

td {
  padding: 8px;
  border: 1px solid #ccc;
}
```

---

#### HTML

```html
<div class="table-container">

<table>

<thead>
<tr>
<th>Name</th>
<th>Department</th>
<th>Email</th>
<th>Phone</th>
</tr>
</thead>

<tbody>
<tr>
<td>Alice</td>
<td>Marketing</td>
<td>alice@email.com</td>
<td>123456</td>
</tr>

<tr>
<td>Bob</td>
<td>IT</td>
<td>bob@email.com</td>
<td>987654</td>
</tr>

</tbody>

</table>

</div>
```

---

# Exercise 2: Hiding Columns on Mobile

### Requirements

1. Create a table with **4 columns**.
2. Mark two columns as **less important**.
3. Hide them when screen width is **below 600px**.

---

### Solution

#### CSS

```css
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
}

@media (max-width: 600px) {
  .hide {
    display: none;
  }
}
```

---

#### HTML

```html
<table>

<thead>
<tr>
<th>Product</th>
<th>Price</th>
<th class="hide">Supplier</th>
<th class="hide">Warehouse</th>
</tr>
</thead>

<tbody>

<tr>
<td>Keyboard</td>
<td>$40</td>
<td class="hide">TechCorp</td>
<td class="hide">A12</td>
</tr>

<tr>
<td>Mouse</td>
<td>$20</td>
<td class="hide">TechCorp</td>
<td class="hide">A14</td>
</tr>

</tbody>

</table>
```

---

✅ After completing this section you should understand:

* Why tables are difficult to display on small screens
* How to implement **scrolling responsive tables**
* How to **hide columns with media queries**
* How to **stack tables for mobile readability**
* How to transform tables into **mobile-friendly cards**

---

