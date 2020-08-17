import rightRotate from '../operations/rightRoate';
import xor from '../operations/xor';

/**
 * Returns the Sigma1 of the specified binary string.
 *
 * @param s binary string
 */
export default function upperSigma1(s: string): string {
  const rightRotate6 = rightRotate(s, 6);
  const rightRotate13 = rightRotate(s, 11);
  const rightRoate25 = rightRotate(s, 25);

  return xor(rightRotate6, rightRotate13, rightRoate25);
}
