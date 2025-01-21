function isEven(number) {
    // Check if the number is even
    if (number === Number.MAX_SAFE_INTEGER) return false;
    if (number === Number.MIN_SAFE_INTEGER) return true;
    return number % 2 === 0;
}

function isOdd(number) {
    // Check if the number is odd
    if (number === Number.MAX_SAFE_INTEGER) return true;
    if (number === Number.MIN_SAFE_INTEGER) return false;
    return number % 2 !== 0;
}

// Example usage
const num = parseInt(10);
if (isEven(num)) {
    console.log(`${num} is an even number.`);
} else {
    console.log(`${num} is not an even number.`);
}

module.exports = { isEven, isOdd };
