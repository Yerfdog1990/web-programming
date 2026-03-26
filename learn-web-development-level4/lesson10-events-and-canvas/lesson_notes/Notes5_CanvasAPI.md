### Canvas API 

The Canvas API gives you a pixel-based drawing surface in the browser. You use a `<canvas>` element, grab its 2D context, and issue drawing commands. Unlike SVG, canvas is immediate-mode: once you draw a shape, the browser forgets it—you redraw every frame if you want animation.

#### 10.1 Canvas Basics

**Creating a `<canvas>` element**

```html
<canvas id="myCanvas" width="800" height="600"></canvas>
```

The `width` and `height` attributes set the drawing surface size (not just the CSS size).

**Getting the 2D context**

```js
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
```
`ctx` is your toolbox for drawing.

#### 10.2 Drawing on Canvas

**1. Rectangles**

*Filled rectangle – `fillRect(x, y, width, height)`*

```html
<canvas id="myCanvas" width="800" height="600"></canvas>
<script>
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'blue';
  ctx.fillRect(10, 10, 150, 100);
</script>
```

*Outlined rectangle – `strokeRect(x, y, width, height)`*

```html
<canvas id="myCanvas" width="800" height="600"></canvas>
<script>
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  ctx.strokeStyle = 'red';
  ctx.strokeRect(200, 10, 150, 100);
</script>
```

**Clearing an area**

`clearRect(x, y, width, height)` erases pixels, making them transparent.

```html
<canvas id="myCanvas" width="800" height="600"></canvas>
<script>
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  ctx.strokeStyle = 'red';
  ctx.strokeRect(200, 10, 150, 100);

  ctx.clearRect(0, 0, 800, 600); // clears the whole canvas
</script>
```

**2. Lines**

Use a path: `beginPath() → moveTo(x,y) → lineTo(x,y) → stroke()` (or `fill()`).

```html
<canvas id="myCanvas" width="800" height="600"></canvas>
<script>
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.moveTo(50, 150);
  ctx.lineTo(250, 150);
  ctx.lineTo(150, 300);
  ctx.closePath();   // connects last point back to first
  ctx.stroke();
</script>
```

**3. Circles and Arcs**

`arc(x, y, radius, startAngle, endAngle)`

```html
<canvas id="myCanvas" width="800" height="600"></canvas>
<script>
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.arc(400, 75, 50, 0, Math.PI * 2); // full circle
  ctx.fillStyle = 'green';
  ctx.fill();
</script>
```

**4. Text**

`fillText(text, x, y)` and `strokeText(text, x, y)`

```html
<canvas id="myCanvas" width="800" height="600"></canvas>
<script>
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  ctx.font = '30px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText('Hello Canvas', 10, 350);
</script>
```

**5. Gradients**

*Linear gradient*

```html
<canvas id="myCanvas" width="800" height="600"></canvas>
<script>
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  const gradient = ctx.createLinearGradient(0, 0, 200, 0);
  gradient.addColorStop(0, 'red');
  gradient.addColorStop(1, 'blue');

  ctx.fillStyle = gradient;
  ctx.fillRect(10, 10, 200, 100);
</script>
```

*Radial gradient*

```html
<canvas id="myCanvas" width="800" height="600"></canvas>
<script>
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  const radialGradient = ctx.createRadialGradient(400, 200, 20, 400, 200, 100);
  radialGradient.addColorStop(0, 'yellow');
  radialGradient.addColorStop(1, 'green');

  ctx.fillStyle = radialGradient;
  ctx.fillRect(300, 100, 200, 200);
</script>
```

**6. Images**

`drawImage(img, x, y)` draws an image once it’s loaded.

```html
<canvas id="myCanvas" width="800" height="600"></canvas>
<script>
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();

  img.onload = function() {
    ctx.drawImage(img, 256, 256);
  };

  img.src = 'path/to/image-1.jpg';
</script>
```

#### 10.3 Animations on Canvas

Canvas doesn’t animate itself—you redraw each frame.

**1. Animation basics with `requestAnimationFrame`**

```html
<canvas id="myCanvas" width="800" height="600"></canvas>
<script>
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  let x = 0;
  let y = 0;

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, 50, 50);

    x += 2;
    y += 2;

    requestAnimationFrame(animate);
  }

  animate();
</script>
```
`requestAnimationFrame` syncs to the display’s refresh rate (≈60 fps).

**2. Complex animation – orbiting circle**

```html
<canvas id="myCanvas" width="800" height="600"></canvas>
<script>
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  let angle = 0;

  function animateCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 50;

    // stationary blue circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();

    // orbiting red circle
    ctx.beginPath();
    ctx.arc(
      centerX + Math.cos(angle) * 100,
      centerY + Math.sin(angle) * 100,
      radius, 0, Math.PI * 2
    );
    ctx.fillStyle = 'red';
    ctx.fill();

    angle += 0.05;
    requestAnimationFrame(animateCircle);
  }

  animateCircle();
</script>
```

**3. Using timers (`setInterval`)**

`setInterval` works, but it isn’t synced to screen refresh.

```html
<canvas id="myCanvas" width="800" height="600"></canvas>
<script>
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  let x = 0;
  let y = 0;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, 50, 50);
    x += 2;
    y += 2;
  }

  setInterval(draw, 30); // ~33 fps
</script>
```

---

### Exercises with Solutions

**Exercise 1 – Rectangle and Circle**

*Requirements*
- Canvas 800×600
- Blue filled rectangle 150×100 at (10, 10)
- Green circle radius 50 at (300, 75)

*Solution*

```html
<canvas id="myCanvas" width="800" height="600"></canvas>
<script>
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  // Blue rectangle
  ctx.fillStyle = 'blue';
  ctx.fillRect(10, 10, 150, 100);

  // Green circle
  ctx.beginPath();
  ctx.arc(300, 75, 50, 0, Math.PI * 2);
  ctx.fillStyle = 'green';
  ctx.fill();
</script>
```

**Exercise 2 – Square Animation**

*Requirements*
- 50×50 pixel square moves diagonally from (0,0) toward the bottom-right
- Use `requestAnimationFrame`
- Increment x and y by 2 each frame

*Solution*

```html
<canvas id="myCanvas" width="800" height="600"></canvas>
<script>
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  let x = 0;
  let y = 0;

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, 50, 50);

    x += 2;
    y += 2;

    requestAnimationFrame(animate);
  }

  animate();
</script>
```

**Key takeaways**
- Get the 2D context before drawing.
- Use `fill*` for solid shapes, `stroke*` for outlines.
- Clear the canvas each frame for animation.
- Prefer `requestAnimationFrame` over `setInterval` for smooth animation.

---