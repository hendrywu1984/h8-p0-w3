

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"


function getMiddle (arg){
   return (arg.length % 2) === 0? arg[(arg.length/2)-1] + arg[(arg.length/2)] : arg[Math.ceil(arg.length/2)]
}

console.log(getMiddle("test"))