class bob
{
	constructor(x, y)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0.4,
			density:0.8
			
			}
		
		this.body=Bodies.circle(x, y,15, options);
		//this.radius = 15;
		World.add(world, this.body);

	}
	display()
	{
		 
			 
			fill("red");
			ellipse(this.body.position.x,this.body.position.y,30,30);
		 
			
	}

}

