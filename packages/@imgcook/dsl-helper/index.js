'use strict';

var rule = require('@imgcook/dsl-css-processor').default;
var processLayoutData = function(layoutData, processor) {
  if (!processor instanceof rule.Process) {
    return;
  }
  if (layoutData.style) {
    layoutData.style = processor.filter(layoutData.style);
  }
  if (layoutData.children && layoutData.children.length) {
    layoutData.children.map((_v, _i) => {
      processLayoutData(_v, processor);
    });
  }
  return layoutData;
};

module.exports = {
  syntactic: require('./src/syntactic'),
  // builders: require("./doc-builders"),
  printer: require('./src/doc-printer'),
  parser: require('./src/doc-parser'),
  utils: require('./src/doc-utils'),
  // debug: require("./doc-debug")
  webProcessor: rule.web, // web样式处理器
  weexProcessor: rule.weex, // weex样式处理器
  processLayoutData: processLayoutData,
  Process: rule.Process, // 处理器构造函数
  clearInheritedAttr: rule.clearInheritedAttr, // 按照css规则清除继承属性
  unifyClassName: rule.unifyClassName // 按照css规则，进行样式复用
};
