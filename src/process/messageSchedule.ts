import { stdout } from 'process';
import sigma0 from '../functions/sigma0';
import sigma1 from '../functions/sigma1';
import add from '../operations/add';
import { yellow } from 'chalk';
import {
  clearTerminal,
  cursorSavePosition,
  cursorRestorePosition,
  eraseDown,
} from 'ansi-escapes';
import sleep from '../utilities/sleep';
import speed from '../utilities/speed';
import title from '../utilities/title';

/**
 * Returns the message schedule array on the specified chunk of message.
 *
 * @param chunk 512-bit block of message
 */
export default function messageSchedule(chunk: string): string[] {
  if (!/^[0-1]{512}$/g.test(chunk)) {
    throw new Error('NOT A 512 BIT CHUNK');
  }

  const w = chunk.match(/[0-1]{32}/g) ?? [];

  for (let i = 16; i < 64; i += 1) {
    const s0 = sigma0(w[i - 15]);
    const s1 = sigma1(w[i - 2]);

    w[i] = add(w[i - 16], s0, w[i - 7], s1);
  }

  return w;
}

/**
 * Animates the process of making the message schedule array on the specified
 * chunk of message and returns the result.
 *
 * @param chunk 512-bit block of message
 */
export async function messageScheduleAnimation(chunk: string) {
  if (!/^[0-1]{512}$/g.test(chunk)) {
    throw new Error('NOT A 512 BIT CHUNK ' + chunk);
  }

  const w = chunk.match(/[0-1]{32}/g) ?? [];

  stdout.write(clearTerminal);

  await sleep(speed.medium);

  stdout.write(title('message schedule'));

  stdout.write(cursorSavePosition);

  for (let i = 16; i < 64; i += 1) {
    await sleep(speed.medium);
    const s0 = sigma0(w[i - 15]);
    const s1 = sigma1(w[i - 2]);

    w[i] = add(w[i - 16], s0, w[i - 7], s1);

    const output = messageScheduleOutput(w, i, s0, s1);
    stdout.write(cursorRestorePosition);
    stdout.write(eraseDown);
    stdout.write(output);
  }

  return w;
}

function messageScheduleOutput(w: string[], i: number, s0: string, s1: string) {
  const output: string[] = [];

  for (let j = 16; j >= 0; j -= 1) {
    const current = (i - j).toString().padStart(2, '0');
    const word = w[i - j];

    if (j === 16) {
      output.push(`W${current}  ${word} ->      ${yellow(word)}\n`);
    } else if (j === 15) {
      output.push(`W${current}  ${word} -> s0 = ${yellow(s0)}\n`);
    } else if (j === 7) {
      output.push(`W${current}  ${word} ->      ${yellow(word)}\n`);
    } else if (j === 2) {
      output.push(`W${current}  ${word} -> s1 = ${yellow(s1)}\n`);
    } else if (j === 0) {
      output.push(
        `W${current}  ${yellow(word)} ->      W${i - 16} + s0 + W${
          i - 7
        } + s1\n`
      );
    } else {
      output.push(`W${current}  ${word}\n`);
    }
  }

  return output.join('');
}
