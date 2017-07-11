// Finish the five methods attached to the _ object to create your own custom library.  The purpose of this assignment is to show how a simple JavaScript library can be made. 

var _ = {
   map: function(array, callback) {
     //code here;
     var new_array = [];
     for(var i = 0; i < array.length; i++){
     	
     }
   },
   reduce: function() { 
     // code here;
   },
   find: function() {   
     // code here;
   },
   filter: function() { 
     // code here;
   },
   reject: function() { 
     // code here;
   }
 }
// you just created a library with 5 methods!

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].