/** First 64 prime number. */
const primes = [
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
  97,
  101,
  103,
  107,
  109,
  113,
  127,
  131,
  137,
  139,
  149,
  151,
  157,
  163,
  167,
  173,
  179,
  181,
  191,
  193,
  197,
  199,
  211,
  223,
  227,
  229,
  233,
  239,
  241,
  251,
  257,
  263,
  269,
  271,
  277,
  281,
  283,
  293,
  307,
  311,
];

/** Cube root of the first 64 prime numbers */
const cubeRootPrimes = primes.map((prime) => Math.pow(prime, 1 / 3));

/** 
 * The first 32 bits of the fractional parts of the cube roots of the first 64
 * prime numbers.
 */
const K = cubeRootPrimes.map((cubeRoot) => {
  const decimalPart = cubeRoot - Math.floor(cubeRoot);

  return decimalPart.toString(2).substring(2, 34);
});

export default K;
