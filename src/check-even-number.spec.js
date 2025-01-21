const { isEven } = require("./check-even-number");

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
