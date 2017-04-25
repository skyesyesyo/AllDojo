// var today="Friday";
// var moodLevel = 01;

// if (today == "Friday" && moodLevel >= 100){
//   var goDance = true;
// }
// else var goDance = false;{
  
// }
// console.log(goDance);

// var raining = false;
// var distanceMiles =2

// if (raining == true || distanceMiles >3){
//   callUber = true;
// }
// else callUber = "let's call Uber!";
// console.log(callUber);

// var snowing = true;
// if (!snowing){
//   var wearshort = true;
// }

// console.log(wearshort);


var num = 1;
while (num < 5) 
{
  if (num == 3) 
  {
    continue;
    // if you have additional code down here, it will never run!
  }
  console.log("I'm counting! The number is ", num);
  num = num + 1;          // if we break, we leave the WHILE loop so these lines won’t run
}