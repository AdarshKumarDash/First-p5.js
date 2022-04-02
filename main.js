function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 50, 50, 400, 300);
    fill("#f34");
    stroke("transparent");
    circle(40, 40, 50);
    circle(460, 40, 50);
    circle(40, 360, 50);
    circle(460, 360, 50);
    
    fill("green");
    stroke("transparent");
    rect(63, 27, 375, 25);
    rect(63, 347, 375, 25);
    rect(27, 63, 25, 275);
    rect(448, 63, 25, 275);
}

function take_snapshot() {
    save("user.png");
}