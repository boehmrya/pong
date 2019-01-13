

// sets up the main game area
var gameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 800;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
    }
}


// controls all info and actions related to the ball
var ball = {
  radius : 10,
  color : "#0095DD",
  x : gameArea.canvas.width / 2,
  y : gameArea.canvas.height - 30,
  dx : 2,
  dy : -2,
  draw : function() {
      ctx = gameArea.context;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
  },
  move : function() {
    if(this.x + this.dx > gameArea.canvas.width - this.radius ||
       this.x + this.dx < this.radius) {
        this.dx = -this.dx;
    }
    if(this.y + this.dy < this.radius) {
        this.dy = -this.dy;
    }
    else if(this.y + this.dy > gameArea.canvas.height - this.radius) {
        if(this.x > paddle.x && this.x < paddle.x + paddle.width) {
            this.dy = -this.dy;
        }
        else {
            document.location.reload();
        }
    }
    this.x += this.dx;
    this.y += this.dy;
  }
}


// controls all info and actions related to the paddle
var paddle = {
    width : 100,
    height : 20,
    color : "#0095DD",
    x : 400,

    draw : function() {
      ctx = gameArea.context;
      ctx.beginPath();
      ctx.rect(this.x, gameArea.canvas.height - this.height, this.width, this.height);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    }
}


// draws the game pieces and updates the board
var gameController = {
  update : function() {
    gameArea.context.clearRect(0, 0, gameArea.canvas.width, gameArea.canvas.height);
    paddle.draw();
    ball.draw();
    ball.move();
    gameArea.frameNo += 1;
  }
}


// controlls the info and settins for the scoreboard
var scoreBoard = {
  score : document.getElementById("score"),
  setScore : function() {
    score.innerHTML = gameArea.frameNo.toString();
  }
}


// adjusts paddle on keydown
function keyDownHandler(e) {
    if(e.keyCode == 39) {
      if (paddle.x < gameArea.canvas.width - paddle.width) {
        paddle.x += 20;
      }
    }
    else if(e.keyCode == 37) {
      if (paddle.x > 0) {
        paddle.x -= 20;
      }
      if (paddle.x < 0) {
        paddle.x = 0;
      }
    }
}


// event listeners
document.addEventListener("keydown", keyDownHandler, false);


// initialize game
gameArea.start();
setInterval(gameController.update, 10);
