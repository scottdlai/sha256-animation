import { bold } from 'chalk';
/**
 * Return the title of the string in the form
 * -
 * s
 * -
 * @param s string
 */
export default function title(s: string) {
  return (
    bold`${'-'.repeat(s.length)}\n${s.toUpperCase()}\n${'-'.repeat(s.length)}\n`
  );
}
