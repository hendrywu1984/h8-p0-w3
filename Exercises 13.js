function targetTerdekat(arr) {
  // you can only write your code here!
  var totalO=0;
  var totalX=0;
  var hasil = [];
  var k= 0;
  
  for(var i=0; i<arr.length; i++) {
    if (arr[i]=== 'o') {
        for (var j=i; j <arr.length;j++) {
            if (arr[j]==='x') {
              hasil.push(j-i);
              k++;
            }
        }
    } if (arr[i] === 'x') {
      for (var j=i; j <arr.length;j++) {
        if (arr[j]==='o') {
          hasil.push(j-i);
          k++;
        }
      }
    }
  }
  hasil.sort(function(a, b){return a-b});

  if (hasil[0] === undefined) hasil.push(0);
  return hasil[0];
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2