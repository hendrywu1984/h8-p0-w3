function palindrome(kata) {
    // you can only write your code here!
    var hasil=[kata.length];
    var result = false;

    for (var i=0; i < kata.length;i++){
        hasil[i] = kata[kata.length-i-1]

        if (hasil.join("") === kata) result = true;
    }
    return result;
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false