const sum = require("../index");

describe("sum", () => {
  test("should add two numbers correctly", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("should handle negative numbers", () => {
    expect(sum(-5, 3)).toBe(-4);
  });
});
