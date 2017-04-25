function Money(days) {
  var sum = 0.01;
  for (var i = 1; i <= days;i++){
    sum = sum *2;
    console.log(sum);
  }
}
Money(30);