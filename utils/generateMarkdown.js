// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'wtfpl') {
    return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
  }
  else if (license === 'zlib') {
    return `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`;
  }
  else if (license === 'isc') {
   return  `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`;
  }
  else if (license === 'mit') {
   return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else {
  return ''
  }
}
// TODO: Create a function that returns the license link 
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'None') {
    return `\n  • [license](#License)`;
  }
  return '';
}
// TODO: Create a function that returns the license link 
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    licensed under the ${license} license`
  }
  return '';
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ${renderLicenseBadge(data.license)}

  ## Description 
  ${data.Description}

  ## Table of Content 
  • [Description](#Description)\n
  • [Installation](#Installation)\n
  • [Usage](#Usage)\n
  • [credits](#Credits)\n ${renderLicenseLink(data.license)}\n
  • [Contriutors](#Contributors)\n
  • [Tests](#Tests)\n
  • [Questions](#Questions)\n
  



  ## Installation
  ${data.Installation}

  ## Usage 
  ${data.Usage}

  ## Credits 
  ${data.Credits}

  ${renderLicenseSection(data.license)}
  
  ## license
   ${data.license}
  
  ## Contributors
  ${data.Contributors}

  ## Tests
  ${data.Tests}  

  ## Questions
  ${data.Questions}  
  
`;
}

module.exports = generateMarkdown;
