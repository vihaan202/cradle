const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var slingshot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    roof = new Ground(400,100,500,20)


}

function draw(){
    background(0);
    Engine.update(engine)

    roof.display();



}

