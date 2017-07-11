function swap(array,i,j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(array) {
  var length = array.length;
  var sorted = true;

  for (var i = 0; i < length; i++) {
    for (var j = 1; j < length - i; j++) {
      if (array[j-1] > array[j]) {
        swap(array,j-1,j);
        sorted = false;
      }
      console.log(array);
    }
    if (sorted) {
      break;
    }
  }
  return array;
}

console.log(bubbleSort([90, 74, 25, 14, 85, 35, 81, 69, 7, 83, 2]));
console.log(bubbleSort([1,2,3,4,5,6,7,8,9]));
console.log(bubbleSort([9,8,7,6,5,4,3,2,1]));