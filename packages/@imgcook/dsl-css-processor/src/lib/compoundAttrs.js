// 可根据上下对等、左右对等原则补齐的复合属性
const specialCompoundAttrMap = {
  borderRadius: [
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderBottomRightRadius',
    'borderBottomLeftRadius'
  ],
  borderWidth: [
    'borderTopWidth',
    'borderRightWidth',
    'borderBottomWidth',
    'borderLeftWidth'
  ],
  borderColor: [
    'borderTopColor',
    'borderRightColor',
    'borderBottomColor',
    'borderLeftColor'
  ],
  borderStyle: [
    'borderTopStyle',
    'borderRightStyle',
    'borderBottomStyle',
    'borderLeftStyle'
  ],
  margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
  padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
  scrollPadding: [
    'scrollPaddingTop',
    'scrollPaddingRight',
    'scrollPaddingBottom',
    'scrollPaddingLeft'
  ],
  scrollMargin: [
    'scrollMarginTop',
    'scrollMarginRight',
    'scrollMarginBottom',
    'scrollMarginLeft'
  ]
};

// 其他复合属性
const compoundAttrMap = {
  animation: [
    'animationName',
    'animationDuration',
    'animationTimingFunction',
    'animationDelay',
    'animationIterationCount',
    'animationDirection',
    'animationFillMode',
    'animationPlayState'
  ],
  border: ['borderWidth', 'borderStyle', 'borderColor'],
  backgroundPosition: ['backgroundPositionX', 'backgroundPositionY'],
  backgroundRepeat: ['backgroundRepeatX', 'backgroundRepeatY'],
  background: [
    'backgroundImage',
    'backgroundPosition',
    'backgroundSize',
    'backgroundRepeat',
    'backgroundAttachment',
    'backgroundOrigin',
    'backgroundClip',
    'backgroundColor'
  ],
  borderImage: [
    'borderImageSource',
    'borderImageSlice',
    'borderImageWidth',
    'borderImageOutset',
    'borderImageRepeat'
  ],
  border: ['borderWidth', 'borderStyle', 'borderColor'],
  borderInlineEnd: [
    'borderInlineEndWidth',
    'borderInlineEndStyle',
    'borderInlineEndColor'
  ],
  borderInlineStart: [
    'borderInlineStartWidth',
    'borderInlineStartStyle',
    'borderInlineStartColor'
  ],
  borderTop: ['borderTopWidth', 'borderTopStyle', 'borderTopColor'],
  borderRight: ['borderRightWidth', 'borderRightStyle', 'borderRightColor'],
  borderBottom: ['borderBottomWidth', 'borderBottomStyle', 'borderBottomColor'],
  borderLeft: ['borderLeftWidth', 'borderLeftStyle', 'borderLeftColor'],
  fontVariant: [
    'fontVariantLigatures',
    'fontVariantCaps',
    'fontVariantNumeric',
    'fontVariantEastAsian'
  ],
  font: [
    'fontStyle',
    'fontVariant',
    'fontWeight',
    'fontStretch',
    'fontSize',
    'lineHeight',
    'fontFamily'
  ],
  gridTemplate: [
    'gridTemplateRows',
    'gridTemplateColumns',
    'gridTemplateAreas'
  ],
  listStyle: ['listStyleType', 'listStylePosition', 'listStyleImage'],
  outline: ['outlineColor', 'outlineStyle', 'outlineWidth'],
  overflow: ['overflowX', 'overflowY'],
  overscrollBehavior: ['overscrollBehaviorX', 'overscrollBehaviorY'],
  textDecoration: [
    'textDecorationline',
    'textDecorationstyle',
    'textDecorationcolor'
  ],
  transition: [
    'transitionProperty',
    'transitionDuration',
    'transitionTimingFunction',
    'transitionDelay'
  ]
};

/**
 * 提取两个数组中的相同项， 并按顺序返回相同项的数组
 * @param {array} array1
 * @param {array} array2
 */
function extractSameItem(array1, array2) {
  if (!array1 || !array2 || !array1.length || !array2.length) return;
  return array1.filter(item => {
    return array2.indexOf(item) != -1;
  });
}

/**
 * 给数字添加单位
 * @param {string} value
 * @param {string} unit
 */
function addUnit(value, unit) {
  if (value != null && value != '' && !isNaN(value)) {
    return value + unit;
  }
  return value;
}

/**
 * 合成某个复合属性
 * @param {*} template ['borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth']
 * @param {*} sameAttrs ['borderTopWidth', 'borderLeftWidth']
 * @param {*} data {borderTopWidth: 5, borderLeftWidth: 2}
 * @param {*} unit 'px'
 */
function compoundSpecAttr(template, sameAttrs, data, unit) {
  const result = template.map(attr => {
    const value = data[attr];
    if (sameAttrs.indexOf(attr) == -1) {
      return 0;
    } else {
      delete data[attr];
      return addUnit(value, unit);
    }
  });
  // 按规则简化
  if (
    result[0] == result[1] &&
    result[1] == result[2] &&
    result[2] == result[3]
  ) {
    return result[0];
  } else if (result[0] == result[2] && result[1] == result[3]) {
    return [result[0], result[1]].join(' ');
  } else if (result[1] == result[3]) {
    return [result[0], result[1], result[2]].join(' ');
  } else {
    return [result[0], result[1], result[2], result[3]].join(' ');
  }
}

/**
 * 合并style中可复合的specialCompoundAttrMap中的属性
 * @param {*} style
 * @param {*} unit
 */
function compoundSpecAttrs(style, unit) {
  const styleAttrs = Object.keys(style);
  Object.keys(specialCompoundAttrMap).forEach(cAttr => {
    const template = specialCompoundAttrMap[cAttr];
    const sameAttrs = extractSameItem(template, styleAttrs);
    // 4个中有2个及以上相同则合并
    if (sameAttrs && sameAttrs.length >= 2) {
      style[cAttr] = compoundSpecAttr(template, sameAttrs, style, unit);
    }
  });
  return style;
}

/**
 * 合并复合属性
 * 例如：{marginTop: 10, marginRight: 5, marginBottom: 10, marginLeft: 5} 合并为： {margin: '10px 5px'}
 * @param {object} data
 * @param {string} unit 数字的单位
 */
function compoundAttrs(data, unit = 'px') {
  // data.originStyle = {...data.style};

  let style = compoundSpecAttrs(data.style, unit);

  const styleAttrs = Object.keys(style);
  Object.keys(compoundAttrMap).forEach(cAttr => {
    const template = compoundAttrMap[cAttr];
    const sameAttrs = extractSameItem(template, styleAttrs);
    // 复合属性中的单一属性全都有则合并
    if (sameAttrs && sameAttrs.length == template.length) {
      const result = template.map(attr => {
        let value = addUnit(style[attr], unit);
        delete style[attr];
        return value;
      });
      style[cAttr] = result.join(' ');
    }
  });

  data.style = style;

  // if (Object.keys(data.originStyle).length != Object.keys(data.style).length) {
  // 	console.log('originStyle: ', data.originStyle);
  // 	console.log('style: ', data.style);
  // }

  data.children &&
    data.children.forEach(childData => {
      compoundAttrs(childData);
    });

  return data;
}

module.exports = compoundAttrs;
