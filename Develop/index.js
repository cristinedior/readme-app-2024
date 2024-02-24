// TODO: function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const inquirer = require('inquirer');
const fs = require('fs');


function renderLicenseBadge(license) {
  if(license) {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return '';
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
    if(license) {
      return `\n* [License](#license)\n`;
    }
    return '';
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
    if(license) {
      return `## License
      This project is licensed under the ${license} license.`;
    }
    return '';
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
To install necessary dependencies, run the following command in your terminal:
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
We love contributions! Please follow these guidelines:
${data.contributing}

## Tests
To run tests, run the following command in your terminal:
${data.tests}

## Questions
For any questions, please contact [${data.username}](https://github.com/${data.username}) or email at ${data.email}.

`;
}
// generate inquirer prompts to allow for above markdown data to be input by user
const prompts = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of the project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:',
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];
// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}
// function to initialize program
function init() {
  console.log('Init function called');
  inquirer.prompt(prompts).then((data) => {
    const markdown = generateMarkdown(data);
    writeToFile('README.md', markdown);
  }).catch((error) => {
    console.error('An error occurred:', error);
  });

module.exports = generateMarkdown;
}

init();