import rightRotate from "../operations/rightRoate";
import rightShift from "../operations/rightShift";
import xor from "../operations/xor";

/**
 * Returns the sigma0 of the specified binary string.
 * 
 * @param s binary string
 */
export default function sigma0(s: string): string {
  const rightRoate7 = rightRotate(s, 7);
  const rightRoate18 = rightRotate(s, 18);
  const rightShift3 = rightShift(s, 3);

  return xor(rightRoate7, rightRoate18, rightShift3);
}