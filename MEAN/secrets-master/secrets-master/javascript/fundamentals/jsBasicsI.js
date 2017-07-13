// Basic One
var x = [];
x.push('coding');
x.push('dojo');
x.push('rocks');
x.pop();
console.log(x[x.length-1]);

// Basic Two
const y = [];
console.log(y);
y.push(88);
console.log(y);

// Basic Three
var z = [9, 10, 6, 5, -1, 20, 13, 2];
for(var i = 0; i < z.length -1 ; i++){
	console.log(z[i]);
}

// Basic Four
var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
for(i in names){
	if(names[i].length == 5){
		console.log(names[i])
	}
	console.log(names[i].length)
}

// Basic Five
function yell(string){
	return string.toUpperCase();
}
console.log(yell("hello"));