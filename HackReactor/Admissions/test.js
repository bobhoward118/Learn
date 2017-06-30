var myArray = [];
myArray.push('Bob Howard', 'bobhoward118')
var cutName = function(name) {
  return name.split(' ');
}
var myInfo = {};
myInfo['fullName'] = cutName(myArray[0]);
myInfo['skype'] = myArray[1];
myInfo['github'] = 'bobhoward118';
