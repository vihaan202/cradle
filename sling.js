class Sling {
    constructor(body1,body2){
        var options = {
            bodyA:body1,
            bodyB:body2,
            length:10,
            stiffness:0.1
        }

        //this.point = anchor

        this.slingshot = Matter.Constraint.create(options)
        World.add(world,this.slingshot)
    }

   

    display(){

        var pointA = this.slingshot.bodyA.position
        var pointB = this.slingshot.bodyB.position

        strokeWeight(5)

        line(pointA.x,pointA.y,pointB.x,pointB.y)

    }
  };