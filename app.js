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

  // Calculate maximum font size based on shape size
  var maxSize;
  switch (shape.toLowerCase()) {
    case 'circle':
      maxSize = 100; // Maximum font size for circle
      break;
    case 'triangle':
      maxSize = 50; // Maximum font size for triangle
      break;
    case 'square':
      maxSize = 100; // Maximum font size for square
      break;
  }

  // Calculate text position based on shape
  var textX1, textX2, textX3, textY;
  switch (shape.toLowerCase()) {
    case 'circle':
      textX1 = 105; // Adjusted position for the first character
      textX2 = 150;
      textX3 = 195; // Adjusted position for the third character
      textY = 110; // Adjust as needed
      break;
    case 'triangle':
      textX1 = 105; // Adjusted position for the first character
      textX2 = 150;
      textX3 = 195; // Adjusted position for the third character
      textY = 135; // Adjust Y position for triangle
      break;
    case 'square':
      textX1 = 105; // Adjusted position for the first character
      textX2 = 150;
      textX3 = 195; // Adjusted position for the third character
      textY = 110; // Adjust as needed
      break;
  }

  // Calculate font size to fit text within shape
  var fontSize = maxSize;
  var textWidth, textHeight;
  do {
    var textWidth1, textWidth2, textWidth3;
    var textHeight1, textHeight2, textHeight3;

    // Get text dimensions for each character
    var tempSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var textElement1 = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    var textElement2 = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    var textElement3 = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    textElement1.setAttribute('font-size', fontSize);
    textElement2.setAttribute('font-size', fontSize);
    textElement3.setAttribute('font-size', fontSize);
    textElement1.textContent = text[0];
    textElement2.textContent = text[1];
    textElement3.textContent = text[2];
    tempSvg.appendChild(textElement1);
    tempSvg.appendChild(textElement2);
    tempSvg.appendChild(textElement3);
    document.body.appendChild(tempSvg);
    var bbox1 = textElement1.getBBox();
    var bbox2 = textElement2.getBBox();
    var bbox3 = textElement3.getBBox();
    textWidth1 = bbox1.width;
    textHeight1 = bbox1.height;
    textWidth2 = bbox2.width;
    textHeight2 = bbox2.height;
    textWidth3 = bbox3.width;
    textHeight3 = bbox3.height;
    document.body.removeChild(tempSvg);

    // Reduce font size until text fits within shape
    fontSize -= 1;
  } while ((textWidth1 > maxSize || textWidth2 > maxSize || textWidth3 > maxSize ||
          textHeight1 > maxSize || textHeight2 > maxSize || textHeight3 > maxSize) && fontSize > 0); // Adjust condition as needed

  // Add text elements for each character
  svgContent += `
    <text x="${textX1}" y="${textY}" text-anchor="middle" fill="${textColor}" font-size="${fontSize}">${text[0]}</text>
    <text x="${textX2}" y="${textY}" text-anchor="middle" fill="${textColor}" font-size="${fontSize}">${text[1]}</text>
    <text x="${textX3}" y="${textY}" text-anchor="middle" fill="${textColor}" font-size="${fontSize}">${text[2]}</text>
  `;

  // Close SVG element
  svgContent += `
    </svg>
  `;

  // Display generated SVG
  document.getElementById('logoContainer').innerHTML = svgContent;
}
