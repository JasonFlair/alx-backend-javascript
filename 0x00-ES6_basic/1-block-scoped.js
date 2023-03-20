export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  /* eslint-disable no-unused-vars */
  if (trueOrFalse) {
    /* eslint-disable no-shadow */
    const task = true;
    const task2 = false;
    /* eslint-enable no-shadow */
  }
  /* eslint-enable no-unused-vars */

  return [task, task2];
}
