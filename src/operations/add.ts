import parse2Comp from "../utilities/parse2Comp";
import to32bits from "../utilities/to32bits";

/**
 * Returns the sum of the specified binary strings as a 32-bit binary string.
 * 
 * @param binaryStrings 2 or more binary strings to be added
 */
export default function add(...binaryStrings: string[]): string {
  if (binaryStrings.length < 2) {
    throw new Error('NOT ENOUGH ARGUMENTS');
  }

  const numbers = binaryStrings.map((binaryString) => parse2Comp(binaryString));

  const sum = numbers.reduce((acc, cur) => (acc + cur) % 2 ** 32, 0);

  return to32bits(sum);
}