var ship;
var canvas;
var asteroids = [];
var size;

var threshold = 10000;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    size = [windowWidth, windowHeight];
    canvas.parent("sketch");
    for (var i = 0; i < 100; i++) {
        asteroids.push(new Asteroid(Math.ceil(Math.random() * 25 + 25)));
    }
    background(255);
}

function draw() {
    background(255);

    // if (frameCount % 1 === 0 && asteroids.length < 100) {
    //     asteroids.push(new Asteroid(Math.ceil(Math.random() * 25 + 25)));
    // }
    for (let i = 0; i < asteroids.length; i++){
        asteroids[i].update();
        asteroids[i].show();
        for (let j = i+1; j < asteroids.length; j++){
            let d = asteroids[i].dist(asteroids[j]);
            // console.log(d)
            if (d < threshold) {
                strokeWeight(10*((threshold-d)/threshold)**5);
                line(asteroids[i].pos.x, asteroids[i].pos.y, asteroids[j].pos.x, asteroids[j].pos.y);
            }
                    
        }
    }
    // asteroids.forEach(function (a) {
    //     a.update();
    //     a.show();
    // });
}

function windowResized() {
    asteroids.forEach(function (a) {
        a.reposition(size, [windowWidth, windowHeight]);
    });
    size = [windowWidth, windowHeight];
    resizeCanvas(windowWidth, windowHeight);
}