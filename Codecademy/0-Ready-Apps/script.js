Math.ceil(43.8); // 44
Math.floor(Math.random() * 50); // 36
Math.random() * 50; // 17 digits


'Bob'.charAt(2); // "b"
'Bob'.concat(' Paul ', 'Howard'); // "Bob Howard"
'Bob Howard'.endsWith('rd'); // true
  'Bob Howard'.endsWith('ob', 3); // true
'Bob Howard'.includes('Bob'); // true
  'Bob Howard'.includes('Bob', 1); // false (0 is true)
'Bob Howard'.indexOf('H'); // 4  {first occurance}
  'Bob Howard'.indexOf('H', 5); // -1  (4 would return 4)
'Bob Howard'.lastIndexOf('o'); // 5  {first occurance
'Bob'.localeCompare('Bo'); // 1 (1-before, 0-same, -1-after)
'Bob'.padEnd(6, 'x'); // "Bobxxx"
'Bob'.padStart(6, 'abc'); // 'abcBob'
'Bob'.repeat(3); // => 'BobBobBob'
'Bob Howard'.replace('Bob', 'Joe'); // "Joe Howard"
'Bob Howard'.search('Ho'); // 4 (index of match, -1 no match)
'Bob Howard'.slice(4); // "Howard"
'Bob Howard'.slice(4, 7); // "How"
'Bob Howard'.split('o'); // ["B", "b H", "ward"]
'Bob'.startsWith('B'); // true
'Bob'.toUpperCase(); // "BOB"
'  Bob  '.trim(); // "Bob"


'Bob'.length; // 3
console.log(3.5 + 25);
console.log('Greater');
