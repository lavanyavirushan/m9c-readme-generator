
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');


const promptUser = async () => {
    return await inquirer.prompt([
        {
            type: 'input', 
            name: 'title',
            message: 'What is the title of your project?',
            validate: validateInput,
        },
        {
            type: 'input', 
            name: 'description',
            message: 'Provide a short description explaining the what, why, and how of your project.',
            validate: validateDescription,
        },
        {
            type: 'checkbox', 
            name: 'table_of_content',
            message: 'Provide your table of content.',
            choices: [
                'Installation',
                'Usage',
                'License',
                'Contributing',
                'Tests'
            ] 
        },
        {
            type: 'input', 
            name: 'installation',
            message: 'What are the steps required to install your project?',
            validate: validateDescription
        },
        {
            type: 'input', 
            name: 'usage',
            message: 'Provide instructions and examples for use.',
            validate: validateDescription
        },
        {
            type: 'list', 
            name: 'license',
            message: 'Choose a license for your project:',
            choices: [
                'Apache',
                'MIT',
                'Boost Software License 1.0',
                'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 2.0',
                'GNU General Public License v2.0',
                'Mozilla',
                'The Unlicense'
            ]
        },
        {
            type: 'input', 
            name: 'contributing',
            message: 'Provide guidelines on how other developers can contribute to your project:',
            validate: validateDescription
        },
        {
            type: 'input', 
            name: 'tests',
            message: 'Provide any test instructions for your project:',
            validate: validateDescription
        },
        {
            type: 'input', 
            name: 'github',
            message: 'Provide your github username:',
            validate: validateInput
        },
        {
            type: 'input', 
            name: 'email',
            message: 'Provide your email address:',
            validate: validateEmail,
        },
    ]);
};

function validateInput(value) {
    if (value != "") {
        return true;
    } else {
        return "Input field cannot be empty";
    }
}

function validateDescription(value) {
    if (value.length >= 50) {
        return true;
    } else {
        return "Description needs to be at leat 50 characters long";
    }
}

function validateEmail(value){
    let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
    if(email){
        return true;
    }else{
        return "Invalid Email."
    }
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          console.error(err);
        }
        console.log('Success! README.md created.')
    });
}

async function init() {
    const questions = await promptUser()
    const generateContent = generateMarkdown(questions);
    writeToFile('README.md', generateContent)
}

// Function call to initialize app
init();
