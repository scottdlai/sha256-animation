import { stdout } from 'process';
import { clearTerminal } from 'ansi-escapes';
import sleep from '../utilities/sleep';
import speed from '../utilities/speed';
import title from '../utilities/title';
import { green } from 'chalk';

/**
 * Breaks the specified binary string into blocks of 512-bit string.
 * 
 * @param binaryString binary string
 */
export default function toChunks(binaryString: string): string[] {
  if (!(/^[0-1]{512,}$/g).test(binaryString)) {
    throw new Error('NOT A BINARY STRING + ' + binaryString);
  }

  const chunks = binaryString.match(/[0-1]{512}/g) ?? [];

  return chunks;
}

/**
 * Animates the process of breaking the binary string into blocks of 512-bit
 * string and returns the result.
 *  
 * @param binaryString binary string
 */
export async function toChunksAnimation(binaryString: string) {
  const chunks = toChunks(binaryString);

  stdout.write(clearTerminal);
  await sleep(speed.medium);
  stdout.write(title('chunks (512 bits)'));
  await sleep(speed.slow);

  for (let i = 0; i < chunks.length; i += 1) {
    await sleep(speed.medium);
    stdout.write(green`[${i}]: `);
    await sleep(speed.medium);
    stdout.write(chunks[i] + '\n');
  }

  await sleep(speed.medium);

  return chunks;
}
