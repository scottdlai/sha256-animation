import rightRotate from '../operations/rightRoate';
import xor from '../operations/xor';

/**
 * Returns the Sigma0 of the specified binary string.
 *
 * @param s binary string
 */
export default function upperSigma0(s: string): string {
  const rightRotate2 = rightRotate(s, 2);
  const rightRotate13 = rightRotate(s, 13);
  const rightRoate22 = rightRotate(s, 22);

  return xor(rightRotate2, rightRotate13, rightRoate22);
}
