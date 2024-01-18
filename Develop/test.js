const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// Mock data for testing
const testData = {
  title: 'Test Project',
  description: 'This is a test project.',
  installation: 'npm install',
  usage: 'node index.js',
  license: 'MIT',
  contributing: 'Contributions welcome!',
  tests: 'npm test',
  username: 'testuser',
  email: 'test@example.com',
};

// Inquirer prompts
const prompts = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the project title:',
  },
  // Add other prompts based on your application needs
];

// Function to simulate user input and generate README
async function testInquirer() {
  try {
    const userData = await inquirer.prompt(prompts);
    const finalData = { ...testData, ...userData };
    const markdown = generateMarkdown(finalData);
    console.log(markdown);
  } catch (error) {
    console.error('Error during inquirer prompts:', error);
  }
}

// Run the test function
testInquirer();