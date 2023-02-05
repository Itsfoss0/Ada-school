while (true) {
  var num1 = parseFloat(prompt("Enter first number:"));
  var num2 = parseFloat(prompt("Enter second number:"));
  var operation = prompt("Enter operation (+, -, *, /):");

  if (operation === "exit") {
    break;
  }

  if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid input. Both values must be numbers.");
    continue;
  }

  var result;
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      alert("Invalid operation.");
      continue;
  }

  alert("Result: " + result);
}
