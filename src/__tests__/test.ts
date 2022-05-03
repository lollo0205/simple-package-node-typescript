import { helloName } from '../index';
test('My Hello', () => {
  expect(helloName('Carl')).toBe('Hello Carl');
});