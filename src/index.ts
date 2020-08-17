#!/usr/bin/env node

import { argv } from 'process';
import hash, { hashAnimation } from './hash';
import { program } from 'commander';
import speed from './utilities/speed';

program
  .version('1.0.0', '-v --version')
  .option('--no-animation', 'hash without the animation')
  .option('--set-speed <speed>', 'set the speed of the animation')
  .parse(argv);

const { animation, setSpeed, args } = program;

if (setSpeed) {
  if (setSpeed === 'fast') {
    speed.setSpeed(125);
  } else if (setSpeed === 'slow') {
    speed.setSpeed(500);
  } else {
    console.log('INVALID SPEED (fast | slow)');
    process.exit(1);
  }
}

if (animation) {
  hashAnimation(args[0] ?? '');
} else {
  console.log(hash(args[0] ?? ''));
}
