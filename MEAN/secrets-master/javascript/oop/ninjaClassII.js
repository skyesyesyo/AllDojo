function Ninja(name){
	this.name = name;
	this.health = 100;
	var speed = 3;
  var strength = 3;
	this.useSpeed = function() {
    return speed;
  };
  this.useStrength = function() {
    return strength;
  };
}

Ninja.prototype.sayName = function() {
	console.log(this.name);
}

Ninja.prototype.showStats = function() {
	console.log("Health is", this.health);
	console.log("Speed is", this.useSpeed());
  console.log("Strength is", this.useStrength());
}

Ninja.prototype.drinkSake = function() {
	this.health += 10;
}

Ninja.prototype.punch = function(ninja){
	if (this instanceof Ninja) {
    ninja.health -= 5;
    console.log(ninja.name + ' was punched by ' + this.name + ' and lost 5 health.');
  } else {
    console.log(this.name + ' missed.');
  }
}

Ninja.prototype.kick = function(ninja){
	if (this instanceof Ninja) {
    ninja.health -= this.useStrength() * 5;
    console.log(ninja.name + ' was kicked by ' + this.name + ' and lost ' + (this.useStrength() * 5) + ' health.');
  } else {
    console.log(this.name + ' missed.');
  }
}

var blue_ninja = new Ninja("Goemon");
var red_ninja = new Ninja("Bill Gates");

red_ninja.punch(blue_ninja);
console.log(blue_ninja.health);

blue_ninja.kick(red_ninja);
console.log(red_ninja.health);
