function generateMarkdown(data) {
	return `
<h1 align='center'>${data.projectTitle}</h1>

## 💡 Description 
<p>${data.projectDescription} <a href='${data.repoURL}' target='_blank'>GitHub Link</a></p>

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

${data.installation}

## Usage 

${data.usage}


// ## Credits

// List your collaborators, if any, with links to their GitHub profiles.

// If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

// If you followed tutorials, include links to those here as well.

## License

${data.license}


---

## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.


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
