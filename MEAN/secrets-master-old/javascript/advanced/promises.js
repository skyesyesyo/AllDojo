function findTruth(str){
	return new Promise((resolve, reject)=> {
		if(str.length > 5){
			let p = {response: "The given string is long enough"}
			resolve(p)
		}else{
			let err = new Error("It's too short");
			reject(err);
		}
	})
};

findTruth("A  Long Strings")
	.then( (response) => {
		console.log(response.response);
	})
	.catch( (err) => {
		console.log(err);
	})


// let toggleVar = true;

// var myPromise = new Promise(
// 	(resolve, reject) => {
// 		if(toggleVar){
// 			let obj = {message: 'Yay'};
// 			resolve(obj);
// 		}else{
// 			let err = new Error("What happened");
// 			reject(err);
// 		}
// 	}
// );

// let test = () => {
// 	myPromise
// 		.then((positiveResponse)=> {
// 			console.log(positiveResponse);
// 		})
// 		.catch( (negativeResponse)=> {
// 			console.log(negativeResponse);
// 		})
// };

// test();