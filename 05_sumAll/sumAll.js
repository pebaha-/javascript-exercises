const sumAll = function (min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return 'ERROR';
    }
    if (min < 0 || max < 0) {
        return 'ERROR';
    }
    if (Math.floor(min) != min || Math.floor(max) != max) {
        return 'ERROR';
    }
    if (min > max) {
        let real_max = min;
        min = max;
        max = real_max;
    }
    let sum = 0;
    for (i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
