import { stdout } from 'process';
import { clearTerminal } from 'ansi-escapes';
import sleep from '../utilities/sleep';
import speed from '../utilities/speed';

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

  return decimalPart.toString(2).substring(2, 34);
});

export async function hAnimation() {
  stdout.write(clearTerminal);
  await sleep(speed.medium);
  stdout.write('initialize hash');
  await sleep(speed.medium);

  stdout.write(`h0 = √02 = ${H[0]}\n`);
  await sleep(speed.medium);
  stdout.write(`h1 = √03 = ${H[1]}\n`);
  await sleep(speed.medium);
  stdout.write(`h2 = √05 = ${H[2]}\n`);
  await sleep(speed.medium);
  stdout.write(`h3 = √07 = ${H[3]}\n`);
  await sleep(speed.medium);
  stdout.write(`h4 = √11 = ${H[4]}\n`);
  await sleep(speed.medium);
  stdout.write(`h5 = √13 = ${H[5]}\n`);
  await sleep(speed.medium);
  stdout.write(`h6 = √17 = ${H[6]}\n`);
  await sleep(speed.medium);
  stdout.write(`h7 = √19 = ${H[7]}`);
  
  return H;
}

export default H;
