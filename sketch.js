var ship,ship_fast,back,edge;
var sea;
var sea_img;

function preload(){
ship_fast=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
sea_img=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,150,20,50);
  sea.addImage("sea",sea_img);
  ship=createSprite(200,200,20,50);
  ship.addAnimation("fast",ship_fast);
  edge=createEdgeSprites();

  ship.scale=0.3;
  ship.x=200;

}

function draw() {
  background("blue");
 drawSprites();
}