// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// TODO: Create an array of questions for user input
// const questions = [];
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your application?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your application in a few sentences...'
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be used to install dependencies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What should the user know about using your application?'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What should the user know about contributing to your application?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be used to test?',
        default: 'npm test'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your application have?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'Custom', 'None']
    },
    {
        type: 'input',
        name: 'githubUser',
        message: 'What is your GitHub user name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
])


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
