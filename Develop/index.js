const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
	{
		type: "input",
		message: "What is your Project Title?",
		name: "projectTitle",
	},
	{
		type: "input",
		message: "Describe your project",
		name: "projectDescription",
	},

	{
		type: "input",
		message: "Installation instructions:",
		name: "installation",
	},
	{
		type: "input",
		message: "Usage",
		name: "usage",
	},
	{
		type: "input",
		message: "License",
		name: "license",
	},
	{
		type: "input",
		message: "Contributing",
		name: "contributing",
	},
	{
		type: "input",
		message: "Tests",
		name: "tests",
	},
	{
		type: "input",
		message: "Questions",
		name: "questions",
	},
	{
		type: "input",
		message: "Enter GitHub profile picture URL",
		name: "profilePic",
	},
	{
		type: "input",
		message: "Enter GitHub Repo URL",
		name: "repoURL",
	},
	{
		type: "input",
		message: "What is your GitHub username?",
		name: "username",
	},

	{
		type: "input",
		message: "What is your GitHub email?",
		name: "email",
	},
];

function init() {
	inquirer.prompt(questions).then(function (data) {
		console.log(data);
		fs.appendFileSync("GENREADME.md", generateMarkdown(data));
	});
}

init();
