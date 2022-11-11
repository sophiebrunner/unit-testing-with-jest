import { analyzePassword } from "./analyze-password";

describe("analyzePassword", function () {
  it("should return detailed info about password", function () {
    const result = analyzePassword("a");
    expect(result.length).toEqual(1);
    expect(result.hasNumbers).toEqual(false);
    expect(result.hasCharacters).toEqual(true);
  });

  it("should return detailed info about password", function () {
    const result = analyzePassword("a1");
    expect(result.length).toEqual(2);
    expect(result.hasNumbers).toEqual(true);
    expect(result.hasCharacters).toEqual(true);
  });

  it("should return detailed info about password", function () {
    const result = analyzePassword("555");
    expect(result.length).toEqual(3);
    expect(result.hasNumbers).toEqual(true);
    expect(result.hasCharacters).toEqual(false);
  });
});
