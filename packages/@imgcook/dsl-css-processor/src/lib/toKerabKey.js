export function toKerabKey(key) {
  return key.replace(
    /([A-Z]+)/g,
    (_, k, index) => `${index === 0 ? '' : '-'}${k.toLowerCase()}`
  );
}
