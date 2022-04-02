const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const generateHTML = require("./src/generateHTML");
const employeeArray = [];

function createManager() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the Manager's ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the Manager's email address?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the Manager's office number?"
        }
    ])
    .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employeeArray.push(manager);
        addTeamMember();
    }) 
}

function addTeamMember() {
    inquirer
    .prompt([
        {
            type: "list",
            name: "addEmployee",
            message: "Would you like to add another employee?",
            choices: ["Add an engineer", "Add an intern", "I'm done building my team!"]
        }
    ])
    .then(answers => {
        if (answers.addEmployee == "Add an engineer") {
            createEngineer();
        } else if (answers.addEmployee == "Add an intern") {
            createIntern();
        } else {
            const generatedHTML = generateHTML(employeeArray);
            fs.writeFile("./dist/index.html", generatedHTML, () => {
                console.log("HTML was successfully generated!")
            });
        }
    })
}

function createEngineer() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?"        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the Engineer's email address?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?"
        }
    ])
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        employeeArray.push(engineer);
        addTeamMember();
    }) 
}

function createIntern() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the the intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email address?"
        },
        {
            type: "input",
            name: "school",
            message: "What school does the intern attend?"
        }
    ])
    .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        employeeArray.push(intern);
        addTeamMember();
    }) 
}

createManager();