function iOS(str, arr=[], substr="", letter="", index=-1){
	arr.push(substr);
	console.log("A new value has been pushed into the array, it is now:");
	console.log(arr);
	console.log("This is the current substring:", substr);
	console.log("This is the current letter to add:", letter);
	for(var i=str.length-1; i>index; i--){
		iOS(str, arr, substr+str[i], str[i], i);
	}
	console.log("**** a recursive call has finished, the array is now:")
	console.log(arr);
	return arr;
}

iOS("abc");