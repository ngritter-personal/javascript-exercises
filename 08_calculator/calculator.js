const add = function(a,b) {
	return a+b;  
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  const sum = array.reduce(add, 0);
  return sum;
};


const multiply = function(array) {
  let mult_two = (a,b) => a*b;

  const mult = array.reduce(mult_two, 1);
  return mult;
};

const power = function(a, b) {
  return a ** b;	
};

const factorial = function(input) {
  if (input === 0) return 1;
  let fact = 1;
  for (let i = input; i >0; i--) {
    fact *= i;
  };
  return fact;

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
