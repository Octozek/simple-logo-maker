function generateLogo() {
  // Retrieve values from input fields
  var text = document.getElementById('textInput').value;
  var textColor = document.getElementById('textColorInput').value;
  var shape = document.getElementById('shapeInput').value;
  var shapeColor = document.getElementById('shapeColorInput').value;

  // Check if the input text length is not equal to 3
  if (text.length !== 3) {
    alert('Please enter exactly three characters.');
    return;
  }

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
      alert('Invalid shape entered');
      return;
  }

  // Calculate text position and font size based on shape
  var textX, textY, fontSize;
  switch (shape.toLowerCase()) {
    case 'circle':
      textX = 150;
      textY = 100;
      fontSize = 100; // Maximum font size for circle
      break;
    case 'triangle':
      textX = 150;
      textY = 135; // Adjust Y position for triangle
      fontSize = 30; // Maximum font size for triangle
      break;
    case 'square':
      textX = 150;
      textY = 100;
      fontSize = 100; // Maximum font size for square
      break;
  }

  // Add text element
  svgContent += `
    <text x="${textX}" y="${textY}" text-anchor="middle" fill="${textColor}" font-size="${fontSize}">${text}</text>
  `;

  // Close SVG element
  svgContent += `
    </svg>
  `;

  // Display generated SVG
  document.getElementById('logoContainer').innerHTML = svgContent;
}
