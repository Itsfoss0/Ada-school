// for loops
// for (let num = 0; num <= 12; num++){
//     console.log(num * 8);
// }

// while loops

alert("Hi mom!")
let exit = null

while (exit != null){
    const num1 = parseInt(prompt("First Number:"));
    const num2 = parseInt(prompt("Second Number:"));
    const operation = prompt('What Operation would you like to do?').trim();

    if (operation == '+' || operation == 'add') {
    result = num1 + num2;
    } else if (operation == '-' || operation == 'sub') {
    result = num1 - num2;
    } else if (operation == '*' || operation == 'mul') {
    result = num1 * num2;
    }else if (operation == "exit" || operation == "Exit"){
        exit = "exit";
    }else{
    result = num1 / num2;
    }
    alert(`${num1} ${operation} ${num2} = ${result}`);
}
