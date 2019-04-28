const fs = require('fs');
const path = require('path');
const vm = require('vm');

const baseDir = path.join(__dirname, '../src/data/');

const toJS = function(obj) {
  return JSON.stringify(obj, null, 2);
};

const generateUnits = function() {
  // return Object.keys(mdn.css.units);
};

const generateProperties = function() {
  const PropTypes = {
    length: '<length>',
    number: '<number>',
    integer: '<integer>',
    oneOf: list => list.join(' | '),
    color: '<color>',
    string: '<string>'
  };
  PropTypes.default = PropTypes;

  const sandbox = {
    require(name) {
      if (name === './PropTypes') {
        return PropTypes;
      } else {
        throw new Error(`Module ${name} is not in sandbox`);
      }
    }
  };
  vm.createContext(sandbox);

  let map = {};

  [
    'stylesheet-loader/lib/BoxModelPropTypes',
    'stylesheet-loader/lib/ColorPropTypes',
    'stylesheet-loader/lib/CSSTransitionPropTypes',
    'stylesheet-loader/lib/FlexboxPropTypes',
    'stylesheet-loader/lib/TextStylePropTypes'
  ].forEach(modPath => {
    sandbox.module = { exports: {} };
    sandbox.exports = sandbox.module.exports;
    vm.runInContext(fs.readFileSync(require.resolve(modPath)), sandbox);

    Object.keys(sandbox.module.exports).forEach(key => {
      let syntax = sandbox.module.exports[key];
      map[key.replace(/([A-Z]+)/g, (_, k) => `-${k.toLowerCase()}`)] = {
        syntax
      };
    });
  });

  return map;
};

let data = {};

data.units = generateUnits();
data.properties = generateProperties();

let output = `/* eslint-disable */\nmodule.exports = ${toJS(data)};`;
fs.writeFileSync(path.join(baseDir, 'rax.js'), output);
