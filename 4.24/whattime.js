var hour = 7;
var minute =15;
var period ="PM";

if (minute <30) {
	if (period == "AM"){
		console.log ("It's just after " + hour + " in the moring.");
	}
	else{
		console.log ("It's just after " + hour + " in the evening.");
	}
}
if (minute >30) {
	hour++;
	if (period == "AM"){
		console.log ("It's almost " + hour + " in the moring.");
	}
	else{
		console.log ("It's almost " + hour + " in the evening.");
	}
}