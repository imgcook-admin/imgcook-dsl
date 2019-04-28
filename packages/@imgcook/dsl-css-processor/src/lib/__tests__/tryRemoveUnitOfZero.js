import { tryRemoveUnitOfZero } from '../tryRemoveUnitOfZero';

describe('tryRemoveUnitOfZero', () => {
  const validUnits = ['px', '%'];

  test('should return string', () => {
    expect(typeof tryRemoveUnitOfZero(0, validUnits)).toBe('string');
  });

  test('should throw error if validUnits not provided', () => {
    const errorString = 'validUnits should be an array';
    expect(() => tryRemoveUnitOfZero('0')).toThrowError(errorString);
    expect(() => tryRemoveUnitOfZero('0', 'px')).toThrowError(errorString);
  });

  test('should remove unit of zero', () => {
    const cases = ['0px', '0%', '0.000000%', '.0%'];
    cases.forEach(value => {
      expect(tryRemoveUnitOfZero(value, validUnits)).toBe('0');
    });
  });

  test('should ignore non-zero values', () => {
    const cases = ['1', '1px', '01%', '30.0000%'];
    cases.forEach(value => {
      expect(tryRemoveUnitOfZero(value, validUnits)).toBe(value);
    });
  });

  test('should ignore non-length values', () => {
    const cases = ['url()', 'normal', '0....', '0.0.0', '0.%', '.%'];
    cases.forEach(value => {
      expect(tryRemoveUnitOfZero(value, validUnits)).toBe(value);
    });
  });

  test('should ignore non-included units', () => {
    const cases = ['0rem', '0vh'];
    cases.forEach(value => {
      expect(tryRemoveUnitOfZero(value, validUnits)).toBe(value);
    });
  });
});
