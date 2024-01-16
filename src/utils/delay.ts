/**
 * Creates a promise that resolves after a specified number of milliseconds.
 * This function can be used to introduce a delay in asynchronous operations.
 *
 * @param ms - The number of milliseconds to wait before resolving the promise.
 * @returns A promise that resolves after the specified delay.
 */
export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
