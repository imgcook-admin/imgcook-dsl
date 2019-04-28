// 过滤数组重复项
exports.unique = (arr) => {
  return arr
    .concat()
    .sort()
    .filter((item, index, ar) => {
      return !index || item !== ar[index - 1];
    });
}