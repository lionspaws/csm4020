function setup() {
  createCanvas(400, 400);
  background(220);
  
  for (let i = 0; i < 10; i++){
    rect(0, 0, 20, 20);
    translate(20, 20);
    scale(1.1);
    rotate(radians(5));
  }
}