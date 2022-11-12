// TODO: add tests
// hint: analyze the existing tests for the coding katas
// the docs for jest can be found here: https://jestjs.io/docs/expect

import { positiveMultiply } from "./positive-multiply";

describe("positiveMultiply", function () {
  it("should multiply two positive numbers", function () {
    const result = positiveMultiply(2, 3);
    expect(result).toEqual(6);
  });
  it("should multiply a negative and positive number", function () {
    const result = positiveMultiply(-2, 3);
    expect(result).toEqual(6);
  });
  it("should multiply two negative numbers", function () {
    const result = positiveMultiply(-2, -3);
    expect(result).toEqual(6);
  });
});
