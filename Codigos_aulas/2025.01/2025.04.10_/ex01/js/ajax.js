const url = "https://wilton-filho.github.io/PFJS-GitHub/Codigos_aulas/2025.01/2025.04.10_/ex01/db/users.json";

// XMLHttpRequest
const getUsersXMLHttpRequest = () => {
    const req = new XMLHttpRequest();
    req.onreadystatechange = () => {
        // if (req.readyState === 3)
        //     console.log("Processando ...");
        if (req.readyState === 4 && req.status === 200) {
            const user = JSON.parse(req.responseText);
            console.log(user.nome, user.idade); 
        }
    }
    req.open("GET", url, true);
    req.send();
}

// Fetch .then ...
const getUsersFetch = () => {
    fetch(url)
        .then(response => response.json())
        .then(dados => console.log(dados.nome, dados.idade))
        .catch(error => console.log(error))

}
// Funcao assíncrona
const getUsersFetchAsync = async () => {
    try {
        const req = await fetch(url);
        const response = await req.json();
        console.log(response.nome, response.idade);
    }
    catch(error) {
        console.log(error);
    }
}

const ajax = {
    getUsersXMLHttpRequest,
    getUsersFetch,
    getUsersFetchAsync
}

export default ajax;


