const Calculator = require('./calculator');

describe('Calculator', () => {
  describe('add', () => {
    const calculator = new Calculator();

    test('adds two positive numbers correctly', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('adds a positive and a negative number correctly', () => {
      expect(calculator.add(2, -3)).toBe(-1);
    });

    test('adds two negative numbers correctly', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });
  });

  describe('subtract', () => {
    const calculator = new Calculator();

    test('subtracts two positive numbers correctly', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('subtracts a positive and a negative number correctly', () => {
      expect(calculator.subtract(5, -3)).toBe(8);
    });

    test('subtracts two negative numbers correctly', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });
  });

  describe('divide', () => {
    const calculator = new Calculator();

    test('divides two positive numbers correctly', () => {
      expect(calculator.divide(6, 3)).toBe(2);
    });

    test('divides a positive number by a negative number correctly', () => {
      expect(calculator.divide(6, -3)).toBe(-2);
    });

    test('throws an error when dividing by zero', () => {
      expect(() => calculator.divide(6, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('multiply', () => {
    const calculator = new Calculator();

    test('multiplies two positive numbers correctly', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    test('multiplies a positive and a negative number correctly', () => {
      expect(calculator.multiply(2, -3)).toBe(-6);
    });

    test('multiplies two negative numbers correctly', () => {
      expect(calculator.multiply(-2, -3)).toBe(6);
    });
  });
});
