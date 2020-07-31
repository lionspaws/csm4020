function setup() {
  let v1 = createVector(1, 2);
  let v2 = createVector(3, 4);

  // add vector v2 to vector a and print the result
  v1.add(v2);
  print(String(v1));
  
  // this overwrites v1
  // subtract v2 from v1 to get back to the original v1
  v1.sub(v2);
  print(String(v1));

// a demonstration of parallel shift equivalence (a vector will move everything by the same distance in the same direction)
  let shiftVector = createVector(10,10);
  v1.add(shiftVector);
  v2.add(shiftVector);
  print(String(v1));
  print(String(v2));
}
