function allValidParens(num, str, arr, numOpen, numClosed){
	//The following conditionals initialize each parameter on the first call of the function
	// str: the string being constructed
	// arr: the array of the valid strings
	// numOpen: the total number of open parenthesis left to use
	// numClosed: the total number of closed parenthesis left to use
	if (str == null){
		str = "";
	}
	if (arr == null){
		arr = [];
	}
	if (numOpen == null){
		numOpen = num; 
	}
	if (numClosed == null){
		numClosed = num;
	}
	// This is the base case. 
	if (numClosed ==0){
		arr.push(str);
		return arr;
	}
	// console.log(str,arr,numOpen,numClosed) //Keep track of each step in the recursive call stack
	// Below is how forward progress is defined.
	// There are two ways we can make progress:
	// 1. Add a "(" to the string, decrement numOpen
	// 2. Add a ")" to the string, decrement numClosed
	// The hard part is understanding the logic of when to use each
	if(numOpen==numClosed){
		// If there are equal numbers of open and closed parentheses left, we MUST add a opening parenthesis, anything else is invalid
		allValidParens(num,(str+"("),arr, numOpen-1,numClosed) 
	}
	else if(numClosed>numOpen && numOpen!=0){
		// In the case that there are more closing than opening parentheses left to add, we must make two recursive calls because you can add EITHER an open or closing parenthesis
		allValidParens(num,(str+"("),arr, numOpen-1,numClosed) 
		allValidParens(num, (str+")"), arr, numOpen, numClosed-1)
	}else if (numOpen ==0){
		// In the case that there are no more open parentheses left to use, you MUST add a closing parenthesis
		allValidParens(num,(str+")"),arr, numOpen,numClosed-1)	
	}
	return arr
}
console.log(allValidParens(3))

// the number of valid parenthesis given a number of pairs to work with is an actual mathematical sequence, the Catalan numbers! https://en.wikipedia.org/wiki/Catalan_number
// console.log(allValidParens(1).length)
// console.log(allValidParens(2).length)
// console.log(allValidParens(3).length)
// console.log(allValidParens(4).length)
// console.log(allValidParens(5).length)
// console.log(allValidParens(6).length)
// console.log(allValidParens(7).length)