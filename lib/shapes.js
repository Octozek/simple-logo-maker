// shapes.js

// Function to calculate the area of a circle
function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
  }
  
  // Function to calculate the perimeter of a circle
  function calculateCirclePerimeter(radius) {
    return 2 * Math.PI * radius;
  }
  
  // Function to calculate the area of a square
  function calculateSquareArea(side) {
    return side * side;
  }
  
  // Function to calculate the perimeter of a square
  function calculateSquarePerimeter(side) {
    return 4 * side;
  }
  
  // Function to calculate the area of a triangle
  function calculateTriangleArea(base, height) {
    return (base * height) / 2;
  }
  
  // Function to calculate the perimeter of a triangle
  function calculateTrianglePerimeter(side1, side2, side3) {
    return side1 + side2 + side3;
  }
  
  // Export the functions for use in other modules
  module.exports = {
    calculateCircleArea,
    calculateCirclePerimeter,
    calculateSquareArea,
    calculateSquarePerimeter,
    calculateTriangleArea,
    calculateTrianglePerimeter,
  };
  