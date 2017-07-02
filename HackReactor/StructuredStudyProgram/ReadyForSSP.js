
function isEven(num) {
  var count = [];
  for (var i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      count.push(num[i]);
    }
  }
  return count;
}

var output = isEven([1, 4, 5, 6, 10, 13]);
console.log(output); // --> [4, 6, 10]
