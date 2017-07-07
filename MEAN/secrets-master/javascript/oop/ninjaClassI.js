function Ninja(name){
	this.name = name;
	this.health = 100;
	this.speed = 3;
	this.strength = 3;
}

Ninja.prototype.sayName = function() {
	console.log(this.name);
}

Ninja.prototype.showStats = function() {
	console.log("Health is", this.health);
	console.log("Strength is", this.strength);
	console.log("Speed is", this.speed);
}

Ninja.prototype.drinkSake = function() {
	this.health += 10;
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();