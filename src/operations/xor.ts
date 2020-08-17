import int32 from '../utilities/int32';
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

  const numbers = binaryStrings.map((binaryString) => int32(binaryString));

  const result = numbers.reduce((acc, cur) => acc ^ cur, 0);

  return to32bits(result);
}
