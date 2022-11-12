/* Takes two numbers, multiplies them and returns the result. 
But: even if a number is negative, the result should still be positive.

  const result = positiveMultiply(2, 3);
  // 6
  const result = positiveMultiply(-2, 3);
  // 6
  const result = positiveMultiply(-2, -3);
  // 6 */

export function positiveMultiply(a, b) {
  return Math.abs(a * b);
}
