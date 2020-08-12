function setup() {
  createCanvas(250, 250);
  background(245);
  
  // change these values to change the triangle, the calculations will all update
  let Ax = 50;
  let Ay = 200;
  let Bx = 200;
  let By = 200;
  let Cx = 200;
  let Cy = 80;
  
  let A = createVector(Ax,Ay);
  let B = createVector(Bx,By);
  let C = createVector(Cx,Cy);
  
  // length of the edges using subtraction and getting the magnitude
  let AB = p5.Vector.sub(A, B).mag();
  let BC = p5.Vector.sub(B, C).mag();
  let AC = p5.Vector.sub(A, C).mag();
  
  // print the lengths of the edges between the vertices
  print("Length AB = " + AB);
  print("Length BC = " + BC);
  print("Length AB = " + AC);
  
  print("Calculating the angle at vector A using three different equations: ");
  
  // SOH -> Sin = Opposite / Hypoteneuse
  print("Sin: angle A = " + asin(BC/AC) + " radians, or " + degrees(asin(BC/AC)) + " degrees");
  
  // CAH -> Cos = Adjacent / Hypoteneuse
  print("Cos: angle A = " + acos(AB/AC) + " radians, or " + degrees(acos(AB/AC)) + " degrees");
  
  // TOA -> Tan = Opposite / Adjacent
  print("Tan: angle A = " + atan(BC/AB) + " radians, or " + degrees(atan(BC/AB)) + " degrees");

  // REMEMBER: SOC CAH TOA only works on a right-angled triangle!

  // draw lines between the points just to make it a bit easier to see
  line(Ax,Ay, Bx,By);
  line(Bx,By, Cx,Cy);
  line(Ax,Ay, Cx,Cy);
  
  // add text to help identify points in the image
  // offset position so the letter is not over lines
  let offset = 10;
  text("A", Ax - offset,Ay);
  text("B", Bx + offset,By);
  text("C", Cx + offset,Cy);
}