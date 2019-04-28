# @imgcook/dsl-helper

Helper for davinci dsl developer.

## Usage

### printer

 代码打印

```javascript
// TEST CODE
const partsJson = [
  {
    type: 'line',
    parts: ["'use strict';"]
  },
  {
    type: 'line',
    parts: ['']
  },
  {
    type: 'line',
    parts: ["import styles from './lib/style.js';"]
  }
];

helper.printer(partsJson);

// RESULT
('use strict');

import styles from './lib/style.js';
```

### parser

代码解析

```javascript
// ORIGIN FILE
'use strict';

import styles from './lib/style.js';

// CODE
helper.parser(fileString);

// RESULT
[
  {
    type: 'line',
    parts: ["'use strict';"]
  },
  {
    type: 'line',
    parts: ['']
  },
  {
    type: 'line',
    parts: ["import styles from './lib/style.js';"]
  }
];
```

### utils

代码打印工具函数

```javascript
helper.utils.isArray([1,2,3]);
// ture

helper.utils.line(['hello');
// {
//   type: 'line',
//   parts: ['hello']
// }

helper.utils.string(['hello']);
// {
//   type: 'string',
//   parts: ['hello']
// }

helper.utils.indentTab();
// 对parts缩进

helper.utils.setIndentTab();
// 设置parts缩进

helper.utils.countIndent('        hello');
// 计算字符串缩进
// RESULT

// {
//   indent: {
//     tab: 2,
//     space: 3
//   },
//   pureStr: 'hello',
//   originStr: '        hello',
// }
```

### weexProcessor

weex 下的样式处理器

```javascript
let styles = helper.weexProcessor.filter({
  width: '100px',
  left: '0px',
  lines: 0,
  'margin-bottom': '0px', // 可忽略默认值
  hehehee: 'hehehe' // 非法属性
});
console.log(styles);

// RESULT

// { width: '100px', left: '0px', lines: 0 }
```

### webProcessor

web 下的样式处理器

```javascript
let styles = helper.weexProcessor.filter({
  width: '100px',
  left: '0px',
  lines: 0, // web下的非法属性，weex下并非非法属性
  'margin-bottom': '0px', // 可忽略默认值
  hehehee: 'hehehe' // 非法属性
});
console.log(styles);

// RESULT

// { width: '100px', left: '0px' }
```

### processLayoutData

对 layout 的样式整体过滤一次

```javascript
let layoutData = {
	style: {
		'width': '100px',
    'left': '0px',
    'lines': 0,
    'margin-bottom': '0px', // 可忽略默认值
    'hehehee': 'hehehe', // 非法属性
	},
	children: [
		{
			style: {
				'width': '100px',
				'left': '0px',
				'lines': 0,
				'margin-bottom': '0px', // 可忽略默认值
				'hehehee': 'hehehe', // 非法属性
			},
		},
		{
			style: {
				'width': '100px',
				'left': '0px',
				'lines': 0,
				'margin-bottom': '0px', // 可忽略默认值
				'hehehee': 'hehehe', // 非法属性
			},
		}
	]
};
let styles = helper.processLayoutData(layoutData, helper.weexProcessor);
console.log(styles);

// RESULT
{
	"style":{
		"width":"100px",
		"left":"0px",
		"lines":0
	},
	"children":[
		{
			"style":{
				"width":"100px",
				"left":"0px",
				"lines":0
			}
		},{
			"style":{
				"width":"100px",
				"left":"0px",
				"lines":0
			}
		}
	]
}
```

### syntactic

分析函数，优先使用 acorn 分析，如果异常则使用原来的正则分析。
DSL 引擎，后端，前端都可使用。

```javascript
helper.syntactic.parseFunction( `/**
 * @author 卡狸
 * @version 1.0
 * @param
 * @return
 */
export default function(args1, args2 = {}){
  let text = 'hello world';
  return {
    arg1,
    args2: text,
  }
};
` );

// RESULT
{
  "success": true,
  "message": "",
  "data": {
    "parser": "Acorn", // Acorn 解析 或 正则解析
    "args": [
      "args1",
      "args2"
    ], // 入参简写
    "params": [
      {
        "argsName": "args1",
        "argsContent": "args1",
        "argsType": "Identifier"
      },
      {
        "argsName": "args2",
        "argsContent": "args2 = {}",
        "argsType": "AssignmentPattern"
      }
    ], // 更多入参信息
    "content": "\tlet text = 'hello world';\n\treturn {\n\t\targ1,\n\t\targs2: text,\n\t}", // 原始内容
    "genContent": "  let text = 'hello world';\n  return {\n    arg1,\n    args2: text\n  };", // 去除注释内容
    "return": [
      {
        "key": "arg1",
        "valueType": "Identifier"
      },
      {
        "key": "args2",
        "valueType": "Identifier"
      }
    ] // 当return一个对象时，此数组会有值
  }
}
```

## Unit Test

```
mocha ./test/index.js
```
