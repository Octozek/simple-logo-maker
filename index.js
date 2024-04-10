const readline = require('readline');
const fs = require('fs');
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

    await generateLogo(text, textColor, shape, shapeColor);

    console.log('Generated logo.svg');
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    rl.close();
  }
}

run();
