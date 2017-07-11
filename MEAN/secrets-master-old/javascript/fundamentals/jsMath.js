function zero_negativity(arr){
	for(i in arr){
		if(arr[i] < 0){
			return false;
		}
	}
	return true;
}

console.log(zero_negativity([65,6,7,7,75,4]));
console.log(zero_negativity([65,6,-7,7,75,4]))

function is_even(num){
	if(num % 2 == 0){
		return true;
	}else{
		return false;
	}
}

console.log(is_even(4));
console.log(is_even(7));

function how_many_even(arr){
	let total = 0;
	for(let i in arr){
		if(is_even(arr[i])){
			total++;
		}
	}
	return total;
}

console.log(how_many_even([65,6,7,7,75,4]));

function create_dummy_array(n){
	let arr = [];
	for(let i = 0; i < n; i++){
		arr.push(Math.floor(Math.random()*9) + 1);
	}
	return arr;
}

console.log(create_dummy_array(5));

function random_choice(arr){
	let num = Math.floor(Math.random() * arr.length );
	return arr[num];
}
console.log(random_choice([65,6,7,7,75,4]));