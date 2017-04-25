function range(start, stop) {
  if (stop - start === 2) {
    return [start + 1];
  } else{
    var list = range(start, stop - 1);
    list.push(stop - 1);
    return list;
  }
}

console.log(range(1,10));