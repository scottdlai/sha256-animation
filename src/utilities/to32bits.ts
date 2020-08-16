/**
 * Returns the 32-bit string representation of the specified number.
 * 
 * @param n number to be converted
 */
export default function to32bits(n: number): string {
  return n.toString(2).padStart(32, '0');
}
