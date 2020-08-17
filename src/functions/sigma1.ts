import rightRotate from '../operations/rightRoate';
import rightShift from '../operations/rightShift';
import xor from '../operations/xor';

/**
 * Returns the sigma1 of the specified binary string.
 *
 * @param s binary string
 */
export default function sigma1(s: string): string {
  const rightRotate17 = rightRotate(s, 17);
  const rightRoate19 = rightRotate(s, 19);
  const rightShift10 = rightShift(s, 10);

  return xor(rightRotate17, rightRoate19, rightShift10);
}
