# CSS Grid – Automatic Placement 

CSS Grid provides powerful **automatic placement features** that allow the browser to place grid items without specifying their exact position. This makes layouts flexible and easier to maintain, especially when the number of elements is unknown.

Automatic placement in CSS Grid is controlled using three main properties:

* `grid-auto-rows`
* `grid-auto-columns`
* `grid-auto-flow`

These properties define **how new rows or columns are created and how items are placed when no explicit grid position is specified**.

---

# 1. Automatic Placement in CSS Grid

When grid items **do not have explicit placement** (i.e., no `grid-row` or `grid-column` defined), the browser automatically places them into the grid.

Automatic placement works based on:

1. The grid structure defined by `grid-template-rows` or `grid-template-columns`
2. The placement direction (`grid-auto-flow`)
3. The size of automatically generated rows or columns

If the grid runs out of space, **new rows or columns are automatically created**.

---

# 2. The `grid-auto-rows` Property

The **`grid-auto-rows` property** defines the **height of rows that are automatically created** when there are more items than defined rows.

### Syntax

```css
.grid-container {
  grid-auto-rows: value;
}
```

### Value

The value defines the **height of automatically generated rows** and can be:

* `px`
* `%`
* `fr`
* `auto`
* `minmax()`

---

## Example 1 – Fixed Row Height

All automatically created rows will have a height of **100px**.

### CSS

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  gap: 10px;
}
```

### HTML

```html
<div class="grid-container">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
  <div class="grid-item">Item 4</div>
  <div class="grid-item">Item 5</div>
  <div class="grid-item">Item 6</div>
</div>
```

### Explanation

* The grid has **3 columns**
* When items exceed available space, **new rows are created**
* Each new row has **height = 100px**

---

## Example 2 – Flexible Row Height

Automatically created rows have **minimum height 100px** but can grow depending on content.

### CSS

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
```

### Explanation

`minmax(100px, auto)` means:

| Minimum | Maximum                |
| ------- | ---------------------- |
| 100px   | grows based on content |

This prevents rows from becoming too small.

---

# 3. The `grid-auto-columns` Property

The **`grid-auto-columns` property** defines the **width of columns that are automatically created** when items exceed the defined columns.

### Syntax

```css
.grid-container {
  grid-auto-columns: value;
}
```

### Value

Defines the **width of automatically created columns**.

---

## Example 1 – Fixed Column Width

Automatically created columns will be **100px wide**.

### CSS

```css
.grid-container {
  display: grid;
  grid-template-rows: repeat(3, 100px);
  grid-auto-columns: 100px;
}
```

### Explanation

* Grid has **3 rows**
* If items exceed available columns, **new columns are created**
* Each column width = **100px**

---

## Example 2 – Flexible Column Width

Automatically created columns have:

* Minimum width **100px**
* Can grow up to **1fr**

### CSS

```css
.grid-container {
  display: grid;
  grid-template-rows: repeat(3, 100px);
  grid-auto-columns: minmax(100px, 1fr);
}
```

### Explanation

| Property | Meaning        |
| -------- | -------------- |
| `100px`  | minimum width  |
| `1fr`    | flexible width |

This allows columns to **expand and fill free space**.

---

# 4. The `grid-auto-flow` Property

The **`grid-auto-flow` property** determines **how items are automatically placed in the grid**.

### Syntax

```css
.grid-container {
  grid-auto-flow: value;
}
```

### Possible Values

| Value    | Description                       |
| -------- | --------------------------------- |
| `row`    | items placed row by row (default) |
| `column` | items placed column by column     |
| `dense`  | fills empty gaps                  |

---

## Example 1 – Row Placement (Default)

Items are placed **left → right, row by row**.

### CSS

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row;
}
```

### Placement Example

```
1 2 3
4 5 6
7 8 9
```

---

## Example 2 – Column Placement

Items fill **columns first**, then move to the next column.

### CSS

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: column;
}
```

### Placement Example

```
1 4 7
2 5 8
3 6 9
```

---

## Example 3 – Dense Filling

The `dense` keyword fills **empty gaps in the grid**.

### CSS

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row dense;
}
```

### Explanation

If an item spans multiple rows/columns and creates a gap, **smaller items can fill that gap automatically**.

---

# 5. Full Implementation Example

### CSS

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  grid-auto-flow: row dense;
  gap: 10px;
}

.grid-item {
  background-color: #3498db;
  color: white;
  padding: 20px;
  text-align: center;
  border: 1px solid #fff;
}
```

### HTML

```html
<div class="grid-container">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
  <div class="grid-item">Item 4</div>
  <div class="grid-item">Item 5</div>
  <div class="grid-item">Item 6</div>
</div>
```

### Code Explanation

| Element                 | Description             |
| ----------------------- | ----------------------- |
| `.grid-container`       | Creates a grid layout   |
| `grid-template-columns` | Defines 3 equal columns |
| `grid-auto-rows`        | New rows = 100px        |
| `grid-auto-flow`        | Items placed by rows    |
| `.grid-item`            | Styles each grid item   |

---

# Exercise 1 – Flexible Auto Columns

### Task

Create a grid container with:

* 3 rows of **100px height**
* Several elements inside the grid
* Automatically created columns
* Columns should have **minimum width 100px**
* Columns should **expand up to 1fr**

---

### Solution

### CSS

```css
.grid-container {
  display: grid;
  grid-template-rows: repeat(3, 100px);
  grid-auto-columns: minmax(100px, 1fr);
  grid-auto-flow: column;
  gap: 10px;
}

.grid-item {
  background-color: steelblue;
  color: white;
  padding: 20px;
  text-align: center;
}
```

### HTML

```html
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
</div>
```

### Result

New columns are created automatically with flexible widths.

---

# Exercise 2 – Auto Arrangement in Columns

### Task

Create a grid where:

* Container has **3 equal columns**
* Items automatically fill **columns first**
* Use `grid-auto-flow` to control placement

---

### Solution

### CSS

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: column;
  gap: 10px;
}

.grid-item {
  background-color: purple;
  color: white;
  padding: 20px;
  text-align: center;
}
```

### HTML

```html
<div class="grid-container">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
  <div class="grid-item">Item 4</div>
  <div class="grid-item">Item 5</div>
  <div class="grid-item">Item 6</div>
</div>
```

### Layout Result

Items fill vertically:

```
1 4 7
2 5 8
3 6 9
```

---

# Key Takeaways

| Property            | Purpose                                         |
| ------------------- | ----------------------------------------------- |
| `grid-auto-rows`    | Controls height of automatically created rows   |
| `grid-auto-columns` | Controls width of automatically created columns |
| `grid-auto-flow`    | Controls placement direction                    |
| `dense`             | Fills empty spaces in the grid                  |

Automatic placement makes CSS Grid **dynamic, responsive, and easier to scale** when the number of elements changes.

---

