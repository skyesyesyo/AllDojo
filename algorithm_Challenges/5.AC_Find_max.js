var array=[-3, 3, 15, 12,7];
function findmax(arr){
  var max = arr[0];
  for (var i = 1; i < arr.length; i++){
    if (max < arr[i]){
      max = arr[i];
    }
  }
  return max;
}
console.log(findmax(array));