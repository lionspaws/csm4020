let myCamera;

function setup() {
  createCanvas(400, 400, WEBGL);
  background(220);
  
  myCamera = createCamera();
  setCamera(myCamera);
}

function draw() {
  background(220);  // this clears the screen
  orbitControl();   // this allows you to move around using the mouse
  
  for(let i=0; i<5; i++){
    translate(0,0,55);
    box(50);
  }
  
  myCamera.ortho();
  myCamera.perspective();
}