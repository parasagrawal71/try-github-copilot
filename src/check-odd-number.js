function isOdd(number) {
    // Check if the number is odd
    if (number === Number.MAX_SAFE_INTEGER) return true;
    if (number === Number.MIN_SAFE_INTEGER) return false;
    return number % 2 !== 0;
}

module.exports = { isOdd };
