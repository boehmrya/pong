

var ball = {
  radius = 10,
  color = "#0095DD",
  x = myGameArea.canvas.width / 2,
  y = myGameArea.canvas.height - 30,
  dx = 2,
  dy = -2,

  draw : function() {
      ctx = myGameArea.context;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
  }
}


var paddle = {
    width = 75,
    height = 10,
    x = (myGameArea.canvas.width - width) / 2,
    rightPressed = false,
    leftPressed = false,

    draw : function() {
      ctx = myGameArea.context;
      ctx.beginPath();
      ctx.rect(this.x, myGameArea.canvas.height - height, this.width, this.height);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    },

    keyDownHandler : function(e) {
        if(e.keyCode == 39) {
            this.rightPressed = true;
        }
        else if(e.keyCode == 37) {
            this.leftPressed = true;
        }
    },

    keyUpHandler : function(e) {
        if(e.keyCode == 39) {
            this.rightPressed = false;
        }
        else if(e.keyCode == 37) {
            this.leftPressed = false;
        }
    }
}


var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 800;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(this.update(), 10);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    update : function() {

    },
    collision : function() {

    }
}


// event listeners
document.addEventListener("keydown", paddle.keyDownHandler, false);
document.addEventListener("keyup", paddle.keyUpHandler, false);

// initialize game
myGameArea.start();
