const jsonFile = "json/users.json";

// 1ª Opção: Usando async e await
async function readUsers() {
  var file = await fetch(jsonFile);
  var contents = await file.json();
  
  contents.users.forEach($user => {
    $("#usersList").append($("<li></li>").text($user.name));
  });
}
readUsers();

// 2ª Opção: Usando async e await
/*function readUsers() {
  fetch(jsonFile)
    .then(file => file.json())
    .then(contents => {
      contents.users.forEach($user => {
        $("#usersList").append($("<li></li>").text($user.name));
      });
    })
    .catch(err => console.log(err));
}
readUsers();*/