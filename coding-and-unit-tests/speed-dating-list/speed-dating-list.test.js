// TODO: add tests
// hint: analyze the existing tests for the coding katas
// the docs for jest can be found here: https://jestjs.io/docs/expect

import { speedDatingList } from "./speed-dating-list";

describe("speedDatingList", function () {
  it("should return an array", function () {
    const datingList = speedDatingList([]);
    expect(Array.isArray(datingList)).toEqual(true);
  });

  it("should return an nested array", function () {
    const result = speedDatingList(["Peter", "Paul"]);
    expect(result).toEqual([["Peter", "Paul"]]);
  });

  it("should return every possible combination without duplicates", function () {
    const result = speedDatingList(["Peter", "Paul", "Mary"]);
    expect(result).toEqual([
      ["Peter", "Paul"],
      ["Peter", "Mary"],
      ["Paul", "Mary"],
    ]);
  });
});
