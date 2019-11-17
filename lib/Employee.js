// Employee class with characteristics that all roles have in common.
const inquirer = require("inquirer");

class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role
  }
    getName() {
      return this.name;
    }

    getId() {
      return this.id;
    }

    getEmail() {
      return this.email;
    }

    getRole() {
      return this.role;
    }
 }



module.exports = Employee;











// class Employee {
//   constructor(name, id, email, role) {
//     this.name = "name";
//     this.id = id;
//     this.email = "test@test.com";
//     this.role = "role";
//   }

//   getName(employee) {
  
//   }
//   // getId();
//   // getEmail();
//   // getRole();

// }

// module.exports = Employee