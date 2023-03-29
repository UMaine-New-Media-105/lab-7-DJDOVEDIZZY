https://editor.p5js.org/cyprian.dove/sketches/hENu3hbW-
var xPlac = [030,90,150,210,270, 330,390];
var yPlac = [0,60,120,180,240,300,360];
function setup() {
  createCanvas(400, 400);
  xCoord=60;
  yCoord=60;
  let yShade = 0
  let light = 0
  noLoop();
}

function draw() {
  background(220);
  yShade=0
  light=0
  for (var xE=0; xE<10; xE++) {
    for (var yE=0; yE<10; yE++) {
  drawSprite(xPlac[xE], yPlac[yE]);
    }
  }
}
function drawSprite(x,y){
  push();
  scale(1);
      ellipse(x, y, 50,50);
  while (yShade <= height) {
    stroke(light);
    line(0, yShade, width, yShade);
    yShade++;
    light += 1; 
      }
  pop();
}
