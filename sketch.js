// --- p5.js Sketch with SVG Export ---
// This sketch creates a simple circle in the center of the canvas
// and allows the user to save it as an SVG file by pressing the "s" key.

// --- Setup runs once at the beginning ---
function setup() {
  // Create a 500x500 pixel canvas
  // The third argument "SVG" tells p5.js to use the SVG renderer
  createCanvas(500, 500, SVG);
}

// --- Draw runs continuously (like a loop) ---
function draw() {
  // Set a light gray background
  background(220);

  // Draw a circle in the center of the canvas
  // x = width * 0.5  → horizontal center
  // y = height * 0.5 → vertical center
  // diameter = width * 0.25 → 25% of the canvas width
  circle(width * 0.5, height * 0.5, width * 0.25);
}

// --- Respond to key presses ---
function keyPressed() {
  switch (key) {
    // If the "s" key is pressed, save the current canvas as an SVG file
    case 's':
      // The filename is a timestamp followed by "-out.svg"
      save(`${Date.now()}-out.svg`);
      break;

    // If any other key is pressed, do nothing
    default:
      break;
  }
}