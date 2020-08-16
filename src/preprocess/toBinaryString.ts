import { stdout } from 'process';
import { clearTerminal } from 'ansi-escapes';
import sleep from '../utilities/sleep';
import speed from '../utilities/speed';
import title from '../utilities/title';
import { yellow } from 'chalk';

/**
 * Convert the message string to binary string.
 * 
 * @param message message to be converted
 */
export default function toBinaryString(message: string) {
  const byteArray = toByteArray(message);

  return byteArray
    .map((byte) => byte.toString(2).padStart(8, '0'))
    .join('');
}

/**
 * Animate the process of converting message string to binary string and returns
 * the result.
 * 
 * @param message message to be converted
 */
export async function toBinaryStringAnimation(message: string) {
  const binaryString = toBinaryString(message);

  stdout.write(clearTerminal);
  await sleep(speed.normal);
  stdout.write(title('message'));
  await sleep(speed.normal);
  stdout.write('message: ');
  await sleep(speed.normal);
  stdout.write(yellow(message) + '\n');
  await sleep(speed.normal);
  stdout.write('bits:    ');
  await sleep(speed.normal);
  stdout.write(binaryString);

  return binaryString;
}

/**
 * Returns the byte array of the specified message.
 * 
 * @param message message to be converted
 */
function toByteArray(message: string) {
  return message
    .split('')
    .map((character) => character.charCodeAt(0));
}