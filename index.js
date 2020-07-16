// check that this file works:
console.log('Hello Node!');

// Define inquirer:
const inquirer = require('inquirer');

// array of questions for user
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
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
            name: 'instalsteps',
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
            message: 'List of credits.'
        },
        {
            type: 'input',
            name: 'license',
            message: 'Enter license.'
        }
    ]);
};



// function to write README file
function writeToFile(fileName, data) {

    // Here we write the "write" function. Learning Assistant instructed the following:
    // return
    // fs.writeFileSync(path.join(process.cwd(), fileName), data); // ...til here
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


promptUser()
    .then(answers => console.log(answers))
    .then(projectAnswers => console.log(projectAnswers));
