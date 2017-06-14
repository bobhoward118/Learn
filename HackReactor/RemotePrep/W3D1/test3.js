var fibonnacci = function(num) {
  var counter = 3;
  var tail = 0;
  var head = 1;
  var temp;

  if (num === 1) return 0
  if (num === 2) return 1

  while (counter <= num) {

    temp = head;
    head += tail;
    tail = temp;
    counter++;
  }
  return head;
}

console.log(fibonacci(5));
