import parse2Comp from '../utilities/parse2Comp';
import to32bits from '../utilities/to32bits';

export default function rightRotate(s: string, n: number): string {
  if (n > 32) {
    throw new Error('INVALID AMOUNT OF ROTATION');
  }

  const number = parse2Comp(s);

  return to32bits((number >>> n) | (number << (32 - n)));
}
