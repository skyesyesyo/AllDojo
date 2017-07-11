var _ = {
   map: function(arr, callback) {
    var new_arr = [];
     for(var i = 0; i <arr.length; i++){
      new_arr.push(callback(arr[i]));
     }
     return new_arr;
   },
   reduce: function(arr, callback, memo) { 
     if(memo){
      var new_memo = memo;
      start = 0;
     }
     else{
      var new_memo = arr[0];
      start = 1;
     }
     for(var i = start;i <arr.length; i++){
      new_memo = callback(new_memo, arr[i]);
     }
     return new_memo
   },
   find: function(arr, callback) {   
     for(var i = 0; i < arr.length; i++){
      if(callback(arr[i]) == true){
        return arr[i]
      }
     }
     return undefined
   },
   filter: function(arr, callback) { 
    var new_arr = []
     for(var i = 0; i < arr.length; i++){
      if(callback(arr[i]) == true){
        new_arr.push(arr[i]);
      }
     }
     return new_arr
   },
   reject: function(arr, callback) { 
    var new_arr = []
     for(var i = 0; i < arr.length; i++){
      if(callback(arr[i]) == false){
        new_arr.push(arr[i]);
      }
     }
     return new_arr
   }
 }

 arr  = [1,2,3]
 console.log("************MAP****************")
 console.log(_.map(arr, (num)=>{ return num * 3 }))
 console.log("************REDUCE****************")
console.log(_.reduce(arr, (memo, num)=>{ return memo + num; }, 0))
console.log("************FIND****************")
console.log(_.find([1, 2, 3, 4, 5, 6], (num)=>{ return num % 2 == 0; }) )
console.log("************FILTER****************")
console.log(_.filter([1, 2, 3, 4, 5, 6], (num)=>{ return num % 2 == 0; }) )
console.log("************REJECT****************")
console.log(_.reject([1, 2, 3, 4, 5, 6], (num)=>{ return num % 2 == 0; }) )