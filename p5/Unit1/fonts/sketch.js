var f;
var f1;


function setup() {
 createCanvas(800,800);

 f = loadFont("assets/Amatic-Bold.ttf");
f1 = loadFont("assets/Pacifico.ttf");
 textAlign(CENTER);
}

function draw() {
background(100);
textFont(f);
textSize(40);
text("the day you plant the seed is not the day you eat the fruit.", width/2, height/2);

textFont(f1);
textSize(30);
text("what we dwell on is what we become.", width/2, height/2 + 70);


}
