import { stdout } from 'process';
import { clearTerminal } from 'ansi-escapes';
import to64bits from "../utilities/to64bits";
import sleep from '../utilities/sleep';
import speed from '../utilities/speed';
import title from '../utilities/title';
import { yellow, green } from 'chalk';

/**
 * Returns the padded message.
 * 
 * @param message binary string to be padded
 */
export default function padding(message: string) {
  if (!(/^[0-1]{0,}$/g).test(message)) {
    throw new Error('NOT A BINARY STRING ' + message);
  }

  let K = (512 - message.length - 1 - 64) % 512;

  if (K < 0) {
    K = K + 512;
  }

  const L = to64bits(message.length);

  return `${message}1${'0'.repeat(K)}${L}`;
}

/**
 * Animates the process of padding and returns the result.
 * 
 * @param message binary string to be padded
 */
export async function paddingAnimation(message: string) {
  if (!message.match(/^[0-1]{0,}$/g)) {
    throw new Error('NOT A BINARY STRING ' + message);
  }

  const padded = padding(message);

  stdout.write(clearTerminal);
  await sleep(speed.medium);
  stdout.write(title(`padding ${message.length} -> ${padded.length}`));
  await sleep(speed.medium);
  stdout.write(message);
  await sleep(speed.slow);
  stdout.write(yellow`1`);
  await sleep(speed.slow);

  let K = (512 - message.length - 1 - 64) % 512;

  if (K < 0) {
    K = K + 512;
  }

  for (let i = 0; i < K; i += 1) {
    await sleep(speed.fast);
    stdout.write('0');
  }

  await sleep(speed.slow);

  const L = to64bits(message.length);

  stdout.write(green `${L}`);

  return padded;
}
