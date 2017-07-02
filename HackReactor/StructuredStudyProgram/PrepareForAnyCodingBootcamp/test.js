function addArray(array) {
  var sum = 0;
  for (var i = 0, i < array.length; i++) {
    array+= array[i];
  }
}

var sum = addArray([3, 6, 12, 24, 48]);
