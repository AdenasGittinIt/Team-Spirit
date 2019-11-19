let generateHtml = (employee) => {
  fs.readFile("./templates/manager.html", "utf8", (err, data) => {
    if (err) {
      console.log(err)
      throw new Error(err)
    }

    let card = ` </nav>   <div class="row">
       <div class="col s7 m4">
         <div class="z-depth-4 card">
           <div class="card-content #e3f2fd blue lighten-5">
             <span class="card-title center">Manager</span>
            <p class="center">${employee.name}</p>
           </div>
           <div class="card-action #eeeeee grey lighten-3">
             <ul class="collection">
               <li class="collection-item">Id:${employee.id} </li>
                 <li class="collection-item">Email:${employee.email} </li>
                 <li class="collection-item"> ${employee.officeNumber ? "Office Number:" + employee.officeNumber : employee.github ? "GitHub:"+ employee.github : employee.school ? "School: "+ employee.school: "" } </li>
               </ul>
           </div>
         </div>
       </div>
     </div>`

    let results = data.replace("</nav>", card)

    fs.writeFile("./output/team.html", results, function (err) {
      if (err) {
        console.log(err)
        throw new Error(err)
      }
      console.log("success");
    })
  })
}