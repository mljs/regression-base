import { isAnyArray } from 'is-any-array';

/**
 * Check that x and y are arrays, and they are of the same length
 * @param x - first item to check
 * @param y - second item to check
 * @throws {TypeError} if x or y are not arrays
 */
export default function checkArraySize(x: unknown, y: unknown): void {
  if (!isAnyArray(x) || !isAnyArray(y)) {
    throw new TypeError('x and y must be arrays');
  }
  if (x.length !== y.length) {
    throw new RangeError('x and y arrays must have the same length');
  }
}
