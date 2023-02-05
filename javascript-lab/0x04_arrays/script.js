/* Compare numbers and add the 
Largest value to an array
*/

let numbers = []
number1 = parseInt(prompt("Enter Number 1"));
number2 = parseInt(prompt("Enter second 2"));

if (number1 > number2){
    numbers.push(number1)
}else{
    numbers.push(number2);
}

//Output the greatest number
alert(`${numbers[0]} is the Largest`);