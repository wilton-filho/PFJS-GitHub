import bcrypt from 'https://cdn.jsdelivr.net/npm/bcryptjs@2.4.3/+esm';

window.addEventListener("DOMContentLoaded", () => {
    criptografarSenhas();
})

const criptografarSenhas = async () => {
    
    const url = "https://wilton-filho.github.io/PFJS-GitHub/Codigos_aulas/2026.01/2026.03.24/js/users.json";
    try {
        const response = await fetch(url);
        const dados = await response.json();
        dados.forEach(user => {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(user.pwd, salt);
            console.log(hash);
        });
    }
    catch (error) {
        console.log(error.message);
    }
    
    
    
    
    /*const senhaUser = "wilton123";
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(senhaUser, salt);
    console.log(hash); // exibe "notebook123" criptografada
    // gravar hash na base de dados (ex: arquivo JSON);
    //  Ex: console.log(hash);
    console.log(hash);*/
}

// const conferirSenha = (senhaUser) => {
//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(senhaUser, salt);
//     (hash)?console.log("Senha valida"):console.log("Senha inválida");
//     // gravar hash na base de dados (ex: arquivo JSON);
// }
