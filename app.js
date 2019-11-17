const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

function getTeamInfo() {
  return inquirer.prompt([
    {
      type: "input",
      memberName: "memberName",
      message: "What is your team member's  name?"
    },    
    {
      type: "input",
      name: "title",
      message: "What is your team members title?"
    },
    {
      type: "input",
      name: "idNumber",
      message: "What is their ID Number?"
    },
    {
      type: "input",
      name: "hobby",
      message: "What is their email address?"
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username"
    },
    {
      type: "input",
      name: "linkedin",
      message: "Enter your LinkedIn URL."
    }
  ]);
}

getRole(); {
  return inquirer.prompt([{
    type: "list",
    name: "role",
    message: "Please selet this team member's role",
    choices: [
      "Manager",
      "Engineer", 
      "Intern",
      "Employee"
      ],
    default: "Employee"
  }
  ]); 
}