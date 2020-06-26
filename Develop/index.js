const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
	{
		type: "input",
		message: "What is your Repo Name?",
		name: "repoName",
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

inquirer.prompt(questions).then(function (inquirer) {
	console.log(inquirer.name);
	generateMarkdown(inquirer);
});

function writeToFile(fileName, data) {
	generateMarkdown(data);
}

function init() {
	generateMarkdown();
}

init();
