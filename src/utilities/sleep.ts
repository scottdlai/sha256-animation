/**
 * Stops the execution of the program for the specified number of milisecond.
 * 
 * @param {number} ms number of miliseconds to stop
 */
export default function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
