import int32 from '../utilities/int32';
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
  const a = int32(x);
  const b = int32(y);
  const c = int32(z);

  return to32bits((a & b) | (~a & c));
}
