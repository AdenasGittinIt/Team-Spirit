const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHtml = require("./lib/BuildHtml");
const team = [ ];
const teamIDs = [ ];


// Since every team will have only one manager, I'll first prompt the user to add a manager 
function managerInfo() {
  return inquirer
    .prompt([{
      type: "input",
      message: "Please enter the manager's name:",
      name: "name"
    }, {
      type: "input",
      message: "Please enter the manager's id#:",
      name: "id"
    }, {
      type: "input",
      message: "Please enter the manager's email:",
      name: "email"
    }, {
      type: "input",
      message: "What is the manager's office number:",
      name: "officeNumber"
    }
    ])
}

// Since the user can enter an unlimited number of interns and engineers to their team, I need to "loop" through roleInfo until the user is finished adding team members

function roleInfo() {
  return inquirer.prompt([{
    type: "list",
    name: "role",
    message: `Please select the next team member's role.  If you're all done adding team members, select 'Build Team!'`,
    choices: [
      "Engineer",
      "Intern",
      "Build Team!"
    ]
  }])
    .then(function (res) {
      switch (res.role) {
        case "Engineer":
          engineerInfo()
            .then(function (res) {
              engineer = new Engineer(
                res.name,
                res.id,
                res.email,
                res.github,
                res.role
              )
              team.push(engineer);
              teamIDs.push(engineer.id);
              roleInfo();
            })
          break;
        case "Intern":
          internInfo()
            .then(function (res) {
              intern = new Intern(
                res.name,
                res.id,
                res.email,
                res.school,
                res.role
              )
              team.push(intern);
              teamIDs.push(intern.id);
              roleInfo();
            })
          break;
        case "Build Team!":
          generateHtml(team)
          break;
      }
    })
}

// Build an instance of a team member based on their response
function engineerInfo() {
  return inquirer
  .prompt([{
    type: "input",
    message: "Please enter the engineer's name:",
    name: "name"
  }, {
    type: "input",
    message: "Please enter the engineer's ID:",
    name: "id"
  }, {
    type: "input",
    message: "Please enter the engineer's email address:",
    name: "email"
  }
  , {
    type: "input",
    message: "What is the engineer's GitHub username?",
    name: "github"
  }
  ])
}

function internInfo() {
  return inquirer
  .prompt([{
    type: "input",
    message: "Please enter the intern's name:",
    name: "name"
  }, {
    type: "input",
    message: "Please enter the intern's ID:",
    name: "id"
  }, {
    type: "input",
    message: "Please enter the intern's email address:",
    name: "email"
  }
  , {
    type: "input",
    message: "Which school do you attend?",
    name: "school"
  }
  ])
}

// Build an instance of the manager based on their response
console.log(`Welcome to the team building excercise! 
Start by adding the team's manager...`);

managerInfo()
  .then(function (res) {
    manager = new Manager (
      res.name,
      res.id,
      res.email,
      res.officeNumber,
      res.role
    );
      
    team.push(manager);
    teamIDs.push(manager.id);
    
    console.log(`Great! The manager has been added to the team.
    `);

    roleInfo()

  })

  

  










