function mergeSort(arr){
    if (arr.length < 2){
        return arr;
    }
    var breakPoint = parseInt(arr.length / 2);
    var left   = arr.slice(0, breakPoint);
    var right  = arr.slice(breakPoint, arr.length);
    console.log("Left is", left);
    console.log("Right is", right);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right){
    var result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length){
        result.push(left.shift());
    }
    while (right.length){
        result.push(right.shift());
    }
    return result;
}
arr = [9,8,4,5,1,3,2,7,6]
console.log(mergeSort(arr));
