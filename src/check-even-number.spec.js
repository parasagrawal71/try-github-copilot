const { isEven, isOdd } = require("./check-even-number");

describe("isEven", () => {
    test("should return true for even numbers", () => {
        expect(isEven(2)).toBe(true);
        expect(isEven(0)).toBe(true);
        expect(isEven(-4)).toBe(true);
    });

    test("should return false for odd numbers", () => {
        expect(isEven(1)).toBe(false);
        expect(isEven(-3)).toBe(false);
        expect(isEven(7)).toBe(false);
    });

    test("should handle edge cases", () => {
        expect(isEven(Number.MAX_SAFE_INTEGER)).toBe(false);
        expect(isEven(Number.MIN_SAFE_INTEGER)).toBe(true);
    });
});

describe("isOdd", () => {
    test("should return true for odd numbers", () => {
        expect(isOdd(1)).toBe(true);
        expect(isOdd(-3)).toBe(true);
        expect(isOdd(7)).toBe(true);
    });

    test("should return false for even numbers", () => {
        expect(isOdd(2)).toBe(false);
        expect(isOdd(0)).toBe(false);
        expect(isOdd(-4)).toBe(false);
    });

    test("should handle edge cases", () => {
        expect(isOdd(Number.MAX_SAFE_INTEGER)).toBe(true);
        expect(isOdd(Number.MIN_SAFE_INTEGER)).toBe(false);
    });
});
