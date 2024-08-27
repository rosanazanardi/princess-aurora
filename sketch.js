let posicaoXbolinha
let posicaoYbolinha
let diametro=20
let cor

function setup() {
  createCanvas(600, 600);
  background(240,128,128);
  cor=color (random(0, 497), random(0, 497), random (0,497))

}
function draw() {
  fill(cor)
  circle(posicaoXbolinha, posicaoYbolinha,20)
  posicaoXbolinha=mouseX
  posicaoYbolinha=mouseY
  if(mouseIsPressed){
  cor=color (random(0, 497), random(0, 497), random (0,497))
    
  }
}
 function mousePressed (){
     background(240,128,128)

   
   
 }