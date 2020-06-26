function generateMarkdown(data) {
	return `
<h1 align='center'>${data.projectTitle}</h1>

## 💡 Description 
<p>${data.projectDescription} <a href='${data.repoURL}' target='_blank'>GitHub Link</a></p>

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#Contributing)
* [Tests](#Tests)



## Installation

${data.installation}

## Usage 

${data.usage}

## License

${data.license}

## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

${data.profilePic}
${data.email}

`;
}

module.exports = generateMarkdown;
