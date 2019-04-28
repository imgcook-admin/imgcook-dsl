import { toKerabKey } from '../toKerabKey';

test('toKerabKey', () => {
  expect(toKerabKey('ClassName')).toBe('class-name');
  expect(toKerabKey('className')).toBe('class-name');
});