import toBinaryString, {
  toBinaryStringAnimation,
} from './preprocess/toBinaryString';
import padding, { paddingAnimation } from './preprocess/padding';
import toChunks, {
  toChunksAnimation,
  displayChunk,
} from './preprocess/toChunks';
import messageSchedule, {
  messageScheduleAnimation,
} from './process/messageSchedule';
import H, { hAnimation } from './constants/H';
import compression, { compressionAnimation } from './process/compression';
import add from './operations/add';
import sleep from './utilities/sleep';
import speed from './utilities/speed';
import { clearTerminal } from 'ansi-escapes';
import { stdout } from 'process';
import title from './utilities/title';
import { yellow } from 'chalk';

export default function hash(message: string) {
  const binary = toBinaryString(message);

  const padded = padding(binary);

  const chunks = toChunks(padded);

  let [h0, h1, h2, h3, h4, h5, h6, h7] = H;

  for (let i = 0; i < chunks.length; i += 1) {
    const w = messageSchedule(chunks[i]);

    const [a, b, c, d, e, f, g, h] = compression(w, [
      h0,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      h7,
    ]);

    h0 = add(h0, a);
    h1 = add(h1, b);
    h2 = add(h2, c);
    h3 = add(h3, d);
    h4 = add(h4, e);
    h5 = add(h5, f);
    h6 = add(h6, g);
    h7 = add(h7, h);
  }

  return [h0, h1, h2, h3, h4, h5, h6, h7].map(toHex).join('');
}

export async function hashAnimation(message: string) {
  const binary = await toBinaryStringAnimation(message);
  await sleep(speed.slow);

  const padded = await paddingAnimation(binary);
  await sleep(speed.slow);

  const chunks = await toChunksAnimation(padded);
  await sleep(speed.slow);

  let [h0, h1, h2, h3, h4, h5, h6, h7] = await hAnimation();

  for (let i = 0; i < chunks.length; i += 1) {
    await sleep(speed.slow);
    await displayChunk(chunks, i);
    await sleep(speed.slow);

    const w = await messageScheduleAnimation(chunks[i]);
    await sleep(speed.slow);

    const [a, b, c, d, e, f, g, h] = await compressionAnimation(w, [
      h0,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      h7,
    ]);

    await sleep(speed.slow);

    [h0, h1, h2, h3, h4, h5, h6, h7] = await updateHash(
      [h0, h1, h2, h3, h4, h5, h6, h7],
      [a, b, c, d, e, f, g, h]
    );
  }

  stdout.write('\n');
  stdout.write(title('final hash'));
  await sleep(speed.medium);
  stdout.write(message);
  await sleep(speed.medium);
  stdout.write(' -> ');
  await sleep(speed.medium);
  stdout.write(yellow(toHex(h0)));
  await sleep(speed.medium);
  stdout.write(yellow(toHex(h1)));
  await sleep(speed.medium);
  stdout.write(yellow(toHex(h2)));
  await sleep(speed.medium);
  stdout.write(yellow(toHex(h3)));
  await sleep(speed.medium);
  stdout.write(yellow(toHex(h4)));
  await sleep(speed.medium);
  stdout.write(yellow(toHex(h5)));
  await sleep(speed.medium);
  stdout.write(yellow(toHex(h6)));
  await sleep(speed.medium);
  stdout.write(yellow(toHex(h7)));

  stdout.write('\n');

  return [h0, h1, h2, h3, h4, h5, h6, h7].map(toHex).join('');
}

async function updateHash(current: string[], registers: string[]) {
  stdout.write(clearTerminal);
  await sleep(speed.medium);
  stdout.write(title('update hash'));

  const registerNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  for (let i = 0; i < current.length; i += 1) {
    await sleep(speed.medium);
    stdout.write(
      `h${i} = h${i} + ${registerNames[i]} = ${add(
        current[i],
        registers[i]
      )} = ${yellow(toHex(add(current[i], registers[i])))}\n`
    );
  }

  return current.map((hash, i) => add(hash, registers[i]));
}

function toHex(s: string) {
  return parseInt(s, 2).toString(16).padStart(8, '0');
}
