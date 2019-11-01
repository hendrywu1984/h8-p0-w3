function targetTerdekat(arr) {
  // you can only write your code here!
  var totalO=0;
  var totalX=0;
  var hasil = [];
  var k= 0;

  for(var i=0; i<arr.length; i++) {
    for(var j = 0; j < arr[i].length; j++) {
      if (totalO>0) totalO++;
      if (totalX>0) totalX++;

      if (arr[i][j] === 'o') {
        if (totalO === 0) totalO++;
        else if (totalO > 0) totalO=0;

        if (totalX > 0) {
          hasil.push(totalX-=1)
          totalX = 0;
        }
      } else if (arr[i][j] === 'x') {
        if (totalX === 0) totalX++;
        else if (totalX > 0) totalX=0;

        if (totalO > 0) {
          hasil.push(totalO-=1)
          totalO = 0;
        }
      }
    }
  }

  

  hasil.sort(function(a, b){return a-b});

  if (hasil[0] === undefined) hasil.push(0);
  return hasil[0];
}

// TEST CASES


console.log(targetTerdekat([[' ', 'x'], ['o'],[ ' ', ' '],['x', ' ', ' ', 'x']])); // 1
console.log(targetTerdekat([['o'], [' ', ' ', ' '], ['x', 'x', 'x']])); // 4
console.log(targetTerdekat([['x', ' '],[ ' ', ' ', 'x'],[ 'x', 'o', ' ']])); // 1
console.log(targetTerdekat([[' '], [' ', 'o'], [' ']])); // 0
console.log(targetTerdekat([[' ', 'o'], [' ', 'x'], ['x', ' '],[ ' ', 'x']])); // 2