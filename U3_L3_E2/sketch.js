let myCamera;

function setup() {
  createCanvas(400, 400, WEBGL);
  background(220);
  
  myCamera = createCamera();
  setCamera(myCamera);
  
  angleMode(DEGREES);
  //myCamera.pan(10);
  //myCamera.tilt(10);
}

function draw() {
  box(50);
  
  //myCamera.move(0,10,0);
  myCamera.setPosition(0,10,0); 
  myCamera.lookAt(0,10,0);
}