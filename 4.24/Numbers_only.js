var arr= [1, "apple", -3, "orange, 0.5"];
var numOnly = [];

for(var i = 0; i < arr.length; i++){
	if (typeof arr[i] === "number"){
		numOnly.push(arr[i]);
	} else {
	}
}
console.log(numOnly);
