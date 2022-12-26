const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, element) => {
    return total += element;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, element) => {
    return total *= element;
  }, 1);
};

const power = function(a, b) {
  let result = 1;
  for(let i = 0; i < b; ++i)
    result *= a;
  return result;
};

const factorial = function(a) { 
  if(a <= 1)
    return 1;
  if(a < 0)
    return 0;
  let result = 1;
  for(let i = 1; i <= a; ++i)
    result *= i;
  return result;
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
