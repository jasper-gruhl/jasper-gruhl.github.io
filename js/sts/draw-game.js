
let hamImage;
let breadImage;
let pickleImage;
let lettuceImage;
let ingredientY = 0;
let speed = 5;
let plateX = 200;
let plateY = 300;
let plateXSpeed = 15;
let lettuceX = 200;


function preload() {
    hamImage = loadImage("images/ham.jpg");
    breadImage = loadImage("images/dutch-crunch.png");
    pickleImage = loadImage("images/pickle.png");
    lettuceImage = loadImage("images/lettuce.png");
    plateImage = loadImage("images/plate.jpg");

}

function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    background(255,255,255);
    drawPlate(plateX, plateY, 200, 200);
    if(ingredientY < 600){
      image(hamImage,0, ingredientY, 70, 70);
      image(lettuceImage, lettuceX, ingredientY, 70, 70);    
    }
    ingredientY = ingredientY + speed;
    if(plateX < lettuceX && lettuceX < (plateX + 200) && plateY < ingredientY && ingredientY < (plateY + 200)) {
      collisionDetected();
    }
}

function collisionDetected(){
  console.log('hhhh');
}

function drawPlate(x, y, w, h) {
 image(plateImage, x, y, w, h);
}

function keyPressed() {
  if (keyCode === 74) {
    plateX = plateX - plateXSpeed;
  } else if (keyCode === 76) {
    plateX = plateX + plateXSpeed;
  }
}

function mousePressed() {
    y = 90;
}
