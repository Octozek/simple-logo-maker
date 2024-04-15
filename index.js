const readline = require('readline');
const fs = require('fs');
const path = require('path'); // Import the 'path' module
const { generateLogo } = require('./lib/logoGenerator');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prompt(question) {
  return new Promise(resolve => {
    rl.question(question, answer => {
      resolve(answer);
    });
  });
}

async function run() {
  try {
    const text = await prompt('Enter up to three characters: ');
    const textColor = await prompt('Enter text color (keyword or hex): ');
    const shape = await prompt('Choose a shape (circle, triangle, square): ');
    const shapeColor = await prompt('Enter shape color (keyword or hex): ');

    // Ask for the file path to save the SVG file
    const filePath = await prompt('Enter the file path to save the SVG file (press enter for default location): ');

    // Generate default file path if none is provided
    const defaultFilePath = filePath ? filePath : path.join(__dirname, 'logo.svg');

    // Call generateLogo with the specified file path
    await generateLogo(text, textColor, shape, shapeColor, defaultFilePath);

    console.log(`Generated ${defaultFilePath}`);
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    rl.close();
  }
}

run();
