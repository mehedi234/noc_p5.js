let walker;

function setup() {
  createCanvas(640, 360);
  walker = new Walker();
  background(127);
}

function draw() {
  walker.walk();
  walker.display();
}
