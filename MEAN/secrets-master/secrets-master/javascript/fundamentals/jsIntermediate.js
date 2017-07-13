function star_string(num){
	let str = '';
	for(let i = 0; i < num; i++){
		str += '*';
	}
	return str
}
console.log("Running the star_string method.")
console.log(star_string(10));

function draw_stars(arr){
	for(let i = 0; i < arr.length; i++){
		if(typeof(arr[i]) == 'number'){
			console.log(star_string(arr[i]));
		}else if(typeof(arr[i]) == 'string'){
			let newStr = '';
			for(let j = 0; j < arr[i].length; j++){
				newStr += arr[i][0].toLowerCase();
			}	
			console.log(newStr);
		}
	}
}
console.log("Running the draw_stars method");
draw_stars([65,6,7,7,75,4]);

let x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
console.log("Runnning the modified draw_stars method");
draw_stars(x);