// Finish the five methods attached to the _ object to create your own custom library.  The purpose of this assignment is to show how a simple JavaScript library can be made. 

var _ = {
   map: function(array, callback) {
     //code here;
     var new_array = [];
     for(var i = 0; i < array.length; i++){
     	new_array.push(callback(array[i]));
     }
     return new_array;
   },
   reduce: function(array, callback, memo) { 
     // code here;
     var new_memo = [];
     if(memo){
      new_memo = memo;
      start = 0;
     }else{
      new_memo = array[0];
      start = 1;
     }
     for(var i = start;i < array.length; i++){
      new_memo = callback(new_memo, array[i]);
     }
     return new_memo;
   },
   find: function(array, callback) {
     // code here;
     for(var i = 0; i < array.length; i++){
      if(callback(array[i]) == true){
        return array[i];
      }
     }
     return undefined;
   },
   filter: function(array, callback) { 
     // code here;
    var new_array = [];
    for(var i = 0; i < array.length; i++){
      if(callback(array[i]) ==  true){
        new_array.push(array[i]);
      }
    }
    return new_array;
   },
   reject: function(array, callback) { 
     // code here;
     var new_array = [];
     for(var i = 0; i < array.length; i++){
      if(callback(array[i]) == false){
        new_array.push(array[i]);
      }
     }
     return new_array;
   }
 };
// you just created a library with 5 methods!

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].

array = [1,2,3];

 console.log("************MAP****************");
 console.log(_.map(array, (num) =>{ return num * 3; }));
 console.log("************REDUCE****************");
console.log(_.reduce(array, (memo, num)=>{ return memo + num; }, 0));
console.log("************FIND****************");
console.log(_.find([1, 2, 3, 4, 5, 6], (num)=>{ return num % 2 == 0; }) );
console.log("************FILTER****************");
console.log(_.filter([1, 2, 3, 4, 5, 6], (num)=>{ return num % 2 == 0; }) );
console.log("************REJECT****************");
console.log(_.reject([1, 2, 3, 4, 5, 6], (num)=>{ return num % 2 == 0; }) );