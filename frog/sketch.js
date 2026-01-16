let startSize = 100
let circleCount = 500

let targetX = 0
let targetY = 0

let posX = 0
let posY = 0

let color1 = [66, 135, 245]
let color2 = [66, 245, 75]

let fullscreenChange = false;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  resizeCanvas(windowWidth, windowHeight)
  
  color1 = rainbow(color1, 5)
  color2 = rainbow(color2, 5)
  
  strokeWeight(0)
  
  background(0);
  
  targetX = 0
  targetY = 0
  
  if (mouseIsPressed) {
    targetX = mouseX - (width / 2)
    targetY = mouseY - (height / 2)
  }
  
  posX += (targetX - posX) / 7
  posY += (targetY - posY) / 7
  
  for (let i = 0; i < circleCount; i++) {
    fill(color2[0] + (((color1[0] - color2[0]) / circleCount) * i), color2[1] + (((color1[1] - color2[1]) / circleCount) * i), color2[2] + (((color1[2] - color2[2]) / circleCount) * i))
    
    circle(((posX) / circleCount) * i + (width / 2), ((posY) / circleCount) * i + (height / 2), startSize * (1 / Math.pow(2, (3 / circleCount) * (circleCount - (i + 1)))))
  }
  
  fullscreenChange--
}

function keyPressed() {
  if (key == "f") {
    if (fullscreen()) {
      fullscreen(false)
    } else {
      fullscreen(true)
    }
    fullscreenChange = 2
  }
}

function rainbow(colorList, changeAmount) {
  if ((colorList[2] > 0) && (colorList[0] == 255)) {
    colorList[2] -= changeAmount
    if (colorList[2] < 0) {
      colorList[2] = 0
    }
  } 
  if ((colorList[0] < 255) && (colorList[1] == 0)) {
    colorList[0] += changeAmount
    if (colorList[0] > 255) {
      colorList[0] = 255
    }
  } 
  if ((colorList[0] > 0) && (colorList[1] == 255)) {
    colorList[0] -= changeAmount
    if (colorList[0] < 0) {
      colorList[0] = 0
    }
  } 
  if ((colorList[1] < 255) && (colorList[2] == 0)) {
    colorList[1] += changeAmount
    if (colorList[1] > 255) {
      colorList[1] = 255
    }
  } 
  if ((colorList[1] > 0) && (colorList[2] == 255)) {
    colorList[1] -= changeAmount
    if (colorList[1] < 0) {
      colorList[1] = 0
    }
  } 
  if ((colorList[2] < 255) && (colorList[0] == 0)) {
    colorList[2] += changeAmount
    if (colorList[2] > 255) {
      colorList[2] = 255
    }
  }
  
  return colorList;
}