import { stdout } from "process";
import { clearTerminal } from 'ansi-escapes';
import sleep from "../utilities/sleep";
import speed from "../utilities/speed";
import title from "../utilities/title";
import { green } from "chalk";

export default function toChunks(binaryString: string): string[] {
  if (!binaryString.match(/^[0-1]{512,}$/g)) {
    throw new Error('NOT A BINARY STRING + ' + binaryString);
  }

  const chunks = binaryString.match(/[0-1]{512}/g) ?? [];

  return chunks.map((match) => match.toString());
}

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
    stdout.write(chunks[i]);
  }

  await sleep(speed.medium);

  return chunks;
}