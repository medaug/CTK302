function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);

}

function draw () {
  background(50, 155, 168);
  noStroke();
  fill(84, 13, 77)
  quad(333, 159, 392, 123, 456, 274, 268, 295);
 //bubbles
  fill(225,225,225)
ellipse(56, 46, 55, 55);
ellipse(111, 104, 10, 10);
ellipse(54, 162, 20, 20);
ellipse(121, 208, 30, 30);
ellipse(621, 163, 20, 20);
ellipse(567, 74, 30, 30);
fill(84, 232, 217)
ellipse(263, 56, 10, 10);
ellipse(275, 81, 20, 20);
ellipse(658, 31, 40, 40);
ellipse(644, 91, 10, 10);
ellipse(528, 140, 15, 15);
ellipse(569, 274, 25, 25);
ellipse(60, 311, 25, 25);
ellipse(180, 272, 10, 10);
 //eyes
fill(225,225,225)
ellipse(388, 176, 20, 20);
ellipse(347, 176, 20, 20);
 //pupils
fill(0,0,0)
ellipse(388, 176, 10, 10);
ellipse(347, 176, 10, 10);
//mouth
  fill(225,225,225)
ellipse(367, 221, 30, 10);
//feet
triangle(323, 291, 325, 308, 295, 312);
triangle(409, 282, 402, 308, 432, 294);
  //arms
  fill(168, 54, 157)
ellipse(422,203,20,20)
ellipse(311,203,20,20)

//oceanfloor
fill(46, 87, 46)
rect(0, 377, 720, 700);

  if (mouseIsPressed){
    background('black');
fill(31, 255, 15)
ellipse(366, 212, 400, 400);
fill(255, 0, 13)
ellipse(366, 212, 300, 300);
fill(0, 0, 0)
ellipse(366, 212, 200, 200);
//body
fill(87, 255, 238)
quad(333, 159, 392, 123, 456, 274, 268, 295);
 //eyes
fill(0,0,0)
ellipse(388, 176, 20, 20);
ellipse(347, 176, 20, 20);
 //pupils
fill(0,0,0)
ellipse(388, 176, 10, 10);
ellipse(347, 176, 10, 10);
//arms
fill(238, 0, 255);
ellipse(422,203,20,20);
ellipse(311,203,20,20);
//mouth
fill(0, 0, 0)
ellipse(367, 221, 40, 40);
//feet
fill(238, 0, 255);
triangle(323, 291, 325, 308, 295, 312);
triangle(409, 282, 402, 308, 432, 294);
//laserbubbles
ellipse(287, 182, 10, 10);
ellipse(243, 150, 10, 10);
ellipse(266, 170, 10, 10);
ellipse(242, 169, 10, 10);
ellipse(440, 182, 10, 10);
ellipse(452, 150, 10, 10);
ellipse(466, 170, 10, 10);
ellipse(480, 159, 10, 10);
ellipse(487, 135, 10, 10);
ellipse(498, 160, 10, 10);
ellipse(476, 170, 10, 10);
ellipse(511, 135, 10, 10);
ellipse(255, 183, 10, 10);
ellipse(219, 147, 10, 10);
ellipse(584, 85, 10, 10);
ellipse(520, 108, 10, 10);
ellipse(188, 119, 10, 10);
ellipse(187, 150, 10, 10);
fill(255, 255, 0)
ellipse(184, 119, 10, 10);
ellipse(190, 150, 10, 10);
ellipse(589, 85, 10, 10);
ellipse(525, 108, 10, 10);
ellipse(270, 182, 10, 10);
ellipse(254, 150, 10, 10);
ellipse(287, 182, 10, 10);
ellipse(452, 178, 10, 10);
ellipse(20, 182, 10, 10);
ellipse(43, 150, 10, 10);
ellipse(33, 23, 10, 10);
ellipse(15, 49, 10, 10);
ellipse(117, 66, 10, 10);
ellipse(243, 150, 10, 10);
ellipse(500, 66, 10, 10);
ellipse(678, 150, 10, 10);
ellipse(659, 329, 10, 10);
ellipse(94, 268, 10, 10);
ellipse(287, 182, 10, 10);
ellipse(243, 150, 10, 10);
fill(34, 0, 255)
ellipse(281, 163, 10, 10);
ellipse(457, 198, 10, 10);
ellipse(208, 162, 10, 10);
ellipse(251, 162, 10, 10);
ellipse(471, 155, 10, 10);
ellipse(511, 149, 10, 10);

  }


//fill(255);
// arc(479, 300, 280, 280, PI, TWO_PI);
fill('white') ;
text(mouseX + ', ' + mouseY, 10, 10);
}
