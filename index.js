// Your code here

// my own map-like methods
// mapToNegativize returns an array with all values made negative
// 1) transforms correctly
function mapToNegativize(array) {
    return array.map(x => - x);
};
mapToNegativize([1, 5, 33, 67]);

// mapToNoChange returns an array with the original values
// 1) transforms correctly
function mapToNoChange(array) {
    return array.map(x => x);
};
mapToNoChange([4, 8, 11]);

// mapToDouble returns an array with the original values multiplied by 2
// 1) transforms correctly
function mapToDouble(array) {
    return array.map(x => x * 2);
};
mapToDouble([3, 9, 22]);

// mapToSquare returns an array with the original values squared
// 1) transforms correctly
function mapToSquare(array) {
    return array.map(x => x * x);
};
mapToSquare([4, 1, 3]);

// my own reduce-like methods
// reduceToTotal returns a running total when not given a starting point
// 1) reduces correctly
// reduceToTotal returns a running total when given a starting point
// 2) reduces correctly
function reduceToTotal(array, initialValue = 0) {
    let total = array.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    }, initialValue);
    return total;
};
reduceToTotal([1, 3, 6]); // 10
reduceToTotal([1, 3, 6], 10); // 20

// COULDN'T RESOLVE IT BY MYSELF
// reduceToAllTrue returns true when all values are truthy
// 1) reduces correctly
// reduceToAllTrue returns false when any value is falsy
// 2) reduces correctly
function reduceToAllTrue(array) {
    // return array.reduce((value) => {
    //     return (typeof (value) === 'number' ? true : false)
    // });
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) return false
    };
    return true
};

// COULDN'T RESOLVE IT BY MYSELF
// reduceToAnyTrue returns true when a true value is present
// 1) reduces correctly
// reduceToAnyTrue returns false when no true value is present
// 2) reduces correctly
function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]) return true
    };
    return false
};