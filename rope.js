/*class Rope
{
	constructor(body1,body2)
	{
		  
		var options={ 
			bodyA:body1,
			bodyB:body2,
			 
			 
		}
	 
		this.rope = Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{
		 var pointA = this.rope.bodyA.position;
		 var pointB = this.rope.bodyB.position;
		 
		strokeWeight(3);
		line(pointA.x,pointA.y,pointB.x,pointB.y);
	}

}*/

class Rope{
    constructor(bodyA, bodyB,xOffset){
        var options = {
            bodyA: bodyA,
			bodyB: bodyB,
			pointA:{x:xOffset,y:0}
             
        }
        //this.pointB = pointB;
		this.rope = Constraint.create(options);
		this.xOffset = xOffset;
        World.add(world, this.rope);
    }

   
    display(){
         
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x+this.xOffset, pointB.y);
         
    }
    
}