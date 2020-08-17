import parse2Comp from '../utilities/parse2Comp';
import to32bits from '../utilities/to32bits';

/**
 * Returns the xor of the binary strings.
 *
 * @param binaryStrings 2 or more binary strings
 */
export default function xor(...binaryStrings: string[]): string {
  if (binaryStrings.length < 2) {
    throw new Error('NOT ENOUGH ARGUMENTS');
  }

  const numbers = binaryStrings.map((binaryString) => parse2Comp(binaryString));

  const result = numbers.reduce((acc, cur) => acc ^ cur, 0);

  return to32bits(result);
}
