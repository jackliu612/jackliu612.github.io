class Asteroid {
    constructor() {
        this.r = 5;
        this.pos = createVector(random() * (windowWidth-2*this.r)+this.r, random() * (windowHeight-2*this.r)+this.r);

        this.vel = createVector((random() + .75)/2, 0).rotate(random() * Math.PI * 2);
    }

    update() {
        this.pos.add(this.vel);
        this.wrapAround();
    }

    wrapAround() {
        if (this.pos.x-this.r < 0) {
            // pos.x = windowWidth;
            this.vel.x *= -1;
        }
        if (this.pos.x+this.r > windowWidth) {
            // pos.x = 0;
            this.vel.x *= -1;
        }
        if (this.pos.y-this.r < 0) {
            // pos.y = windowHeight;
            this.vel.y *= -1;
        }
        if (this.pos.y+this.r > windowHeight) {
            // pos.y = 0;
            this.vel.y *= -1;
        }
    }

    show() {
        push();
        noStroke();
        strokeWeight(1);
        fill(255-(transp*255));
        // noFill();    
        translate(this.pos.x, this.pos.y);
        ellipse(0, 0, this.r*2, this.r*2);
        pop();
    }

    reposition(oldDim, newDim) {
        this.pos.x = this.pos.x / oldDim[0] * newDim[0];
        this.pos.y = this.pos.y / oldDim[1] * newDim[1];
    }

    dist(otherAsteriod) {
        return (this.pos.x - otherAsteriod.pos.x)**2 + (this.pos.y - otherAsteriod.pos.y)**2
    }

    // this.getPosition = function () {
    //     return pos.copy();
    // }

    // this.getVelocity = function () {
    //     return vel.copy();
    // }

    // this.getSize = function () {
    //     return size;
    // }

    // this.setPosition = function (p) {
    //     pos = p.copy();
    // }
    // this.setVelocity = function (v) {
    //     vel = v.copy();
    // }
}