/* Function that prints 
"_putchar" to stdout and returns 0
*/
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