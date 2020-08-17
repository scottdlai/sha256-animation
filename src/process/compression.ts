import upperSigma1 from '../functions/upperSigma1';
import choice from '../functions/choice';
import K from '../constants/K';
import add from '../operations/add';
import upperSigma0 from '../functions/upperSigma0';
import majority from '../functions/majority';
import { stdout } from 'process';
import {
  clearTerminal,
  cursorSavePosition,
  cursorRestorePosition,
  eraseDown,
} from 'ansi-escapes';
import sleep from '../utilities/sleep';
import speed from '../utilities/speed';
import title from '../utilities/title';
import { yellow } from 'chalk';

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

export async function compressionAnimation(
  w: string[],
  [a, b, c, d, e, f, g, h]: string[]
) {
  await initRegisters([a, b, c, d, e, f, g, h]);

  await sleep(speed.slow);

  stdout.write(clearTerminal);
  await sleep(speed.medium);
  stdout.write(title('compression'));
  stdout.write(cursorSavePosition);
  await sleep(speed.medium);

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

    const output = compressionOutput(w, i, t1, t2, [a, b, c, d, e, f, g, h]);

    await sleep(speed.medium);
    stdout.write(cursorRestorePosition);
    stdout.write(eraseDown);
    stdout.write(output);
  }

  return [a, b, c, d, e, f, g, h];
}

async function initRegisters(registers: string[]): Promise<void> {
  stdout.write(clearTerminal);
  await sleep(speed.medium);
  stdout.write(title('initialize registers'));

  const registerNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  for (let i = 0; i < registers.length; i += 1) {
    await sleep(speed.medium);
    stdout.write(`${registerNames[i]} = h${i} = ${registers[i]}\n`);
  }
}

function compressionOutput(
  w: string[],
  i: number,
  t1: string,
  t2: string,
  registers: string[]
) {
  const current = i.toString().padStart(2, '0');

  const wi = `W${current} = ${yellow(w[i])}\n`;
  const ki = `K${current} = ${yellow(K[i])}\n\n`;

  const T1 = `T1  = ${yellow(
    t1
  )} <- h + S1 + ch(e, f, g) + W${current} + K${current}\n`;
  const T2 = `T2  = ${yellow(t2)} <- S0 + maj(a, b, c)\n\n`;

  const a = `a   = ${yellow(registers[0])} <- T1 + T2\n`;
  const b = `b   = ${registers[1]}\n`;
  const c = `c   = ${registers[2]}\n`;
  const d = `d   = ${registers[3]}\n`;
  const e = `e   = ${yellow(registers[4])} <- d + T1\n`;
  const f = `f   = ${registers[5]}\n`;
  const g = `g   = ${registers[6]}\n`;
  const h = `h   = ${registers[7]}\n`;

  return wi + ki + T1 + T2 + a + b + c + d + e + f + g + h;
}
