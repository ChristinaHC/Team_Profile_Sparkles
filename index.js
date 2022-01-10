const inquirer = require("inquirer");
const { genQuestions, engineerQuestions, internQuestions } = require("./src/questions");
const generateHTML = require("./src/generateHTML");
const writeHTML = require("./src/writeHTML");

const gen = () => {
    return inquirer.prompt(genQuestions);
};

const promptEngineer = projectData => {
    if (!projectData.engineers)  {
        projectData.engineers = [];
    }
    return inquirer.prompt(engineerQuestions)
    .then(newEngineerData => {
        projectData.engineer.push(newEngineerData)
        if (newEngineerData.addEmployee === "engineer") {
            promptEngineer(projectData);
        } else if (newEngineerData.addEmployee === "intern") {
            promptIntern(projectData);
        } else {
            writeHTML(generateHTML(projectData));
        };
    });
};

const promptIntern = projectData => {
    if (!projectData.intern) {
        projectData.intern = [];
    }
    return inquirer.prompt(internQuestions)
    .then(newInternData => {
        projectData.intern.push(newInternData)
        if (newInternData.addEmployee === "Intern") {
            promptIntern(projectData)
        } else if (newInternData.addEmployee === "engineer") {
            promptEngineer(projectData);
        } else {
            writeHTML(generateHTML(projectData));
        };
    });
};

gen()
    .then(data => {
        if (data.addEmployee === "engineer") {
            promptEngineer(data)
        } else if (data.addEmployee === "intern") {
            promptIntern(data)
        } else {
            writeHTML(generateHTML(data));
        };
    });