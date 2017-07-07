function magic_multiply(x, y){
    // --- your code here ---
    let result =[];
    if(typeof x === 'object'){
    	for(let i=0; i<x.length; i++){
    		result.push(x[i] * y);
    	}
    }else if(typeof y === 'object'){
    	for(let i=0; i<y.length; i++){
    		result.push(y[i] * x);
    	}
    }else if(typeof y === 'string' && typeof x === 'number'){
    	result="Error: Can not multiply by string";
    }else if(typeof x === 'string' && typeof y === 'number'){
    	result = x.repeat(y);
    }else{
    	result = x*y;
    }
    return console.log(result);
}

// Test1
