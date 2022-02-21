"use strict";
const inquirer = require("inquirer");
const fs = require("fs");

const parser = require("./parsemd")

//Questions that will be asked to the user in the terminal
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "list",
    name: "license",
    message: "What license are you using?",
    //Drop down menu of choices
    choices: [ "apache", "boost", "bsd2-clause", "bsd3-clause", "creative commons", "eclipse", "gnu", "mit", "mozilla"],
  },
  {
    type: "input",
    name: "description",
    message: "Write a brief description of your project.",
  },
  {
    type: "input",
    name: "usage",
    message: "Write the uses for your application.",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps for installing your application?",
  },
  {
    type: "input",
    name: "contributing",
    message: "How can others contribute to your application?",
  },
  {
  type: "input",
  name: "tests",
  message: "How can others test your application?",
},
  {
    type: "input",
    name: "sources",
    message: "Do you need to cite any sources?",
  },
];

// Connects parsemd.js to index.js
inquirer.prompt(questions).then((answers) => {
  let data = parser(answers)

  // Appends data to log.md file/creates file if one is not already created
  fs.appendFile("log.md", data, (err) =>
    // if error, console log error, else console log commit logged
    err ? console.error(err) : console.log("Commit logged!")
  );
});