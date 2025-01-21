const { isOdd } = require("./check-odd-number");

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
