function findAvg(arr) {
    //your code here 
    var sum = 0;
    
    for (var i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    
    return sum / arr.length; 
}

function oddnumbers(){

	var arr =[];

	for (var i = 1; i< 50; i++){
		if( i % 2 == 1){
			arr.push(i);
		}
	}
	return arr;
}