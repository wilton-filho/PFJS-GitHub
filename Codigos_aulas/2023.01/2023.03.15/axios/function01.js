function getTextServer() {
    //var filename = "bd1.txt";
    //.then(response => document.getElementById("textServer").innerHTML = response.data + " (Axios)")
    
    var filename = "user.json";
    axios.get(filename).then(response => document.getElementById("textServer").innerHTML = response.data.usuario)
    
    // O código abaixo poderá ser utilizado se a resposta do servidor foi realizada com sucesso    
    // .then(response => {
    //     if (response.status == 200)
    //         console.log(response.data)
    // })
    // .catch(error => console.log(error.message))
}