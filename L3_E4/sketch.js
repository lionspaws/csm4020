function setup() {
  let v1 = createVector(0,0,0);
  let v2 = createVector(0,0,0);
  
  // a) In order to calculate the light bouncing off a surface you need to calculate the normal vector of a surface. You know that two of the vectors are [1,2,9] and [-1,6,2], what is the normal vector?
  v1 = createVector(1,2,9);
  v2 = createVector(-1,6,2);
  print("a) " + v1.cross(v2));
  
  // b) You have a square with a corner coordinate of (5,7) and you want to make it three times larger, what are the new coordinate values? 
  v1 = createVector(0,0,0);
  v2 = createVector(5,7,0);
  print("b) " + v2.mult(3));
  
  // c) Is the angle between the vectors [2,-3,3] and [9,12,0] greater or less than 90°? 
  angleMode(DEGREES);
  v1 = createVector(2,-3,3);
  v2 = createVector(9,12,0);
  let cAngle = acos(v1.dot(v2) / (v1.mag() * v2.mag()));
  print("c) " + v1.dot(v2) + ", angle is: " + cAngle);
}