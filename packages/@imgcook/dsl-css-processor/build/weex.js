const fs = require('fs');
const path = require('path');
const vm = require('vm');
const initialValues = require('./weex-initial');

const baseDir = path.join(__dirname, '../src/data/');

const validatorPath = 'weex-styler/lib/validator';

const sandbox = {
  require(name) {
    return require.resolve(path.join(path.dirname(validatorPath), name));
  },
  module: { exports: {} }
};
sandbox.exports = sandbox.module.exports;

const override = {
  genEnumValidator: (arr) => arr,
  LENGTH_VALIDATOR: '<length>',
  COLOR_VALIDATOR: '<color>',
  NUMBER_VALIDATOR: '<number>',
  INTEGER_VALIDATOR: '<integer>',
};

const sandboxProxy = new Proxy(sandbox, {
  set(obj, prop, value) {
    if (override[prop]) {
      value = override[prop];
    }

    obj[prop] = value;
    return true;
  }
});

vm.createContext(sandboxProxy);
vm.runInContext(fs.readFileSync(require.resolve(validatorPath)), sandboxProxy);

const toJS = function(obj) {
  return JSON.stringify(obj, null, 2);
};

const generateUnits = function() {
  return sandbox.SUPPORT_CSS_UNIT;
};

const generateProperties = function() {
  let map = {};
  Object.keys(sandbox.PROP_NAME_GROUPS).forEach(group => {
    let obj = sandbox.PROP_NAME_GROUPS[group];
    Object.keys(obj).forEach(key => {
      let syntax = obj[key];
      if (typeof syntax === 'function') {
        syntax = `Function<${syntax.name}>`;
      }

      let kerabKey = key.replace(/([A-Z]+)/g, (_, k) => `-${k.toLowerCase()}`);
      let initial = null;
      if (Array.isArray(syntax)) {
        initial = '' + syntax[0];
      } else if (initialValues.hasOwnProperty(kerabKey)) {
        initial = '' + initialValues[kerabKey];
      }

      map[kerabKey] = {
        initial,
        syntax,
      };
    });
  });

  return map;
};

let data = {};

data.units = generateUnits();
data.properties = generateProperties();

let output = `/* eslint-disable */\nmodule.exports = ${toJS(data)};`;
fs.writeFileSync(path.join(baseDir, 'weex.js'), output);