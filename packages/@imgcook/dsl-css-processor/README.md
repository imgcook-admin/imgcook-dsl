# @imgcook/dsl-css-processor

## 使用说明

```
import Processor, { weex, web } from '<Package Name>';

// 定义处理规则，具体规则格式请参见下文。
// 也可以直接使用预定义的 `weex` 和 `web`。
let processor = new Processor({
  units: ['px', 'pt'],
  properties: {
    width: {
      initial: null,
      syntax: ''
    },
    // ...
  }
});

// processor.getPropertyData(key)
// 获取规则数据。以下两种参数等价。
processor.getPropertyData('padding-left')
processor.getPropertyData('paddingLeft')

// processor.isValidStyle(key, value = null)
// 检验属性在当前规则下是否合法。如果 `value` 不为 `null` 且属性为枚举类型，将同时检验参数合法性。
processor.isValidStyle('position') // true
processor.isValidStyle('non-exist') // false

processor.isValidStyle('position', 'absolute') // true
processor.isValidStyle('position', 'random') // false

// processor.isInitialValue(key, value)
// 检验属性在当前规则下是否为初始值。如规则中初始值为 `'0'`，则尝试去除 `value` 中的单位并比较。

processor.isInitialValue('margin-left', '0') // true
processor.isInitialValue('margin-left', '0%') // true
processor.isInitialValue('margin-left', '0px') // true

// processor.filter(style)
// 传入属性的键值对，返回在当前规则下合法且不为初始值的子集。
processor.filter({ /* ...*/ })
```

## 规则格式

规则分为 `units` 和 `properties` 两部分。

### `units`

`units` 格式为 `Array<string>`，只有包含在其中的属性和 `%` 被视为合法单位，并在与 `'0'` 的比较中尝试移除。

### `properties`

`properties` 格式如下：

```
{
  [key: string]: {
    initial: string,
    syntax: Array<string> | string
  }
}
```

- `key`：属性名
- `initial`：属性默认值。若为 `null`，则此属性无默认值
- `syntax`: 属性值格式，数组表示可选其中的任意一种格式。注：目前只支持字面量判断，不支持类型和表达式。当此项为数组时，属性值为数组中任一值时为合法，否则为非法。
