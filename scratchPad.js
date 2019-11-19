function teamPrompt() {
  return inquirer
    .prompt([{
      type: "input",
      message: "Please enter the team member's first and last name.",
      name: "name"
    }, {
      type: "input",
      message: "Please enter the team member's id#",
      name: "id"
    }, {
      type: "input",
      message: "Please enter the team member's email",
      name: "email"
    },
    {
      type: "list",
      name: "role",
      message: "Please select the team member's role",
      choices: [
        "Engineer",
        "Intern"]
    },
  { 

  }])

}
