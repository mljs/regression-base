import type { NumberArray } from 'cheminfo-types';
import { isAnyArray } from 'is-any-array';

/**
 * Check that x and y are arrays with the same length.
 * @param x - first array
 * @param y - second array
 * @throws {TypeError} if x or y are not arrays.
 * @throws {RangeError} if x and y do not have the same length.
 */
export function checkArrayLength(x: NumberArray, y: NumberArray) {
  if (!isAnyArray(x) || !isAnyArray(y)) {
    throw new TypeError('x and y must be arrays');
  }
  if (x.length !== y.length) {
    throw new RangeError('x and y arrays must have the same length');
  }
}
