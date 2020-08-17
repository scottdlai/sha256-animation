import { stdout, argv } from 'process';
import hash, { hashAnimation } from './hash';

// stdout.write(hash('abc'));

async function main() {
  // console.log(hash(argv[2] ?? 'abc'));
  await hashAnimation(argv[2] ?? 'abc');
}

main();