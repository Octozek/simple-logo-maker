const readline = require('readline');
const fs = require('fs');
const path = require('path');
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

// Function to create a menu and return the selected option
async function createMenu(options) {
  let selectedIndex = 0;
  while (true) {
    console.clear(); // Clear the console for a cleaner menu display
    options.forEach((option, index) => {
      if (index === selectedIndex) {
        console.log(`➤ ${option}`);
      } else {
        console.log(`  ${option}`);
      }
    });
    const key = await getKey(); // Wait for user input
    if (key === 'up') {
      selectedIndex = (selectedIndex === 0) ? options.length - 1 : selectedIndex - 1;
    } else if (key === 'down') {
      selectedIndex = (selectedIndex === options.length - 1) ? 0 : selectedIndex + 1;
    } else if (key === 'enter') {
      return options[selectedIndex]; // Return the selected option
    }
  }
}

// Function to get key press for menu navigation
function getKey() {
  return new Promise(resolve => {
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.once('data', key => {
      process.stdin.setRawMode(false);
      resolve(key.toString() === '\u001b[A' ? 'up' : key.toString() === '\u001b[B' ? 'down' : 'enter');
    });
  });
}

async function run() {
  try {
    const text = await prompt('Enter up to three characters: ');
    const textColor = await prompt('Enter text color (keyword or hex): ');
    const shape = await createMenu(['circle', 'triangle', 'square']);
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
