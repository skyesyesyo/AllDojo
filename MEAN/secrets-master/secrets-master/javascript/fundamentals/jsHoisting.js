// Snippet One
	// Given code
		console.log(hello);
		var hello = ‘world’;

	// Output 
		var hello;
		console.log(hello);
		hello = 'world';

// Snippet Two
	// Given Code
		var needle = ‘haystack’;
		test();

		function test(){
			var needle = ‘magnet’;
			console.log(needle);
		}

	// Output
		var needle;
		function test(){
			var needle;
			needle = 'magnet';
			console.log(needle);
		}
		needle = 'haystack';
		test();
// Snippet Three
	// Given code
		var brendan = ‘super cool’;
		function print(){
			brendan = ‘only okay’;
			console.log(brendan);
		}
		console.log(brendan);

	// Output
		var brenden;
		function print(){
			brenden = 'only okay';
			console.log(brenden);
		}
		brenden = 'super cool';
		console.log(brenden);

// Snippet Four
	// Given Code
		var food = ‘chicken’;
		console.log(food);
		eat();
		function eat(){
			food = ‘half-chicken’;
			console.log(food);
			var food = ‘gone’;
		}

	// Output
		var food;
		function eat(){
			var food;
			food = 'half-chicken';
			console.log(food);
			food = 'gone';
		}
		food = 'chicken';
		console.log(food);
		eat();

// Snippet Five
	// Given Code
		mean();
		console.log(food);
		var mean = function() {
			food = "chicken";
			console.log(food);
			var food = "fish";
			console.log(food);
		}
		console.log(food);

	// Output
		var mean;
		mean();
		console.log(food);
		mean = function(){
			var food;
			food = 'chicken';
			console.log(food);
			food = 'fish';
			console.log(food);
		}
		console.log(food);

// Snippet Six
	// Given Code
		console.log(genre);
		var genre = "disco";
		rewind();
		function rewind() {
			genre = "rock";
			console.log(genre);
			var genre = "rNb";
			console.log(genre);
		}
		console.log(genre);

	// Output
		var genre;
		function rewind(){
			var genre;
			genre = 'rock';
			console.log('genre');
			genre = 'RnB';
			console.log(genre);
		}
		console.log(genre);
		genre = 'disco';
		rewind();
		console.log(genre);

// Snippet Seven
	// Given Code
		dojo = "san jose";
		console.log(dojo);
		learn();
		function learn() {
			dojo = "seattle";
			console.log(dojo);
			var dojo = "burbank";
			console.log(dojo);
		}
		console.log(dojo);

	// Output
		function learn(){
			var dojo;
			dojo = 'seattle';
			console.log(dojo);
			dojo = 'burbank';
			console.log(dojo);
		}
		dojo = 'san jose';
		console.log(dojo);
		learn();
		console.log(dojo);
