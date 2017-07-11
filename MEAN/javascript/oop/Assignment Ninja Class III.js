// Part I
// Recreate the base Ninja class from scratch using ES6 classes. Your Ninja needs the following attributes:

// name
// health
// speed
// strength
// Speed and strength should be 3 by default. Health should be 100 by default.

// The Ninja class should have the following methods:

// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's Strength and Speed, as well as their health.
// drinkSake() - This should add +10 Health to the Ninja
// Part II - Sensei Class
// Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by default. In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.

// // example output
// let super_sensei = new Sensei("Master Splinter");
// super_sensei.speakWisdom();
// // -> "What one programmer can do in one month, two programmers can do in two months."
// super_sensei.showStats();
// // -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

class Ninja{
	constructor(name){
		this.name = name;
		this.speed = 3;
		this.health = 100;
		this.strength = 3;
	}

	sayName(){
		console.log(this.name);
	}

	showStats(){
		console.log("Name:", this.name, "\nStrength:", this.strength, "\nHealth:", this.health, "\nSpeed:", this.speed);
	}

	drinkSake(){
		this.health += 10;
	}
}

let n = new Ninja('Bruce');
n.sayName();
n.showStats();
n.drinkSake();
console.log(n.strength);

class Sensei extends Ninja{
	constructor(name){
		super(name);
		this.health = 200;
		this.strength = 10;
		this.speed = 10;
		this.wisdom = 10;
	}

	speakWisdom(){
		super.drinkSake();
		console.log("Do, or Do Not. There is no try.");
	}
}
console.log("Starting the Sensie methods. ------------------------");
let super_sensei = new Sensei("Master Splinter");
super_sensei.speakWisdom();
super_sensei.showStats();
