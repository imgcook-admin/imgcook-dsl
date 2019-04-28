module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function casHandler(str, value) {\n  var casArr = str.split('.');\n  var casObj = {};\n\n  if (casArr.length == 0) {\n    casObj[str] = value;\n  }\n\n  casArr.reverse().forEach(function(cas) {\n    if (cas.indexOf('[') == -1) {\n      casObj[cas] = value;\n    } else {\n      var newCasObj = {};\n      var key = cas.split('[')[0];\n      newCasObj[key] = [casObj];\n      casObj = newCasObj;\n    }\n  });\n\n  return casObj;\n}\n\nfunction json2jsx(_, json) {\n  var result = '';\n\n  if (!!json.length && typeof json != 'string') {\n    json.forEach(function(node) {\n      result += json2jsx(_, node);\n    });\n  } else if (typeof json == 'object') {\n    var type = json.componentType;\n    var className = json.attrs.className;\n\n    switch (type) {\n      case 'text':\n        var lines = json.style.lines;\n        var innerText;\n\n        if (json.tpl) {\n          innerText = `{dataSource.${json.tpl}}`;\n          mock = _.merge(mock, casHandler(json.tpl, json.innerText));\n        } else {\n          innerText = json.innerText;\n        }\n\n        result += `<Text style={styles.${className}} numberOfLines={${lines}}>${innerText}</Text>`;\n\n        if (!raxImport[type]) {\n          raxImport[type] = `import Text from 'rax-text';`;\n        }\n\n        if (json.style.lines == 1) {\n          delete json.style.width;\n          delete json.style.height;\n        }\n\n        delete json.style.fontFamily;\n        delete json.style.lines;\n        break;\n      case 'view':\n        if (json.children && json.children.length > 0) {\n          result += `<View style={styles.${className}}>${json2jsx(_,\n            json.children\n          )}</View>`;\n        } else {\n          result += `<View style={styles.${className}} />`;\n        }\n        if (!raxImport[type]) {\n          raxImport[type] = `import View from 'rax-view';`;\n        }\n        break;\n      case 'picture':\n        var source;\n\n        if (json.tpl) {\n          source = `dataSource.${json.tpl}`;\n          mock = _.merge(mock, casHandler(json.tpl, json.attrs.src));\n        } else {\n          source = `'${json.attrs.src}'`;\n        }\n        result += `<Picture resizeMod={'contain'} style={styles.${className}} source={{uri: ${source}}} />`;\n\n        if (!raxImport[type]) {\n          raxImport[type] = `import Picture from 'rax-picture';`;\n        }\n        break;\n    }\n\n    style[className] = json.style;\n  } else {\n    return json\n      .toString()\n      .replace(/&/g, '&amp;')\n      .replace(/</g, '&lt;')\n      .replace(/>/g, '&gt;')\n      .replace(/\"/g, '&quot;');\n  }\n\n  return result;\n}\n\nlet mock = {};\nconst raxImport = {};\nconst style = {};\n\nconst dslHandle = (data, options) => {\n  // const utils = option.utils;\n  // const { unique } = utils;\n  // return {\n  //   data,\n  //   unique\n  // };\n\n  const renderData = {};\n  const { _, prettier} = options;\n  // transform json\n  var jsx = `${json2jsx(_, data)}`;\n  var dataBinding =\n    Object.keys(mock).length > 0\n      ? 'var dataSource = this.props.dataSource;'\n      : '';\n\n  renderData.modClass = `\n    class Mod extends Component {\n      render() {\n        ${dataBinding}\n        return (\n          ${jsx}\n        );\n      }\n    }\n  `;\n\n  renderData.import = Object.keys(raxImport)\n    .map(key => {\n      return raxImport[key];\n    })\n    .join('\\n');\n  renderData.mockData = `var mock = ${JSON.stringify(mock)}`;\n  renderData.style = `var styles = ${JSON.stringify(style)}`;\n  renderData.export = `render(<Mod dataSource={mock} />);`;\n\n  const prettierOpt = {\n    printWidth: 120,\n    singleQuote: true\n  };\n\n  return {\n    renderData: renderData,\n    xml: prettier.format(jsx, prettierOpt),\n    style: prettier.format(renderData.style, prettierOpt),\n    prettierOpt: prettierOpt\n  };\n};\n\nconst run = (...args) => {\n  return dslHandle(...args);\n};\n\nmodule.exports = run;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });