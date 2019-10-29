function pasanganTerbesar(num) {
  // you can only write your code here!
  var angka = [];
  var angkaFinal = [];
  var strAngka = num.toString();

  for (var i = 0; i < strAngka.length; i++ ) {
    angka[i] = strAngka.slice(i,i+1);
  }
  
  for (var i = 0; i < angka.length - 1; i++) {
    angkaFinal[i] = parseInt(strAngka[i] + strAngka[i+1])
  }
  
  angkaFinal.sort(function(a, b){return b-a});
  return angkaFinal[0];
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99