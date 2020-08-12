function setup() {
  createCanvas(250, 250);
  background(245);
  
  // change these values to change the triangle, the calculations will all update
  let Ax = 50;
  let Ay = 200;
  let Bx = 200;
  let By = 200;
  let Cx = 150;
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
  
  print("Calculating the angle at vector A using two different equations: ");
  
  // Cosine Rule -> cos(A) = b^2+c^2−a^2 / 2bc
  // to use this equation, we need to know the lengths of 3 sides to get an angle
  let cosruleA = acos((sq(AC) + sq(AB) - sq(BC)) / (2 * AC * AB));
  let cosruleB = acos((sq(AB) + sq(BC) - sq(AC)) / (2 * AB * BC));
  print("Cosine Rule: angle A = " + cosruleA + " radians, or " + degrees(cosruleA) + " degrees");
  
  // Sine Rule -> Sin(A) = BC x Sin(B)/AC
  // to use this equation, we need to know the lengths of 2 sides and one of the angles
  // we can use the angle we calculated for B to find A using this different equation
  let sinruleA = asin(BC * sin(cosruleB) / AC);
  print("Sin Rule: angle A = " + sinruleA + " radians, or " + degrees(cosruleA) + " degrees");
  
  // draw lines between the points just to make it a bit easier to see
  line(Ax,Ay, Bx,By);
  line(Bx,By, Cx,Cy);
  line(Ax,Ay, Cx,Cy);
  
  // add text to help identify points in the image
  // offset position so the letter is not over lines
  let offset = 10;
  text("A",Ax-offset,Ay);
  text("B",Bx+offset,By);
  text("C",Cx+offset,Cy);
}