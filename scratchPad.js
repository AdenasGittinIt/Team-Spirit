promptUser()
  .then(function(name) {
    
    userName = name.inputUsername

    axios
    .get(`https://api.github.com/users/${userName}`)
    .then(function (res) {

      info = {
        color: name.faveColor,
        followers: res.data.followers,
        following: res.data.following,
        repos: res.data.public_repos,
        location: res.data.location,
        profilePic: res.data.avatar_url,
        profileUrl: res.data.html_url,
        blog: res.data.blog,
        bio: res.data.bio,
        name: res.data.name,
      }  
      
      // console.log(info);
      
      const html = generateHTML(info);
      writeFileAsync(`${userName}.html`, html);
      return generatePdf(html);
      
    });    
  })
  .then(function() {
    console.log(`${userName}.html is ready to convert to PDF`);
    readyToConvert = true;
  })  
    .catch(function(err) {
    console.log(err);

  });
