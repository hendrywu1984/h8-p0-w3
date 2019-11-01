// function getMiddle (arg){
//    return (arg.length % 2) === 0? arg[(arg.length/2)-1] + arg[(arg.length/2)] : arg[Math.ceil(arg.length/2)]
// }

function highAndLow(numbers){
    // ...

    var angka = numbers.split(" ");
    //angka = angka.sort(function(a, b){return a-b});
    
    return Math.max.apply(null, angka) + ' ' + Math.min.apply(null, angka);
  }

console.log(highAndLow("1 2 3 4 5"));  // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"
console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));