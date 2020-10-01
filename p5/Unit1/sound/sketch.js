var s1 ;

function preload(){

s1 = loadSound("assets/frank.mp3") ;
}


function setup() {
createCanvas (500, 500) ;

s1.loop() ;
}

function draw() {
background(100);

}

function mouseReleased(){
  if (s1.isPlaying()) {
  s1.pause() ;
} else {
  s1.loop() ;
}

}
