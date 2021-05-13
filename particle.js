class Particle {
    constructor(x,y) {
var options = {
    restitution:0.8,
    friction:0.6,
    density:0.3,
    isStatic:false,
}
this.x = x;
this.y = y;
this.radius = 5
this.particle = Bodies.circle(this.x,this.y,10,options);
this.color = color(random(0,255), random(0,255), random(0,255));

World.add(world, this.particle);
  }

    display() {
push();
        translate(this.particle.position.x,this.particle.position.y);
        rotate(this.particle.angle);
        fill(this.color);
        stroke('black');
        strokeWeight(3);
        ellipse(0,0,20,20);
        pop();

    }
}