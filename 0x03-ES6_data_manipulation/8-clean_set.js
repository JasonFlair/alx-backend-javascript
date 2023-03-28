export default function cleanSet(set, startString) {
  let appendedstr = '';
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  if (startString !== '') {
    let hyphen = 0;
    for (const string of set) {
      if (string.startsWith(startString)) {
        if (hyphen) {
          appendedstr += '-';
        }
        appendedstr += string.slice(startString.length);
        hyphen = 1;
      }
    }
  }
  return appendedstr;
}
