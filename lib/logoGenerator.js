// lib/logoGenerator.js

const fs = require('fs');

function generateLogo(text, textColor, shape, shapeColor) {
  // Define SVG content based on user input
  let svgContent = `
    <svg width="300" height="200">
  `;

  // Add shape element based on user input
  switch (shape.toLowerCase()) {
    case 'circle':
      svgContent += `
        <circle cx="150" cy="100" r="50" fill="${shapeColor}" />
      `;
      break;
    case 'triangle':
      svgContent += `
        <polygon points="150,50 100,150 200,150" fill="${shapeColor}" />
      `;
      break;
    case 'square':
      svgContent += `
        <rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />
      `;
      break;
    default:
      throw new Error('Invalid shape entered');
  }

  // Add text element
  svgContent += `
    <text x="50%" y="50%" text-anchor="middle" fill="${textColor}" font-size="50">${text}</text>
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
