const fs = require('fs');
const path = require('path');
const mdn = require('mdn-data');
const baseDir = path.join(__dirname, '../src/data/');

const toJS = function(obj) {
  return JSON.stringify(obj, null, 2);
};

const generateUnits = function() {
  return Object.keys(mdn.css.units);
};

const generateProperties = function() {
  let map = {};
  Object.keys(mdn.css.properties).forEach(key => {
    let { syntax, initial } = mdn.css.properties[key];
    map[key] = {
      syntax,
      initial
    };
  });
  return map;
};

let data = {};

data.units = generateUnits();
data.properties = generateProperties();

let output = `/* eslint-disable */\nmodule.exports = ${toJS(data)};`;
fs.writeFileSync(path.join(baseDir, 'web.js'), output);
