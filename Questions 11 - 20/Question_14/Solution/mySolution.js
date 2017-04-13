/*
Christian Townsdin, 4/12/2017
An implementation of the Fisher-Yates aka Knuth Shuffle
O(n) in-place shuffle
Note: Math.random() is really only pseudorandom.
 */

const shuffle = (arr) => {

  // don't mutate the array, make a shallow copy of the array with slice instead
  let arrr = arr.slice();

  let current = arr.length - 1;
  let randomIndex;
  let tmp;

  while(current >= 1){  // bc we don't swap index 0 with itself

    // random selection of remaining, including self!
    randomIndex = Math.floor(Math.random() * ( current + 1));

    // swap current with random selection
    tmp = arrr[current];
    arrr[current] = arrr[randomIndex];
    arrr[randomIndex] = tmp;

    current--;
  }

  return arrr;
};

module.exports = shuffle;