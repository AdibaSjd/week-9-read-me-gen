// TODO: Include packages needed for this application
const inquirer = require ("inquirer")
const fs = require ("fs")
const generateMarkdown = require ("./utils/generateMarkdown");
const { default: Choice } = require("inquirer/lib/objects/choice");

// TODO: Create an array of questions for user input
const questions = [{ 
    type: "input",
    message: "Project title?",
    name: "Title"
},{
    type: "input",
    message: "Description",
    name: "Description"
},
{
    type: "input",
    message: "Installation",
    name: "Installation"
},{
    type: "input",
    message: "Usage",
    name: "Usage"
},{
    type: "input",
    message: "Credits",
    name: "Credits"
},{
    type: "list",
    message: "license",
    name: "license",
    choices:['MIT', 'ISC', 'WTFPL','Zlib'],
    filter(val) {
        return val.toLowerCase();
    }
},{
    type: "input",
    message: "Contributors",
    name: "Contributors"
},{
    type: "input",
    message: "Tests",
    name: "Tests"
},{
    type: "input",
    message: "Questions",
    name: "Questions"
}
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown (data), err => console.log(err))
    
}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions).then(answer => {
        console.log(answer)
        writeToFile("ReadMe.md", answer)
    })
  
}
// Function call to initialize app
init();
