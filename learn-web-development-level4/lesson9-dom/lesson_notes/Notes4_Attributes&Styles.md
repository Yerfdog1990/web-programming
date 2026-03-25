### Working with Attributes And Styles 

Manipulating attributes and styles lets you change how elements look and behave in response to user actions or other conditions.

#### 4.1 Attribute Manipulation

**1. Getting Attributes**
Use `getAttribute()` to read an attribute’s value.

*Example*
```html
<!DOCTYPE html>
<html>
  <head><title>Document</title></head>
  <body>
    <a href="https://example.com" id="myLink">Visit Example.com</a>

    <script>
      const link = document.getElementById('myLink');
      const href = link.getAttribute('href');
      console.log(href); // Outputs: https://example.com
    </script>
  </body>
</html>
```

**2. Setting Attributes**
Use `setAttribute()` to set or change an attribute.

*Example*
```html
<!DOCTYPE html>
<html>
  <head><title>Document</title></head>
  <body>
    <a href="https://example.com" id="myLink">Visit Example.com</a>

    <script>
      const link = document.getElementById('myLink');
      link.setAttribute('href', 'https://newexample.com');
      console.log(link.getAttribute('href')); // Outputs: https://newexample.com
    </script>
  </body>
</html>
```

**3. Removing Attributes**
Use `removeAttribute()` to delete an attribute.

*Example*
```html
<!DOCTYPE html>
<html>
  <head><title>Document</title></head>
  <body>
    <a href="https://example.com" id="myLink" target="_blank">Visit Example.com</a>

    <script>
      const link = document.getElementById('myLink');
      link.removeAttribute('target');
      console.log(link.getAttribute('target')); // Outputs: null
    </script>
  </body>
</html>
```

**4. Checking for Attributes**
Use `hasAttribute()` to test if an attribute exists.

*Example*
```html
<!DOCTYPE html>
<html>
  <head><title>Document</title></head>
  <body>
    <a href="https://example.com" id="myLink" target="_blank">Visit Example.com</a>

    <script>
      const link = document.getElementById('myLink');
      console.log(link.hasAttribute('target')); // Outputs: true
      link.removeAttribute('target');
      console.log(link.hasAttribute('target')); // Outputs: false
    </script>
  </body>
</html>
```

#### 4.2 Class Manipulation

**1. Adding Classes**
`classList.add()` adds a class.

*Example*
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
    <style>.highlight { background-color: yellow; }</style>
  </head>
  <body>
    <p id="myParagraph">This is a paragraph.</p>

    <script>
      const paragraph = document.getElementById('myParagraph');
      paragraph.classList.add('highlight');
    </script>
  </body>
</html>
```

**2. Removing Classes**
`classList.remove()` removes a class.

*Example*
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
    <style>.highlight { background-color: yellow; }</style>
  </head>
  <body>
    <p id="myParagraph" class="highlight">This is a paragraph.</p>

    <script>
      const paragraph = document.getElementById('myParagraph');
      paragraph.classList.remove('highlight');
    </script>
  </body>
</html>
```

**3. Toggling Classes**
`classList.toggle()` adds the class if it’s absent, removes it if it’s present.

*Example*
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
    <style>.highlight { background-color: yellow; }</style>
  </head>
  <body>
    <button type="button" id="myButton">Click me!</button>

    <script>
      const btn = document.getElementById('myButton');
      btn.addEventListener("click", () => {
        btn.classList.toggle('highlight'); // Adds the class. Removes it on next click.
      });
    </script>
  </body>
</html>
```

**4. Checking for Classes**
`classList.contains()` returns true if the class is present.

*Example*
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
    <style>.highlight { background-color: yellow; }</style>
  </head>
  <body>
    <p id="myParagraph" class="highlight">This is a paragraph.</p>

    <script>
      const paragraph = document.getElementById('myParagraph');
      console.log(paragraph.classList.contains('highlight')); // Outputs: true
      paragraph.classList.remove('highlight');
      console.log(paragraph.classList.contains('highlight')); // Outputs: false
    </script>
  </body>
</html>
```

#### 4.3 Style Manipulation

**1. Modifying Inline Styles**
Use the `style` property.

*Example*
```html
<!DOCTYPE html>
<html>
  <head><title>Document</title></head>
  <body>
    <p id="myParagraph">This is a paragraph.</p>

    <script>
      const paragraph = document.getElementById('myParagraph');
      paragraph.style.color = 'red';
      paragraph.style.fontSize = '20px';
    </script>
  </body>
</html>
```

**2. Getting Computed Styles**
`window.getComputedStyle()` returns the current computed styles, even if they come from a stylesheet.

*Example*
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
    <style>
      #myParagraph { color: blue; font-size: 18px; }
    </style>
  </head>
  <body>
    <p id="myParagraph">This is a paragraph.</p>

    <script>
      const paragraph = document.getElementById('myParagraph');
      const styles = window.getComputedStyle(paragraph);
      console.log(styles.color); // Outputs: rgb(0, 0, 255) or blue
      console.log(styles.fontSize); // Outputs: 18px
    </script>
  </body>
</html>
```

**3. Removing Inline Styles**
Set the style value to an empty string.

*Example*
```html
<!DOCTYPE html>
<html>
  <head><title>Document</title></head>
  <body>
    <p id="myParagraph" style="color: red; font-size: 20px;">This is a paragraph.</p>

    <script>
      const paragraph = document.getElementById('myParagraph');
      paragraph.style.color = '';
      paragraph.style.fontSize = '';
    </script>
  </body>
</html>
```

#### Exercises with Solutions

**Exercise 1 – Class Toggling**

*Requirements*
- Find the `<p>` element by its id.
- Add a click event listener.
- Use `classList.toggle('highlight')` each time it’s clicked.
- Log the presence of the `highlight` class before and after toggling.

*Solution*
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Class Toggling</title>
  <style>
    .highlight { background-color: yellow; }
  </style>
</head>
<body>
  <p id="myParagraph">This is a paragraph.</p>

  <script>
    const paragraph = document.getElementById('myParagraph');

    paragraph.addEventListener('click', () => {
      console.log('Before toggle:', paragraph.classList.contains('highlight'));
      paragraph.classList.toggle('highlight');
      console.log('After toggle:', paragraph.classList.contains('highlight'));
    });
  </script>
</body>
</html>
```

**Exercise 2 – Changing Paragraph Style**

*Requirements*
- Find the `<p>` element by its id.
- Set background color to yellow, text color to blue, font size to 20px.
- Log the current styles before and after the changes.

*Solution*
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Changing Paragraph Style</title>
  <style>
    #myParagraph { color: black; font-size: 16px; background-color: white; }
  </style>
</head>
<body>
  <p id="myParagraph">This is a paragraph.</p>

  <script>
    const paragraph = document.getElementById('myParagraph');

    const before = window.getComputedStyle(paragraph);
    console.log('Before → color:', before.color, 'fontSize:', before.fontSize, 'backgroundColor:', before.backgroundColor);

    paragraph.style.backgroundColor = 'yellow';
    paragraph.style.color = 'blue';
    paragraph.style.fontSize = '20px';

    const after = window.getComputedStyle(paragraph);
    console.log('After → color:', after.color, 'fontSize:', after.fontSize, 'backgroundColor:', after.backgroundColor);
  </script>
</body>
</html>
```

---