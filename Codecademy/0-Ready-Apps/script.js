Math.ceil(43.8); // => 44
Math.floor(Math.random() * 50); // => 36
Math.random() * 50; // => 17 digits


'Bob Howard'.split('o'); // => ["B", "b H", "ward"]
'Bob Howard'.slice(4, 7); // => "How"
  'Bob Howard'.slice(4); // => "Howard"
'Bob Howard'.search('Ho'); // => 4 (index of match, -1 no match)
'Bob Howard'.replace('Bob', 'Joe'); // => "Joe Howard"
'Bob'.repeat(3); // => 'BobBobBob'
'Bob'.padStart(6, 'abc'); // => 'abcBob'
'Bob'.padEnd(6, 'x'); // => "Bobxxx"
'Bob'.localeCompare('Bo'); // => 1 (1-before, 0-same, -1-after)
'Bob Howard'.lastIndexOf('o'); // => 5  {first occurance
'Bob Howard'.indexOf('H'); // => 4  {first occurance}
'Bob Howard'.endsWith('rd'); // => true
'Bob Howard'.includes('Bob'); // => true
'Bob'.concat(' Howard'); // => "Bob Howard"
'Bob'.charAt(2); // => "b"
'  Bob  '.trim(); // => "Bob"
'Bob'.startsWith('B'); // => true
'Bob'.toUpperCase(); // => "BOB"
'Bob'.length; // => 3
console.log(3.5 + 25);
console.log('Greater');
