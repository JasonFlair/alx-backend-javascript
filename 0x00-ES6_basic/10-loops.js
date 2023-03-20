export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    let value = idx;
    value = appendString + value;
  }

  return array;
}
