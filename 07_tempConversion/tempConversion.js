const convertToCelsius = function(input) {

  let celsius = (input - 32)*(5/9);
  let celsius_output = Math.round(10*celsius)/10;

  return celsius_output;

};

const convertToFahrenheit = function(input) {

  let fareinheit = (input*(9/5))+32;
  let fareinheit_output = Math.round(10*fareinheit)/10;

  return fareinheit_output;

};

console.log(convertToFahrenheit(1.7));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
