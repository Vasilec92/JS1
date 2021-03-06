const sum = (a, b) => {
  return a + b;
};

const subtraction = (a, b) => {
  return a - b;
};

const multiplication = (a, b) => {
  return a * b;
};

const division = (a, b) => {
  return a / b;
};

const mathOperation = (arg1, arg2, operation) => {
  switch (operation) {
    case "+":
      return sum(arg1, arg2);
    case "-":
      return subtraction(arg1, arg2);
    case "*":
      return multiplication(arg1, arg2);
    case "/":
      return division(arg1, arg2);
  }
};

console.log(mathOperation(5, 5, "+"));
