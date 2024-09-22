const fibonacci = function (x) {
  if (x < 0) return 'OOPS';
  if (x == 0) return 0;
  return x <= 2 ? 1 : fibonacci(x - 1) + fibonacci(x - 2);
};

// Do not edit below this line
module.exports = fibonacci;
