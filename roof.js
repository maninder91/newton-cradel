class roof
{
	constructor()
	{
		var options={
			isStatic:true			
			}
		this.body=Bodies.rectangle(170,100,200, 20 , options);
		this.width = 200;
		this.height = 20;
 		World.add(world, this.body);

	}
	display()
	{
			 	

			push();
		 
			rectMode(CENTER)
		 
			fill("yellow");
			rect(this.body.position.x, this.body.position.y,this.width,this.height);
			pop();
			
	}

}