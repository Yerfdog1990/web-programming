
---

# 8. Merging Table Cells in HTML

Tables are used to display **structured, grid-based data**.
By default, every table cell occupies **one row and one column**.

However, real-world data often needs:

* Headings that span multiple columns
* Categories that apply to multiple rows
* Grouped or summarized data

HTML provides **two attributes** to handle this:

* `colspan` → merge cells **horizontally**
* `rowspan` → merge cells **vertically**

---

## 8.1 Merging Cells Horizontally (`colspan`)

### What is `colspan`?

The `colspan` attribute tells the browser:

> “This cell should stretch across **N columns** instead of just one.”

📌 **Key rule:**
`colspan` works **left to right** within the **same row**.

---

### Basic Syntax

```html
<td colspan="2">Merged Cell</td>
```

This cell will take the space of **two normal cells** in that row.

---

### Example: Horizontal Cell Merging

#### HTML Code

```html
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>25</td>
    <td>London</td>
  </tr>
  <tr>
    <td colspan="2">Total</td>
    <td>2 records</td>
  </tr>
</table>
```

---

### How This Looks on the Web Page (Result Explanation)

```
+-------+-----+----------+
| Name  | Age | City     |
+-------+-----+----------+
| Alice | 25  | London   |
+------------------------+
| Total       | 2 records|
+------------------------+
```

* ✔ The **“Total”** cell stretches across **Name + Age**
* ✔ The third column (**City**) remains separate

---

### When to Use `colspan`

* Table footers (Totals, Summaries)
* Section headings across multiple columns
* Timetables or schedules
* Grouped column headers

---

## 8.2 Merging Cells Vertically (`rowspan`)

### What is `rowspan`?

The `rowspan` attribute tells the browser:

> “This cell should stretch **downward across N rows**.”

📌 **Key rule:**
`rowspan` works **top to bottom** within the **same column**.

---

### Basic Syntax

```html
<td rowspan="2">Merged Cell</td>
```

This cell occupies **two rows vertically**.

---

### Example: Vertical Cell Merging

#### HTML Code

```html
<table border="1">
  <tr>
    <th>Name</th>
    <th>Project</th>
    <th>City</th>
  </tr>
  <tr>
    <td rowspan="2">Alice</td>
    <td>Project A</td>
    <td>London</td>
  </tr>
  <tr>
    <td>Project B</td>
    <td>Batumi</td>
  </tr>
</table>
```

---

### How This Looks on the Web Page (Result Explanation)

```
+-------+-----------+---------+
| Name  | Project   | City    |
+-------+-----------+---------+
| Alice | Project A | London  |
|       +-----------+---------+
|       | Project B | Batumi  |
+-------+-----------+---------+
```

* ✔ **“Alice”** spans two rows
* ✔ The second row does **not** repeat the name cell
* ✔ The merged cell **“eats”** the space below it

---

### Important Concept: “Eaten Cells”

When you use `rowspan`, **you must NOT add another `<td>` in the next row for that column**.

❌ This would break the table structure.

✔ The browser automatically fills that space.

---

## 8.3 How `colspan` and `rowspan` Work (Mental Model)

### Think of Tables as a Grid

Imagine the table as graph paper:

* Each `<td>` normally fills **one square**
* `colspan` fills **multiple squares horizontally**
* `rowspan` fills **multiple squares vertically**

📌 **Rule to remember:**

> The total number of columns per row must stay consistent
> (after counting merged cells).

---

### Real-World Analogies

#### `colspan` (Horizontal)

* One course occupies **two time slots**
* One heading applies to **multiple categories**

#### `rowspan` (Vertical)

* One employee works on **multiple projects**
* One category covers **several rows of data**

---

## 8.4 Practical Examples

---

### Example 1: Employees Working on Multiple Projects (Horizontal)

#### HTML Code

```html
<table border="1">
  <tr>
    <th>Name</th>
    <th>Project A</th>
    <th>Project B</th>
    <th>City</th>
  </tr>
  <tr>
    <td>Ivan</td>
    <td colspan="2">Yes</td>
    <td>London</td>
  </tr>
  <tr>
    <td>Maria</td>
    <td colspan="2">Yes</td>
    <td>London</td>
  </tr>
  <tr>
    <td>Peter</td>
    <td>Yes</td>
    <td>No</td>
    <td>Rome</td>
  </tr>
</table>
```

---

### Rendered Result (Explained)

```
+-------+-----------+-----------+--------+
| Name  | Project A | Project B | City   |
+-------+----------------------+---------+
| Ivan  | Yes                   | London |
+-------+----------------------+---------+
| Maria | Yes                   | London |
+-------+-----------+-----------+--------+
| Peter | Yes       | No        | Rome   |
+-------+-----------+-----------+--------+
```

* ✔ Ivan & Maria: merged project columns
* ✔ Peter: separate project cells

---

### Example 2: One Person, Multiple Projects (Vertical)

#### HTML Code (With Explanation Comment)

```html
<table border="1">
  <tr>
    <th>Name</th>
    <th>Project</th>
    <th>City</th>
  </tr>
  <tr>
    <td rowspan="2">Ivan</td>
    <td>Project A</td>
    <td>London</td>
  </tr>
  <tr>
    <!-- Name cell is eaten by rowspan -->
    <td>Project B</td>
    <td>London</td>
  </tr>
  <tr>
    <td>Sergey</td>
    <td>Project C</td>
    <td>Rome</td>
  </tr>
</table>
```

---

### Rendered Result (Explained)

```
+-------+-----------+--------+
| Name  | Project   | City   |
+-------+-----------+--------+
| Ivan  | Project A | London |
|       | Project B | London |
+-------+-----------+--------+
| Sergey| Project C | Rome   |
+-------+-----------+--------+
```

* ✔ Comment shows **where the missing cell went**
* ✔ Very useful teaching technique 👌

---

## 8.5 Combining `colspan` and `rowspan`

### When Do We Combine Them?

* Complex reports
* Schedules
* Grouped employee/project tables
* Academic results tables

---

### Combined Example

```html
<table border="1">
  <tr>
    <th>Name</th>
    <th>Project</th>
    <th>City</th>
  </tr>
  <tr>
    <td rowspan="2">Ivan</td>
    <td>Project A</td>
    <td rowspan="2">London</td>
  </tr>
  <tr>
    <td>Project B</td>
  </tr>
  <tr>
    <td>Maria</td>
    <td colspan="2">Project A (with Ivan)</td>
  </tr>
</table>
```

---

### Result Explanation

* Ivan spans **two projects vertically**
* City “London” also spans two rows
* Maria’s project spans **two columns horizontally**

---

## 8.6 Common Mistakes to Avoid 🚫

1. **Forgetting to remove eaten cells**

   ```html
   <!-- WRONG -->
   <tr>
     <td rowspan="2">Alice</td>
     <td>25</td>
   </tr>
   <tr>
     <td>30</td> <!-- extra cell breaks table -->
   </tr>
   ```

2. **Mismatched column count**

    * Every row must visually end up with the same number of columns

3. **Overusing merged cells**

    * If a table becomes hard to read → redesign it

4. **Using tables for layout**

    * Tables are for **data**, not page structure (use CSS Grid/Flexbox instead)

---

## 8.7 Exercises 📝

---

### Exercise 1: `rowspan` Practice

**Task:**
Create a table with columns **Name**, **Age**, **City**.

**Requirements:**

* Merge the first two rows in the **Name** column
* The merged cell must contain **"Alice"**
* Fill in age and city for each row

---

### Exercise 2: Combine `rowspan` and `colspan`

**Task:**
Create a table showing employees and projects.

**Requirements:**

* Columns: **Name**, **Project**, **City**
* Ivan works on **two projects**
* Ivan and Maria work together on **one project**
* Use both `rowspan` and `colspan`

💡 Tip: Sketch the table on paper first!

---

## 8.8 Key Takeaways ✅

* `colspan` → merge **columns**
* `rowspan` → merge **rows**
* Merged cells **replace** other cells
* Always keep column count consistent
* Use comments to teach “eaten cells”

---

