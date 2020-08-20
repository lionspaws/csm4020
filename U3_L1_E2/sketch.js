function setup() {
  createCanvas(400, 400, WEBGL);
  background(220);
}

function draw() {
  angleMode(DEGREES);
  
  // 3D identity matrix
  applyMatrix(1, 0, 0, 0,
               0, 1, 0, 0,
               0, 0, 1, 0,
               0, 0, 0, 1);
  
  let Tx = 0;
  let Ty = 20;
  let Tz = 0;
  // 3D translation matrix
  applyMatrix(1, 0, 0, 0,
               0, 1, 0, 0,
               0, 0, 1, 0,
               Tx, Ty, Tz, 1);
  
  let Sx = 1;
  let Sy = 2;
  let Sz = 1;
  // 3D scaling matrix
  applyMatrix(Sx, 0, 0, 0,
               0, Sy, 0, 0,
               0, 0, Sz, 0,
               0, 0, 0, 1);
  
  let angle = -25;
  let c = cos(angle);
  let s = sin(angle);
  // 3D rotation matrix (X)
  applyMatrix(1, 0, 0, 0,
               0, c,-s, 0,
               0, s, c, 0,
               0, 0, 0, 1);
  
  angle = 25;
  c = cos(angle);
  s = sin(angle);
  // 3D rotation matrix (Y)
  applyMatrix(c, 0, s, 0,
               0, 1, 0, 0,
               -s,0, c, 0,
               0, 0, 0, 1);
  
  angle = 5;
  c = cos(angle);
  s = sin(angle);
  // 3D rotation matrix (Z)
  applyMatrix(c,-s, 0, 0,
               s, c, 0, 0,
               0, 0, 1, 0,
               0, 0, 0, 1);
  
  box(50);
}