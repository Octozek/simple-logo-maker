function generateLogo() {
  // Retrieve values from input fields
  var text = document.getElementById('textInput').value;
  var textColor = document.getElementById('textColorInput').value;
  var shape = document.getElementById('shapeInput').value;
  var shapeColor = document.getElementById('shapeColorInput').value;

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
      alert('Invalid shape entered');
      return;
  }

  // Calculate text position based on shape
  var textX, textY;
  switch (shape.toLowerCase()) {
    case 'circle':
      textX = 150;
      textY = 100;
      break;
    case 'triangle':
      textX = 150;
      textY = 125; // Adjust Y position for triangle
      break;
    case 'square':
      textX = 150;
      textY = 100;
      break;
  }

  // Add text element
  svgContent += `
    <text x="${textX}" y="${textY}" text-anchor="middle" fill="${textColor}" font-size="50">${text}</text>
  `;

  // Close SVG element
  svgContent += `
    </svg>
  `;

  // Display generated SVG
  document.getElementById('logoContainer').innerHTML = svgContent;
}