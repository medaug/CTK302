var img1, img2, img3 ;


function setup() {
createCanvas(800,800);
img1 = loadImage("assets/ocean.png");
img2 = loadImage("assets/mountains.png");
img3 = loadImage("assets/girl.png");

imageMode(CENTER);
}

function draw() {
background(100);

image(img1, width/2, height / 2, 200, 200);
image(img2,  width/2, height/2-210, 200, 200);
image(img3, width/2, height/2+210, 200, 200);
}
