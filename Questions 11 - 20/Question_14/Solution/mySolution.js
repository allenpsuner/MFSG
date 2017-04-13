/*
Christian Townsdin, 4/12/2017
An implementation of the Fisher-Yates aka Knuth Shuffle
O(n) in-place shuffle
Note: Math.random() is really only pseudorandom.
 */

const shuffle = (arr) => {


  let current = arr.length - 1;
  let randomIndex;
  let tmp;

  while(current >= 1){  // bc we don't swap index 0 with itself

    // random selection of remaining, including self!
    randomIndex = Math.floor(Math.random() * ( current + 1));

    // swap current with random selection
    tmp = arr[current];
    arr[current] = arr[randomIndex];
    arr[randomIndex] = tmp;

    current--;
  }

  return arr;
};

module.exports = shuffle;