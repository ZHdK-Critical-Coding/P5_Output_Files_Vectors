# P5.js: Vector Export

[English](readme.md)

Zeichnet einen Kreis mit dem SVG-Renderer und speichert die Zeichnung als
SVG-Datei, wenn du **s** drückst. Die Datei lässt sich in Vektorprogrammen
wie Inkscape oder Illustrator öffnen und bearbeiten – praktisch für
Plotter, Lasercutter oder Druck.

## Installation

1. Den Ordner in Visual Studio Code öffnen und Live Server starten (in der
   Statusleiste auf **Go Live** klicken).
2. **s** drücken, um die Zeichnung als `<zeitstempel>-out.svg`
   herunterzuladen.

Bibliotheken (in `libraries/`): p5.js 1.10.0, p5.sound 1.0.1 (eingebunden,
nicht verwendet), `p5.svg.js`
([p5.js-svg](https://github.com/zenozeng/p5.js-svg), SVG-Renderer für p5).

Lizenz: MIT

## Coding-Hilfe

- **`sketch.js` → `setup()`**: `createCanvas(500, 500, SVG)` schaltet auf
  den SVG-Renderer aus `p5.svg.js` um. Alles Gezeichnete landet als
  SVG-Elemente statt als Pixel.
- **`draw()`**: zeichnet Hintergrund und Kreis. Diesen Teil durch eigene
  Zeichnungen ersetzen. Pixelbasierte Funktionen (z. B. `loadPixels()`,
  Filter) ergeben keine Vektoren.
- **`keyPressed()`**: bei **s** lädt `save()` die Zeichnung als SVG
  herunter. Der Dateiname wird aus `Date.now()` gebildet, jede Datei bekommt
  also einen eigenen Namen.
