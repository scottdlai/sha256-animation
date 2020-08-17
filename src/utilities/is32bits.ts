/**
 * Returns if a string is binary string of length 32.
 * 
 * @param s string to check
 */
export default function is32Bits(s: string): boolean {
  const pattern = /^[0-1]{32}$/g;
  
  return pattern.test(s);
}
