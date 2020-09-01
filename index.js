const inquirer = require('inquirer');


const employee = [
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

const manager = [
    {
        type: "input",
        name: "office-number",
        message: "Please enter your office number"
    }
];

const engineer = [
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username"
    }
];

const intern = [
    {
        type: "input",
        name: "school",
        message: "Please enter the name of your school"
    }
];

const employees = [];

const employeeRole = inquirer
.prompt([
  {
    type: 'list',
    name: 'role',
    message: 'Please select your role',
    choices: ['Manager', 'Engineer', "Intern"],
  },
])
.then(answers => {
  console.info('Answer:', answers.role);
});


if (role === manager) {
    const newManager = (answers.name, answers.id, answers.email, answers.office-number);
    employees.push(manager);
}

else if (role === engineer) {
 const newEngineer = (answers.name, answers.id, answers.email, answers.github);
 employees.push(engineer);
}

else (role === intern) {
    const newIntern = (answers.name, answers.id, answers.email, answers.school);
    employees.push(intern);
}