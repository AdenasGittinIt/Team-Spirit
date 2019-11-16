const fs = require("fs");
const inquirer = require("inquirer");

//Employee Class
  //this will contain all of the characteristics that each EE type has in common
  //name
  //id
  //title
  //getName()
  //getId()
  //getEmail()
  //getRole() returns EE
  //projectName()??  if the project name is the same as other team members, display on same page?

// class constructer with characteristics that all roles have in common.

class Employee {
  constructor(name, id, title, email, role) {
    this.name = name;
    this.id = id;
    this.email = "test@test.com";
    this.title = title;
    this.role = role;
  }


}

module.exports = Employee