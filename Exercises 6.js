function angkaPalindrome(num) {
    // you can only write your code here!
    var str1 = '';
    var str2;

    do {
        str2 = '';
        num++;
        str1 = num.toString();

        for(var i = 0; i < str1.length; i++) {
            str2+=str1[str1.length-(i+1)];
        }
    } while (str1 != str2);
    return parseInt(str2);
}
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001