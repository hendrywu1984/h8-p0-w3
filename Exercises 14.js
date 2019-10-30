function mengelompokkanAngka(arr) {
    // you can only write your code here!
    var hasil = [];
    var hasil0 = [];
    var hasil1 = [];
    var hasil2 = [];

    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] % 3 === 0) {
            hasil2.push(arr[i]);
        } else if (arr[i] % 2 === 1) {
            hasil1.push(arr[i]);
        } else if (arr[i] % 2 === 0) {
            hasil0.push(arr[i]);
        }
    }
    
    hasil.push(hasil0);
    hasil.push(hasil1);
    hasil.push(hasil2);

    return hasil;
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]