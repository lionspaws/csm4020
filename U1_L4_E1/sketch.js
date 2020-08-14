function setup() {
  // if you provide a number of degrees, you can easily convert to radians using the radians() function
  let deg = 90;
  let rad = radians(deg);
  print('function: ' + deg + ' degrees is ' + rad + ' radians');
  
  // here is the same conversion using the equation shown in the lecture...
  // degrees = 2π(d/360) radians
  print('equation: ' + deg + ' degrees is ' + 2*PI * (deg/360) + ' radians');
  // note that PI (all caps) is an inbuilt reference to π
  
  // if you provide a number of radians, you can easily convert to degrees using the degrees() function
  rad = PI / 4;
  deg = degrees(rad);
  print('function: ' + rad + ' radians is ' + deg + ' degrees');
  
  // here is the same conversion using the equation shown in the lecture...
  // radians = (360 × r/2π) degrees
  print('equation: ' + rad + ' radians is ' + 360 * rad/(2*PI) + ' degrees');
}
