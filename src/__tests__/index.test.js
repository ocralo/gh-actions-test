const sum = require("../index");

describe("sum", () => {
  test("should add two numbers correctly", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("should handle negative numbers", () => {
    expect(sum(-5, 3)).toBe(-2);
  });

  test("should handle zero", () => {
    expect(sum(0, 0)).toBe(0);
  });

  test("should handle large numbers", () => {
    expect(sum(1000000, 2000000)).toBe(3000000);
  });

  test("should handle decimal numbers", () => {
    expect(sum(1.5, 2.5)).toBe(4);
  });

  test("should handle string inputs", () => {
    expect(sum("1", "2")).toBe('12');
  });
});
