function calculator(num1, operator, num2) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return "Error: Division by zero is not allowed.";
        }
        return num1 / num2;
      default:
        return "Error: Invalid operator";
    }
  }
  
  // Test the calculator
  const num1 = 10;
  const operator = '+';
  const num2 = 5;
  const result = calculator(num1, operator, num2);
  console.log(result); 
  