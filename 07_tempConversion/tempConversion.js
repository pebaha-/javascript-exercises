const roundToOneDecimal = function (number) {
  return Math.round(number * 10) / 10;
}

const convertToCelsius = function (fahrenheit) {
  let celcius = (fahrenheit - 32) * 5 / 9
  return roundToOneDecimal(celcius);
};

const convertToFahrenheit = function (celcius) {
  let fahrenheit = (celcius * 9 / 5) + 32;
  return roundToOneDecimal(fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
