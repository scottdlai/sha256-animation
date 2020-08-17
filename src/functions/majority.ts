import parse2Comp from '../utilities/parse2Comp';
import to32bits from '../utilities/to32bits';

/**
 * Returns a new binary string based on number of bits of x, y, and z. i.e. if
 * the majority of bit is 1 then choose 1; else 0.
 *
 * @param x binary string
 * @param y binary string
 * @param z binary string
 */
export default function majority(x: string, y: string, z: string): string {
  const a = parse2Comp(x);
  const b = parse2Comp(y);
  const c = parse2Comp(z);

  return to32bits((a & b) | (a & c) | (b & c));
}
