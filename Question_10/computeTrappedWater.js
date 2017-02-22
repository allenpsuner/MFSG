
// Input can provided by the CLI args, each array element being each number after arg 1.
let args = process.argv;
let terrain = args.slice(2).map(n => {
  return Number(n);
});

// Set to true to see calculations
const VERBOSE_LOG = false;

// Sample sets to run without args input.
// let set1 = [0, 1, 4, 1, 3, 5, 7, 2, 3, 2, 6, 2, 0];
// let set2 = [1, 1, 3, 2, 4, 2, 3, 2, 3, 2, 3, 0];
// var terrain = set2;

let highestRidgeToLeft = [];
let highestRidgeToRight = [];

let temp_max = terrain[0];
console.log(`Input: `, terrain);
if (VERBOSE_LOG) console.log('Calculating highestRidgeToLeft...');
for (var i = 0; i < terrain.length; i++) {
  if (terrain[i] > temp_max) temp_max = terrain[i];
  highestRidgeToLeft.push(temp_max);
  if (VERBOSE_LOG) console.log('> ', i, terrain[i], highestRidgeToLeft[i]);
}

// .slice() simply allows copying of an array by value instead of by reference.
let terrainFromRight = terrain.slice().reverse();
if (VERBOSE_LOG) {
  console.log('Calculating highestRidgeToLeft...');
  console.log(terrainFromRight);
}
temp_max = terrainFromRight[0];
for (var i = 0; i < terrainFromRight.length; i++) {
  if (terrainFromRight[i] > temp_max) temp_max = terrainFromRight[i];
  highestRidgeToRight.unshift(temp_max);
  if (VERBOSE_LOG) console.log('> ', i, terrainFromRight[i], highestRidgeToRight[0]);
}

let accumulatedWaterInValleys = 0;
for (var i = 0; i < terrain.length; i++) {
  accumulatedWaterInValleys += Math.min(highestRidgeToLeft[i], highestRidgeToRight[i]) - terrain[i];
}

if (VERBOSE_LOG) {
  console.log(`terrain[]:             `, terrain);
  console.log(`highestRidgeToLeft[]:  `, highestRidgeToLeft);
  console.log(`highestRidgeToRight[]: `, highestRidgeToRight);
}

console.log(`Answer (accumulatedWaterInValleys): ${accumulatedWaterInValleys}`);
