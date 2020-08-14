function setup() {
  // create a blank 500x500 image
  createCanvas(500, 500);
  
  // set the background colour to light grey
  background(245);
  
  // create a point by providing (x,y)
  point(1,1);
  
  // OR (x,y,z) 
  point(100, 50, 5);
  // but because this is a flat image, changing the z (depth) doesn't make any visible difference at the moment
  
  // make a point by creating variables called 'x' and 'y'
  let x = 10;
  let y = 20;
  point(x,y);
  
  // you only need 'let' the first time you make a variable, you can replace the values like this:
  x = 300;
  y = 300;
  point(x,y);
  
  // another way is to create a vector and tell the point to draw at that vector location
  // example 1:
  point(createVector(120,133));
  // example 2:
  let a = createVector(x+50,y+50);
  point(a)
}
