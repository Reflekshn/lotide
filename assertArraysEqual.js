const eqArrays = require("./eqArrays");

// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console
const assertArraysEqual = function(actualArray, expectedArray) {
  if (eqArrays(actualArray, expectedArray)) {
    console.log(`✅✅✅ Assertion Passed: ${actualArray} === ${expectedArray}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actualArray} !== ${expectedArray}`);
  }
};

module.exports = assertArraysEqual;