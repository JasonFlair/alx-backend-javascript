export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  let numOfCalls = weakMap.get(endpoint) || 0;
  numOfCalls += 1;
  if (numOfCalls >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, numOfCalls);
}
