let radius=70;
let heightPerTurn=50;
let numTurns=10;
let xTurn=-0.01;
let yTurn=0.01;
function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  windowResized();
}
function draw(){
  background("#152340");
  rotateX(frameCount*xTurn);
  rotateY(frameCount*yTurn);
  noFill();
  stroke("#fff");
  beginShape();
  for (let angle=0; angle<numTurns*TWO_PI; angle+=0.1){
    let x=cos(angle)*radius;
    let y=sin(angle)*radius;
    let z=(angle/TWO_PI)*heightPerTurn;
    vertex(x, y, z);
  }
  endShape();
}
function randomNumbers(min, max){
  const randomNum=Math.floor(Math.random()*(max-min+1))+min;
  return randomNum;
}
const button=document.getElementById("Button");
button.addEventListener("click",()=>{
  radius=randomNumbers(50, 200);
  heightPerTurn=randomNumbers(10, 60);
  numTurns=randomNumbers(5, 15);
  xTurn=Math.random()*0.04-0.02;
  yTurn=Math.random()*0.04-0.02;
});
function windowResized(){
  createCanvas(windowWidth, windowHeight, WEBGL);
}