const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, "Manager");
    this.officeNumber = 100;
  }

  getOffice() {
    return this.officeNumber;
  }
}

module.exports = Manager