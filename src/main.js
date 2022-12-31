let x = 0;
let y = 0;
let w = 20; // size of character
let h = 20;

// camera position
let camX = 0;
let camY = 0;

// smoothing factor for camera movement
const smoothing = 0.1;
let img;
function preload() {
  img = loadImage('map.jpg',img =>{
    // img.resize(img.width*2,img.height*2);
  });

}

function setup() {
  createCanvas(400, 400);
}

function draw() {

  // update camera position to follow player
  let targetCamX = x ;
  let targetCamY = y;
  camX += (targetCamX - camX) * smoothing;
  camY += (targetCamY - camY) * smoothing;

  // draw background image
  image(img, -camX, -camY);

  // draw character
  drawCharacter();

  // Move character if left or right arrow key is held down
  if (keyIsDown(LEFT_ARROW)) {
    x -= 3;
  } else if (keyIsDown(RIGHT_ARROW)) {
    x += 3;
  }else if(keyIsDown(DOWN_ARROW)){
    y += 3
  }else if(keyIsDown(UP_ARROW)){
    y -= 3
  }

  // Constrain player to stay within bounds of canvas
  x = constrain(x, 0, img.width/2 -25);
  y = constrain(y, 0, img.height/2 - 25);
}

function drawCharacter() {
  fill(255, 0, 0); // red color
  rect(x, y, w, h); // body
  ellipse(x + w / 2, y - h / 2, w, h); // head
}
