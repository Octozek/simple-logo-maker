const fs = require('fs');

function generateLogo(text, textColor, shape, shapeColor) {
  // Generate SVG content
  var svgContent = `
    <svg width="300" height="200">
  `;

  // Add shape element
  switch (shape.toLowerCase()) {
    case 'circle':
      svgContent += `
        <circle cx="150" cy="100" r="100" fill="${shapeColor}" />
      `;
      break;
    case 'triangle':
      // Make the triangle the same size as the circle
      var triangleHeight = 173.21; // Height of an equilateral triangle with sides equal to the diameter of the circle (200)
      var triangleWidth = 200; // Width of an equilateral triangle with sides equal to the diameter of the circle
      var triangleX = 150 - (triangleWidth / 2);
      var triangleY = 100 - (triangleHeight / 2);
      svgContent += `
        <polygon points="${triangleX},${triangleY + triangleHeight} ${triangleX + triangleWidth},${triangleY + triangleHeight} 150,${triangleY}" fill="${shapeColor}" />
      `;
      break;
    case 'square':
      // Make the square the same size as the circle
      var squareSize = 200; // Adjust as needed
      var squareX = 150 - (squareSize / 2);
      var squareY = 100 - (squareSize / 2);
      svgContent += `
        <rect x="${squareX}" y="${squareY}" width="${squareSize}" height="${squareSize}" fill="${shapeColor}" />
      `;
      break;
    default:
      throw new Error('Invalid shape entered');
  }

  // Calculate text position based on shape
  var textX1, textX2, textX3, textY;
  switch (shape.toLowerCase()) {
    case 'circle':
    case 'triangle':
    case 'square':
      textX1 = 105; // Adjusted position for the first character
      textX2 = 150;
      textX3 = 195; // Adjusted position for the third character
      textY = 110; // Adjust as needed
      break;
    default:
      throw new Error('Invalid shape entered');
  }

  // Add text elements for each character
  svgContent += `
    <text x="${textX1}" y="${textY}" text-anchor="middle" fill="${textColor}" font-size="50">${text[0]}</text>
    <text x="${textX2}" y="${textY}" text-anchor="middle" fill="${textColor}" font-size="50">${text[1]}</text>
    <text x="${textX3}" y="${textY}" text-anchor="middle" fill="${textColor}" font-size="50">${text[2]}</text>
  `;

  // Close SVG element
  svgContent += `
    </svg>
  `;

  // Write SVG content to logo.svg file
  fs.writeFileSync('logo.svg', svgContent);

  console.log('Generated logo.svg');
}

module.exports = { generateLogo };
