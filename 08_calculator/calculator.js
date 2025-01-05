const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, currentNumber) => total + currentNumber,0)
};

const multiply = function(arr) {
  return arr.reduce((a, b) => a * b,1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let factorialNumber = 1;
  if (a === 0){
    return 1;
  }

  for (let x = a; x >= 1; x--){
   factorialNumber = factorialNumber * x;
  }
	return factorialNumber;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
