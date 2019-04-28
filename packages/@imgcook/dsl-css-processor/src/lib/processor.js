import { toKerabKey } from './toKerabKey';
import { tryRemoveUnitOfZero } from './tryRemoveUnitOfZero';

export class Processor {
  constructor(data) {
    this.data = data;
  }

  getPropertyData(key) {
    return this.data.properties[toKerabKey(key)];
  }

  isValidStyle(key, value = null) {
    const propertyData = this.getPropertyData(key);
    if (!propertyData) return false;

    if (value !== null && Array.isArray(propertyData.syntax)) {
      return propertyData.syntax.indexOf(value) >= 0;
    }

    return true;
  }

  isInitialValue(key, value) {
    const propertyData = this.getPropertyData(key);
    if (!propertyData) return false;

    let { initial } = propertyData;
    if (initial === null) {
      return false;
    }
    if (Array.isArray(initial) && initial.length > 0) {
      return initial.some(initialValue => {
        return value === initialValue;
      });
    }
    return (
      value === initial ||
      (initial === '0' && tryRemoveUnitOfZero(value, this.data.units) === '0')
    );
  }

  filter(style) {
    let ret = {};
    Object.keys(style).forEach(key => {
      let value = style[key];

      if (!this.isValidStyle(key, value) || this.isInitialValue(key, value)) {
        return;
      }

      ret[key] = value;
    });
    return ret;
  }
}
