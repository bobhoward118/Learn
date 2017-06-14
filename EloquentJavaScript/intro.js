// sum of all numbers between 1 - 10
var total = 0, count = 1;
while (count <= 10) {
	total += count;
	count += 1;
}
console.log(total);
// -> 55



function fac(n) {
	if (n == 0)
		return 1;
	else
		return fac(n - 1) * n;
}
console.log(fac(8));
// -> 40320



function range(start, end, step) {
  if (step == null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}



function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++)
    total += array[i];
  return total;
}

var total = 0, count = 1;
while(count <= 10) {
  total += count;
  count += 1;
}
console.log(total);