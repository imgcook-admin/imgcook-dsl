const _ = require('lodash');
const { Parser } = require('acorn');
const jsx = require('acorn-jsx');
const JSXParser = Parser.extend(jsx());
const escodegen = require('escodegen');

// https://www.jianshu.com/p/8c813abd59cd

const parseOption = {
  ecmaVersion: 9,
  // ecmaVersion: 7,
  sourceType: 'module',
  // onComment: ['block', 'text', 'start', 'end'],
  allowHashBang: true // 代码第一行以 #! 开始时视为注释
};
const generateOption = {
  format: {
    indent: {
      style: '  ',
      base: 0,
      adjustMultilineComment: false
    },
    space: ' ',
    quotes: 'single'
  },
  parse: null,
  comment: true
};

function parseFunction(string) {
  let ret = {
    success: true,
    message: ''
  };
  let data = {
    parser: 'Acorn',
    args: [], // 简单参数名
    params: [], // 完整信息
    content: '', // 原始body
    genContent: '', // 生成的稍稍精简过
    return: [] // return对象信息
  };
  try {
    let parseResult = JSXParser.parse(string, parseOption);
    // fs.writeFileSync( path.join(__dirname, '../../test/functions/getData1.json'), JSON.stringify(parseResult, null, 2), 'utf-8');
    let defaultBody =
      parseResult.body &&
      parseResult.body.find(v => v.type === 'ExportDefaultDeclaration');
    if (parseResult.type !== 'Program' || !defaultBody) {
      ret.success = false;
      ret.message = '请确保有export default方法';
      return ret;
    }
    let defaultFunction = defaultBody.declaration;
    if (defaultFunction.type !== 'FunctionDeclaration') {
      ret.success = false;
      ret.message = 'export defualt必须为一个方法';
      return ret;
    }
    // args
    data.params = defaultFunction.params.map(v => {
      if (v.type === 'Identifier') {
        data.args.push(v.name);
        return {
          argsName: v.name,
          argsContent: escodegen.generate(v, generateOption),
          argsType: v.type
        };
      } else if (v.type === 'AssignmentPattern') {
        data.args.push(v.left.name);
        return {
          argsName: v.left.name,
          argsContent: escodegen.generate(v, generateOption),
          argsType: v.type
        };
      }
    });
    // if ( defaultFunction.body.type !== 'BlockStatement' ) {
    //   ret.success = false;
    //   ret.message = 'export defualt方法为空，请确保至少有return语句';
    //   return ret;
    // }
    let blockStatement = defaultFunction.body;
    let returnStatement = blockStatement.body[blockStatement.body.length - 1];
    let genContent = escodegen.generate(blockStatement, generateOption);
    data.genContent = genContent = genContent
      .replace(/{\n/, '')
      .replace(/\n?}$/, '');
    let { content } = regParseFunction(string);
    data.content = content;

    if (
      !(
        returnStatement &&
        returnStatement.type === 'ReturnStatement' &&
        returnStatement.argument.type === 'ObjectExpression' &&
        returnStatement.argument.properties &&
        returnStatement.argument.properties.length > 0
      )
    ) {
      // ret.success = false;
      // ret.message = '此方法必须return一个有显示声明属性的对象';
      // return ret;
    } else {
      // return
      returnStatement.argument.properties.map(v => {
        if (v.type === 'Property') {
          data.return.push({
            key: v.key.name,
            valueType: v.value.type
          });
        }
      });
    }
  } catch (e) {
    if (e.message.indexOf("'super'") > -1) {
      let { content, args, success } = regParseFunction(string, {
        parseArgs: true
      });
      if (success) {
        data.args = args;
        data.params = args.map(v => {
          return {
            argsName: v,
            argsContent: v,
            argsType: 'Identifier'
          };
        });
        data.content = data.genContent = content;
        data.parser = 'Reg';
      } else {
        ret.success = false;
        ret.message = e.message || JSON.stringify(e);
      }
    } else {
      ret.success = false;
      ret.message = e.message || JSON.stringify(e);
      ret.error = {
        position: e.loc,
        message: e.message,
        name: e.name
      };
    }
  }
  ret.data = data;
  return ret;
}

function regParseFunction(scriptContent, option = {}) {
  // 正则
  let args = [];
  let content = '';
  let success = true;
  const REG_ARGS1 = /[\s\S]*export\sdefault\sfunction\s{0,1}\(([\s\S]*?)\)\s{0,1}{\n([\s\S]*)+\n\}\;?/;
  const REG_ARGS2 = /[\s\S]*export\sdefault\s\(([\s\S]*?)\)\s{0,1}=>\s{0,1}\{\n([\s\S]*)+\n\}\;?/;
  try {
    let regResult =
      scriptContent.match(REG_ARGS1) || scriptContent.match(REG_ARGS2);
    if (regResult) {
      if (option.parseArgs) {
        let argsArr = regResult[1].split(',');
        argsArr.map(_v => {
          if (_.trim(_v) !== '') {
            args.push(_.trim(_v));
          }
        });
      }
      content = _.trim(regResult[2]) == '' ? '' : regResult[2];
    }
  } catch (e) {
    args = [];
    content = '';
    success = false;
  }
  return {
    args,
    content,
    success
  };
}

// const fs = require('fs');
// const path = require('path');
// const ret = fs.readFileSync( path.join(__dirname, '../../test/functions/constructor.js'), 'utf-8');
// let a = parseFunction(ret);
// console.log(JSON.stringify(a));

module.exports = {
  parseFunction
};
