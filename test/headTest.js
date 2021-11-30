const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  it("returns \"Hello\" for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it("returns [10] for [10, 11]", () => {
    assert.strictEqual(head([10, 11]), 10);
  });
  it("returns [10] for [10]", () => {
    assert.strictEqual(head([10]), 10);
  });
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
});