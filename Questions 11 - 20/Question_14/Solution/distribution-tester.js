const shuffle = require('./mySolution');

// permutations is n!
// eg for n = 3, 3*2*1 = 6    1/6 = 16.667 %
let resultsDict = {
 '3,2,1': 0,
 '3,1,2': 0,
 '2,3,1': 0,
 '2,1,3': 0,
 '1,3,2': 0,
 '1,2,3': 0
};

let results;
for (let i=0; i<100000; i++){

  results = shuffle([1,2,3,]);

  resultsDict[results]++;
}

console.log(JSON.stringify(resultsDict, null, 2));
