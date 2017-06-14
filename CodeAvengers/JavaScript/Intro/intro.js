var name = prompt('What is your name?', 'Anonymous')
var age = prompt('what is our age?', '21')
var gender = prompt('What is your gender?', 'Male')
 
// If you put *, / or , - between 2 strings, the strings are converted to numbers and multiplied together, e.g.
var d = 20 + '0' + 0 // equals 2000
var e = 9 + 11 + '13' // equals 2013
var c = '22' / '44' * 100 + '%' // equals 50%
var d = '$' + 12 * 4 // equals $48
var e = ('55' - 22) / '11' + '2' // equals 32
var a = '1kB = ' + (4 * 4 * 4 * 4 * 4) + 'B' // equals 1kB = 1024B
var b = 3 / 4 * 100 + '%' // equals 75%
var c = '10GB = ' + (10 * 1024) + 'MB' // equals 10GB = 10240MB
var d = 'Capacity: 450GB, Used: 190GB, Free: ' +  (450 - 190) + 'GB' // equals Capacity: 450GB, Used: 190GB, Free: 260GB
var e = 200 + 'kB (' + 200 * 1024 +' bytes)' // equals 200kB (204800 bytes)
var a = '5' + 2 * 3 + 7 + 2 * 4 // equals 5678
var b = 2 * 2 * 2 + ' days a week' // equals 8 days a week
var c = 'a' + 'b' + 'c' + ' easy as ' + (10 * 10 + 23) // equals abc easy as 123
var d = '3' * 3 + '9' + ' bottles of milk on the wall' // equals 99 bottles of milk on the wall
var e = '24-7' + 73 * -5 // equals 24-7-365
 
var name = prompt(‘What is your name?’, ‘Anonymous’)
if (name == null || name == ‘’)
  alert(‘You clicked CANCEL (or typed NOTHING)’)
else
  alert(‘Hello ‘ + name)
 
// When < and > are used with text it compares the positions of the letters in the alphabet.
// 'a' < 'b' is true because a comes before b in the alphabet. 
var a = 'a' > 'z' // equals false
var b = 'boo' < 'coo' // equals true
var c = 'bat'< 'bart' // equals false
var d = 'rat' > 'bat' && 'bat'< 'cat' // equals true
var e = 'fog' > 'bog' && 'bin' > 'pin' // equals false
var f = 'rat' < 'hat' || 'fat' < 'mat' // equals true
