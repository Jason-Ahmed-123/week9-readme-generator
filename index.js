// A check to make sure that this file works:
// console.log('Hello Node!');

// Must download npm! (Done!)

// Define inquirer:
const inquirer = require('inquirer');

const fs = require('fs');

const path = require('path');

// This now goes to correct folder:
const generateMarkdown = require('./utils/generateMarkdown.js')

// array of questions for user
const questions = [{
        type: 'input',
        name: 'title',
        message: 'What is your project title? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a short description of your project.',
    },
    {
        type: 'input',
        name: 'installsteps',
        message: 'What are the installation steps (if any)?'
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'What are the user instructions?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List of credits:'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Enter your license (if any):'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your e-mail address:'
    }
];



// function to write README file (this will actually WRITE the file!):
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

// function to initialize program:
function init() {
    inquirer.prompt(questions)
        .then((responses) => {
            console.log('now generating README markdown file');
            writeToFile('README.md', generateMarkdown({
                ...responses
            })); // Note to self: The three dots "..." will gather the arguments into an array and expand the elements to fit in multiple places. //
        })
}

// function call to initialize program
init();