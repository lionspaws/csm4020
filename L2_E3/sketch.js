function setup() {
  let v = createVector(10, 20, 2);
  
  // print v original length (magnitude)
  print("v original length: " + v.mag());
  
  // normalize v - turn it into a unit vector - and print the result
  v.normalize();
  print(String(v));
  print("v normalized length: " + v.mag());
}