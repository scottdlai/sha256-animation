import { stdout, argv } from 'process';
import { toBinaryStringAnimation } from './preprocess/toBinaryString';

toBinaryStringAnimation(argv[2] ?? 'abc');
