function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  var selisih = [];
  var final = true;

  for (var i = 0; i < arr.length-1; i++) {
    selisih[i] = arr[i+1] - arr[i];
  }

  for (var j=0; j < selisih.length-1; j++) {
    if (final === true) if (selisih[j] != selisih[j+1]) final = false;
  }
  return final;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false