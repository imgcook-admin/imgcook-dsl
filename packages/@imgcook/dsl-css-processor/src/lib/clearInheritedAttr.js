const unifyClassName = require('./unifyClassName');
const inheritedAttrs = require('../data/inheritedAttrs');

/**
 * 是否为继承属性
 * @param {string} attrName 驼峰式属性名
 */
function isInheritedAttr(attrName) {
  return inheritedAttrs.indexOf(attrName) != -1;
}

/**
 * 清除可继承自父节点的属性；若属性可继承，且与最近一个父节点的属性及属性值相同，即该属性值可继承自父节点，而不需要显示写出，则删除此属性
 * 1. 将继承自父节点的属性 styleInheritFromParent 分别保存至各子节点的 styleInheritable （存放继承自父节点的属性 和 自身可让子节点继承的属性） 中
 * 2. 将子节点的 style 与 styleInheritable 比对
 * 3. style 与 styleInheritable 相同的属性及属性值, 则删除 style 中的此属性。（1、此属性一定是可继承的；2、说明子节点中此属性与父节点中此属性的属性值相同，可继承自父节点）
 * 4. style 与 styleInheritable 不同的【可继承】属性或此属性在 styleInheritable 中不存在，则覆盖 styleInheritable 中此属性的属性值或给 sstyleInheritable 添加此属性。
 * 5. 将 styleInheritable 传递给子节点的 styleInheritFromParent（styleInheritable 中始终是本节点中可继承的属性，包含从父节点中继承来的属性，一直传递给子节点，并被子节点不同的属性值覆盖）
 * @param {object} data
 */
function clearInheritedFromParentNodeAttr(data) {
  // data.originStyle = {...data.style}; // 输出原始style
  let style = data.style || {};

  // 传递给每个子节点的 styleInheritFromParent 不可相互影响
  let styleInheritable = data.styleInheritFromParent
    ? { ...data.styleInheritFromParent }
    : {};

  Object.keys(style).map(attrName => {
    if (
      styleInheritable[attrName] &&
      styleInheritable[attrName] == style[attrName]
    ) {
      delete style[attrName];
    } else if (isInheritedAttr(attrName)) {
      styleInheritable[attrName] = style[attrName];
    }
  });

  // data.styleInheritable = styleInheritable;   // 输出传递给子节点的继承属性
  delete data.styleInheritFromParent;

  data.children &&
    data.children.forEach(childData => {
      childData.styleInheritFromParent = styleInheritable;
      clearInheritedFromParentNodeAttr(childData);
    });

  return data;
}

/**
 * 清除可继承自父节点的属性, 并统一className
 * @param {object} data
 * @param {boolean} needUnifyClassName 是否在清除可继承自父节点的属性后 统一完全相同的 style 的 className, 默认为 true
 */
function clearInheritedAttr(data, needUnifyClassName = true) {
  data = clearInheritedFromParentNodeAttr(data);
  if (needUnifyClassName) {
    data = unifyClassName(data);
  }
  return data;
}

module.exports = clearInheritedAttr;
