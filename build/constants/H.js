"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** First 8 prime numbers. */
const primes = [2, 3, 5, 7, 11, 13, 17, 19];
/** Square root of the first 8 prime numbers. */
const squareRootPrimes = primes.map((prime) => Math.pow(prime, 1 / 2));
/**
 * first 32 bits of the fractional parts of the square roots of the first 8
 * prime numbers.
 */
const H = squareRootPrimes.map((squareRootPrime) => {
    const decimalPart = squareRootPrime - Math.floor(squareRootPrime);
    return decimalPart.toString().substring(2, 34);
});
exports.default = H;
