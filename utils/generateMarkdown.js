// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ## Description 
  ${data.Description}

  ## Table of Content 
  - [Description](#Description)
  - [Intallisation](#Installisation)
  - [Usage](#Usage)
  - [credits](#Credits)
  - [license](#License)
  - [Badges](#Badges)
  - [Features](#Features)
  - [Tests](#Tests)

  ## Installation
  ${data.Installation}

  ## Usage 
  ${data.Usage}

  ## Credits 
  ${data.Credits}

  ## License
   ${data.License}

  ## Badges
  ${data.Badges}

  ## Features
  ${data.Features}

  ## Tests
  ${data.Tests}  
`;
}

module.exports = generateMarkdown;
