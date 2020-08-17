import upperSigma1 from '../functions/upperSigma1';
import choice from '../functions/choice';
import K from '../constants/K';
import add from '../operations/add';
import upperSigma0 from '../functions/upperSigma0';
import majority from '../functions/majority';

/**
 * Returns the value of the 8 registers after 1 round of compression.
 *
 * @param w message schedule word array
 * @param hs array of initial value of the 8 registers
 */
export default function compression(
  w: string[],
  [a, b, c, d, e, f, g, h]: string[]
) {
  for (let i = 0; i < 64; i += 1) {
    const S1 = upperSigma1(e);
    const ch = choice(e, f, g);
    const t1 = add(h, S1, ch, K[i], w[i]);
    const S0 = upperSigma0(a);
    const maj = majority(a, b, c);
    const t2 = add(S0, maj);

    h = g;
    g = f;
    f = e;
    e = add(d, t1);
    d = c;
    c = b;
    b = a;
    a = add(t1, t2);
  }

  return [a, b, c, d, e, f, g, h];
}
