import parse2Comp from '../utilities/parse2Comp';
import to32bits from '../utilities/to32bits';

/**
 * Returns a new binary string based on the choice of the x. i.e. if the bit of
 * x is 1 then choose the bit y; else choose the bit of z.
 *
 * @param x binary string
 * @param y binary string
 * @param z binary string
 */
export default function choice(x: string, y: string, z: string): string {
  const a = parse2Comp(x);
  const b = parse2Comp(y);
  const c = parse2Comp(z);

  return to32bits((a & b) | (~a & c));
}
