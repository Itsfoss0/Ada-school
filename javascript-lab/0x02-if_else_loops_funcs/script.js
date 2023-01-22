// fullblown calculator :)
const num1 = parseInt(prompt('First Number:'));
const num2 = parseInt(prompt('Second Number:'));
let result;
const operation = prompt('What Operation would you like to do?').trim();

if (operation == '+' || operation == 'add') {
  result = num1 + num2;
} else if (operation == '-' || operation == 'sub') {
  result = num1 - num2;
} else if (operation == '*' || operation == 'mul') {
  result = num1 * num2;
} else {
  result = num1 / num2;
}
alert(`${num1} ${operation} ${num2} = ${result}`);
