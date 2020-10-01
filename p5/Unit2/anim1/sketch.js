var x = 0;

function setup() {
  createCanvas(500, 500);

}

function draw() {
background('blue');
text("hello", x, height / 2);
x += 1;
if (x > width + 20) {
  x = 0 ;
}

}
