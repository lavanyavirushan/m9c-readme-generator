
function renderLicenseBadge(license) {
  let badge = "";

  if(license === 'MIT'){
    badge = `![badge](https://img.shields.io/badge/license-MIT-brightblue)<br />`
  }else if(license === "Apache"){
    badge = `![badge](https://img.shields.io/badge/license-Apache-brightblue)<br />`
  }else if(license === "Boost Software License 1.0"){
    badge = `![badge](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)<br />`
  }else if(license === "Creative Commons Zero v1.0 Universal"){
    badge = `![badge](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)<br />`
  }else if(license === "Eclipse Public License 2.0"){
    badge = `![badge](https://img.shields.io/badge/License-EPL_2.0-red.svg)<br />`
  }else if(license === "GNU General Public License v2.0"){
    badge = `![badge](https://img.shields.io/badge/License-GPLv3-blue.svg)<br />`
  }else if(license === "Mozilla"){
    badge = `![badge](https://img.shields.io/badge/license-Mozilla-brightblue)<br />`
  }else if(license === "The Unlicense"){
    badge = `![badge](https://img.shields.io/badge/license-Unlicense-blue.svg)<br />`
  }

  return badge;
}

function renderLicenseLink(license) {
  let link = "";

  if(license === 'MIT'){

  }else if(license === "Apache"){

  }else if(license === "Boost Software License 1.0"){

  }else if(license === "Creative Commons Zero v1.0 Universal"){

  }else if(license === "Eclipse Public License 2.0"){

  }else if(license === "GNU General Public License v2.0"){

  }else if(license === "Mozilla"){

  }else if(license === "The Unlicense"){

  }

  return link;
}


function renderLicenseSection(license) {}

function getTableOfContents(tableOfContents){
  let contents = ``;
  if(tableOfContents.includes("Installation")){
    contents += `* [Installation](#-Installation) \n`;
  }
  if(tableOfContents.includes("Usage")){
    contents += `* [Usage](#-Usage) \n`;
  }
  if(tableOfContents.includes("License")){
    contents += `* [License](#-Installation) \n`;
  }
  if(tableOfContents.includes("Contributing")){
    contents += `* [Contributing](#-Contributing) \n`;
  }
  if(tableOfContents.includes("Tests")){
    contents += `* [Tests](#-Tests) \n`;
  }

  if(contents != ``){
    return `## Table of Contents 
  ${contents}
    `;
  }

  return "";
}

function generateMarkdown(answers) {
  return `
  # Project Title
  ${answers.title}
  ${answers.description}

  ${getTableOfContents(answers.table_of_content)}
      
  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}
  
  ## License 
  ${renderLicenseBadge(answers.license)}
  Distributed under the ${answers.license} License. See [${answers.license} LICENSE](https://mit-license.org/) for more information.

  ## Contributing 
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## Contact Information 
  * GitHub Username: ${answers.github}
  * Contact Email: ${answers.email}`;
}

module.exports = generateMarkdown;
