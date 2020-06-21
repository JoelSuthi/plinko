	var paper,ground,launcher,trash2;
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;
	const Render = Matter.Render;
	const Constraint = Matter.Constraint;

	function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	//trash = new Trash(600,410,20,100);
	ground = new Ground(400,460,1800,10);
	paper = new Paper(100,400,50); 
	trash2 = new Trash(685,450,200,200);	
	//trash3 = new Trash(750,410,20,100);
	//launcher = new Launcher(paper.body,{x:200,y:200});
	Engine.run(engine);
	}


	function draw() {
	rectMode(CENTER);

	background(125);

	drawSprites();

	ground.display();
	paper.display();   
	//trash.display();
	trash2.display();
	//trash3.display();
		
	}
	function keyPressed(){
		if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:555,y:-269});
		}
	}
	