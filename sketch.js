var ball, quadrado, rectangle;
var angle=60;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground =new Ground(200,390,400,20);
	right = new Ground(390,200,20,400);
	left = new Ground(10,200,20,400);
	top_wall = new Ground(200,10,400,20);

	var ballOptions = {
		restitution: 0.5,
		friction: 0.02,
		frictionAir: 0
	}

	var quadrado_options = {
		restitution: 0.7,
		friction: 0.01,
		frictionAir: 0.1
	}

	var rectangle_options = {
		restitution: 0.01,
		friction: 1,
		frictionAir: 0.3
	}
	//Crie os Corpos Aqui.
	ball = Bodies.circle(220,10,10,ballOptions)
	World.add(world, ball);

	quadrado = Bodies.rectangle(110,50,10,10, quadrado_options)
	World.add(world,quadrado);

	rectangle = Bodies.rectangle(350,50,10,10, rectangle_options)
	World.add(world,rectangle);

	
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  background("green");
  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, ball.circleRadius, ball.circleRadius);
  rect(quadrado.position.x, quadrado.position.y);
  rect(rectangle.position.x, rectangle.position.y,100, 50);

  drawSprites();
 
}



