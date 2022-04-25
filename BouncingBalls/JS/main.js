const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');//Reps the drawing area

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

//Ball are represented with an object since they will be behaving in the same way
class Ball {
  constructor (x, y, velX, velY, color, size) {
    //x and y coordinates, wheere the ball starts on the screen, range; 0 to width and height of browser
    this.x = x;
    this.y = y;
    //velocity of the balls
    this.velX = velX;
    this.velY = velY;
    this.color = color;//each ball's color
    this.size = size;//size of each ball, radius in pixels
  }
  draw() {
    ctx.beginPath(); //stating that drawing is done
    ctx.fillStyle = this.color;
    //tracing an arc shape on the paper using arc() method that dets the position of arc center, size/radius, (0 and 2* PI(360 degree det the drawing of the circle))
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill(); // method states finish drawing the path and fill color
  }
  //Updating ball's data to make it move
//Update function necessary
update() {
  //Checking whether the ball ha reached the edge
  if ((this.x + this.size) >= width) {
     this.velX = -(this.velX);
  }

  if ((this.x - this.size) <= 0) {
     this.velX = -(this.velX);
  }

  if ((this.y + this.size) >= height) {
     this.velY = -(this.velY);
  }

  if ((this.y - this.size) <= 0) {
     this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
}
//Adding collision detection by adding the collisionDetect method to the class ball
collisionDetect() {
  //looping through all the balls in the balls[] to see if it has collided with the curent one
  for (const ball of balls) {
     if (!(this === ball)) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
     }
  }
}


}

//Animating the ball
const balls = [];
//create a new instance for the Ball() using the random values generated with random() and randomRGB() functions
while (balls.length < 30) {
   const size = random(10,20);
   const ball = new Ball(
      // ball position always drawn at least one ball width
      // away from the edge of the canvas, to avoid drawing errors
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-7,7),
      random(-7,7),
      randomRGB(),
      size
   );
//pushes it to the end of the balls array but only when the number of balls in the array is < 30 such that no more balls get pushed once there are 30 balls in the array
  balls.push(ball);
}

//Animation loop, updates program information
function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';//fills color 
  ctx.fillRect(0, 0, width, height);//draws a rectangle across the width and height of the canvas

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();// calling collsion detection
  }

  requestAnimationFrame(loop);
}

loop();//calling the loop functions to get the balls boubcing


// //Testing the ball
// const testBall = new Ball(50, 100, 4, 4, 'blue', 10);
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_building_practice
// //Calling the Class's members
// testBall.x
// testBall.size
// testBall.color
// testBall.draw()



