let myCamera;

function setup() {
  createCanvas(400, 400, WEBGL);
  background(220);
  
  myCamera = createCamera();
  setCamera(myCamera);
}

function draw() {
  box(50);
}