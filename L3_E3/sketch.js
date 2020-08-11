function setup() {
  let v1 = createVector(1, 2, 3);
  let v2 = createVector(2, 3, 4);
  
  // cross product of v1 and v2
  let v3 = v1.cross(v2)
  print(String(v3));
}
