const dslHandle = (data, option) => {
  const utils = option.utils;
  const { unique } = utils;
  return {
    data,
    unique
  };
};

module.exports = (...args) => {
  return dslHandle(...args);
};