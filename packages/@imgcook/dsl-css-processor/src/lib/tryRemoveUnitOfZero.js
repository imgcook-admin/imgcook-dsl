export function tryRemoveUnitOfZero(value, validUnits) {
  if (!Array.isArray(validUnits)) {
    throw new Error('validUnits should be an array');
  }

  if (typeof value !== 'string') {
    value = '' + value;
  }

  let i = 0;
  let dotPosition = null;
  for (; i < value.length; ++i) {
    let chr = value.charAt(i);
    if (chr === '0') continue;
    if (chr === '.' && !dotPosition) {
      dotPosition = i;
      continue;
    }
    break;
  }

  if (dotPosition !== null && dotPosition === i - 1) {
    dotPosition = null;
    --i;
  }

  let unit = value.substr(i);
  if (unit && (unit === '%' || validUnits.indexOf(unit) >= 0)) {
    return '0';
  } else {
    return value;
  }
}
