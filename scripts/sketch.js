//Equations stolen from https://www.myphysicslab.com/pendulum/double-pendulum-en.html
var canvas;
var pg;
var r1 = 100, r2 = 100, m1 = 6, m2 = 6;
var a1 = Math.random() * Math.PI * 2, a2 = Math.random() * Math.PI * 2;
var a1_v = 0, a2_v = 0;
var a1_a = 0, a2_a = 0;
var cx, cy;
var g = 9.8 / 60;
var prevX = 0, prevY = 0;
var h = 0;
var cMax = 1000;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    // canvas = createCanvas(100, 100);
    canvas.parent("sketch");
    pg = createGraphics(windowWidth, windowHeight);
    pg.background(255);
    pg.stroke(255);
    pg.strokeWeight(3);
    pg.colorMode(HSB, cMax);

    background(255);
    cx = windowWidth / 2;
    cy = windowHeight / 3;

    pg.translate(cx, cy);

    var x1 = sin(a1) * r1;
    var y1 = cos(a1) * r1;
    prevX = x1 + sin(a2) * r2;
    prevY = y1 + cos(a2) * r2;
}

function draw() {
    image(pg, 0, 0, windowWidth, windowHeight);

    stroke(51);
    strokeWeight(3);
    translate(cx, cy);

    updateValues();

    var x1 = sin(a1) * r1;
    var y1 = cos(a1) * r1;
    // line(0, 0, x1, y1);

    var x2 = x1 + sin(a2) * r2;
    var y2 = y1 + cos(a2) * r2;
    // line(x1, y1, x2, y2);

    pg.stroke((x2+r1+r2)/2/(r1+r2)*cMax, cMax/2, cMax);
    pg.line(prevX, prevY, x2, y2);
    prevX = x2;
    prevY = y2;
}

function updateValues() {

    var num1 = (-g * (m1 + m2) * sin(a1) - m2 * g * sin(a1 - 2 * a2) - 2 * sin(a1 - a2) * m2 * (a2_v * a2_v * r2 + a1_v * a1_v * r1 * cos(a1 - a2)));
    var den1 = r1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
    a1_a = num1 / den1;

    var num2 = 2 * sin(a1 - a2) * (a1_v * a1_v * r1 * (m1 + m2) + g * (m1 + m2) * cos(a1) + a2_v * a2_v * r2 * m2 * cos(a1 - a2));
    var den2 = r2 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
    a2_a = num2 / den2;

    a1_v += a1_a;
    a2_v += a2_a;

    a1 += a1_v;
    a2 += a2_v;
}

function keyPressed() {
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    pg = createGraphics(windowWidth, windowHeight);
    pg.background(255);
    pg.stroke(255);
    pg.strokeWeight(3);

    cx = windowWidth / 2;
    cy = windowHeight / 2;

    pg.translate(cx, cy);
}