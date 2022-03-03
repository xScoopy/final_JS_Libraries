/* eslint-disable no-undef */
// challenge 5

const { formatPhone } = require('../index');

const exampleNumber = '6124456860';
const shortNumber = '12345';
const longNumber = '1234567891011121314';

test('Format number correctly', () => {
  const formattedNumber = formatPhone(exampleNumber);
  expect(formattedNumber).toBe('Phone: (612) 445-6860');
});
test('short phone number error', () => {
  expect(() => {
    formatPhone(shortNumber);
  }).toThrow('Phone number was too short');
});
test('long phone number error', () => {
  expect(() => {
    formatPhone(longNumber);
  }).toThrow('Phone number too long');
});
test('int input instead of string', () => {
  expect(() => {
    formatPhone(1234567891);
  }).toThrow('Please provide phone number in string format');
});
