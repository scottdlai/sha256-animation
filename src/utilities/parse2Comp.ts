import is32Bits from './is32bits';

export default function parse2Comp(s: string): number {
  if (!is32Bits(s)) {
    throw new Error('NOT A BINARY STRING OF LENGTH 32 ' + s);
  }

  return ~~parseInt(s, 2);
}
