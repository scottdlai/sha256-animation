import parse2Comp from "../utilities/parse2Comp";
import to32bits from "../utilities/to32bits";

/**
 * Returns the right shift by the specified amount of the specified binary 
 * string as a binary string of length 32.
 * 
 * @param s binary string to be rotated
 * @param n amount of rotation
 */
export default function rightShift(s: string, n: number): string {
  if (n > 32) {
    throw new Error('INVALID AMOUNT OF SHIFT');
  }

  if (n == 32) {
    return to32bits(0);
  }

  const number = parse2Comp(s);

  return to32bits(number >>> n);
}
