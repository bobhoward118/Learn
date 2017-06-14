var primeList = function(num) {
  var arr = _.range(1, num);
  var oddArray = _.reject(arr, function(i) {
    return for (var x = 2; x < i; x++) {
      if (i % x === 0) {

      }
    }
  })
}

primeList(20)


// [2,3,5,6,11,13,17,19]

_.range(4,10)
_.reject(collection, isEven)
