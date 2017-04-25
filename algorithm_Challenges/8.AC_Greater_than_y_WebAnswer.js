function greaterY(arr, y){
	var count = 0;

	for (var i = 0; i < arr.length; i++){
		if (arr[i] > y){
			count++;
		}
	}
	return count;
}