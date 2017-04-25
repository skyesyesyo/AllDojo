function sum_odd_5000(){
	var sum = 0;
	for (var i= 1; i<=5000; i++){
		if(i % 2 === 1){
			sum = sum + i;
		}
	}
	return sum;
}