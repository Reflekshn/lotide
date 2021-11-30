const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

// Test conditions
// Passes
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);

// Fails
assertArraysEqual(middle([1]), [3, 4, 5]);
assertArraysEqual(middle([1, 2]), [2, 3]);
assertArraysEqual(middle([1, 2, 3]), [1]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [5]);
assertArraysEqual(middle([1, 2, 3, 4]), [1, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [2, 9]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [8, 4]);