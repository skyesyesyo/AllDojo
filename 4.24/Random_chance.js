console.log("hi");

var quaters = 100;
var winner = 1;
var h = Math.trunc(Math.random()*100);
var reward = 51 + Math.trunc(Math.random()*50);

console.log(reward);

if (1 == winner){
	console.log("winner");
	quaters = quater + reward;
	console.log("YOU MADE "+ reward + "YOU HAVE " + quaters);
}else {
	console.log("lost");
	quaters = quaters - 1;
	console.log("You have " + quaters);
}