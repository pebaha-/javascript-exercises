const add = function (a, b) {
  return a + b;

};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function (arr) {
  return arr.reduce((product, current) => product * current, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let fact = 1;
  for (i = 1; i <= a; i++) {
    fact *= i;
  }
  return fact;
};

// Alternative factorial solution
const factorialWithArrayMethods = function (a) {
  return Array.from({ length: a }, (_, i) => i + 1).reduce((fact, current) => fact * current, 1);
  // Or alternatively
  // return [...Array(a).keys()].map(x => x + 1).reduce((fact, current) => fact * current, 1);
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
  factorialWithArrayMethods
};
