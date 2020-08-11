function setup() {
  let v = createVector(1, 2, 3);
  
  // scalar multiplication - multiply each element of vector v by 2
  v.mult(2);
  print(String(v));
  
  // scalar division - divide each element of vector v by 2
  v.div(2);
  print(String(v));
}
