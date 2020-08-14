function setup() {
  let canvasWidth = 400;
  let canvasHeight = 200;
  
  createCanvas(canvasWidth, canvasHeight);
  background(220);
  
  // set up variables to store the points as we go along
  let pointX = 0;
  let pointY = 0;
  
  // offset the drawing to halfway down to the vertical axis
  let offsetY = canvasHeight / 2;
  
  // how many points to plot - experiment with this number
  let step = 200.0;
  
  // prepare variables for the wave
  let a = 0.0;
  let inc = TWO_PI / step;
  
  // loop the number of times in 'step' and increase by 1 each time
  for (let i = 0; i < step; i++) {
    
    // make sure the points are spaced out horizontally and vertically
    // otherwise you can't see the wave shape easily
    pointX = i * (canvasWidth / step);
    
    // plot the sin wave
    pointY = sin(a) * offsetY + offsetY; 
    point(pointX, pointY);
    
    // plot the cos wave (don't need to change the x, only the y)
    pointY = cos(a) * offsetY + offsetY; 
    point(pointX, pointY);
    
    // move to the next point
    a = a + inc;
  }
}