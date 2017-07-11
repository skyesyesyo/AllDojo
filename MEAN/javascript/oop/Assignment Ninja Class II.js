// .punch()
// Add a new method to your Ninja class called .punch(). This method will take another Ninja instance and subtract 5 Health from the Ninja we passed in. Your .punch() should display a console message like the below example.

// var blue_ninja = new Ninja("Goemon");
// var red_ninja = new Ninja("Bill Gates");

// red_ninja.punch(blue_ninja);
// // -> "Goemon was punched by Bill Gates and lost 5 Health!"
// Copy
// .kick()
// Now add a method to your Ninja class called .kick(). Kick will subtract 5 Health for each point of Strength the calling Ninja has, and like .punch() will take another Ninja instance.

// blue_ninja.kick(red_ninja);
// // -> "Bill Gates was kicked by Goemon and lost 15 Health!"
// Copy
// Validations
// Update .punch() and .kick() so that they only accept Instances of the Ninja class. Hint: You will need to find a way to check the constructor of an instance. You will often need to consult outside documentation to find solutions for paticular features.

function Ninja(name){
	this.name = name;
	this.health =100
	var speed = 3;
	var strength = 3;
	this.useSpeed = function(){
		return speed;
	};
	this.useStrength = function() {
		return strength;
	};
}

Ninja.prototype.sayName = function() {
	console.log(this.name);
};

Ninja.prototype.showStats = function() {
	console.log("Health is", this.health);
	console.log('Speed is', this.useSpeed());
	console.log("strength is", this.useStrength());
};

Ninja.prototype.drinkSake = function() {
	this.health += 10;
};

Ninja.prototype.punch = function(ninja){
	if (this instanceof Ninja) {
		ninja.health -= 5;
		console.log(ninja.name + ' was punched by ' + this.name + ' and lost 5 hp.');
	}else{
		console.log(this.name + ' missed.');
	}
};

Ninja.prototype.kick = function(ninja){
	if (this instanceof Ninja) {
		ninja.health -= this.useStrength() *5;
		console.log(ninja.name + ' was kicked by ' + this.name + ' and lost ' +(this.useStrength() *5) + ' health.');
	}else{
		console.log(this.name + ' missed.');
	}
};


var blue_ninja = new Ninja("Geomon");
var red_ninja = new Ninja("Bill Gates");

red_ninja.punch(blue_ninja);
console.log(blue_ninja.health);

blue_ninja.kick(red_ninja);
console.log(red_ninja.health);