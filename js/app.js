// Enemies our player must avoid
var Enemy = function(x, y) {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  // determine the position of the enemy
  this.x = 0;
  this.y = 0;

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = "images/enemy-bug.png";
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  // make the enemy walk from one side to the other of the board
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Boy {
  constructor() {
    // position x & y
    this.x = 202;
    this.y = 385;
    // image
    this.sprite = "images/char-boy.png";
  }
  // update method (will change props x & y)

  // collision?
  // won?
  // render method (will return the player's image in the new position)
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  //   handleInput method (will respond to the keys pressed by the user)
  handleInput(key) {
    if (key == "left" && this.x > 0) {
      this.x -= 101;
    } else if (key == "right" && this.x < 404) {
      this.x += 101;
    } else if (key == "up" && this.y > 0) {
      this.y -= 83;
    } else if (key == "down" && this.y < 385) {
      this.y += 83;
    }
  }

  // reset (return player to it's original position)
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = {};
// Place the player object in a variable called player
var player = new Boy();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener("keyup", function(e) {
  var allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
