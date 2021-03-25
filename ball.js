
    class ball {
        constructor(x,y,r){
        var options = {
            isStatic:true,
            'density':0.2,
            'friction':1.0,
            'restitution':0.3
        };
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body)
        }
        display(){
            var pos=this.body.position
        
            push();
            translate(pos.x,pos.y);
            strokeWeight(1);
            fill("grey");
            ellipse(10,10,this.r,this.r);
             pop();
        }
        }