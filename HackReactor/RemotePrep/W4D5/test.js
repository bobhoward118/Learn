var balancedParens = function(string) {
  var leftParens = 0;
  var rightParens = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === "(" ) {
      leftParens += 1;
    } else if (string[i] === ")" ) {
      rightParens += 1;
    }
  }
  return leftParens === rightParens
}

balancedParens("So for (example) this would be false")
// true



// var balanced = function(string){
// 	var counter = 0;
// 	for (var i = 0; i < string.length; i++){
// 		if(string[i] === "("){
// 			counter++;
// 		} else if (string[i] === ")"){
// 			counter--;
// 		}
// 		if(counter === -1){
// 			return false;
// 		}
// 	}
// 	return counter === 0;
// }
//
// console.log(balanced("())("))
