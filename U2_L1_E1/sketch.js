function setup() {
  createCanvas(400, 400);
  background(220);
  
  // draw a rectangle at (0,0)
  rect(0, 0, 50, 50);
  
  // move to (100, 150)
  translate(100, 150);
  rect(0, 0, 50, 50); // draw same as before
  rect(0, 0, 10, 25); // draw another, smaller one
}