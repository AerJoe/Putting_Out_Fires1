var f1, f2
var background, backgroundimg

var backgroundimg
var firefighter
var firefighterimg
var fire1
var fire1img
function preload() {
backgroundimg=loadImage("background.jpg")
firefighterimg = loadImage("firefighter.png")
fire1img = loadImage("fire1-1.png")
}

function setup() {
  createCanvas(800,400);
  firefighter = createSprite(400,360)
  firefighter.addImage(firefighterimg)
  firefighter.scale = 0.15
  /*f2 = createSprite(400, 200, 50, 50);
  f2.addImage(f1)*/
}

function draw() {
  background(backgroundimg);  
  spawnFire()
  drawSprites()
}

function spawnFire() {
  if(frameCount % 60 === 0) {
    fire1 = createSprite(400,200)
    fire1.addImage(fire1img)
    fire1.y = Math.round(random(100,300))
    fire1.x = Math.round(random(700,100))
    fire1.depth=firefighter.depth
  }
}