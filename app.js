const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");








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