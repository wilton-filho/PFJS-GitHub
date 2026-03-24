import bcrypt from 'https://cdn.jsdelivr.net/npm/bcryptjs@2.4.3/+esm';

window.addEventListener("DOMContentLoaded", () => {

})

const gerarSenhaCriptograda = async () => {
    
    const url = "";
    const response = fetch()
    
    
    
    
    const senhaUser = "wilton123";
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(senhaUser, salt);
    console.log(hash); // exibe "notebook123" criptografada
    // gravar hash na base de dados (ex: arquivo JSON);
    //  Ex: console.log(hash);
    console.log(hash);
}

const conferirSenha = (senhaUser) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(senhaUser, salt);
    (hash)?console.log("Senha valida"):console.log("Senha inválida");
    // gravar hash na base de dados (ex: arquivo JSON);
}
