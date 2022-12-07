// TODO: Include packages needed for this application
const inquirer = require ("inquirer")
const fs = require ("fs")
const generateMarkdown = require ("./utils/generateMarkdown")
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
    type: "input",
    message: "License",
    name: "License",
},{
    type: "input",
    message: "Badges",
    name: "Badges"
},{
    type: "input",
    message: "Features",
    name: "Features"
},{
    type: "input",
    message: "Tests",
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
