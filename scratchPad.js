// function teamPrompt() {
//   return inquirer
//     .prompt([{
//       type: "input",
//       message: "Please enter the team member's first and last name.",
//       name: "name"
//     }, {
//       type: "input",
//       message: "Please enter the team member's id#",
//       name: "id"
//     }, {
//       type: "input",
//       message: "Please enter the team member's email",
//       name: "email"
//     },
//     {
//       type: "list",
//       name: "role",
//       message: "Please select the team member's role",
//       choices: [
//         "Engineer",
//         "Intern"]
//     },
//   { 

//   }])

// }


// let results = (card) => {
//   data.appendChild("<body>", card)
// }

// let results = data.concat("</nav>", card)

// const html = generateHTML(info);
//         writeFileAsync(`${userName}.html`, html);


// function generateHTML(info) {
//   return `template literal`
// }

fs.appendFile("./output/team.html", `</body>
</html>`, function (err) {
if (err) {
  console.log(err)
  throw new Error(err)
}
console.log("Your team html has been built!")
})