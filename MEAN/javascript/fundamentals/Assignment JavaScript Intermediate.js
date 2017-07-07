// Part I
// Create a function called star_string() that takes a number and returns a string of that many *. For example:
function star_string(number){
	var stars ="";
	var star="*";
	for(var i = 0; i<number; i++){
		stars = stars.concat(star);
	}
	console.log(stars);
}

// Part II
// Create a function called draw_stars() that takes a list of numbers and prints out *.
function draw_stars(array){
	var stars ="";
	var one_star="*";
	for(var i = 0; i<array.length; i++){
		for(var j = 0; j < array[i]; j++){
			stars = stars.concat(one_star);
		}
		console.log(stars);
		stars ="";
	}
}

draw_stars([4, 6, 1, 3, 5, 7, 25]);

// Part III
// Modify the function above. Allow a list containing integers and strings to be passed to the draw_stars() function. When a string is passed, instead of displaying *, display the first letter of the string according to the example below. You may use the .lower() string method for this part.

function draw_stars(array){
	var stars ="";
	var one_star="*";
	for(var i = 0; i<array.length; i++){
		if(typeof array[i] === 'number'){
			for(var j = 0; j < array[i]; j++){
				stars = stars.concat(one_star);
			}
		}else{
			for(var k = 0; k < array[i].length; k++){
				var first_letter = array[i][0].toLowerCase();
				stars = stars.concat(first_letter);
			}
		}
		console.log(stars);
		stars ="";
	}
}

draw_stars([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]);