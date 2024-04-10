const fs = require('fs');
const { Circle, Triangle, Square } = require('./shapes');

async function generateLogo(text, textColor, shape, shapeColor) {
  let shapeObj;
  switch (shape.toLowerCase()) {
    case 'circle':
      shapeObj = new Circle();
      break;
    case 'triangle':
      shapeObj = new Triangle();
      break;
    case 'square':
      shapeObj = new Square();
      break;
    default:
      throw new Error('Invalid shape entered');
  }

  const svgContent = `
    <svg width="300" height="200">
      ${shapeObj.draw(shapeColor)}
      <text x="50%" y="50%" text-anchor="middle" fill="${textColor}" font-size="50">${text}</text>
    </svg>
  `;

  fs.writeFileSync('logo.svg', svgContent);
}

module.exports = { generateLogo };
