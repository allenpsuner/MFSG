findWrongWayCow = function(field) {
  let cowHash = {
    NORTH: [],
    SOUTH: [],
    EAST: [],
    WEST: []
  };
  for (var y = 0; y < field.length; y++) {
    for (var x = 0; x < field[0].length; x++) {
      if (field[y][x] === 'c') {
        let cowDirection = findCowDirection([x, y], field);
         cowHash[cowDirection].push([x, y]);
      } else if (field[y][x] === 'o' || field[y][x] === 'w') {
        continue;
      }
    }
  }
  let badCowDir = Object.keys(cowHash).filter((dir) => {
    return cowHash[dir].length === 1;
  })[0];
  let badCowCoordinate = cowHash[badCowDir][0];
  return badCowCoordinate;
}

function findCowDirection(headPos, field) {
  let x = headPos[0];
  let y = headPos[1];
  let cardinal;
  if (x !== field[y].length-1 && field[y][x+1] === 'o') cardinal = 'WEST';
  if (x !== 0 && field[y][x-1] === 'o') cardinal = 'EAST';
  if (y !== field.length-1 && field[y+1][x] === 'o') cardinal = 'NORTH';
  if (y !== 0 && field[y-1][x] === 'o') cardinal = 'SOUTH';
  return cardinal;
}
