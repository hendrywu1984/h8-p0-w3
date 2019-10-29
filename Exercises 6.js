function angkaPalindrome(num) {
    // you can only write your code here!
    var strNum = '';
    var isOk = false;

    while (isOk === false){
        num += 1;
        strNum = num.toString();

        if (hasilPalindrome(strNum) === true) isOk = true;
        else isOk = false;
    }
    return strNum;
  }

  function hasilPalindrome(strNum) {
    var ok = 0;
    var setengah = Math.floor(strNum.length / 2);
    
    if (setengah > 0) {
        for (var i = 0; i < Math.floor(strNum.length / 2); i++){
            if (strNum[i] === strNum[strNum.length-(i+1)]) ok++;
        }
        if (ok === Math.floor(strNum.length / 2)) return true;
        else return false;
    } else return true;

  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001