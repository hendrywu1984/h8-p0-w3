function groupAnimals(animals) {
    // you can only write your code here!
    /*
    apabila menggunakan sort
    animals.sort();
    */

    var hasil = [];
    var temp = [];
    var awal = '';
    var tukar = false;
    var panjang = animals.length
    
    
    //metode buble sort
    do {
        tukar = false;
        for (var i=0; i < panjang - 1; i++){
            if (animals[i] > animals[i+1]){
                var temp = animals[i];
                animals[i] = animals[i+1];
                animals[i+1] = temp;
                tukar = true;
            }
        }
        panjang--;
    } while (tukar);
    temp = [];
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