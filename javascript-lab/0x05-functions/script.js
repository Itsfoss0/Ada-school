/* Function that prints
"_putchar" to stdout and returns 0
*/
/*
function putchar(){
    console.log("_putchar using normal function")
    return (0);
}

const putChar = () => {
    console.log("_putchar using Arrow functions")
    return (0);
}

const pChar = function (){
    console.log("putchar using constant functions");
}
putchar();
putChar();
pChar();
*/
const reverseNum = (num) =>{
  let reversedString = '';
  const len = num.toString().length;
  for (let i = len -1; i >= 0; i--) {
    reversedString += num.toString()[i];
  }
  return reversedString;
};
console.log(reverseNum(133));

/* 
Check whethe a given string is a palindrome or not
*/

function isPalindrome(str){
    let reversed = "";
    const len = str.length;
    for (let i = len - 1; i >= 0; i--){
        reversed += str[i];
    }
    return str === reversed
}

console.log(isPalindrome("dad")); // true
console.log(isPalindrome("Doe")); // False