const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => 
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
        name: 'username',
        message: 'What is your GitHub user name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
]);

const generateREADME = (answers) =>
`
# ${answers.title}

[![GitHub License](https://img.shields.io/badge/license-${answers.license}-green)](License.md)

## Description

${answers.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Testing](#testing)
* [Questions](#questions)

## Installation

Run the following command to install dependencies:

\`\`\`
${answers.install}
\`\`\`

## Usage

${answers.usage}

## Contribution

${answers.contribute}

## Testing

For testing, run the following command:

\`\`\`
${answers.test}
\`\`\`

## License

${answers.license} 

## Questions

For any questions, please contact me by email or through my GitHub page
* [${answers.email}](mailto:${answers.email})
* [${answers.username}](https://github.com/${answers.username})
`;

const init = () => {
    promptUser().then((answers) => {
        try {
            const readme = generateREADME(answers);
            fs.writeFileSync('README.md', readme);
            console.log('Succesfully wrote README.md file');
        } catch (error) {
            console.log(error);
        }
    });
};

init();