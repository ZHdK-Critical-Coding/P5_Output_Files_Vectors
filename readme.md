# P5.js: Vector Export

[Deutsch](README_DE.md)

Draws a circle with the SVG renderer and saves the drawing as an SVG file
when you press **s**. The file can be opened and edited in vector programs
like Inkscape or Illustrator – useful for plotters, laser cutters or
print.

## Installation

1. Open the folder in Visual Studio Code and start Live Server (click
   **Go Live** in the status bar).
2. Press **s** to download the drawing as `<timestamp>-out.svg`.

Libraries (in `libraries/`): p5.js 1.10.0, p5.sound 1.0.1 (included, not
used), `p5.svg.js` ([p5.js-svg](https://github.com/zenozeng/p5.js-svg),
SVG renderer for p5).

License: MIT

## Coding Help

- **`sketch.js` → `setup()`**: `createCanvas(500, 500, SVG)` switches to
  the SVG renderer from `p5.svg.js`. Everything drawn ends up as SVG
  elements instead of pixels.
- **`draw()`**: draws the background and the circle. Replace this part
  with your own drawing. Pixel-based functions (e.g. `loadPixels()`,
  filters) do not produce vectors.
- **`keyPressed()`**: on **s**, `save()` downloads the drawing as SVG. The
  file name is built from `Date.now()`, so every file gets a unique name.
