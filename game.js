//This is my lunar landing game!
//I asked chatgpt to make the stars :)

//variables
let x = 400;
let y = 100;
let speedX = 0;
let speedY = 0;
let gravity = 0.1;
let thrust = -0.5;
let landX = 350;
let landWidth = 100;
let isLanding = false;
let gameOver = false;
let crash = false;
let win = false;

let state = "start";

function setup() {
  createCanvas(800, 800);
}

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "result") {
    resultScreen();
  } else if (state === "win") {
    winScreen();
  }
}

function startScreen() {
  noStroke();
  background(69, 64, 119);
  fill(135, 191, 116);

  // alien head
  ellipse(400, 400, 200);
  rect(x + 30, y + 140, 25, 90, 20);
  rect(x - 60, y + 140, 25, 90, 20);
  // eyes
  fill(255, 255, 255);
  ellipse(x - 50, y + 135, 50);
  ellipse(x + 40, y + 135, 50);

  fill(0, 0, 0);
  ellipse(x - 50, y + 135, 30);
  ellipse(x + 40, y + 135, 30);

  // stars
  fill(239, 218, 100);
  drawStar(300 / 2, height / 2, 50, 10, 5);
  drawStar(100 / 2, 100 / 2, 50, 20, 5);
  drawStar(600 / 2, 250 / 2, 50, 10, 8);
  drawStar(1000 / 2, 100 / 2, 50, 20, 5);
  drawStar(1100 / 2, 400 / 2, 50, 10, 5);
  drawStar(1400 / 2, 200 / 2, 40, 20, 5);
  drawStar(1280 / 2, 800 / 2, 50, 10, 5);
  drawStar(1400 / 2, 500 / 2, 40, 10, 8);
  drawStar(200 / 2, 400 / 2, 40, 20, 5);

  function drawStar(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;

    beginShape();
    for (let a = -PI / 2; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
  // text start page
  textSize(60);
  textAlign(CENTER, CENTER);
  fill(255);
  text("Start", 400, 400);
  textSize(40);
  text("Lunar Lander!", 406, 600);
}

function gameScreen() {
  background(69, 64, 119);

  speedY += gravity;

  x += speedX;
  y += speedY;

  // alien
  fill(135, 191, 116);
  push();

  ellipse(x, y, 40, 40);
  rect(x + 6, y - 35, 8, 30, 20);
  rect(x - 15, y - 35, 8, 30, 20);
  // eyes
  fill(255, 255, 255);
  ellipse(x + 10, y - 35, 15);
  ellipse(x - 12, y - 35, 15);

  fill(0, 0, 0);
  ellipse(x + 10, y - 35, 8);
  ellipse(x - 12, y - 35, 8);
  // mouth
  fill(9, 121, 105);
  arc(x, y, 20, 20, 0, PI);
  //moon
  fill(227, 232, 232);
  ellipse(179, 230, 150);

  fill(158, 165, 165);
  ellipse(131, 198, 30);
  ellipse(173, 280, 30);
  ellipse(205, 226, 30);
  ellipse(128, 245, 20);
  ellipse(182, 179, 30);
  ellipse(217, 266, 20);
  ellipse(226, 199, 20);
  ellipse(164, 229, 25);

  // other planet
  fill(194, 142, 196);
  ellipse(599, 545, 150);
  fill(229, 143, 71);
  arc(599, 545, 200, 30, 0, PI);

  // The little dots
  fill(239, 218, 100);
  ellipse(103, 488, 10);
  ellipse(80, 200, 10);
  ellipse(605, 224, 10);
  ellipse(401, 516, 10);
  ellipse(702, 67, 10);
  ellipse(246, 665, 10);
  ellipse(339, 344, 10);
  ellipse(196, 42, 10);
  ellipse(726, 373, 10);
  ellipse(735, 650, 10);

  pop();

  // landing pad
  fill(153, 195, 181);
  rect(landX, height - 50, landWidth, 20, 20);

  // collision with landing pad
  if (y >= height - 50 && x > landX && x < landX + landWidth) {
    isLanding = true;
    if (speedY > 2) {
      crash = true;
    } else {
      crash = false;
      win = true;
    }
    speedY = 0;
  }

  //spaceship goes off the screen
  if (y > height || x < 0 || x > width) {
    crash = true;
  }

  if (crash) {
    state = "result";
  } else if (win) {
    state = "win";
  }

  // Controls spacebar
  if (keyIsDown(32)) {
    speedY = thrust;
  }
}

function resultScreen() {
  background(69, 64, 119);
  fill(255);
  textSize(60);
  textAlign(CENTER, CENTER);
  noStroke();

  //alien
  fill(135, 191, 116);
  ellipse(400, 350, 200);
  rect(348, 200, 25, 90, 20);
  rect(430, 200, 25, 90, 20);

  //eyes
  fill(255, 255, 255);
  ellipse(360, 200, 50);
  ellipse(440, 200, 50);

  fill(0, 0, 0);
  ellipse(360, 200, 30);
  ellipse(440, 200, 30);

  // mouth
  fill(9, 121, 105);
  rect(350, 352, 110, 20, 20);

  // stars
  fill(239, 218, 100);
  drawStar(300 / 2, height / 2, 50, 10, 5);
  drawStar(100 / 2, 100 / 2, 50, 20, 5);
  drawStar(600 / 2, 250 / 2, 50, 10, 8);
  drawStar(1000 / 2, 100 / 2, 50, 20, 5);
  drawStar(1100 / 2, 400 / 2, 50, 10, 5);
  drawStar(1400 / 2, 200 / 2, 40, 20, 5);
  drawStar(1280 / 2, 800 / 2, 50, 10, 5);
  drawStar(1400 / 2, 500 / 2, 40, 10, 8);
  drawStar(200 / 2, 400 / 2, 40, 20, 5);

  function drawStar(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;

    beginShape();
    for (let a = -PI / 2; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

  // result text
  if (crash) {
    fill(9, 121, 105);
    text("You died :(", 400, 550);
  } else {
    text("Safe Landing!", 400, 550);
  }

  textSize(30);
  fill(9, 121, 105);
  text("Click to Restart", 400, 650);
}

function winScreen() {
  background(69, 64, 119);
  fill(255);
  textSize(60);
  textAlign(CENTER, CENTER);

  text("You Win!", 400, 550);

  textSize(30);
  fill(9, 121, 105);
  text("Click to Restart", 400, 650);

  //alien
  fill(135, 191, 116);
  ellipse(400, 350, 200);
  rect(348, 200, 25, 90, 20);
  rect(430, 200, 25, 90, 20);

  //eyes
  fill(255, 255, 255);
  ellipse(360, 200, 50);
  ellipse(440, 200, 50);

  fill(0, 0, 0);
  ellipse(360, 200, 30);
  ellipse(440, 200, 30);

  // mouth
  fill(9, 121, 105);
  arc(400, 352, 100, 70, 0, PI);

  // stars
  fill(239, 218, 100);
  drawStar(300 / 2, height / 2, 50, 10, 5);
  drawStar(100 / 2, 100 / 2, 50, 20, 5);
  drawStar(600 / 2, 250 / 2, 50, 10, 8);
  drawStar(1000 / 2, 100 / 2, 50, 20, 5);
  drawStar(1100 / 2, 400 / 2, 50, 10, 5);
  drawStar(1400 / 2, 200 / 2, 40, 20, 5);
  drawStar(1280 / 2, 800 / 2, 50, 10, 5);
  drawStar(1400 / 2, 500 / 2, 40, 10, 8);
  drawStar(200 / 2, 400 / 2, 40, 20, 5);

  function drawStar(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;

    beginShape();
    for (let a = -PI / 2; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
}

function mouseClicked() {
  if (state === "start") {
    state = "game";
    resetGame();
  } else if (state === "result" || state === "win") {
    state = "game";
    resetGame();
  }
}

function resetGame() {
  x = 400;
  y = 100;
  speedX = 0;
  speedY = 0;
  gravity = 0.1;
  thrust = -0.5;
  crash = false;
  win = false;
  isLanding = false;
}
