let deck = [
  'dj', 'dq', 'dk', 'da',
  'cj', 'cq', 'ck', 'ca',
  'sj', 'sq', 'sk', 'sa',
  'hj', 'hq', 'hk', 'ha'
];    // you get the idea, and run shuffle just like before


const shuffle = require('./mySolution');


console.log(deck.toString());
console.log('*** getting a shuffled deck copy ***');
console.log((shuffle(deck)).toString());
