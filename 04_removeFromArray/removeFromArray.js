const removeFromArray = function (valuesArray, ...valuesToRemove) {
    for (i = valuesArray.length - 1; i >= 0; i--) {
        for (j = 0; j < valuesToRemove.length; j++) {
            if (valuesArray[i] === valuesToRemove[j]) {
                valuesArray.splice(i, 1);
            }
        }
    }
    return valuesArray;
};

// Do not edit below this line
module.exports = removeFromArray;
