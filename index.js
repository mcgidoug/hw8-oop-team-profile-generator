// required programs
const generateHtml = require("./src/generateHTML");
const fs = require("fs");
const inquirer = require("inquirer");

// team member js files
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// empty team array
const teamArray = [];

const addEmployee = (role = "manager") => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: `What is the name of the ${role}?`,
      },
      {
        type: "input",
        name: "id",
        message: `What is the ${role}'s ID #?`,
      },
      {
        type: "input",
        name: "email",
        message: `What is the ${role}'s email?`,
      },
      {
        type: "input",
        name: "officeNumber",
        message: `What is the ${role}'s office number?`,
      },
    ])
    .then((userInput) => {
      const { name, id, email, officeNumber } = userInput;
      const manager = new Manager(name, id, email, officeNumber);

      teamArray.push(manager);
    })
    .then(() => {
      return inquirer
        .prompt([
          {
            type: "list",
            name: "choice",
            message: "Would you like to add another employee?",
            choices: ["Engineer", "Intern", "Finished"],
          },
        ])
        .then((addAnother) => {
          switch (addAnother.choice) {
            case "Engineer":
              addEmployee("engineer");
              break;
            case "Intern":
              addEmployee("intern");
              break;
            default:
              // Finish
              break;
          }
        });
    });
};

addEmployee();
