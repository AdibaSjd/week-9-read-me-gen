// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (licence === 'WTFPL') {
    return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
  }
  else if (license === 'Zlib') {
    return `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`;
  }
  else if (license === 'ISC') {
   return  `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`;
  }
  else if (license === 'MIT') {
   return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else {
  return ''
  }
}
// TODO: Create a function that returns the license link 
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'None') {
    return `\n• [license](#License)`;
  }
  return '';
}
// TODO: Create a function that returns the license link 
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (licence !== 'None') {
    return `## License
    licensed under the ${license} license`
  }
  return '';
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ${renderLicenseBadge(data.license)}


  ## Badges
  ${data.Badges}

  ## License
   ${data.License}
   ${renderLicenseSection(data.license)}
   ${renderLicenseLink(data.license)} 

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
  
  ## Features
  ${data.Features}

  ## Tests
  ${data.Tests}  
`;
}

module.exports = generateMarkdown;
