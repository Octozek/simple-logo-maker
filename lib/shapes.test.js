// Import the functions or classes you want to test
const { calculateCircleArea, calculateCirclePerimeter, calculateSquareArea, calculateSquarePerimeter, calculateTriangleArea, calculateTrianglePerimeter } = require('./shapes');

// Describe the test suite
describe('Shape Functions', () => {
  // Test cases for calculating area
  describe('calculateCircleArea', () => {
    test('calculates the area of a circle', () => {
      expect(calculateCircleArea(5)).toBeCloseTo(78.54); // The expected area for a circle with radius 5
    });
  });

  describe('calculateSquareArea', () => {
    test('calculates the area of a square', () => {
      expect(calculateSquareArea(4)).toBe(16); // The expected area for a square with side length 4
    });
  });

  describe('calculateTriangleArea', () => {
    test('calculates the area of a triangle', () => {
      expect(calculateTriangleArea(3, 4)).toBe(6); // The expected area for a triangle with base 3 and height 4
    });
  });

  // Test cases for calculating perimeter
  describe('calculateCirclePerimeter', () => {
    test('calculates the perimeter of a circle', () => {
      expect(calculateCirclePerimeter(5)).toBeCloseTo(31.42); // The expected perimeter for a circle with radius 5
    });
  });

  describe('calculateSquarePerimeter', () => {
    test('calculates the perimeter of a square', () => {
      expect(calculateSquarePerimeter(4)).toBe(16); // The expected perimeter for a square with side length 4
    });
  });

  describe('calculateTrianglePerimeter', () => {
    test('calculates the perimeter of a triangle', () => {
      expect(calculateTrianglePerimeter(3, 4, 5)).toBe(12); // The expected perimeter for a triangle with sides 3, 4, and 5
    });
  });
});
