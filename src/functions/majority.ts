import int32 from '../utilities/int32';
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
  const a = int32(x);
  const b = int32(y);
  const c = int32(z);

  return to32bits((a & b) | (a & c) | (b & c));
}
