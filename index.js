// TODO: Include packages needed for this application
const inquirer = require ("inquirer")
const generateMarkdown = require ("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [{ 
    type: "input",
    message: "Project title?",
    name: "Title"
},{
    type: "input",
    message: "Project description",
    name: "Descript"
},{
    type: "input",
    message: "Table of contents",
    name: "content"
},{
    type: "input",
    message: "License?",
    name: "License",
},{
    type: "input",
    message: "Installation instructions",
    name: "Installation"
},{
    type: "input",
    message: "Project usage",
    name: "Usage"
},{
    type: "input",
    message: "Credits info",
    name: "Credits"
},{
    type: "input",
    message: "Badges?",
    name: "Badges"
},{
    type: "input",
    message: "Features?",
    name: "Features"
},{
    type: "input",
    message: "Tests?",
    name: "Tests"
}];

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
