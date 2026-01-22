let angle = 0,
  mic,
  vol,
  s1;
let size = 8;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  mic = new p5.AudioIn();
  mic.start();
  angleMode(DEGREES);
  textAlign(TOP,LEFT);
  text('click and drag your mouse',30,20)
}
function preload() {
  s1 = loadImage("strawbs!!.png");
}

function draw() {
  orbitControl();
  background(255);
  vol = mic.getLevel();
  //console.log(vol)
  for (let i = 0; i < width; i += width/size) {
    for (let j = 0; j < height; j += height / size) {
      for(let k =0; k<width; k+= width/size){
      strokeWeight(0.4);
      stroke("green");
      push();
      translate(i-width/2 , j-height/2, k);
      texture(s1);
      
       rotateY(angle);
      //rotateY(-angle / 2);
      sphere(40)
     fill(0,0,200,200)
      box(1500 * vol);

      pop();
      angle = angle + 0.02;
      //rotateX(angle);
      // rotateY(-angle / 2);
    } 
  }}
 
  print(angle)
}
