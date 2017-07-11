function fib(){
	var last = 0;
	var current = 1;
	function nacci(){
		console.log(current);
		var temp = current
		current = last + current;
		last  = temp;
	}
	return nacci;
}

var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter()