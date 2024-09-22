const findTheOldest = function (arr) {
  return arr
    .map((person) => {
      return { 'yearOfDeath': new Date().getFullYear(), ...person }
    })
    .sort((a, b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth))[0];
};

// Do not edit below this line
module.exports = findTheOldest;
