/**
 * Cast `number` to string. Optionally `digits` specifies significant figures.
 * @param number - The number to convert.
 * @param figures - Number of significant figures.
 * @returns A string representation of `number`.
 */
export function maybeToPrecision(number: number, figures?: number) {
  if (number < 0) {
    number = 0 - number;
    if (typeof figures === 'number') {
      return `- ${number.toPrecision(figures)}`;
    } else {
      return `- ${number.toString()}`;
    }
  } else if (typeof figures === 'number') {
    return number.toPrecision(figures);
  } else {
    return number.toString();
  }
}
