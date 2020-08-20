function setup() {
  createCanvas(400, 400, WEBGL);
  background(220);
}

function draw() {
  translate(0,20,0);
  scale(1,2,1);
  rotateX(radians(-25));
  rotateY(radians(25));
  rotateZ(radians(5));
  
  box(50);
}