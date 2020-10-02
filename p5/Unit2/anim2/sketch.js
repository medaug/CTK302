var x = 0 ;

function setup() {
  createCanvas(500, 500);
}

function draw() {
background(100);


push();
translate(x, 0);
avatar();
pop() ;
x+=5;
if (x > width) {
  x = 0;
}




}
