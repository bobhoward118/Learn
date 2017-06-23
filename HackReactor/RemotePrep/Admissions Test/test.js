var myArray = [];
myArray.push('Bob Howard', 'bobhoward118')
var cutName = function(name) {
  return name.split(' ');
}
var myData = {};
myData['fullName'] = cutName(myArray[0])
myData['skype'] = myArray[1]
myData['github'] = 'bobhoward118'
myData
