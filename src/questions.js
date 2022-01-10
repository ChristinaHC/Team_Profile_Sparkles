const { TestResult } = require("@jest/types");
const { truncate } = require("lodash");

const genQuestions = [{
    type: "input",
    name: "managerName",
    message: "Please enter the manager's name (required).",
    validate: managerNameInput => {
        if (managerNameInput) {
            return true;
        } else {
            console.log("Please enter the manager's name!");
            return false;
        };
    }
},
{
    type: "input",
    name: "managerIdNumber",
    message: "Please enter the manager's employee ID number (required).",
    validate: managerIdNumberInput => {
        if (managerIdNumberInput) {
            return true;
        } else {
            console.log("Please enter the manager's employee ID number!");
            return false;
        };
    }
},
{
    type: "input",
    name: "managerEmail",
    message: "Please enter the manager's email address (required).",
    validate: managerEmailInput => {
        if (managerEmailInput) {
            return true;
        } else {
            console.log("Please enter the manager's email address!");
            return false;
        };
    }
},
{
    type: "input",
    name: "managerOfficeNumber",
    message: "Please enter the manager's office number (required).",
    validate: managerOfficeNumberInput => {
        if (managerOfficeNumberInput) {
            return true;
        } else {
            console.log("Please enter the manager's office number!");
            return false;
        };
    }
},
{
    type: "rawlist",
    name: "addEmployee",
    message: "Please choose another member to add to the team or select 'I'm Done'.",
    choices: [
        "Engineer",
        "Intern",
        "I'm Done!"
    ],
    default: 0
}];

const engineerQuestions = [{
    type: "input",
    name: "engineerName",
    message: "Please enter the engineer's name (required).",
    validate: engineerNameInput => {
        if (engineerNameInput) {
            return true;
        } else {
            console.log("Please enter the engineer's name!");
            return false;
        };
    }
},
{
    type: "input",
    name: "engineerIdNumber",
    message: "Please enter the engineer's employee ID number (required).",
    validate: engineerIdNumberInput => {
        if (engineerIdNumberInput) {
            return true;
        } else {
            console.log("Please enter the engineer's employee ID number!");
            return false;
        };
    }
},
{
    type: "input",
    name: "engineerEmail",
    message: "Please enter the engineer's email address (required).",
    validate: engineerEmailInput => {
        if (engineerEmailInput) {
            return true;
        } else {
            console.log("Please enter the engineer's email address!");
            return false;
        };
    }
},
{
    type: "input",
    name: "engineerGithubName",
    message: "Please enter the engineer's GitHub user name (required).",
    validate: engineerGithubNameInput => {
        if (engineerGithubNameInput) {
            return true;
        } else {
            console.log("Please enter the engineer's GitHub user name!");
            return false;
        };
    }
},
{
    type: "rawlist",
    name: "addEmployee",
    message: "Please choose another member to add to the team or select 'I'm Done'.",
    choices: [
        "Engineer",
        "Intern",
        "I'm Done!"
    ],
    default: 0
}];

const internQuestions = [{
    type: "input",
    name: "internName",
    message: "Please enter the intern's name (required).",
    validate: internNameInput => {
        if (internNameInput) {
            return true;
        } else {
            console.log("Please enter the intern's name!");
            return false;
        };
    }
},
{
    type: "input",
    name: "internIdNumber",
    message: "Please enter the intern's employee id number (required).",
    validate: internIdNumberInput => {
        if (internIdNumberInput) {
            return true;
        } else {
            console.log("Please enter the intern's employee id number!");
            return false;
        };
    }
},
{
    type: "input",
    name: "internEmail",
    message: "Please enter the intern's email address (required).",
    validate: internEmailInput => {
        if (internEmailInput) {
            return true;
        } else {
            console.log("Please enter the intern's email address!");
            return false;
        };
    }
},
{
    type: "input",
    name: "internSchool",
    nessage: "Please enter the school the intern is attending (required).",
    validate: internSchoolInput => {
        if (internSchoolInput) {
            return true;
        } else {
            console.log("Please enter the school the intern is attending!");
            return false;
        };
    }
},
{
    type: "rawlist",
    name: "addEmployee",
    message: "Please choose another member to add to the team or select 'I'm Done'.",
    choices: [
        "Engineer",
        "Intern",
        "I'm Done!"
    ],
    default: 0
}];

module.exports = { genQuestions, engineerQuestions, internQuestions };