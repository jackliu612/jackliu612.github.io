var ship;
var canvas;
var asteroids = [];
var size;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    size = [windowWidth, windowHeight];
    canvas.parent("sketch");
    for (var i = 0; i < 50; i++) {
        asteroids.push(new Asteroid(Math.ceil(Math.random() * 25 + 25)));
    }
    background(255);
}

function draw() {
    background(255);

    // if (frameCount % 1 === 0 && asteroids.length < 100) {
    //     asteroids.push(new Asteroid(Math.ceil(Math.random() * 25 + 25)));
    // }
    asteroids.forEach(function (a) {
        a.update();
        a.show();
    });
}

function windowResized() {
    asteroids.forEach(function (a) {
        a.reposition(size, [windowWidth, windowHeight]);
    });
    size = [windowWidth, windowHeight];
    resizeCanvas(windowWidth, windowHeight);
}