function fib(){
	var last = 0;
	var current =1;
	function nacci(){
		console.log(current);
		var temp = current;
		current = last + current;
		last = temp;
	}
	return nacci;
}

var fibCounter = fib();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
