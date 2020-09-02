const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


const employeeQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please enter your name",
    },
    {
        type: "input",
        name: "id",
        message: "Please enter your ID"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address"
    },
]

const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please enter your name",
    },
    {
        type: "input",
        name: "id",
        message: "Please enter your ID"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter your office number"
    }
];

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please enter your name",
    },
    {
        type: "input",
        name: "id",
        message: "Please enter your ID"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address"
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username"
    }
];

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please enter your name",
    },
    {
        type: "input",
        name: "id",
        message: "Please enter your ID"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address"
    },
    {
        type: "input",
        name: "school",
        message: "Please enter the name of your school"
    }
];

const employees = [];
const switchQuestion = [{
    type: "list",
    name: "continue",
    message: "Would you like to add additional employees?",
    choices: ["Manager", "Engineer", "Intern", "None"]
}]

function switchStatement() {
    inquirer.prompt(switchQuestion)
    
    .then(function(response) {
        switch(response.continue) {
            case "Manager":
                init()
              break;
            case "Engineer":
                addEngineer()
              break;
            case "Intern":
                addIntern()
            break;
            default:
                compileTeam()
          }
        console.log(response)
    
    })
}

function compileTeam() {
    if(!fs.existsSync (OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(employees), "utf-8")
}

function addEngineer() {
    inquirer.prompt(engineerQuestions).then(function(response){
        console.log(response);
        const engineer = new Engineer (
            response.name,
            response.id,
            response.email,
            response.github
        )
        employees.push(engineer);
        switchStatement();
    })
}

function addIntern() {
    inquirer.prompt(internQuestions).then(function(response){
        console.log(response);
        const intern = new Intern (
            response.name,
            response.id,
            response.email,
            response.school
        )
        employees.push(intern);
        switchStatement();
    })
}

function init() {
    inquirer.prompt(managerQuestions).then(function(response){
        console.log(response);
        const manager = new Manager (
            response.name,
            response.id,
            response.email,
            response.officeNumber
        )
        employees.push(manager);
        switchStatement();
    })
}

function exit() {
    console.log("Goodbye");
}

init()
