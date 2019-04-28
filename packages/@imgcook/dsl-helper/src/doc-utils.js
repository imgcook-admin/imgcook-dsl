"use strict";

function _isArray(arr) {
  return Object.prototype.toString.call(arr) == '[object Array]'
}

// function _concat(parts, options) {
//   return {
//     "type": "concat",
//     "parts": parts.type !== 'concat' ? ( _isArray(parts) ? parts : [parts] ) : ( parts.parts )
//   }
// }
function _line(lines, options = {}) {
  options = JSON.parse(JSON.stringify(options));
  let line = {
    "type": "line",
    "parts": _isArray(lines) ? lines : [lines]
  };
  if ( options && options.indent && (options.indent.tab > 0 || options.indent.space > 0) ) {
    line.indent = options.indent;
  }
  return line;
}
function _string(strings, options = {}) {
  return {
    "type": "string",
    "parts": _isArray(strings) ? strings : [strings],
    "indent": options && options.indent
  }
}
function _indentTab(parts, count) {
  parts = JSON.parse(JSON.stringify(parts));
  // 设置偏移值
  // count 可以为负值，一般是代码块之间的整体调整，负值不会被带进 doc-printer
  let a = parts.map((v, i) => {
    v.indent || (v.indent = {
      tab: 0
    });
    let curIndent = v.indent.tab || 0;
    v.indent.tab = curIndent + count;
    return v;
  });
  return a;
}
function _setIndentTab(parts, count) {
  parts = JSON.parse(JSON.stringify(parts));
  // 设置确定的值
  let a = parts.map((v, i) => {
    v.indent || (v.indent = {
      tab: 0
    });
    let curIndent = v.indent.tab || 0;
    v.indent.tab = count;
    return v;
  });
  return a;
}
function _countIndent(string) {
  // 计算单行文本缩进值
  let index = 0;
  let len = string.length;

  let tab = 0;
  let space = 0;

  // console.log( string );

  for ( let _i = 0 ; _i < len; _i++ ) {
    // console.log('string.charAt( _i ) ', string.charAt( _i ) , '\t' );
    // console.log( /\t/.test( string.charAt( _i ) ) );
    if ( '\t' === string.charAt( _i ) ) {
      tab++;
    } else if ( ' ' === string.charAt( _i ) ) {
      space++;
    } else {
      break;
    }
  }

  let convertTab = tab +  Math.floor(space / 2);
  let convertSpace = space % 2;

  let indent = {};
  convertTab && (indent.tab = convertTab);
  convertSpace && (indent.space = convertSpace);

  return {
    indent: indent,
    pureStr: string.slice( tab + space ),
    originStr: string,
  };
}


module.exports = {
  isArray: _isArray,
  // concat: _concat,
  line: _line,
  string: _string,
  indentTab: _indentTab,
  setIndentTab: _setIndentTab, 
  countIndent: _countIndent,
};