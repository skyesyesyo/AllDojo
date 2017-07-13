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
		console.log("Do, or Do Not. There is no try.")
	}
}
console.log("Starting the Sensie methods. ------------------------")
let super_sensei = new Sensei("Master Splinter");
super_sensei.speakWisdom();
super_sensei.showStats();
