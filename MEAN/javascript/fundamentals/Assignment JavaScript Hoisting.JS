// 1
console.log(hello);
var hello = 'world';

// undefined


// 2
var needle = 'haystack';
test();


function test(){
	var needle = 'magnet';
	console.log(needle);
}

// magnet


// 3
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);

// super cool
// undefined


// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}

// chicken
// half-chicken


// 5
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
};
console.log(food);

// Uncaught TypeError: mean is not a function at <annoymous>:1:1


// 6
console.log(genre);	//undefined
var genre = "disco";
rewind();	//rock	//r&b
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);	//disco


// 7
dojo = "san jose";
console.log(dojo);	//sanjose
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);	//seattle
	var dojo = "burbank";
	console.log(dojo);	//burbank
}
console.log(dojo);	//sanjose

