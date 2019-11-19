const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const team = [];
const teamIDs = [];


// Since every team will have one manager, I'll first prompt the user to add a manager 
function promptForManager() {
  return inquirer
  .prompt([{
    type: "input",
    message: "Please enter the team manager's first and last name.",
    name: "name"
  }, {
    type: "input",
    message: "Please enter the manager's id#",
    name: "id"
  }, {
    type: "input",
    message: "Please enter the manager's email",
    name: "email"
  }, {
    type: "input",
    message: "What is the manager's office number",
    name: "officeNumber"
  }
  ])  
}

// Build an instance of the manager based on their response
promptForManager()
  .then(function(res) {
    manager = new Manager(
      res.name,
      res.id,
      res.email,
      res.role,
      res.officeNumber,
      );
  
    team.push(manager);
    teamIDs.push(manager.id)
    console.log(team);
    console.log(teamIDs);
  })

// Now that the manager is saved to the empty array, I want to 
  

  

// createTeamMember(); {
//   return inquirer.prompt([{
//     type: "input",
//     name: "Manager Info",
//     message: "Please enter the team Manager's first and last name",
//     choices: [
//       "Engineer", 
//       "Intern",
//       ],
//     default: "Employee"
//   }
//   ]); 
// }

// I want to prompt the user for the type of team member they want to add

// Build an instance of a team member based on their response

// The selection of manager means that I'll build a new manager

// The seletion of engineer means I'll build a new engineer

// the selection of intern means I'll build a new intern

// after they've selected the type team member they want to add I need to ask whether they want to add an


