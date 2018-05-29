let walker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  walker = new Walker();
  background(233, 233, 233);
}

function draw() {
  walker.step();
  walker.render();
}
