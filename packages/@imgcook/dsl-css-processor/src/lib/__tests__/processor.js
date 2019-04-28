import { Processor } from '../processor';

const paddingData = {
  'initial': '0',
  'syntax': '<length>'
};

const testData = {
  'units': [
    'px',
    'ly'
  ],
  'properties': {
    'padding-top': paddingData,
    'padding-left': paddingData,
    'padding-right': paddingData,
    'padding-bottom': paddingData,
    'position': {
      'initial': 'relative',
      'syntax': [
        'relative',
        'absolute',
        'sticky',
        'fixed'
      ]
    },
    'top': {
      'initial': null,
      'syntax': '<length>'
    },
  }
};

let processor = new Processor(testData);

describe('Processor.getPropertyData', () => {
  test('should return property data', () => {
    expect(processor.getPropertyData('padding-left')).toBe(paddingData);
    expect(processor.getPropertyData('paddingLeft')).toBe(paddingData);
  });

  test('should return undefined if property does not exist', () => {
    expect(processor.getPropertyData('not-exist')).toBeUndefined();
  });
});

describe('Processor.isValidStyle', () => {
  test('should accept valid key-value pair', () => {
    expect(processor.isValidStyle('padding-left', 1)).toBeTruthy();
    expect(processor.isValidStyle('position', 'absolute')).toBeTruthy();
    expect(processor.isValidStyle('top', 10)).toBeTruthy();
  });

  test('should accept valid key', () => {
    expect(processor.isValidStyle('padding-left')).toBeTruthy();
    expect(processor.isValidStyle('position')).toBeTruthy();
    expect(processor.isValidStyle('top')).toBeTruthy();
  });

  test('should reject non-exist key', () => {
    expect(processor.isValidStyle('not-exist')).toBeFalsy();
  });

  test('should reject invalid key-value pair', () => {
    expect(processor.isValidStyle('position', 'invalid')).toBeFalsy();
  });
});

describe('Processor.isInitialValue', () => {
  test('should return true for initial value', () => {
    expect(processor.isInitialValue('padding-left', '0')).toBeTruthy();
    expect(processor.isInitialValue('position', 'relative')).toBeTruthy();
  });

  test('should return true for equivalent zero value', () => {
    expect(processor.isInitialValue('padding-left', 0)).toBeTruthy();
    expect(processor.isInitialValue('padding-left', '0px')).toBeTruthy();
    expect(processor.isInitialValue('padding-left', '0ly')).toBeTruthy();
  });

  test('should return false for styles without initial value', () => {
    expect(processor.isInitialValue('top', 0)).toBeFalsy();
    expect(processor.isInitialValue('top', '0')).toBeFalsy();
    expect(processor.isInitialValue('top', null)).toBeFalsy();
  });

  test('should return false for non-exist key', () => {
    expect(processor.isInitialValue('not-exist')).toBeFalsy();
  });

  test('should return false for non-equivalent zero value', () => {
    expect(processor.isInitialValue('position', 0)).toBeFalsy();
    expect(processor.isInitialValue('position', '0px')).toBeFalsy();
    expect(processor.isInitialValue('padding-left', '0rem')).toBeFalsy();
    expect(processor.isInitialValue('padding-left', '0min')).toBeFalsy();
  });
});

describe('Processor.filter', () => {
  const testStyle = {
    'padding-top': 10,
    paddingLeft: '0',
    paddingRight: '0px',
    paddingBottom: 0,
    position: '0px',
    letterSpacing: '0',
    top: 'untouched',
    fontWeight: 400,
    fontWeight: '400',
    fontWight: 'normal',
    fontFamily: 'PingFangSC',
    'non-exist': 'removed'
  };
  
  const style = Object.assign({}, testStyle);
  let filteredStyle;
  beforeAll(() => {
    filteredStyle = processor.filter(style);
    console.info(filteredStyle)
  });
  
  test('original style should stay unchanged', () => {
    expect(style).toEqual(testStyle);
  });
  
  test('should return a new object', () => {
    expect(filteredStyle).not.toBe(style);
  });
  
  test('should remove invalid property', () => {
    expect(filteredStyle['non-exist']).toBeUndefined();
  });
  
  test('should remove property with initial value (raw string)', () => {
    expect(filteredStyle.paddingLeft).toBeUndefined();
  });
  
  test('should remove property with initial value (number)', () => {
    expect(filteredStyle.paddingBottom).toBeUndefined();
  });
  
  test('should remove property with initial value (string with unit)', () => {
    expect(filteredStyle.paddingRight).toBeUndefined();
  });
  
  test('should not touch other properties or add properties', () => {
    let nonInitialProperties = ['padding-top', 'top'];
    expect(Object.keys(filteredStyle).sort()).toEqual(nonInitialProperties.sort());
    nonInitialProperties.forEach(property => {
      expect(filteredStyle[property]).toBe(testStyle[property]);
    });
  });
  
});