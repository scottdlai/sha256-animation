/**
 * Returns if a string is binary string of length 32.
 * 
 * @param s string to check
 */
export default function is32Bits(s: string): boolean {
  return s.match(/^[0-1]{32}$/g) !== null;
}
