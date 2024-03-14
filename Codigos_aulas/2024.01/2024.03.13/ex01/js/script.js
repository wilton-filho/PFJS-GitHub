
    document.getElementById("btn").addEventListener("click", () => {
        //1ª forma de se fazer requisição assíncrona
        // var xhttp = new XMLHttpRequest();
        // xhttp.onreadystatechange = function() {
        //     if (this.readyState == 4 && this.status == 200) {
        //     // Typical action to be performed when the document is ready:
        //     document.getElementById("text").innerHTML = xhttp.responseText;
        //     }
        // };
        // xhttp.open("GET", "bd.txt", true);
        // xhttp.send();

        // 2ª forma de se fazer requisição assíncrona
        // fetch('file.json')
        //     .then(response => response.json())
        //     .then(conteudo => {
        //         document.getElementById("text").innerHTML = `${conteudo.nome} tem ${conteudo.idade} anos`;
        // })

        // Leitura de dados de vários usuarios
        fetch('usuarios.json')
            .then(response => response.json())
            .then(conteudo => {
// document.getElementById("text").innerHTML = conteudo.usuarios[0].nome
                conteudo.usuarios.forEach(
                    elemento => document.getElementById("text").innerHTML+=`<p>${elemento.nome}</p>`
                )
            })

    
    })

    
