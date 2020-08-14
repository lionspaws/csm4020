function setup() {
  createCanvas(350, 150);
  background(220);
  
  beginShape(POINTS);
    vertex(50, 50);
    vertex(50, 100);
    vertex(100, 100);
    vertex(100, 50);
  endShape();
  
  beginShape(LINES);
    vertex(150, 50);
    vertex(150, 100);
    vertex(200, 100);
    vertex(200, 50);
  endShape();
  
  beginShape();
    vertex(250, 50);
    vertex(250, 100);
    vertex(300, 100);
    vertex(300, 50);
  endShape(CLOSE);
}