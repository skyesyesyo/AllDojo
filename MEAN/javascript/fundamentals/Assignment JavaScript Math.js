// Math 1
// Write a function called zero_negativity(). This function should take an array. Return true if the input array contains no negative numbers, return false if it does.
function zero_negativity(array){
	for(let i=0; i<array.length; i++){
		if(arry[i] < 0){
			return false;
		}
	}
	return true;
}

zero_negativity([1,2,3,-5]);

// Math 2
// Write a function called is_even(). This function should take an number. Return true if the input number is even, return false if the number is odd.
function is_even(x){
	if(x%2 == 0){
		return true;
	}
	return false;
}

// Math 3
// Write a function called how_many_even(). This function should take an array. Return the total number of elements in the array that are even. You may call is_even() to solve this.
function how_many_even(array){
	let count = 0;
	for(let i=0; i<array.length; i++){
		if(array[i]%2 == 0){
			count++;
		}
	}
	return count;
}

how_many_even([2,4,6,7]);

// Math 4
// Write a function called create_dummy_array(). This function should take a number n. Return an array of random numbers between 0 and 9 with the length of n.
function create_dummy_array(n){
	var array = [];
	for(let i=0; i<n; i++){
		var x = Math.floor(Math.random() * 10);
		array.push(x);
	}
	return array;
}

// Math 5
// Write a function called random_choice(). This function should take an array. Return a random element of the array, based on it's length. This function should never return undefined.
function random_choice(array){
	var rand = Math.floor(Math.random() * array.length);
	return array[rand];
}

random_choice([2,3,4,5,6]);