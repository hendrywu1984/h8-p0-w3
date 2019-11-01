function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    /*
    menggunakan function split
    var kata = kalimat.split(" ");
    return kata.length;
    */
    
    var hasil = [];
    var temp = [];
    var spasi = false

    for (var i =0; i<kalimat.length; i++) {
      if (kalimat[i] === ' ') {
        spasi = true;
      }
      else if (i === kalimat.length-1){
        temp.push(kalimat[i]);
        hasil.push(temp);
      }
      else if (spasi === true && kalimat[i] != ' ') {
        hasil.push(temp);
        temp = [];
        temp.push(kalimat[i]);
        spasi = false;
      }
      else {
        temp.push(kalimat[i]);
      }
    }
    return hasil.length;
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have     a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5