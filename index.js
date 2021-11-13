// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');
const { runInContext } = require('vm');
// TODO: Create an array of questions for user input
const questions = [
    // Project Title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a title to continue.');
                return false;
            }
        }

    },
    // Description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to provide a description');
                return false;
            }
        }
    },
    // Usage 
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You need to provide information on how to use the project');
                return false;
            }
        }
    },
    // Installation 
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project? (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You need to provide installation info to move on.');
                return false;
            }
        }
    },
    //Contribution
    {
        type: 'input',
        name: 'contribution',
        message: 'How should people contribute? (Required)',
        validate: contributeInput => {
            if (contributeInput) {
                return true;
            } else {
                console.log('You need to provide information on how to contribute.');
                return false;
            }
        }
    },
    //Test
    {
        type: 'input',
        name: 'testing',
        message: 'How do you test this project? (Required)',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('You need to describe how to test this project.');
                return false;
            }
        }
    },
    //License
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project (Required)',
        choices: ['Apache', 'MIT', 'GNU-General-Public',
        'none'],
        validate: licensingInput => {
            if (licensingInput) {
            return true;
        } else {
            console.log('You must pick a license for the project.');
            return false;
        }
      }
    },
    //Github
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('PLease enter your github username.');
                return false;
            }
        }
    },
    //Email
    {
        type: 'input',
        name: 'email',
        message: 'Would you like to add an email address?',
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
    if (err)
        throw err;
    console.log('Success!')
});
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
