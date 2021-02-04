var bg,bgim
var ground,groundIm;
var boy;
var spike1,spike2,spike3,spike4
var gamestate = "playing"
function preload(){
bgim = loadImage("sprite_0.png")
groundIm = loadImage("platform.png")
spike1 = loadImage("spike A.png")
spike2 = loadImage("spike B.png")
spike3 = loadImage("spike C.png")
spike4 = loadImage("spike D.png")

}

function setup(){
createCanvas(800,500)
ground = createSprite(400,600,2200,100)
//ground.shapeColor = color(144,176,22)
ground.addImage(groundIm)
boy = createSprite(60,390,50,100)
spikeG = new Group()

}

function draw(){
    
    rectMode(CENTER)
    background(bgim)
    camera.position.x = boy.x
    camera.position.y = 400
    
    //text(mouseX,100,100)
    //text(mouseY,150,100)
    text("Press right to move",boy.x,250)
    boy.collide(ground)
    if(gamestate === "playing"){
    if(keyDown("right")){
        boy.x = boy.x + 10
        ground.x = ground.x -8
  if(ground.x < boy.x -200){
    ground.x = boy.x
     }
    }
    if(keyDown("up")&&boy.y>290){
      boy.velocityY = -50
    }
    else{
        boy.velocityY = 10
    }
    if(boy.isTouching(spikeG)){
        gamestate = "over"
    }
    
    spawnSpike()}

    if(gamestate === "over"){
        text("game Over",boy.x,boy.y - 200)
    }



    
    drawSprites()
}

function spawnSpike(){
if(frameCount%100 === 0){
var spike
spike = createSprite(boy.x + 1250,482)
if(keyDown("right")){
spike.x + spike.x -8
spike.lifetime = 200}
spikeG.add(spike)
var r = Math.round(random(1,4))
switch(r){
    case 1: spike.addImage(spike1);
    break;
    case 2: spike.addImage(spike2);
    break;
    case 3: spike.addImage(spike3);
    break;
    case 4: spike.addImage(spike4);
    break;
    default: break;
    
  }
  spike.scale = 0.3
    }

}