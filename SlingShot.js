class SlingShot
{
    constructor(body1,pointb)
    {
        var option_constraint = 
        {
            bodyA : body1,
            pointB : pointb,
            stiffness : 0.04,
            length : 10,
        }
        this.Sling = Constraint.create(option_constraint);
        World.add(world,this.Sling);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");

    }
    display()
    {
        image(this.sling1,200,20);
        image(this.sling2,175,20);
        
        if(this.Sling.bodyA)
        {
        var pointA = this.Sling.bodyA.position;
        var pointB = this.Sling.pointB;

        stroke("#54270F");
        if(pointA.x < 220)
        {

        strokeWeight(8);
        line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
        line(pointA.x-20,pointA.y,pointB.x+20,pointB.y);
        
        image(this.sling3,pointA.x-30,pointA.y-10,15,30);
        }
        else
        {
            strokeWeight(4);
            line(pointA.x+20,pointA.y,pointB.x-10,pointB.y);
            line(pointA.x+20,pointA.y,pointB.x+20,pointB.y);
        
            image(this.sling3,pointA.x+23,pointA.y-10,15,30);
        }
    }
        
    }
    
    fly()
    {
        this.Sling.bodyA = null;
    }

    attach(body)
    {
        this.Sling.bodyA = body;
    }
}