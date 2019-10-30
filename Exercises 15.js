function groupAnimals(animals) {
  // you can only write your code here!
  animals.sort();
  
  var hasil = [];
  var temp = [];
  var awal;

  awal = animals[0][0];

  for (var i=0; i<animals.length; i++) {
      if (awal === animals[i][0]) {
          temp.push(animals[i]);
      } else {
          awal = animals[i][0];
          hasil.push(temp);
          temp = [];
          temp.push(animals[i]);
      }
  }
  hasil.push(temp);
  return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]