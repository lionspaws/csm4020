function setup() {
  createCanvas(400, 400);
  background(220);
  
  for (let i = 0; i < 10; i++){
    // translate(20, 20);
    applyMatrix(1, 0, 0, 1, 20, 20); 
    
    // scale(1.1);
    applyMatrix(1.1, 0, 0, 1.1, 0, 0); 
    
    // rotate(radians(5));
    applyMatrix(cos(radians(5)), sin(radians(5)), -sin(radians(5)), cos(radians(5)), 0, 0); 
    
    // bonus - single matrix
    //applyMatrix(1.1*cos(radians(5)), 0, 0, 1.1*cos(radians(5)),20,20);
    
    rect(0, 0, 20, 20);
  }
}