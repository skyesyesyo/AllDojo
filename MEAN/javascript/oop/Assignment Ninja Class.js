// Create a new class called Ninja with the following attributes:

// name
// health
// speed (private)
// strength (private)
// Speed and strength should be 3 by default. Health should be 100 by default.

// The Ninja class should have the following methods:

// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's Strength and Speed, as well as their health.
// drinkSake() - This should add +10 Health to the Ninja

function Ninja(name){
	this.name = name;
	this.health = 100;
	// speed and strength need to be private
	this.speed = 3;
	this.strength =3;
}

Ninja.prototype.sayName = function(){
	console.log(this.name);
};

Ninja.prototype.showStats = function(){
	console.log("Health is", this.health);
	console.log("Strength is", this.strength);
	console.log("Speed is", this.speed);
};

Ninja.prototype.drinkSake = function() {
	this.health += 10;
};

var hyabusa = new Ninja("Hyabusa");
hyabusa.sayName();
hyabusa.showStats();