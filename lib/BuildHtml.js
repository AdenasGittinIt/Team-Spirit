const fs = require("fs");

let generateHtml = (arr) => {
  arr.forEach(employee => {
  fs.readFile(`./templates/${employee.role}.html`, "utf8", (err, data) => {
    if (err) {
      console.log(err)
      throw new Error(err)
    }

    let card = `<div class="row">
       <div class="col s7 m4">
         <div class="z-depth-4 card">
           <div class="card-content #e3f2fd blue lighten-5">
             <span class="card-title center #424242 grey-text text-darken-3">${employee.role}</span>
            <p class="center #424242 grey-text text-darken-3">${employee.name}</p>
           </div>
           <div class="card-action #eeeeee grey lighten-3">
             <ul class="collection">
               <li class="collection-item #424242 grey-text text-darken-3">Id:${employee.id} </li>
                 <li class="collection-item #424242 grey-text text-darken-3">Email:${employee.email} </li>
                 <li class="collection-item #424242 grey-text text-darken-3"> ${employee.officeNumber ? "Office Number: " + employee.officeNumber : employee.github ? "GitHub: "+ employee.github : employee.school ? "School: "+ employee.school: "" } </li>
               </ul>
           </div>
         </div>
       </div>`

    let results = data.replace("</nav>", card)

    fs.appendFile("./output/team.html", results, function (err) {
      if (err) {
        console.log(err)
        throw new Error(err)
      }
      console.log(`${employee.name} has been added to the team!`);
    })
  })

})}



module.exports = generateHtml