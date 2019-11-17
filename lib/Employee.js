// Employee class with characteristics that all roles have in common.
const inquirer = require("inquirer");

class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Engineer"
  }
 }


  // printInfo() {
  //   console.log(`This vehicle has ${this.numberOfWheels} wheels`);
  //   console.log(`This vehicle has an id of ${this.id}`);
  // }

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