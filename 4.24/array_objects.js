var glazedDonuts = [
{
	grosting: "glazed",
	style: "cake",
	type: "old fashioned",
	age: "20",
	time: "minutes"
}
]

console.log(glazedDonuts);

var purchase;
if((glazedDonuts[0].age < 25 && glazedDonuts[0].time == "minutes" || glazedDonuts[0].time == "seconds")){
	//shop owner
	purchase = glazedDonuts[0];

}
else {
	console.log("sorry it has been out a bit longer");
}