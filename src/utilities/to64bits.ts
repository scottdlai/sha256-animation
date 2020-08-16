/**
 * Returns the binary string of length 64 representation of the specified 
 * number.
 * 
 * @param n number to be converted
 */
export default function to64bits(n: number) {
  return (n >>> 0).toString(2).padStart(64, '0');
}
