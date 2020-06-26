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
* [Questions](#Questions)


## Installation

${data.installation}


## Usage 

${data.usage}


## License

${data.license}


## Badges

![Issues](https://img.shields.io/github/issues/${data.username}/${data.repoName})


## Contributing

${data.contributing}


## Tests

${data.tests}


## Questions

![ProfilePic](${data.profilePicURL})
${data.email}

`;
}

module.exports = generateMarkdown;
